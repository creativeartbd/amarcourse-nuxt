<template>
  <div class="col-lg-8">
    <div class="course-details-content">
      <div class="rbt-course-feature-box rbt-shadow-box thuumbnail">
        <CourseBanner
          v-if="checkMatchCourses.courseImg"
          :bannerImg="checkMatchCourses.courseImg"
        />
      </div>
      <div class="rbt-inner-onepage-navigation sticky-top mt--30">
        <CourseMenu />
      </div>

      <Overview
        v-for="(data, index) in checkMatchCourses.courseOverview"
        :key="index"
        :checkMatchCourses="data"
      />

      <div
        class="course-content rbt-shadow-box coursecontent-wrapper mt--30"
        id="coursecontent"
      >
        <Content
          v-for="(data, index) in checkMatchCourses.courseContent"
          :key="index"
          :data="data"
          :checkMatchCourses="data"
        />
      </div>

      <div
        class="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
        id="details"
      >
        <div class="row g-5">
          <Requirements
            v-for="(data, index) in checkMatchCourses.courseRequirement"
            :key="index"
            :data="data"
            :checkMatchCourses="data"
          />
        </div>
      </div>
      <div
        class="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
        id="intructor"
      >
        <Instructor
          v-for="(data, index) in checkMatchCourses.courseInstructor"
          :key="index"
          :data="data"
          :checkMatchCourses="data"
        />
      </div>
      <div
        class="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
        id="review"
      >
        <Review />
      </div>

      <Featured
        v-for="(data, index) in checkMatchCourses.featuredReview"
        :key="index"
        :data="data"
        :coursesFeatured="data"
      />
    </div>
    <div class="related-course mt--60">
      <RelatedCourse
        v-for="(data, index) in checkMatchCourses.relatedCourse"
        :key="index"
        :checkMatchCourses="data"
      />
    </div>
  </div>

  <div class="col-lg-4">
    <div
      class="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border"
    >
      <div class="inner">
        <Viedo :checkMatchCourses="checkMatchCourses && checkMatchCourses" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Featured from "./Course-Sections/Featured";
import Instructor from "./Course-Sections/Instructor";
import Overview from "./Course-Sections/Overview";
import RelatedCourse from "./Course-Sections/RelatedCourse";
import Requirements from "./Course-Sections/Requirements";
import Review from "./Course-Sections/Review";
import Viedo from "./Course-Sections/Viedo";
defineProps(["checkMatchCourses"]);
</script>

<style lang="scss" scoped></style>
