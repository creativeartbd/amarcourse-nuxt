<template>
  <div
    class="slider-area rbt-banner-5 height-750 bg_image bg_image--3"
    data-gradient-overlay="7"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner text-center">
            <h1 class="title display-one">
              Start Your
              <span>Career &amp; </span>
              <span>Pursue</span> Your Passion.
            </h1>
            <p class="description">
              We help our clients succeed by creating brand identities, digital
              experiences, and print materials.
            </p>
            <div class="rbt-button-group">
              <nuxt-link
                class="rbt-btn btn-white hover-icon-reverse"
                to="/pages/event-grid"
              >
                <div class="icon-reverse-wrapper">
                  <span class="btn-text">View Our Program</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </div>
              </nuxt-link>
              <nuxt-link
                class="rbt-btn btn-border hover-icon-reverse color-white"
                to="/contact"
              >
                <div class="icon-reverse-wrapper">
                  <span class="btn-text">Contact Us</span>
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
      </div>
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <div class="container">
      <AboutThree />
    </div>
  </div>

  <div class="rbt-advance-tab-area bg-gradient-2 rbt-section-gapTop">
    <div class="container">
      <div class="row mb--40">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity">
              University Status
            </span>
            <h2 class="title">University Overview.</h2>
          </div>
        </div>
      </div>
      <AdvanceTabFour :head="false" />
    </div>
  </div>

  <div class="rbt-counterup-area bg-color-white rbt-section-gapTop">
    <div class="container">
      <CounterSix :head="false" />
    </div>
  </div>

  <div class="rbt-split-area bg-color-white rbt-section-gapTop overflow-hidden">
    <div class="wrapper">
      <div class="rbt-splite-style">
        <div class="split-wrapper">
          <Split />
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <div class="wrapper">
      <div class="container">
        <AboutFour />
      </div>
    </div>
    <div class="wrapper mt--60">
      <div class="container">
        <div class="row g-5">
          <CourseCardThree :course="getAllCourse" />
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-service-area bg-gradient-2 rbt-section-gapTop">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-pink-opacity">ONLINE COURSE</span>
            <h2 class="title">Our Online Course</h2>
          </div>
        </div>
      </div>
      <ServiceThree :head="false" />
    </div>
  </div>

  <div class="rbt-service-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--60 g-5 align-items-end">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title text-start">
            <h4 class="title">How to Apply</h4>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="read-more-btn text-start text-md-end">
            <a class="rbt-moderbt-btn" href="#">
              <span class="moderbt-btn-text">View All Requirements</span>
              <i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <ServiceTwelve :head="false" />
    </div>
  </div>

  <div class="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
    <CallToActionSix />
  </div>

  <div
    class="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap"
  >
    <Course title="Tuition & Fees" tag="COURSE PRICING" />
  </div>

  <div class="rbt-rbt-blog-area rbt-section-gapTop bg-color-white">
    <div class="container">
      <div class="row mb--55 g-5 align-items-end">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title text-start">
            <span class="subtitle bg-secondary-opacity">Latest News</span>
            <h2 class="title">Have a look on our news</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="read-more-btn text-start text-md-end">
            <nuxt-link class="rbt-moderbt-btn" to="/blog-list">
              <span class="moderbt-btn-text">View All News</span>
              <i class="feather-arrow-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <div
          v-for="(data, index) in CourseDetails.courseDetails.slice(0, 3)"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12 col-12"
        >
          <div class="rbt-card variation-02 rbt-hover">
            <div class="rbt-card-img">
              <nuxt-link :to="`/course-details/${data.id}`">
                <nuxt-img
                  :src="data.courseImg"
                  width="415"
                  height="246"
                  alt="Card image"
                />
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <h5 class="rbt-card-title">
                <nuxt-link :to="`/course-details/${data.id}`">
                  {{ data.courseTitle }}
                </nuxt-link>
              </h5>
              <p class="rbt-card-text">{{ data.desc.substring(0, 38) }}...</p>
              <div class="rbt-card-bottom">
                <nuxt-link
                  class="transparent-button"
                  :to="`/course-details/${data.id}`"
                >
                  Learn More
                  <i>
                    <svg
                      width="17"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fill-rule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                        <path
                          stroke-linecap="square"
                          d="M.663 5.572h14.594"
                        ></path>
                      </g>
                    </svg>
                  </i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-callto-action-area rbt-section-gapTop">
    <div class="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
      <CallToActionFour
        btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round"
      />
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";
import AboutThree from "../Abouts/About-Three.vue";
import AdvanceTabFour from "../AdvanceTab/AdvanceTab-Four";
import CounterSix from "../Counters/Counter-Six";
import Split from "../Split/Split";
import AboutFour from "../Abouts/About-Four.vue";

import CourseDetails from "../../data/course-details/courseData.json";
import CourseCardThree from "../Category/Filter/CourseCard-Three";
import ServiceThree from "../Services/Service-Three.vue";
import ServiceTwelve from "../Services/Service-Twelve";
import CallToActionSix from "../Call-To-Action/CallToAction-Six";
import Course from "../Accordions/Course";
import CallToActionFour from "../Call-To-Action/CallToAction-Four";

let getAllCourse = JSON.parse(
  JSON.stringify(CourseDetails.courseDetails.slice(0, 6))
);
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
