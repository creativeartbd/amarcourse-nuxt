<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Admission Guide" text="Admission Guide" />

  <div class="rbt-admission-area bg-color-white rbt-section-gapTop">
    <div class="container">
      <AdmissionArea />
    </div>
  </div>

  <div class="rbt-conatct-area bg-color-white pt--60 rbt-section-gapBottom">
    <div class="container">
      <AdmissionContact />
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Admission Guide || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import AdmissionArea from "@/components/Admission-Guide/AdmissionArea";
import AdmissionContact from "@/components/Admission-Guide/AdmissionContact";
</script>

<style lang="scss" scoped></style>
