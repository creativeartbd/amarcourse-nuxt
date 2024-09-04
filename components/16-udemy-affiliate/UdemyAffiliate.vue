<template>
  <div class="rbt-banner-area rbt-banner-11 bg-color-darker ptb--100">
    <div class="wrapper">
      <div class="container">
        <UdemyAffiliateBanner :CourseData="CourseData" />
      </div>
    </div>
  </div>

  <div class="rbt-course-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row g-5">
        <Card
          col="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
          mt=""
          :start="0"
          :end="12"
          :isDesc="false"
          :isUser="false"
        />
      </div>

      <div class="row mt--60 text-center">
        <div class="col-lg-12">
          <nuxt-link
            class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
            to="/course-filter-one-toggle"
          >
            <span data-text="View More Course">View More Course</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-about-area bg-color-darker rbt-section-gap">
    <div class="container">
      <AboutEight />
    </div>
  </div>

  <div class="rbt-categories-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-start">
            <h4 class="title">Top Categories</h4>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategoryOne />
      </div>
    </div>
  </div>

  <Separator />

  <div class="rbt-brand-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="section-title text-center mb--40">
            <span class="theme-gradient d-block small-title w-600 mb--10">
              Trusted by over 13,400 great teams
            </span>
            <p>
              Leading companies use the same courses to help employees keep
              their skills fresh.
            </p>
          </div>
          <BrandOne />
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-testimonial-area bg-color-white rbt-section-gapBottom">
    <div class="container">
      <div
        class="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30"
      >
        <TestimonialFive :isDesc="true" />
      </div>
      <div class="row mt--30">
        <div class="col-lg-12">
          <div class="view-more-btn text-center">
            <a class="rbt-btn-link color-primary" href="#">
              View More Customer Feedback
              <i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";

import CourseData from "../../data/course-details/courseData.json";

import UdemyAffiliateBanner from "./UdemyAffiliate-Banner";
import Card from "../Cards/Card.vue";
import AboutEight from "../Abouts/About-Eight.vue";
import CategoryOne from "../Category/CategoryOne.vue";
import Separator from "../Common/Separator.vue";
import BrandOne from "../Brand/Brand-One.vue";
import TestimonialFive from "../Testimonials/Testimonial-Five.vue";

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
./UdemyAffiliate-Banner.vue
