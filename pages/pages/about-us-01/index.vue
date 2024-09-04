<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <div
    class="slider-area rbt-banner-10 height-750 bg_image bg_image--11"
    data-black-overlay="5"
  >
    <Banner />
  </div>
  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gapTop">
    <About />
  </div>
  <SplitThree />
  <div
    class="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden"
  >
    <div class="container-fluid">
      <div class="row g-5 align-items-center">
        <div class="col-xl-3">
          <div class="section-title pl--100 pl_md--30 pl_sm--0">
            <span class="subtitle bg-pink-opacity"> শিক্ষার্থীদের মতামত </span>
            <h2 class="title">কেন আমরাই শিক্ষার্থীর প্রথম পছন্দ?</h2>
            <p class="description mt--20">
              Learning communicate to global world and build a bright future
              with our histudy.
            </p>
            <div class="veiw-more-btn mt--20">
              <a
                class="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                href="#"
              >
                <span data-text="Marquee Y">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
        <TestimonialSix />
      </div>
    </div>
  </div>
  <Teacher />
  <div
    class="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap"
  >
    <NewsletterTwo />
  </div>

  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "About Us 01 || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Banner from "@/components/About-Us-01/Banner";
import Teacher from "@/components/About-Us-01/Teacher";
import About from "@/components/Abouts/About";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import NewsletterTwo from "@/components/Newsletters/Newsletter-Two";
import SplitThree from "@/components/Split/Split-Three";

import TestimonialSix from "@/components/Testimonials/Testimonial-Six";
</script>

<style lang="scss" scoped></style>
