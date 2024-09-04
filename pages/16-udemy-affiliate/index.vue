<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <UdemyAffiliate />
  <!-- <Cart /> -->

  <!-- <BackToTop /> -->
  <Separator />
  <FooterOne bgColor="bg-color-darker" />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Udemy Affiliate || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
// import BackToTop from "../backToTop";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import UdemyAffiliate from "@/components/16-udemy-affiliate/UdemyAffiliate";
</script>

<style lang="scss" scoped></style>
