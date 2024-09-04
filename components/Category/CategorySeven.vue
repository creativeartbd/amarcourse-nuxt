<template>
  <div
    v-for="(item, innerIndex) in CourseDetails.courseDetails.slice(0, 8)"
    class="col-lg-3 col-md-6 col-sm-6 col-12"
    :key="innerIndex"
  >
    <nuxt-link
      class="rbt-cat-box rbt-cat-box-1 image-overlaping-content"
      :to="`/course-filter-one-toggle/${item.category}`"
    >
      <div class="inner">
        <div class="thumbnail">
          <nuxt-img :src="item.cateBigImg" alt="Icons Images" />
        </div>
        <div class="content">
          <h5 class="title">{{ item.category }}</h5>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import CourseDetails from "../../data/course-details/courseData.json";
</script>

<style lang="scss" scoped></style>
