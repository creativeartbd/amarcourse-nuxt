<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Accordion" text="Accordion" />

  <div
    class="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap"
  >
    <Accordion />
  </div>

  <div
    class="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap"
  >
    <AccordionTwo />
  </div>

  <div
    class="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap"
  >
    <AccordionThree />
  </div>

  <div
    class="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap"
  >
    <div class="container">
      <AccordionFour />
    </div>
  </div>

  <div
    class="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap"
  >
    <Course title="Tuition & Fees" tag="COURSE PRICING" />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Accordion || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Accordion from "@/components/Accordions/Accordion";
import AccordionFour from "@/components/Accordions/Accordion-Four";
import AccordionThree from "@/components/Accordions/Accordion-Three";
import AccordionTwo from "@/components/Accordions/Accordion-Two";
import Course from "@/components/Accordions/Course";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
</script>

<style lang="scss" scoped></style>
