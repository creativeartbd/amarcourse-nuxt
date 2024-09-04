<template>
  <div
    class="slider-area rbt-banner-6 variation-01 bg_image bg_image--14 header-transperent-spacer"
    data-black-overlay="7"
    :style="{ paddingTop: '132px' }"
  >
    <div class="wrapper w-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="inner text-center">
              <div class="badge-top mb--30">
                <span class="rbt-badge">Histudy Badge</span>
              </div>
              <h1 class="title">
                Hey! Build Your <span class="theme-gradient">Life</span
                >{{ " " }}
                <strong>With John Lee</strong>
              </h1>
              <div class="button-group mt--30">
                <nuxt-link
                  class="rbt-btn btn-gradient rbt-marquee-btn"
                  to="/login"
                >
                  <span data-text="Get Started Today"> Get Started Today </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="about-style-2 rbt-section-gapBottom container">
    <AboutFive />
  </div>

  <div class="rbt-service-area bg-color-white rbt-section-gapBottom">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">
              <span class="theme-gradient">Courses</span> Category
            </h2>
            <p class="description has-medium-font-size mt--20">
              Learning new technology, data sience, university, communicate to
              global world and build a bright future with our histudy.
            </p>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <CategoryEight />
      </div>
    </div>
  </div>

  <div class="rbt-callto-action-area">
    <div
      class="rbt-callto-action rbt-cta-default style-4 variation-2 bg-gradient-6 mt--75"
    >
      <div class="container">
        <div
          class="row align-items-center content-wrapper row--30 mt_dec--30 position-relative"
        >
          <div class="col-lg-8 mt--30 offset-lg-3">
            <div class="inner">
              <div class="content text-left">
                <h2 class="title">
                  Ready to start creating a Educational Website?
                </h2>
                <div class="call-to-btn text-start mt--30">
                  <a class="rbt-btn btn-gradient hover-icon-reverse" href="#">
                    <span class="icon-reverse-wrapper">
                      <span class="btn-text">Purchase Histudy</span>
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
          <div class="thumbnail">
            <nuxt-img
              class="w-100"
              src="/images/shape/cta-4.png"
              alt="Shape Images"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-course-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">
              <span class="theme-gradient">New</span> Online Courses
            </h2>
            <p class="description has-medium-font-size mt--20">
              Learning new technology, data sience, university, communicate to
              global world and build a bright future with our histudy.
            </p>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <div
          v-if="CourseDetails"
          v-for="(data, index) in getAllCourse.slice(0, 3)"
          :key="index"
          class="col-lg-4 col-md-6 col-12"
        >
          <div class="rbt-card variation-01 rbt-hover">
            <div class="rbt-card-img">
              <nuxt-link :to="`/course-details/${data.id}`">
                <nuxt-img
                  :src="data.courseImg"
                  width="355"
                  height="244"
                  alt="Card image"
                />
                <div v-if="data.offPrice > 0" class="rbt-badge-3 bg-white">
                  <span>-{{ data.offPrice }}%</span>
                  <span>Off</span>
                </div>
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <ul class="rbt-meta">
                <li><i class="feather-book"></i>{{ data.lesson }} Lessons</li>
                <li>
                  <i class="feather-users"></i>{{ data.student }} Students
                </li>
              </ul>
              <h4 class="rbt-card-title">
                <nuxt-link :to="`/course-details/${data.id}`">{{
                  data.courseTitle
                }}</nuxt-link>
              </h4>
              <p class="rbt-card-text">{{ data.desc }}</p>
              <div class="rbt-review">
                <div class="rating">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i
                  ><i class="fas fa-star"></i><i class="fas fa-star"></i
                  ><i class="fas fa-star"></i>
                </div>
                <span class="rating-count">({{ data.review }} Reviews)</span>
              </div>
              <div class="rbt-card-bottom">
                <div class="rbt-price">
                  <span class="current-price">${{ data.price }}</span>
                  <span class="off-price">${{ data.offPrice }}</span>
                </div>
                <nuxt-link
                  class="rbt-btn-link"
                  :to="`/course-details/${data.id}`"
                  >Learn More<i class="feather-arrow-right"></i
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-counterup-area bg-gradient-6 rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">
              <span class="theme-gradient">Why</span> Choose My Courses
            </h2>
            <p class="description has-medium-font-size mt--20">
              Learning new technology, data sience, university, communicate to
              global world and build a bright future with our histudy.
            </p>
          </div>
        </div>
      </div>
      <CounterSix :head="false" />
    </div>
  </div>

  <div class="rbt-pricing-area bg-color-white rbt-section-gapTop">
    <div class="container">
      <div class="row g-5 mb--60">
        <div class="col-12">
          <div class="section-title text-center">
            <h2 class="title">
              <span class="theme-gradient">My</span> Courses Plan
            </h2>
            <p class="description has-medium-font-size mt--20">
              Learning new technology, data sience, university, communicate to
              global world and build a bright future with our histudy.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <PricingFive />
      </div>
    </div>
  </div>

  <div class="rbt-testimonial-area bg-color-white ptb--100 overflow-hidden">
    <div class="container-fluid">
      <div class="row g-5 align-items-center">
        <div class="col-xl-3">
          <div class="section-title pl--100 pl_sm--30">
            <h2 class="title">
              What My Learners <span class="theme-gradient">Say</span>
            </h2>
            <p class="description mt--20">
              Learning communicate to global world and build a bright future
              with our histudy.
            </p>
            <div class="veiw-more-btn mt--20">
              <a
                class="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                href="#"
              >
                <span data-text="Learn More">Learn More</span>
              </a>
            </div>
          </div>
        </div>
        <TestimonialSix />
      </div>
    </div>
  </div>

  <div class="rbt-contact-me bg-color-white rbt-section-gapBottom">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">
              <span class="theme-gradient">Contact</span> With Me
            </h2>
            <p class="description has-medium-font-size mt--20">
              Learning new technology, data sience, university, communicate to
              global world and build a bright future with our histudy.
            </p>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <InstructorForm />
      </div>
    </div>
  </div>

  <div class="rbt-newsletter-area bg-gradient-6 ptb--50">
    <NewsletterThree />
  </div>
</template>

<script setup>
import AboutFive from "../Abouts/About-Five.vue";
import CategoryEight from "../Category/CategoryEight";

import CourseDetails from "../../data/course-details/courseData.json";

import CounterSix from "../Counters/Counter-Six.vue";
import PricingFive from "../Pricing/Pricing-Five";
import TestimonialSix from "../Testimonials/Testimonial-Six";
import InstructorForm from "./InstructorForm";
import NewsletterThree from "../Newsletters/Newsletter-Three.vue";
let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));
</script>

<style lang="scss" scoped></style>
