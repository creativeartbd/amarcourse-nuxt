<template>
  <div
    v-for="(item, innerIndex) in CourseDetails.courseDetails.slice(0, 4)"
    class="col-lg-3 col-md-6 col-sm-6 col-12"
    :key="innerIndex"
  >
    <div class="rbt-cat-box rbt-cat-box-1 variation-5 text-start">
      <div class="inner">
        <div class="thumbnail">
          <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">
            <nuxt-img :src="item.cateBigImg" alt="Category Images" />
          </nuxt-link>
        </div>
        <div class="content">
          <h5 class="title">
            <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">
              {{ item.category }}
            </nuxt-link>
          </h5>
          <div class="read-more-btn">
            <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">
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
</script>

<style lang="scss" scoped></style>
