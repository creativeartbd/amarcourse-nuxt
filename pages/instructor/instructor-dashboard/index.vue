<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <!-- <Cart /> -->

  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image" />
  </div>
  <div
    class="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <InstructorDashboardHeader />

          <div class="row g-5">
            <div class="col-lg-3">
              <InstructorDashboardSidebar />
            </div>

            <div class="col-lg-9">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <BackToTop /> -->
  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Inatractor Dashboard || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
import Dashboard from "@/components/Instructor/Dashboard";
import InstructorDashboardHeader from "@/components/Instructor/InstructorDashboardHeader";
import InstructorDashboardSidebar from "@/components/Instructor/InstructorDashboardSidebar";

// import BackToTop from "@/pages/backToTop";
</script>

<style lang="scss" scoped></style>
