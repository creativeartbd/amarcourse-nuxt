<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Progressbar" text="Progressbar" />

  <div class="rbt-progressbar-area bg-color-white rbt-section-gap">
    <Progressbar />
  </div>
  <div class="rbt-progressbar-area bg-color-extra2 rbt-section-gap">
    <ProgressbarTwo />
  </div>

  <div class="rbt-progressbar-area bg-color-white rbt-section-gap">
    <ProgressbarThree />
  </div>

  <div class="rbt-progressbar-area bg-color-extra2 rbt-section-gap">
    <ProgressbarFour />
  </div>

  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Progressbar || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Progressbar from "@/components/Progressbars/Progressbar";
import ProgressbarFour from "@/components/Progressbars/Progressbar-Four";
import ProgressbarThree from "@/components/Progressbars/Progressbar-Three";
import ProgressbarTwo from "@/components/Progressbars/Progressbar-Two";
import MobileMenu from "~/components/Header/MobileMenu.vue";
</script>

<style lang="scss" scoped></style>
