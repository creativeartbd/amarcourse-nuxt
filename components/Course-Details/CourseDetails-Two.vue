<template>
  <div class="col-lg-12">
    <a
      v-if="checkMatchCourses.courseImg"
      class="video-popup-with-text video-popup-wrapper text-center popup-video mb--15"
      data-vbtype="video"
      href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
    >
      <div class="video-content">
        <nuxt-img
          class="w-100 rbt-radius"
          src="/images/others/video-07.jpg"
          alt="Video Images"
        />
        <div class="position-to-top">
          <span class="rbt-btn rounded-player-2 with-animation">
            <span class="play-icon"></span>
          </span>
        </div>
        <span class="play-view-text d-block color-white">
          <i class="feather-eye"></i> Preview this course
        </span>
      </div>
    </a>
  </div>

  <div class="row row--30 gy-5 pt--60">
    <div class="col-lg-4">
      <div class="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div class="inner">
          <div class="content-item-content">
            <Viedo
              :checkMatchCourses="checkMatchCourses && checkMatchCourses"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="course-details-content">
        <div class="rbt-inner-onepage-navigation sticky-top mt--30">
          <CourseMenu />
        </div>

        <Overview
          v-if="checkMatchCourses"
          v-for="(data, index) in checkMatchCourses.courseOverview"
          :key="index"
          :checkMatchCourses="data"
        />

        <div
          class="course-content rbt-shadow-box coursecontent-wrapper mt--30"
          id="coursecontent"
        >
          <Content
            v-if="checkMatchCourses"
            v-for="(data, index) in checkMatchCourses.courseContent"
            :key="index"
            :checkMatchCourses="data"
          />
        </div>

        <div
          class="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
          id="details"
        >
          <div class="row g-5">
            <Requirements
              v-if="checkMatchCourses"
              v-for="(data, index) in checkMatchCourses.courseRequirement"
              :key="index"
              :checkMatchCourses="data"
            />
          </div>
        </div>
        <div
          class="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
          id="intructor"
        >
          <Instructor
            v-if="checkMatchCourses"
            v-for="(data, index) in checkMatchCourses.courseInstructor"
            :key="index"
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
          v-if="checkMatchCourses"
          v-for="(data, index) in checkMatchCourses.featuredReview"
          :key="index"
          :coursesFeatured="data"
        />
      </div>
      <div class="related-course mt--60">
        <RelatedCourse
          v-if="checkMatchCourses"
          v-for="(data, index) in checkMatchCourses.relatedCourse"
          :key="index"
          :checkMatchCourses="data"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({ selector: ".popup-video" });
  });
});
defineProps(["checkMatchCourses"]);
import Viedo from "./Course-Sections/Viedo";
import CourseMenu from "./Course-Sections/Course-Menu";
import Overview from "./Course-Sections/Overview";
import Requirements from "./Course-Sections/Requirements";
import Instructor from "./Course-Sections/Instructor";
import Review from "./Course-Sections/Review";
import Featured from "./Course-Sections/Featured";
import RelatedCourse from "./Course-Sections/RelatedCourse";
import Content from "./Course-Sections/Content";
</script>

<style lang="scss" scoped></style>
