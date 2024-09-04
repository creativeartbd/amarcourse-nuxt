<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Checkout" text="Checkout" />
  <div class="checkout_area bg-color-white rbt-section-gap">
    <Checkout />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Checkout || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Checkout from "@/components/Checkout/Checkout";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
</script>

<style lang="scss" scoped></style>
~/components/Checkout/Checkout.vue
