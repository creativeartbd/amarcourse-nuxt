<template>
  <div style="max-width: 100vw; overflow: hidden">
    <MobileMenu />
    <HeaderStyleSix headerType="" />
    <!-- <Cart /> -->

    <HomeElegant />

    <!-- <BackToTop /> -->
    <Separator />
    <FooterThree />
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Home Home Elegent || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleSix from "@/components/Header/HeaderStyle-Six";
import Separator from "@/components/Common/Separator";
import HomeElegant from "@/components/14-home-elegant/14-Home-Elegant";
import FooterThree from "@/components/Footer/Footer-Three";
</script>

<style lang="scss" scoped></style>
