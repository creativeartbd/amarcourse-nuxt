<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Subscription" text="Subscription" />

  <div class="rbt-pricing-area bg-color-white rbt-section-gap">
    <PricingThree title="" tag="" col="col-12" position="text-center" />
  </div>

  <div
    class="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap"
  >
    <AccordionThree />
  </div>

  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Subscription || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import FooterThree from "@/components/Footer/Footer-Three";
import BreadCrumb from "@/components/Common/BreadCrumb";
import PricingThree from "@/components/Pricing/Pricing-Three";
import AccordionThree from "@/components/Accordions/Accordion-Three";
</script>

<style lang="scss" scoped></style>
