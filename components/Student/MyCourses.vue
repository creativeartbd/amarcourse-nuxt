<template>
  <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
    <div class="content">
      <div class="section-title">
        <h4 class="rbt-title-style-3">My Courses</h4>
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
              id="publish-tab-4"
              data-bs-toggle="tab"
              data-bs-target="#publish-4"
              role="tab"
              aria-controls="publish-4"
              aria-selected="true"
            >
              <span class="title">Publish</span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#"
              class="tab-button"
              id="pending-tab-4"
              data-bs-toggle="tab"
              data-bs-target="#pending-4"
              role="tab"
              aria-controls="pending-4"
              aria-selected="false"
            >
              <span class="title">Pending</span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#"
              class="tab-button"
              id="draft-tab-4"
              data-bs-toggle="tab"
              data-bs-target="#draft-4"
              role="tab"
              aria-controls="draft-4"
              aria-selected="false"
            >
              <span class="title">Draft</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div
          class="tab-pane fade active show"
          id="publish-4"
          role="tabpanel"
          aria-labelledby="publish-tab-4"
        >
          <div class="row g-5">
            <div
              v-for="(slide, index) in Courses.slice(0, 3)"
              class="col-lg-4 col-md-6 col-12"
              :key="`course-published-${index}`"
            >
              <CourseWidget
                :data="slide"
                courseStyle="two"
                :isEdit="true"
                :isCompleted="false"
                :isProgress="false"
                :showDescription="false"
                :showAuthor="false"
              />
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="pending-4"
          role="tabpanel"
          aria-labelledby="pending-tab-4"
        >
          <div class="row g-5">
            <div
              v-for="(slide, index) in Courses.slice(3, 6)"
              class="col-lg-4 col-md-6 col-12"
              :key="`course-pending-${index}`"
            >
              <CourseWidget
                :data="slide"
                courseStyle="two"
                :isEdit="true"
                :isCompleted="false"
                :isProgress="false"
                :showDescription="false"
                :showAuthor="false"
              />
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="draft-4"
          role="tabpanel"
          aria-labelledby="draft-tab-4"
        >
          <div class="row g-5">
            <div
              v-for="(slide, index) in Courses.slice(6, 9)"
              class="col-lg-4 col-md-6 col-12"
              :key="`course-draft-${index}`"
            >
              <CourseWidget
                :data="slide"
                courseStyle="two"
                :isEdit="true"
                :isCompleted="false"
                :isProgress="false"
                :showDescription="false"
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
import CourseWidget from "../Instructor/Dashboard-Section/widgets/CourseWidget";
</script>

<style lang="scss" scoped></style>
