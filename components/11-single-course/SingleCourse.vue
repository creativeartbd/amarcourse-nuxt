<template>
  <div
    class="slider-area rbt-banner-9 bg-gradient-2 header-transperent-spacer"
    :style="{ paddingTop: '80px' }"
  >
    <div class="container">
      <SingleCourseBanner />
    </div>
  </div>

  <div
    class="rbt-feature-area rbt-single-course-features rbt-section-gapBottom rbt-feature-box"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="row row--30 gy-5 align-items-center">
            <div class="col-lg-6 col-xl-5">
              <div class="thumbnail rbt-shadow-box">
                <nuxt-img
                  v-for="(data, index) in SingleCourseData.courseFeatureBox"
                  :key="index"
                  class="w-100 radius-10"
                  :src="data.img"
                  width="357"
                  height="500"
                  alt="Card image"
                />
              </div>
            </div>
            <div
              class="col-lg-6 col-xl-7"
              v-for="(data, index) in SingleCourseData.courseFeatureBox"
              :key="index"
            >
              <div class="section-title">
                <h2 class="title">{{ data.title }}</h2>
                <p class="b1 mt--15">{{ data.desc }}</p>
              </div>

              <div class="section-title subtitle">
                <h5 class="title">Whats Material Includes?</h5>
              </div>

              <div class="row g-5">
                <div class="col-lg-6">
                  <ul class="rbt-list-style-1">
                    <li
                      v-for="(innerData, innerIndex) in data.featureList.slice(
                        0,
                        5
                      )"
                      :key="innerIndex"
                    >
                      <i class="feather-check"></i>
                      {{ innerData.text }}
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="rbt-list-style-1">
                    <li
                      v-for="(innerData, innerIndex) in data.featureList.slice(
                        5,
                        10
                      )"
                      :key="innerIndex"
                    >
                      <i class="feather-check"></i>
                      {{ innerData.text }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="read-more-btn mt--40">
                <nuxt-link to="/pages/about-us-01" class="rbt-moderbt-btn">
                  <span class="moderbt-btn-text">Learn More About Us</span>
                  <i class="feather-arrow-right"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-course-banner-area rbt-section-gap bg-color-darker">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner">
            <div class="section-title text-center mb--60">
              <h2 class="title color-white">
                <span class="theme-gradient">Complete guideline</span> from
                absolute <br />
                beginners to getting hired.
              </h2>
              <div class="rbt-button-group mt--30">
                <nuxt-link
                  to="/course-filter-one-toggle"
                  class="rbt-btn btn-gradient hover-icon-reverse"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">Explore Course</span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                  </span>
                </nuxt-link>

                <a
                  class="rbt-btn hover-icon-reverse btn-border color-white-off"
                  href="#"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">Hired List</span>
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

            <div class="row g-5">
              <SingleCourseProp
                :courseData="SingleCourseData.certificate"
                :image="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-course-content rbt-section-gap bg-color-extra2">
    <div class="container">
      <div class="row align-items-end mb--60">
        <div class="col-lg-6 col-md-6">
          <div class="section-title text-start">
            <h2 class="title">Course Content</h2>
            <p class="description has-small-font-size mt--10">
              32 sections • 376 lectures • 27h 8m total length
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="expend-button text-start text-md-end">
            <a class="rbt-btn-link w-700" href="#">
              Expand all sections<i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <CourseLessonProp
        courseImg="/images/course/course-elegant-01.jpg"
        :courseContent="SingleCourseData.courseContent"
      />
    </div>
  </div>

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
    <TestimonialSeven />
  </div>

  <div class="rbt-pricing-area bg-color-white rbt-section-gapBottom">
    <div class="container">
      <div class="row g-5 mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">Plans For This Course</h2>
            <p class="description mt--20">
              See this our three main plans for our histudy courses. It starts
              from here! You can teach yourself what you really like.
            </p>
          </div>
        </div>
      </div>
      <PricingFive />
    </div>
  </div>

  <div class="rbt-author-area bg-gradient-8 rbt-section-gap">
    <div class="container">
      <div class="rbt-instructor">
        <div class="single-course-author">
          <div
            class="media row align-items-center g-5"
            v-for="(data, index) in TeamData.team.slice(0, 1)"
            :key="index"
          >
            <div class="col-lg-3 col-xl-3 offset-xl-2">
              <div class="thumbnail">
                <nuxt-link :href="data.link">
                  <nuxt-img
                    class="radius-10 w-100"
                    :src="data.img"
                    width="304"
                    height="308"
                    alt="Author Images"
                  />
                </nuxt-link>
              </div>
            </div>
            <div class="col-lg-5">
              <div
                class="media-body ml--15"
                v-for="(innerData, i) in data.details"
                :key="i"
              >
                <div class="author-info text-left">
                  <h2 class="title color-white mb--0">{{ innerData.name }}</h2>
                  <span class="b3 color-white">{{ innerData.type }}</span>
                </div>
                <div class="content mt--20">
                  <p class="description color-white">{{ innerData.desc }}</p>
                  <ul
                    class="social-icon color-white social-default transparent-with-border justify-content-start mt--15"
                  >
                    <li>
                      <a href="https://www.facebook.com/">
                        <i class="feather-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i class="feather-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i class="feather-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i class="feather-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-newsletter-area bg-color-white rbt-section-gap">
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
import SingleCourseData from "../../data/pages/11-singleCourse.json";
import TeamData from "../../data/elements/team.json";

import SingleCourseBanner from "./SingleCourseBanner";
import TestimonialSeven from "../Testimonials/Testimonial-Seven.vue";
import PricingFive from "../Pricing/Pricing-Five.vue";
import NewsletterFour from "../Newsletters/Newsletter-Four";
import SingleCourseProp from "./SingleCourseProp";

import CourseLessonProp from "./CourseLessonProp";
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });
});
</script>

<style lang="scss" scoped></style>
./CourseLessonProp.vue./CourseLessonProp.vue
