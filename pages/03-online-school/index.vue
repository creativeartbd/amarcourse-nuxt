<template>
  <MobileMenu />
  <HeaderStyleEleven />
  <!-- <Cart /> -->

  <OnlineSchool />

  <!-- <BackToTop /> -->
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Online School || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleEleven from "@/components/Header/HeaderStyle-Eleven";
import OnlineSchool from "@/components/03-online-school/OnlineSchool";
import FooterOne from "@/components/Footer/Footer-One";
</script>

<style lang="scss" scoped></style>
