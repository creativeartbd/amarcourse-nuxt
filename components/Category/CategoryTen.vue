<template>
  <ul class="row g-3 nav nav-tabs" id="myCategoryTab" role="tablist">
    <li
      v-for="(item, innerIndex) in courseDetails.slice(0, 6)"
      :key="innerIndex"
      class="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12"
    >
      <a
        :class="`rbt-cat-box rbt-cat-box-1 image-overlaping-content with-image-content ${
          item.isActiveCate ? 'active' : ''
        }`"
        :id="`cat-tab-${innerIndex}-tab`"
        data-bs-toggle="tab"
        :href="`#cat-tab-${innerIndex}`"
        role="tab"
        :aria-controls="`cat-tab-${innerIndex}`"
        :aria-selected="`${item.isActiveCate}`"
      >
        <div class="inner">
          <div class="thumbnail">
            <nuxt-img :src="item.cateBigImg" alt="Icons Images" />
          </div>
          <div class="content">
            <div class="icons">
              <nuxt-img :src="item.cateSmallImg" alt="Icons Images" />
            </div>
            <h5 class="title">{{ item.category }}</h5>
          </div>
        </div>
      </a>
    </li>
  </ul>

  <div class="row mt--30">
    <div class="col-lg-12">
      <div class="tab-content" id="myCategoryTabContent">
        <div
          v-for="(data, index) in courseDetails.slice(0, 6)"
          :key="index"
          :class="`tab-pane fade show ${data.isActiveCate ? 'active' : ''}`"
          :id="`cat-tab-${index}`"
          role="tabpanel"
          :aria-labelledby="`cat-tab-${index}-tab`"
        >
          <div
            class="rbt-categori-list medium-size flex-wrap justify-content-center"
          >
            <nuxt-link
              v-for="(item, innerIndex) in data.subCategories"
              :key="innerIndex"
              :to="`/course-filter-one-toggle/${item.cate}`"
            >
              {{ item.cate }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseDetails from "~/data/course-details/courseData.json";

const courseDetails = CourseDetails.courseDetails;
</script>

<style scoped>
/* Your component-specific styles here */
</style>
