<template>
  <div
    v-if="CourseDetails"
    v-for="(item, innerIndex) in CourseDetails.courseDetails.slice(0, 4)"
    :key="innerIndex"
    class="col-lg-3 col-md-6 col-sm-6 col-12"
  >
    <div class="rbt-cat-box rbt-cat-box-1 variation-2 text-center">
      <div class="inner">
        <div class="thumbnail">
          <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">
            <nuxt-img
              :src="item.cateBigImg"
              width="274"
              height="150"
              alt="Category Images"
            />
          </nuxt-link>
        </div>

        <div class="icons">
          <nuxt-img
            :src="item.cateSmallImg"
            width="40"
            height="40"
            alt="Icons Images"
          />
        </div>
        <div class="content">
          <h5 class="title">
            <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">{{
              item.category
            }}</nuxt-link>
          </h5>
          <div class="read-more-btn">
            <nuxt-link
              class="rbt-btn-link"
              :to="`/course-filter-one-toggle/${item.category}`"
            >
              {{ categoryCounts[item.category] || 0 }} Course{{
                categoryCounts[item.category] !== 1 ? "s" : ""
              }}
              <i class="feather-arrow-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseDetails from "../../data/course-details/courseData.json";
const useCategoryCount = (course) => {
  const categoryCounts = course.reduce((counts, course) => {
    counts[course.category] = (counts[course.category] || 0) + 1;
    return counts;
  }, {});

  return { categoryCounts };
};

const { categoryCounts } = useCategoryCount(CourseDetails.courseDetails);
const count = 0; // You might want to adjust this based on your actual logic
</script>
