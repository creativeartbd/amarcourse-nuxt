<template>
  <MobileMenu />
  <HeaderTopBar />
  <HeaderStyleNine headerType="" />
  <Marketplace />
  <!-- <Cart /> -->

  <!-- <BackToTop /> -->
  <Separator />
  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Marketplace || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});

// import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import Marketplace from "@/components/12-Marketplace/12-Marketplace";
import HeaderTopBar from "@/components/Header/HeaderTopBar/HeaderTopBar";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";
</script>

<style lang="scss" scoped></style>
