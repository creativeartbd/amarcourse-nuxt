<template>
  <div
    v-for="(item, innerIndex) in CourseData.courseDetails.slice(0, 8)"
    :key="innerIndex"
    class="col-lg-3 col-md-6 col-sm-6 col-12"
  >
    <nuxt-link
      :to="`/course-filter-one-toggle/${item.category}`"
      class="rbt-cat-box rbt-cat-box-1 text-center"
    >
      <div class="inner">
        <div class="icons">
          <nuxt-img :src="item.cateSmallImg" alt="Icons Images" />
        </div>
        <div class="content">
          <h5 class="title">{{ item.category }}</h5>
          <div class="read-more-btn">
            <span class="rbt-btn-link">
              {{ categoryCounts[item.category] || 0 }} Course{{
                categoryCounts[item.category] !== 1 ? "s" : ""
              }}
              <i class="feather-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import CourseData from "~/data/course-details/courseData.json";
const useCategoryCount = (course) => {
  const categoryCounts = course.reduce((counts, course) => {
    counts[course.category] = (counts[course.category] || 0) + 1;
    return counts;
  }, {});

  return { categoryCounts };
};

const { categoryCounts } = useCategoryCount(CourseData.courseDetails);

const count = 0; // Assuming count is a dynamic value, you can set it here
</script>

<style scoped>
/* Add your scoped styles here */
</style>
