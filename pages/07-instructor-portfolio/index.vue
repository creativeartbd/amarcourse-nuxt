<template>
  <MobileMenu />
  <HeaderStyleSeven headerSticky="rbt-sticky" />
  <!-- <Cart /> -->

  <InstructorPortfolio />

  <!-- <BackToTop /> -->
  <FooterTwo />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Instractor Portfolio || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleSeven from "@/components/Header/HeaderStyle-Seven";
import InstructorPortfolio from "@/components/07-instructor-portfolio/InstructorPortfolio";
import FooterTwo from "@/components/Footer/Footer-Two";
</script>

<style lang="scss" scoped></style>
~/components/Header/HeaderStyle-Seven.vue ~/components/Footer/Footer-Two.vue
