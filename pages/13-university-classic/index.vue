<template>
  <MobileMenu />
  <HeaderStyleFour headerType="" />
  <UniversityClassic />
  <!-- <Cart /> -->

  <!-- <BackToTop /> -->
  <Separator />
  <FooterOne />
</template>

<script setup>
// import BackToTop from "../backToTop";

useSeoMeta({
  title:
    "Home University Class || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";
import FooterOne from "@/components/Footer/Footer-One";
// import Cart from "@/components/Header/Offcanvas/Cart";
import UniversityClassic from "@/components/13-university-classic/13-University-Classic";
import HeaderStyleFour from "@/components/Header/HeaderStyle-Four";
import Separator from "@/components/Common/Separator";
</script>

<style lang="scss" scoped></style>
