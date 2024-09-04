<template>
  <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
    <div class="content">
      <div class="section-title">
        <h4 class="rbt-title-style-3">Wishlist</h4>
      </div>
      <div class="row g-5">
        <div
          v-for="(slide, index) in Courses.slice(0, 6)"
          class="col-lg-4 col-md-6 col-12"
          :key="`course-wishlist-${index}`"
        >
          <CourseWidget
            :data="slide"
            courseStyle="two"
            :isCompleted="false"
            :isProgress="false"
            :showDescription="false"
            :showAuthor="false"
            :isEdit="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidget from "../Instructor/Dashboard-Section/widgets/CourseWidget";
</script>

<style lang="scss" scoped></style>
