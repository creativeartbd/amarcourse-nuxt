<template>
  <MobileMenu />
  <SideNav />

  <HeaderStyleTwelve />
  <!-- <Cart /> -->

  <HomeTechnology />

  <!-- <BackToTop /> -->
  <Separator />
  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Home Technology || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";

import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleTwelve from "@/components/Header/HeaderStyle-Twelve";
import SideNav from "@/components/Header/SideNav";
import HomeTechnology from "@/components/15-home-technology/HomeTechnology";
</script>

<style lang="scss" scoped></style>
