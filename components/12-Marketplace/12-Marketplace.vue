<template>
  <div class="rbt-banner-5 height-650 bg_image bg_image--19">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="inner text-start">
            <h2 class="title">
              <span class="text-decoration-underline">Histudy</span> Starter is
              a community for creative people
            </h2>
            <p class="description">
              We just don&apos;t give our student only lecture but real life
              experience.
            </p>
            <div class="slider-btn rbt-button-group justify-content-start">
              <nuxt-link
                to="/course-filter-one-toggle"
                class="rbt-btn btn-border icon-hover color-white radius-round"
              >
                <span class="btn-text">Explore Courses</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </nuxt-link>
              <nuxt-link
                class="rbt-btn-link color-white"
                to="/course-filter-one-toggle"
              >
                Start learning<i class="feather-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-category-area bg-color-white rbt-section-gapTop">
    <div class="container">
      <div class="row g-5">
        <CategoryEight />
      </div>
    </div>
  </div>

  <div class="rbt-featured-course bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row g-5 align-items-end mb--60">
        <div class="col-lg-6 col-md-12 col-12">
          <div class="section-title text-start">
            <h2 class="title">Featured Courses</h2>
            <p class="description mt--20">
              Learning communicate to global world and build Link bright future
              and career development, increase your skill with our histudy.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <div class="load-more-btn text-start text-lg-end">
            <nuxt-link
              class="rbt-btn btn-border icon-hover radius-round"
              to="/course-filter-one-toggle"
            >
              <span class="btn-text">Browse Histudy Courses</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <Card
          col="col-lg-4 col-md-6 col-sm-12 col-12"
          mt=""
          :start="0"
          :end="6"
          :isDesc="true"
          :isUser="true"
        />
      </div>
    </div>
  </div>

  <div
    class="rbt-counterup-area bg_image bg_image_fixed bg_image--20 ptb--170 bg-black-overlay"
    data-black-overlay="2"
  >
    <CounterFive />
  </div>

  <div class="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div
        class="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30"
      >
        <TestimonialFive :isDesc="true" />
      </div>
    </div>
  </div>

  <div
    class="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape"
  >
    <div class="wrapper pb--50 rbt-index-upper">
      <div class="container">
        <div class="row g-5 align-items-end mb--60">
          <div class="col-lg-6 col-md-12 col-12">
            <div class="section-title text-start">
              <h2 class="title color-white">Latest News</h2>
              <p class="description color-white-off mt--20">
                Learning communicate to global world and build Link bright
                future and career development, increase your skill with our
                histudy.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-12">
            <div class="load-more-btn text-start text-lg-end">
              <nuxt-link
                class="rbt-btn btn-border icon-hover radius-round color-white-off"
                to="/blog-list"
              >
                <span class="btn-text">See All Articles</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
        <BlogGridMinimal :start="0" :end="3" :isPagination="false" />
      </div>
    </div>
  </div>

  <div class="rbt-newsletter-area bg-color-white rbt-section-gapBottom pt--60">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <NewsletterFour />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";

import CategoryEight from "../Category/CategoryEight.vue";
import Card from "../Cards/Card.vue";
import CounterFive from "../Counters/Counter-Five.vue";
import TestimonialFive from "../Testimonials/Testimonial-Five";
import BlogGridMinimal from "../Blogs/BlogGridMinimal";
import NewsletterFour from "../Newsletters/Newsletter-Four.vue";
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
../Blogs/BlogGridMinimal.vue../Testimonials/Testimonial-Five.vue
