<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Advance Tab" text="Advance Tab" />

  <div class="rbt-advance-tab-area rbt-section-gap bg-color-white">
    <AdvanceTab tag="YOU CAN CUSTOMIZE ALL" title="Advance Tab Style One." />
  </div>

  <div class="rbt-advance-tab-area rbt-section-gap bg-color-extra2">
    <AdvancetabTwo />
  </div>

  <div class="rbt-advance-tab-area rbt-section-gap bg-color-white">
    <AdvanceTabThree />
  </div>

  <div class="rbt-advance-tab-area rbt-section-gap bg-color-extra2">
    <AdvanceTabFour />
  </div>

  <div class="rbt-tab-area bg-color-white rbt-section-gap">
    <AdvanceTabFive />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Advance Tab || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import AdvanceTab from "@/components/AdvanceTab/AdvanceTab";
import AdvanceTabFive from "@/components/AdvanceTab/AdvanceTab-Five";
import AdvanceTabFour from "@/components/AdvanceTab/AdvanceTab-Four";
import AdvanceTabThree from "@/components/AdvanceTab/AdvanceTab-Three";
import AdvancetabTwo from "@/components/AdvanceTab/AdvanceTab-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
</script>

<style lang="scss" scoped></style>
