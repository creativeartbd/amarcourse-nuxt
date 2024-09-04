<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MainDemo />
  <!-- <Cart /> -->

  <Separator />
  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Main Demo || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
// Online Courses & Education NEXTJS14 Template
import FooterThree from "@/components/Footer/Footer-Three";
</script>

<style lang="scss" scoped></style>
