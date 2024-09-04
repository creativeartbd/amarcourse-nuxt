<template>
  <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
    <div class="content">
      <div class="section-title">
        <h4 class="rbt-title-style-3">Enrolled Courses</h4>
      </div>
      <div class="advance-tab-button mb--30">
        <ul
          class="nav nav-tabs tab-button-style-2 justify-content-start"
          id="myTab-4"
          role="tablist"
        >
          <li role="presentation">
            <a
              href="#"
              class="tab-button active"
              id="home-tab-4"
              data-bs-toggle="tab"
              data-bs-target="#home-4"
              role="tab"
              aria-controls="home-4"
              aria-selected="true"
            >
              <span class="title">Enrolled Courses</span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#"
              class="tab-button"
              id="profile-tab-4"
              data-bs-toggle="tab"
              data-bs-target="#profile-4"
              role="tab"
              aria-controls="profile-4"
              aria-selected="false"
            >
              <span class="title">Active Courses</span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#"
              class="tab-button"
              id="contact-tab-4"
              data-bs-toggle="tab"
              data-bs-target="#contact-4"
              role="tab"
              aria-controls="contact-4"
              aria-selected="false"
            >
              <span class="title">Completed Courses</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-content">
        <div
          class="tab-pane fade active show"
          id="home-4"
          role="tabpanel"
          aria-labelledby="home-tab-4"
        >
          <div class="row g-5">
            <div
              v-for="(slide, index) in Courses.slice(0, 3)"
              class="col-lg-4 col-md-6 col-12"
              :key="`course-enrolled-${index}`"
            >
              <CourseWidgets
                :data="slide"
                courseStyle="two"
                :isProgress="true"
                :isCompleted="false"
                :isEdit="false"
                :showDescription="false"
                :showAuthor="false"
              />
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="profile-4"
          role="tabpanel"
          aria-labelledby="profile-tab-4"
        >
          <div class="row g-5">
            <div
              v-for="(slide, index) in Courses.slice(3, 6)"
              class="col-lg-4 col-md-6 col-12"
              :key="`course-active-${index}`"
            >
              <CourseWidgets
                :data="slide"
                courseStyle="two"
                :isCompleted="false"
                :isProgress="false"
                :isEdit="false"
                :showDescription="false"
                :showAuthor="false"
              />
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="contact-4"
          role="tabpanel"
          aria-labelledby="contact-tab-4"
        >
          <div class="row g-5">
            <div
              v-for="(slide, index) in Courses.slice(1, 4)"
              class="col-lg-4 col-md-6 col-12"
              :key="`course-completed-${index}`"
            >
              <CourseWidgets
                :data="slide"
                courseStyle="two"
                :isCompleted="true"
                :isProgress="true"
                :showDescription="false"
                :isEdit="false"
                :showAuthor="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidgets from "../Instructor/Dashboard-Section/widgets/CourseWidget";
</script>

<style lang="scss" scoped></style>
