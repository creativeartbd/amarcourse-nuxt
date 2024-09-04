<template>
  <MobileMenu />
  <HeaderStyleThree
    headerType="rbt-transparent-header"
    headerSticky="rbt-sticky"
  />
  <!-- <Cart /> -->

  <OnlineCourse />

  <!-- <BackToTop /> -->
  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Online Course || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleThree from "@/components/Header/HeaderStyle-Three";
import OnlineCourse from "@/components/10-online-course/OnlineCourse";
import FooterThree from "@/components/Footer/Footer-Three";
</script>

<style lang="scss" scoped></style>
~/components/Header/HeaderStyle-Three.vue
