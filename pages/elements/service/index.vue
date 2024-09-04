<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <BreadCrumb title="Service Box" text="Service Box" />

  <div class="rbt-service-area bg-color-white rbt-section-gap">
    <Service />
  </div>
  <div class="rbt-service-area bg-color-extra2 rbt-section-gap">
    <ServiceTwo />
  </div>
  <div class="rbt-service-area bg-color-white rbt-section-gap">
    <ServiceThree />
  </div>
  <div class="rbt-service-area bg-color-extra2 rbt-section-gap">
    <ServiceFour />
  </div>
  <div class="rbt-service-area bg-color-white rbt-section-gap">
    <ServiceFive />
  </div>
  <div class="rbt-service-area bg-color-extra2 rbt-section-gap">
    <ServiceSix />
  </div>
  <div class="rbt-service-area bg-color-white rbt-section-gap">
    <ServiceSaven />
  </div>
  <div class="rbt-service-area bg-color-extra2 rbt-section-gap">
    <ServiceEight isHead="{true}" />
  </div>
  <div class="rbt-service-area bg-color-white rbt-section-gap">
    <ServiceNine />
  </div>
  <div class="rbt-rbt-card-area bg-color-extra2 rbt-section-gap">
    <ServiceTen head="{true}" />
  </div>
  <div class="rbt-rbt-card-area bg-color-white rbt-section-gap">
    <ServiceEleven />
  </div>
  <div class="rbt-rbt-card-area bg-color-extra2 rbt-section-gap">
    <ServiceTwelve />
  </div>

  <MobileMenu />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Service || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Service from "@/components/Services/Service";
import ServiceTwo from "@/components/Services/Service-Two";
import ServiceThree from "@/components/Services/Service-Three";
import ServiceFour from "@/components/Services/Service-Four";
import ServiceFive from "@/components/Services/Service-Five";
import ServiceSix from "@/components/Services/Service-Six";
import ServiceSaven from "@/components/Services/Service-Saven";
import ServiceEight from "@/components/Services/Service-Eight";
import ServiceNine from "@/components/Services/Service-Nine";
import ServiceTen from "@/components/Services/Service-Ten";
import ServiceEleven from "@/components/Services/Service-Eleven";
import ServiceTwelve from "@/components/Services/Service-Twelve";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import FooterOne from "@/components/Footer/Footer-One";
import BreadCrumb from "@/components/Common/BreadCrumb";
</script>

<style lang="scss" scoped></style>
