<template>
  <MobileMenu />
  <HeaderStyleEleven />
  <!-- <Cart /> -->

  <SingleCourse />

  <!-- <BackToTop /> -->
  <Separator />
  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Single Course || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleEleven from "@/components/Header/HeaderStyle-Eleven";
import SingleCourse from "@/components/11-single-course/SingleCourse";
import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
</script>

<style lang="scss" scoped></style>
