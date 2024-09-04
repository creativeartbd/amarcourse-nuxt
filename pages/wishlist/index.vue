<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <Wishlist />

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Wishlist || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";

import FooterOne from "@/components/Footer/Footer-One";
import Wishlist from "@/components/wishlist/Wishlist";
</script>

<style lang="scss" scoped></style>
