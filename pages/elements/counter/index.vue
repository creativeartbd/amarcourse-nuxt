<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Counter" text="Counter" />

  <div class="rbt-counterup-area bg-color-white rbt-section-gap">
    <Counter :isDesc="true" />
  </div>

  <div class="rbt-counterup-area bg-color-extra2 rbt-section-gap">
    <CounterTwo />
  </div>

  <div class="rbt-counterup-area bg-color-white rbt-section-gap">
    <CounterThree />
  </div>

  <div class="rbt-counterup-area bg-color-extra2 rbt-section-gap">
    <div class="conter-style-2">
      <CounterFour />
    </div>
  </div>

  <div
    class="rbt-counterup-area bg_image bg_image_fixed bg_image--3 ptb--170 bg-black-overlay"
    data-black-overlay="4"
  >
    <div class="conter-style-2">
      <CounterFive />
    </div>
  </div>

  <div class="rbt-counterup-area bg-color-white rbt-section-gap">
    <CounterSix />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Counters || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Counter from "@/components/Counters/Counter";
import CounterTwo from "@/components/Counters/Counter-Two";
import CounterThree from "@/components/Counters/Counter-Three";
import CounterFour from "@/components/Counters/Counter-Four";
import CounterFive from "@/components/Counters/Counter-Five";
import CounterSix from "@/components/Counters/Counter-Six";
</script>

<style lang="scss" scoped></style>
