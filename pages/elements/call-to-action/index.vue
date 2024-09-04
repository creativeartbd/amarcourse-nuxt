<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Call To Action" text="Call To Action" />

  <div class="rbt-callto-action-area bg-color-white rbt-section-gap">
    <CallToAction />
  </div>

  <CallToActionTwo />
  <CallToActionThree />

  <div class="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
    <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
  </div>

  <div class="rbt-call-to-action-area rbt-section-gap bg-color-extra2">
    <CallToActionFive />
  </div>

  <div class="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
    <div class="rbt-callto-action rbt-cta-default style-6">
      <CallToActionSix />
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Call to Action || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import CallToAction from "@/components/Call-To-Action/CallToAction";
import CallToActionFive from "@/components/Call-To-Action/CallToAction-Five";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import CallToActionSix from "@/components/Call-To-Action/CallToAction-Six";
import CallToActionThree from "@/components/Call-To-Action/CallToAction-Three";
import CallToActionTwo from "@/components/Call-To-Action/CallToAction-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import sal from "sal.js";

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
