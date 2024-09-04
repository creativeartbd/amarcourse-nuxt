<template>
  <HeaderStyleTen headerSticky="" :headerType="true" />
  <MobileMenu />

  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image"></div>
  </div>
  <div
    class="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom"
  >
    <div class="container">
      <div class="row">
        <UserProfile :checkMatchProfile="checkMatchProfile" />
        <Biography :checkMatchProfile="checkMatchProfile" />
      </div>
      <div class="rbt-profile-course-area mt--60">
        <div class="row">
          <div class="col-lg-12">
            <div class="sction-title">
              <h2 class="rbt-title-style-3">Courses</h2>
            </div>
          </div>
        </div>
        <div class="row g-5 mt--5">
          <UserCourses
            v-for="(data, index) in checkMatchProfile.relatedCourse"
            :key="index"
            :relatedCourse="data"
          />
        </div>
      </div>
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Profile || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import CourseData from "../../../data/course-details/courseData.json";
import UserProfile from "@/components/User-Profile/User-Profile";
import Biography from "@/components/User-Profile/User-Biography";
import UserCourses from "@/components/User-Profile/User-Courses";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const route = useRoute();
const postId = route.params.profileId;

let getCourse;

getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));

const checkMatchProfile =
  getCourse.find((course) => course.id == postId) || getCourse[0];
</script>

<style scoped></style>
