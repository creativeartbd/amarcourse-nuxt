<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image" />
  </div>
  <div
    class="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <StudentDashboardHeader />

          <div class="row g-5">
            <div class="col-lg-3">
              <StudentDashboardSidebar />
            </div>

            <div class="col-lg-9">
              <EnrolledCourses />
            </div>
          </div>
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
    "Student Enrolled Course || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import EnrolledCourses from "@/components/Student/Eenrolled-Course";
import StudentDashboardHeader from "@/components/Student/StudentDashboardHeader";
import StudentDashboardSidebar from "@/components/Student/StudentDashboardSidebar";
</script>

<style lang="scss" scoped></style>
