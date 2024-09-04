<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Cart" text="Cart" />
  <div class="rbt-cart-area bg-color-white rbt-section-gap">
    <CartPage />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title: "Cart || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import BreadCrumb from "@/components/Common/BreadCrumb";
import CartPage from "@/components/Cart/CartPage";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
</script>

<style lang="scss" scoped></style>
~/components/Cart/CartPage.vue
