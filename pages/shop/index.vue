<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <Shop />

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title: "Shop || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";

import Shop from "@/components/Shop/Shop";
import FooterOne from "@/components/Footer/Footer-One";
</script>

<style lang="scss" scoped></style>
