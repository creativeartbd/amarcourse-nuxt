<template>
  <MobileMenu />
  <HeaderStyleSix headerType="rbt-transparent-header" />
  <!-- <Cart /> -->

  <CourseSchool />

  <!-- <BackToTop /> -->
  <FooterFour />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Course School || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleSix from "@/components/Header/HeaderStyle-Six";
import CourseSchool from "@/components/02-course-school/CourseSchool";
import FooterFour from "@/components/Footer/FooterFour";
</script>

<style lang="scss" scoped></style>
