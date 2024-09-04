<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <BreadCrumb title="Testimonial" text="Testimonial" />

  <div
    class="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden"
  >
    <Testimonial />
  </div>
  <div
    class="rbt-testimonial-area bg-color-extra2 rbt-section-gap overflow-hidden"
  >
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle bg-primary-opacity">
                EDUCATION FOR EVERYONE
              </span>
              <h2 class="title">
                People like histudy education. <br />
                No joking - here’s the proof!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TestimonialTwo />
  </div>
  <div class="rbt-testimonial-area bg-color-white rbt-section-gap">
    <TestimonialThree
      :isStar="false"
      bgClass="bg-gray-light"
      subTitleBg="bg-primary-opacity"
      designation=""
    />
  </div>
  <div class="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
    <TestimonialFour />
  </div>
  <div class="rbt-testimonial-area bg-color-extra2 rbt-section-gapBottom">
    <TestimonialFive :isDesc="true" />
  </div>
  <div
    class="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden"
  >
    <div class="container-fluid">
      <div class="row g-5 align-items-center">
        <div class="col-xl-3">
          <div class="section-title pl--100 pl_md--30 pl_sm--0">
            <h2 class="title">What Our Learners Say</h2>
            <p class="description mt--20">
              Learning communicate to global world and build a bright future
              with our histudy.
            </p>
            <div class="veiw-more-btn mt--20">
              <a
                class="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                href="#"
              >
                <span data-text="Marquee Y">Marquee Y</span>
              </a>
            </div>
          </div>
        </div>
        <TestimonialSix />
      </div>
    </div>
  </div>
  <div
    class="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden"
  >
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle bg-primary-opacity">
                EDUCATION FOR EVERYONE
              </span>
              <h2 class="title">
                People like histudy education. <br />
                No joking - here’s the proof!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSeven />
    </div>
  </div>

  <div class="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
    <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
  </div>

  <MobileMenu />

  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Testimonials || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

import MobileMenu from "@/components/Header/MobileMenu";

import FooterOne from "@/components/Footer/Footer-One";
import Testimonial from "@/components/Testimonials/Testimonial";
import TestimonialTwo from "@/components/Testimonials/Testimonial-Two";
import TestimonialThree from "@/components/Testimonials/Testimonial-Three";
import TestimonialFour from "@/components/Testimonials/Testimonial-Four";
import TestimonialFive from "@/components/Testimonials/Testimonial-Five";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";
import TestimonialSeven from "@/components/Testimonials/Testimonial-Seven";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import BreadCrumb from "@/components/Common/BreadCrumb";
</script>

<style lang="scss" scoped></style>
