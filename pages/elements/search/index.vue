<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <BreadCrumb title="Search" text="Search" />
  <div class="rbt-elements-area bg-color-white rbt-section-gap">
    <Search />
  </div>
  <div class="rbt-elements-area bg-color-extra2 rbt-section-gap">
    <SearchTwo />
  </div>
  <div class="rbt-elements-area bg-color-darker rbt-section-gap">
    <SearchThree />
  </div>
  <MobileMenu />

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Search || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Search from "@/components/Search/Search";
import SearchThree from "@/components/Search/Search-Three";
import SearchTwo from "@/components/Search/Search-Two";
</script>

<style lang="scss" scoped></style>
