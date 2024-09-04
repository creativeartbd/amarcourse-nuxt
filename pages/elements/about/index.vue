<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="About" text="About" />

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <About />
  </div>

  <div class="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
    <div class="container">
      <AboutTwo />
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <div class="container">
      <AboutThree />
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
    <div class="container">
      <AboutFour />
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
    <div class="container">
      <AboutFive />
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <div class="container">
      <AboutSix
        btnClass="radius rbt-marquee-btn marquee-text-y"
        btnText="Learn More"
      />
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
    <div class="container">
      <AboutSaven />
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <div class="container">
      <AboutEight />
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - About || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import About from "@/components/Abouts/About";
import AboutEight from "@/components/Abouts/About-Eight";
import AboutFive from "@/components/Abouts/About-Five";
import AboutFour from "@/components/Abouts/About-Four";
import AboutSaven from "@/components/Abouts/About-Saven";
import AboutSix from "@/components/Abouts/About-Six";
import AboutThree from "@/components/Abouts/About-Three";
import AboutTwo from "@/components/Abouts/About-Two";
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
