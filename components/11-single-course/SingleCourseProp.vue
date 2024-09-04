<template>
  <div class="col-lg-12">
    <div
      class="modern-course-features-box h-100"
      v-for="(data, index) in courseData"
      :key="index"
    >
      <div
        v-for="(innerData, innerIndex) in data.certificateOne"
        :key="innerIndex"
        class="inner"
      >
        <div class="thumbnail">
          <nuxt-img
            :src="image ? innerData.img : innerData.imgTwo"
            width="604"
            height="408"
            alt="Image"
          />
        </div>
        <div class="content">
          <span class="rbt-badge-6 bg-secondary-opacity">{{
            innerData.tag
          }}</span>
          <h2 class="title mt--10">{{ innerData.title }}</h2>
          <p>{{ innerData.desc }}</p>
          <ul class="course-feature-list">
            <li v-for="(list, i) in innerData.list" :key="i">
              <div class="icon">
                <nuxt-img
                  :src="list.icon"
                  width="40"
                  height="40"
                  alt="Icon Image"
                />
              </div>
              <div class="feature-content">
                <h4 class="featute-title">
                  {{ list.num }}K+ <span>{{ list.text }}</span>
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-6">
    <div
      class="modern-course-features-box one-colume-grid h-100"
      v-for="(data, index) in courseData"
      :key="index"
    >
      <div
        v-for="(innerData, innerIndex) in data.certificateTwo"
        :key="innerIndex"
        class="inner"
      >
        <div class="thumbnail">
          <nuxt-img
            :src="image ? innerData.img : innerData.imgTwo"
            width="558"
            height="397"
            alt="Image"
          />
        </div>
        <div class="content">
          <h2 class="title">{{ innerData.title }}</h2>
          <p>{{ innerData.desc }}</p>
          <ul class="course-feature-list">
            <li v-for="(list, i) in innerData.list" :key="i">
              <div class="icon">
                <nuxt-img
                  :src="list.icon"
                  width="40"
                  height="40"
                  alt="Icon Image"
                />
              </div>
              <div class="feature-content">
                <h4 class="featute-title">
                  {{ list.num }}K+ <span>{{ list.text }}</span>
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-6">
    <div class="modern-course-features-box grid-content-reverse h-100">
      <div class="inner" v-for="(data, index) in courseData" :key="index">
        <CourseSlider v-bind="data" :course="data.courseImg" />
        <div
          v-for="(innerData, innerIndex) in data.certificateThree"
          :key="innerIndex"
          class="content"
        >
          <h2 class="title">{{ innerData.title }}</h2>
          <p>{{ innerData.desc }}</p>
          <ul class="rbt-list-style-2 flex-wrap">
            <li v-for="(innerData, i) in innerData.list" :key="i">
              <i class="feather-check"></i>
              {{ innerData.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseSlider from "./CourseSlider";
defineProps(["courseData", "image"]);
</script>

<style lang="scss" scoped></style>
./CourseSlider.vue
