<template>
  <div class="row">
    <div class="col-lg-12">
      <ul
        class="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs"
        id="rbt-myTab"
        role="tablist"
      >
        <li
          v-for="(courseType, index) in [
            'All Course',
            'featured',
            'popular',
            'trending',
            'latest',
          ]"
          :key="index"
          class="nav-item"
          role="presentation"
        >
          <button
            :class="{ active: activeTab === courseType }"
            type="button"
            @click="handleButtonClick(courseType)"
          >
            <span class="filter-text">{{ courseType }}</span>
            <span class="course-number">
              {{
                courseType === "All Course"
                  ? getAllCourse.filter((course) => course).length
                  : "0" +
                    getAllCourse.filter(
                      (course) => course.courseType === courseType
                    ).length
              }}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-12">
      <div class="tab-content mt--60" id="rbt-myTabContent">
        <div class="row g-5">
          <div
            v-for="(data, index) in courseFilter.slice(0, 4)"
            :key="index"
            class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
          >
            <div class="rbt-card variation-01 rbt-hover">
              <div class="rbt-card-img">
                <nuxt-link :to="`/course-details/${data.id}`">
                  <nuxt-img
                    :src="data.courseImg"
                    width="355"
                    height="244"
                    alt="Card image"
                  />
                  <div class="rbt-badge-3 bg-white">
                    <span>-{{ data.offPrice }}%</span>
                    <span>Off</span>
                  </div>
                </nuxt-link>
              </div>
              <div class="rbt-card-body">
                <div class="rbt-card-top">
                  <div class="rbt-review">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <span class="rating-count">
                      ({{ data.review }} Reviews)
                    </span>
                  </div>
                  <div class="rbt-bookmark-btn">
                    <a class="rbt-round-btn" title="Bookmark" href="#">
                      <i class="feather-bookmark"></i>
                    </a>
                  </div>
                </div>

                <h4 class="rbt-card-title">
                  <nuxt-link :to="`/course-details/${data.id}`">
                    {{ data.courseTitle }}
                  </nuxt-link>
                </h4>

                <ul class="rbt-meta">
                  <li>
                    <i class="feather-book"></i>
                    {{ data.lesson }} Lessons
                  </li>
                  <li>
                    <i class="feather-users"></i>
                    {{ data.student }} Students
                  </li>
                </ul>

                <div class="rbt-card-bottom">
                  <div class="rbt-price">
                    <span class="current-price">${{ data.price }}</span>
                    <span class="off-price">${{ data.offPrice }}</span>
                  </div>
                  <nuxt-link
                    class="rbt-btn-link"
                    :to="`/course-details/${data.id}`"
                  >
                    Learn More<i class="feather-arrow-right"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseDetails from "~/data/course-details/courseData.json";

let getAllCourse = JSON.parse(
  JSON.stringify(CourseDetails.courseDetails.slice(0, 12))
);

const courseFilter = ref(getAllCourse);
const activeTab = ref("All Course");

const filterItem = (types) => {
  const updateItem = getAllCourse.filter((curElm) => {
    return curElm.courseType === types;
  });

  if (types !== "All Course") {
    courseFilter.value = updateItem;
  } else {
    courseFilter.value = getAllCourse;
  }
};

const handleButtonClick = (courseType) => {
  courseFilter.value = getAllCourse;
  activeTab.value = courseType;
  filterItem(courseType);
};
</script>
