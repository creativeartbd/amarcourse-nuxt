<template>
  <HeaderStyleTen headerSticky="" :headerType="true" />
  <MobileMenu />

  <BreadCrumb title="Style Guide" text="Style Guide" />

  <div class="rbt-style-guide-area rbt-section-gap">
    <StyleGuide />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Style Guide || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import StyleGuide from "@/components/StyleGuide/StyleGuide";
</script>

<style lang="scss" scoped></style>
