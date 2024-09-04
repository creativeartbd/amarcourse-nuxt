<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <NotFound />

  <Separator />
  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Not Found || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import NotFound from "@/components/NotFound/NotFound";
</script>

<style lang="scss" scoped></style>
