<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Brand" text="Brand" />

  <div class="rbt-brand-area bg-color-white rbt-section-gap">
    <div class="container">
      <BrandOne />
    </div>
  </div>

  <div class="rbt-brand-area bg-color-extra2 rbt-section-gap">
    <BrandTwo />
  </div>

  <div class="rbt-brand-area bg-color-white rbt-section-gap">
    <BrandThree />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Brand || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BrandOne from "@/components/Brand/Brand-One";
import BrandThree from "@/components/Brand/Brand-Three";
import BrandTwo from "@/components/Brand/Brand-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
</script>

<style lang="scss" scoped></style>
