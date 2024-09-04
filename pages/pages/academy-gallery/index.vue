<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Academy Gallery" text="Academy Gallery" />

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <div class="container">
      <AcademyGalleryOne />
    </div>
  </div>
  <div
    class="rbt-about-area about-style-1 bg-color-white rbt-section-gapBottom"
  >
    <div class="container">
      <AcademyGalleryTwo />
    </div>
  </div>
  <div
    class="rbt-about-area about-style-1 bg-color-white rbt-section-gapBottom"
  >
    <div class="container">
      <AcademyGalleryThree />
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Accout Gallery || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import AcademyGalleryOne from "@/components/Academy-Gallery/AcademyGallery-One";
import AcademyGalleryTwo from "@/components/Academy-Gallery/AcademyGallery-Two";
import AcademyGalleryThree from "@/components/Academy-Gallery/AcademyGallery-Three";
</script>

<style lang="scss" scoped></style>
