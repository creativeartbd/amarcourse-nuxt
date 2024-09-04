<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Welcome to Histudy Button" text="Button" />

  <Button />

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Buttons || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Button from "@/components/Button/Button";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
</script>

<style lang="scss" scoped></style>
