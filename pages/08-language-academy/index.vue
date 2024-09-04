<template>
  <MobileMenu />

  <HeaderStyleEight headerSticky="rbt-sticky" />
  <!-- <Cart /> -->

  <LanguageAcademy />

  <!-- <BackToTop /> -->
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Language Academy || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import LanguageAcademy from "@/components/08-language-academy/LanguageAcademy";
import HeaderStyleEight from "@/components/Header/HeaderStyle-Eight";
import FooterOne from "@/components/Footer/Footer-One";
</script>

<style lang="scss" scoped></style>
