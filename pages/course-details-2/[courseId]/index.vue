<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="" :headerType="true" />

  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image"></div>
    <div class="rbt-banner-content">
      <div class="rbt-banner-content-top rbt-breadcrumb-style-3">
        <CourseHead :checkMatch="checkMatch !== undefined ? checkMatch : ''" />
      </div>
    </div>
  </div>

  <div class="rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="inner">
      <div class="container">
        <CourseDetailsTwo
          :checkMatchCourses="checkMatch !== undefined ? checkMatch : ''"
        />
      </div>
    </div>
  </div>

  <CourseActionBottom
    :checkMatchCourses="checkMatch !== undefined ? checkMatch : ''"
  />

  <div
    class="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom"
  >
    <SimilarCourses
      :checkMatchCourses="
        checkMatch !== undefined ? checkMatch.similarCourse : ''
      "
    />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Course Details 2 || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";

import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import CourseDetailsTwo from "@/components/Course-Details/CourseDetails-Two";
import CourseData from "../../../data/course-details/courseData.json";
import sal from "sal.js";
const route = useRoute();
const postId = route.params.courseId;
let getCourse;

getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));

const checkMatch =
  getCourse.find((course) => course.id == postId) || getCourse[0];

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
