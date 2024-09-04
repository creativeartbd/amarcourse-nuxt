<template>
  <div class="rbt-banner-area rbt-banner-1 variation-2 height-750">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-8">
          <div class="content">
            <div class="inner">
              <div class="rbt-new-badge rbt-new-badge-one">
                <span class="rbt-new-badge-icon">🏆</span> The Leader in Online
                Learning
              </div>
              <h1 class="title">
                The Largest{{ " " }}
                <span class="color-primary">Online Learning</span> Platform for
                Drive Your Career.
              </h1>
              <p class="description">
                This template includes all the necessary pages of the
                onlineLorem. And you can be build Link{{ " " }}
                <strong>education template easily</strong>.
              </p>
              <div class="slider-btn">
                <a class="rbt-btn btn-gradient hover-icon-reverse" href="#">
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">সকল কোর্স</span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="content">
            <div
              class="banner-card pb--60 swiper rbt-dot-bottom-center banner-swiper-active"
            >
              <HomeCourse :start="3" :end="6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rbt-categories-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row g-5 align-items-start mb--30">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title">
            <h4 class="title">জনপ্রিয় ক্যাটাগরী</h4>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="read-more-btn text-start text-md-end">
            <nuxt-link
              to="/elements/categories"
              class="rbt-btn rbt-switch-btn bg-primary-opacity btn-sm"
            >
              <span data-text="View All">View All</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <CategorySix />
      </div>
    </div>
  </div>
  <div class="rbt-newsletter-area bg-gradient-6 ptb--50">
    <NewsletterThree />
  </div>
  <div class="rbt-course-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--55 g-5 align-items-end">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title text-start">
            <span class="subtitle bg-pink-opacity">Top Popular Course</span>
            <h2 class="title">
              জনপ্রিয় <span class="color-primary">কোর্স</span> সমূহ
            </h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="load-more-btn text-start text-md-end">
            <nuxt-link
              class="rbt-btn rbt-switch-btn bg-primary-opacity"
              to="/course-filter-one-toggle"
            >
              <span data-text="View All Course">সকল কোর্স দেখুন</span>
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
  <div class="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
    <TestimonialFour />
  </div>
  <div class="rbt-rbt-blog-area rbt-section-gapTop bg-color-white mb--55">
    <div class="container">
      <div class="row mb--55 g-5 align-items-end">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title text-start">
            <span class="subtitle bg-pink-opacity">Top News</span>
            <h2 class="title">
              নতুন <span class="color-primary">টিউটোরিয়াল</span> দেখুন 
            </h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="load-more-btn text-start text-md-end">
            <nuxt-link
              class="rbt-btn rbt-switch-btn bg-primary-opacity"
              to="/blog-list"
            >
              <span data-text="View All News">View All News</span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <BlogGrid :isPagination="false" :top="false" :start="4" :end="7" />
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";
import HomeCourse from "../01-Main-Demo/Home-Sections/HomeCourse.vue";
import NewsletterThree from "../Newsletters/Newsletter-Three.vue";
import Card from "../Cards/Card.vue";
import BlogGrid from "../Blogs/BlogGrid";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import CategorySix from "../Category/CategorySix";
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
../Blogs/BlogGrid.vue../Instagram/Instagram.vue../Testimonials/Testimonial-Four.vue../Category/CategorySix.vue
