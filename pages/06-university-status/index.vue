<template>
  <MobileMenu />
  <HeaderStyleFour />
  <!-- <Cart /> -->

  <UniversityStatus />

  <!-- <BackToTop /> -->
  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Home University Status || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleFour from "@/components/Header/HeaderStyle-Four";
import UniversityStatus from "@/components/06-university-status/UniversityStatus";
import FooterThree from "@/components/Footer/Footer-Three";
</script>

<style lang="scss" scoped></style>
