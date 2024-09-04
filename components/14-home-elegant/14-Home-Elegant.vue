<template>
  <div class="rbt-banner-area rbt-banner-8 variation-02 with-shape">
    <HomeElegantBanner />
  </div>
  <div
    class="rbt-courses-area rbt-section-gapBottom bg-color-white mt_dec--100 mt_md_dec--30 mt_sm_dec--30"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 mt_dec--50">
          <CardSix
            parentClass="course-card mt--50"
            childClass="rbt-card variation-01 rbt-hover elegant-course card-list-2"
            types="home-elegant"
          />
        </div>
      </div>
    </div>
  </div>

  <CrashCourse />

  <div
    class="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden"
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

  <div class="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="rbt-cta-6 text-center">
            <div class="content">
              <h1 class="title">
                Download our mobile app, <br />
                start learning today
              </h1>
              <p>Includes all Course && Features</p>
              <div class="rbt-button-group justify-content-center">
                <a class="rbt-btn btn-gradient" href="#"> Get Bundle </a>
                <a class="rbt-btn btn-border" href="#"> See Features </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-brand-area bg-color-white ptb--60">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-10 offset-lg-1">
          <BrandThree />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardSix from "../Cards/Card-Six";
import CrashCourse from "./CrashCourse";
import TestimonialTwo from "../Testimonials/Testimonial-Two.vue";
import BrandThree from "../Brand/Brand-Three";
import HomeElegantBanner from "./HomeElegantBanner";
</script>

<style lang="scss" scoped></style>
