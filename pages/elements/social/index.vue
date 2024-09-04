<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Social Share" text="Social Share" />

  <Social
    classOne="rbt-social-area bg-color-white rbt-section-gap"
    classList="social-icon social-default"
  />

  <Social
    classOne="rbt-social-area bg-color-extra2 rbt-section-gap"
    classList="social-icon social-default transparent-with-border"
  />

  <Social
    classOne="rbt-social-area bg-color-white rbt-section-gap"
    classList="social-icon social-default with-gradient"
  />

  <Social
    classOne="rbt-social-area bg-color-extra2 rbt-section-gap"
    classList="social-icon social-default with-bg-primary"
  />

  <Social
    classOne="rbt-social-area bg-color-white rbt-section-gap"
    classList="social-icon social-default icon-naked"
  />

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Socials || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import Social from "@/components/Socials/index.vue";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
</script>

<style lang="scss" scoped></style>
