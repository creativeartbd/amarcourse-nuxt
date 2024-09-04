<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <BreadCrumb title="Instagram" text="Instagram" />
  <div class="rbt-instagram-area bg-color-white rbt-section-gap">
    <Instagram />
  </div>
  <MobileMenu />
  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Instagram || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Instagram from "@/components/Instagram/Instagram";
</script>

<style lang="scss" scoped></style>
