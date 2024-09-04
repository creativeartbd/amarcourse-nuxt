<template>
  <div class="col-lg-12">
    <div class="rbt-dashboard-content-wrapper">
      <div
        class="tutor-bg-photo bg_image bg_image--22 height-350 object-cover"
      ></div>

      <div
        v-if="checkMatchProfile"
        class="rbt-tutor-information"
        v-for="(data, index) in checkMatchProfile.courseInstructor"
        :key="index"
      >
        <div
          v-for="(item, innerIndex) in data.body"
          :key="innerIndex"
          class="rbt-tutor-information-left"
        >
          <div class="thumbnail rbt-avatars size-lg">
            <nuxt-img :src="item.img" alt="Instructor" />
          </div>
          <div class="tutor-content">
            <h5 class="title">{{ item.name }}</h5>
            <div class="rbt-review">
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <span class="rating-count">({{ item.review }} Reviews)</span>
            </div>
            <ul class="rbt-meta rbt-meta-white mt--5">
              <li><i class="feather-book"></i>{{ item.course }} Courses</li>
              <li>
                <i class="feather-users"></i>{{ item.studentNumber }} Students
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["checkMatchProfile"]);
</script>

<style lang="scss" scoped></style>
