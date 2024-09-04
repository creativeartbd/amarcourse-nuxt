<template>
  <MobileMenu />
  <div class="header-4-kindergarden">
    <HeaderStyleEight headerSticky="rbt-sticky" headerType="" />
  </div>
  <Kindergarten />
  <!-- <Cart /> -->

  <!-- <BackToTop /> -->
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Home Kindergarten || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";
import Kindergarten from "@/components/04-kindergarten/04-kindergarten";
// import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";
// import BackToTop from "../backToTop";
import HeaderStyleEight from "@/components/Header/HeaderStyle-Eight";
</script>

<style lang="scss" scoped></style>
~/components/Header/HeaderStyle-Eight.vue
