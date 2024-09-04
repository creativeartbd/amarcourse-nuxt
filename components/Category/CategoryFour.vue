<template>
  <div
    v-if="CourseDetails"
    v-for="(item, innerIndex) in CourseDetails.courseDetails.slice(0, 4)"
    :key="innerIndex"
    class="col-lg-3 col-md-6 col-sm-6 col-12"
  >
    <div class="rbt-cat-box rbt-cat-box-1 variation-3 text-center">
      <div class="inner">
        <div class="thumbnail">
          <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">
            <nuxt-img
              :src="item.cateBigImg"
              width="304"
              height="166"
              alt="Category Images"
            />
            <div class="read-more-btn">
              <span class="rbt-btn btn-sm btn-white radius-round">
                {{ categoryCounts[item.category] || 0 }} Course{{
                  categoryCounts[item.category] !== 1 ? "s" : ""
                }}
              </span>
            </div>
          </nuxt-link>
        </div>
        <div class="content">
          <h5 class="title">
            <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">{{
              item.category
            }}</nuxt-link>
          </h5>
          <p class="description">{{ item.cateDesc }}</p>
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
const count = ref(0);
</script>
