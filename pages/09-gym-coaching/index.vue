<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <Separator />
  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Home GYM Coaching || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import FooterThree from "@/components/Footer/Footer-Three";
</script>

<style lang="scss" scoped></style>
