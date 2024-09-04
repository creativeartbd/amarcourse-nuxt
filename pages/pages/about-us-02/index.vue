<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <div class="rbt-banner-area rbt-banner-8 variation-02">
    <div class="container">
      <Banner />
    </div>
  </div>

  <Video />

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <div class="container">
      <AboutSix
        btnClass="radius rbt-marquee-btn marquee-text-y"
        btnText="Learn More"
      />
    </div>
  </div>
  <div class="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
    <div class="rbt-callto-action rbt-cta-default style-6">
      <CallToActionSix />
    </div>
  </div>
  <div class="rbt-rbt-card-area bg-color-extra2 rbt-section-gap">
    <ServiceTwelve />
  </div>
  <div class="rbt-team-area bg-gradient-8 rbt-section-gap">
    <TeamTen />
  </div>
  <div class="rbt-brand-area bg-color-white rbt-section-gap">
    <BrandThree />
  </div>
  <Separator />

  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "About Us 2 || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import FooterThree from "@/components/Footer/Footer-Three";
import BrandThree from "@/components/Brand/Brand-Three";
import CallToActionSix from "@/components/Call-To-Action/CallToAction-Six";
import AboutSix from "@/components/Abouts/About-Six";
import ServiceTwelve from "@/components/Services/Service-Twelve";
import TeamTen from "@/components/Team/TeamTen";
import Separator from "@/components/Common/Separator";
import Banner from "@/components/About-Us-02/Banner";
import Video from "@/components/About-Us-02/Video";
</script>

<style lang="scss" scoped></style>
