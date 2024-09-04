<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <BreadCrumb title="Split" text="Split" />

  <SplitTwo />

  <MobileMenu />
  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Split || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Split from "@/components/Split/Split";
import SplitTwo from "@/components/Split/Split-Two";
</script>

<style lang="scss" scoped></style>
