<template>
  <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
  <MobileMenu />
  <!-- <Cart /> -->

  <div class="rbt-create-course-area bg-color-white rbt-section-gap">
    <div class="container">
      <CreateCourse />
    </div>
  </div>

  <Separator />
  <!-- <BackToTop /> -->
  <FooterTwo />
</template>

<script setup>
useSeoMeta({
  title:
    "Create Course || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

// import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import FooterTwo from "@/components/Footer/Footer-Two";
import CreateCourse from "@/components/create-course/CreateCourse";
</script>

<style lang="scss" scoped></style>
