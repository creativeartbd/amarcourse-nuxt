<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Become a Teacher" text="Become a Teacher" />

  <div class="rbt-become-area bg-color-white rbt-section-gap">
    <BecomeATeacher />
  </div>

  <div class="thumb-wrapper bg-color-white rbt-section-gapBottom">
    <TeacherGallery />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Bacome a Teacher || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import BreadCrumb from "@/components/Common/BreadCrumb";
import BecomeATeacher from "@/components/Become-a-Teacher/BecomeATeacher";
import TeacherGallery from "@/components/Become-a-Teacher/TeacherGallery";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
</script>

<style lang="scss" scoped></style>
