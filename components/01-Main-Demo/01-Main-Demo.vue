<template>
  <main class="rbt-main-wrapper">
    <div class="rbt-banner-area rbt-banner-1">
      <MainDemoBanner />
    </div>

    <div class="rbt-categories-area bg-color-white rbt-section-gapBottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle bg-primary-opacity">CATEGORIES</span>
              <h2 class="title">
                Explore Top Courses Caterories <br />
                That Change Yourself
              </h2>
            </div>
          </div>
        </div>
        <div class="row g-5 mt--20">
          <CategoryOne />
        </div>
      </div>
    </div>

    <div class="rbt-course-area bg-color-extra2 rbt-section-gap">
      <div class="container">
        <div class="row mb--60">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle bg-secondary-opacity">
                Top Popular Course
              </span>
              <h2 class="title">
                Histudy Course student <br />
                can join with us.
              </h2>
            </div>
          </div>
        </div>
        <div class="row row--15">
          <Card
            col="col-lg-4 col-md-6 col-sm-6 col-12"
            mt="mt--30"
            :start="0"
            :end="3"
            :isDesc="true"
            :isUser="true"
          />
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="load-more-btn mt--60 text-center">
              <nuxt-link
                to="/course-filter-one-toggle"
                class="rbt-btn btn-gradient btn-lg hover-icon-reverse"
              >
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">Load More Course (40)</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1"
    >
      <div class="container">
        <AboutTwo />
      </div>
    </div>

    <div class="rbt-callto-action-area mt_dec--half">
      <CallToAction />
    </div>

    <div
      class="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap"
    >
      <div class="container">
        <Counter :isDesc="false" />
      </div>
    </div>

    <div
      class="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden"
    >
      <div class="wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center mb--10">
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
      <TestimonialSeven />
    </div>

    <div class="rbt-event-area rbt-section-gap bg-gradient-3">
      <div class="container">
        <div class="row mb--55">
          <div class="section-title text-center">
            <span class="subtitle bg-white-opacity">
              STIMULATED TO TAKE PART IN?
            </span>
            <h2 class="title color-white">Upcoming Events</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <EventCarouse />
          </div>
        </div>
      </div>
    </div>

    <div class="rbt-team-area bg-color-white rbt-section-gap">
      <div class="container">
        <div class="row mb--60">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle bg-primary-opacity">Our Teacher</span>
              <h2 class="title">Whose Inspirations You</h2>
            </div>
          </div>
        </div>
        <TeamTwo />
      </div>
    </div>

    <div class="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
      <div class="container">
        <div class="row g-5 align-items-center mb--30">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="section-title">
              <span class="subtitle bg-pink-opacity">Blog Post</span>
              <h2 class="title">Post Popular Post.</h2>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <div class="read-more-btn text-start text-md-end">
              <nuxt-link
                class="rbt-btn btn-gradient hover-icon-reverse"
                to="/blog-list"
              >
                <div class="icon-reverse-wrapper">
                  <span class="btn-text">See All Articles</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <BlogGridTop :BlogData="BlogData" />
      </div>
    </div>

    <div
      class="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap"
    >
      <NewsletterTwo />
    </div>
  </main>
</template>

<script setup>
import sal from "sal.js";
import CategoryOne from "../Category/CategoryOne.vue";
import MainDemoBanner from "./MainDemoBanner.vue";
import Card from "../Cards/Card.vue";
import AboutTwo from "../Abouts/About-Two.vue";
import CallToAction from "../Call-To-Action/CallToAction.vue";
import Counter from "../Counters/Counter.vue";
import TestimonialSeven from "../Testimonials/Testimonial-Seven.vue";
import EventCarouse from "../Events/EventCarouse.vue";
import TeamTwo from "../Team/TeamTwo.vue";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top.vue";

import BlogData from "../../data/blog/blog.json";
import NewsletterTwo from "../Newsletters/Newsletter-Two.vue";
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
