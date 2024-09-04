<template>
  <div
    class="rbt-banner-area rbt-banner-3 header-transperent-spacer"
    :style="{ paddingTop: '80px' }"
  >
    <div class="wrapper">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-7 order-2 order-lg-1">
            <div class="banner-content">
              <div class="inner">
                <div class="section-title text-start">
                  <span class="subtitle bg-pink-opacity">
                    THE BEST THEME FOR
                  </span>
                </div>
                <h1 class="title">
                  Online Learning <br />
                  Managemnt System
                </h1>
                <p class="description">
                  We are experienced in educationl platform and skilled
                  strategies for the success of our online learning.
                </p>
                <div class="rating mb--20">
                  <a href="#">
                    <i class="fa fa-star"></i>
                  </a>
                  <a class="px-1" href="#">
                    <i class="fa fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-star"></i>
                  </a>
                  <a class="px-1" href="#">
                    <i class="fa fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-star"></i>
                  </a>
                </div>
                <div class="rbt-like-total">
                  <div class="profile-share">
                    <a
                      href="#"
                      class="avatar"
                      data-tooltip="Rafi Dev"
                      tabIndex="0"
                    >
                      <nuxt-img
                        src="/images/testimonial/client-03.png"
                        alt="education"
                      />
                    </a>
                    <a href="#" class="avatar" data-tooltip="Mark" tabIndex="0">
                      <nuxt-img
                        src="/images/testimonial/client-04.png"
                        alt="education"
                      />
                    </a>
                    <a
                      href="#"
                      class="avatar"
                      data-tooltip="Jordan"
                      tabIndex="0"
                    >
                      <nuxt-img
                        src="/images/testimonial/client-06.png"
                        alt="education"
                      />
                    </a>
                    <div class="more-author-text">
                      <h5 class="total-join-students">
                        Join Over 3000+ Students
                      </h5>
                      <p class="subtitle">Have a new ideas every week.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 order-1 order-lg-2">
            <OnlineSchoolForm />
          </div>
        </div>
      </div>
    </div>
    <div class="shape-wrapper">
      <div class="left-shape">
        <nuxt-img
          :width="1235"
          :height="808"
          src="/images/banner/right-shape.png"
          alt="Banner Images"
        />
      </div>
      <div class="top-shape">
        <nuxt-img
          :width="1163"
          :height="163"
          src="/images/banner/top-shape.png"
          alt="Banner Images"
        />
      </div>

      <div class="track linearAutoplay">
        <Swiper
          style="
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: -1;
            max-width: 100%;
          "
          :loop="true"
          :slides-per-view="1"
          :space-between="90"
          :modules="[Autoplay]"
          :autoplay="{
            delay: 0,
          }"
          :speed="8000"
          :autoplay-time="1"
        >
          <SwiperSlide v-for="(elm, i) in 6" :key="i">
            <div
              class="textbg"
              :style="{
                backgroundImage: 'url(/images/banner/histudy-text.png)',
              }"
            >
              <span style="opacity: 0">.</span>
            </div></SwiperSlide
          >
        </Swiper>
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-primary-opacity">Course Category</span>
            <h2 class="title">
              Let the journey of organizing <br />
              your own learning begin
            </h2>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategoryThree />
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="read-more-btn text-center mt--40">
            <nuxt-link
              class="rbt-btn btn-border-gradient hover-icon-reverse radius-round btn-md"
              to="/elements/categories"
            >
              <div class="icon-reverse-wrapper">
                <span class="btn-text">VIEW ALL CATEGORIES</span>
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

  <div class="rbt-course-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row mb--60 g-5 align-items-end">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title text-start">
            <span class="subtitle bg-primary-opacity">Live Course</span>
            <h2 class="title">Special live course</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="read-more-btn text-start text-md-end">
            <nuxt-link
              class="rbt-btn btn-gradient hover-icon-reverse radius-round"
              to="/course-card-3"
            >
              <div class="icon-reverse-wrapper">
                <span class="btn-text">VIEW ALL COURSES</span>
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
      <div class="row g-5">
        <Card
          col="col-lg-4 col-md-6 col-sm-6 col-12"
          mt="mt--30"
          :start="0"
          :end="3"
          :isDesc="true"
          :isUser="true"
        />
      </div>
    </div>
  </div>

  <div class="service-wrapper bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-pink-opacity">Histudy Feature</span>
            <h2 class="title">
              Check out Histudy&apos;s features <br />
              to win any exam
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ServiceNine :head="false" />
        </div>
      </div>
    </div>
  </div>

  <div
    class="rbt-counterup-area bg_image bg_image_fixed bg_image--18 ptb--170 ptb_md--50 ptb_sm--50 bg-black-overlay"
    data-black-overlay="1"
  >
    <CounterFive />
  </div>

  <div class="rbt-service-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity">
              Exam Preparation
            </span>
            <h2 class="title">Annual Exam Preparation</h2>
          </div>
        </div>
      </div>
      <ServiceTen />
    </div>
  </div>

  <div class="rbt-course-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity">Courses</span>
            <h2 class="title">Histudy All Courses</h2>
          </div>
        </div>
      </div>
      <CourseSix />
    </div>
  </div>

  <div class="rbt-events-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--60 g-5 align-items-end">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title text-start">
            <span class="subtitle bg-primary-opacity">Our Events</span>
            <h2 class="title">Histudy Events</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="read-more-btn text-start text-md-end">
            <nuxt-link
              class="rbt-btn btn-gradient hover-icon-reverse radius-round"
              to="/pages/event-list"
            >
              <div class="icon-reverse-wrapper">
                <span class="btn-text">VIEW ALL EVENTS</span>
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
      <Events
        :start="0"
        :end="4"
        :isPagination="false"
        parentClass="card-list-2 event-list-card"
        childClass="col-lg-6 col-md-6 col-12"
        :getEvents="EventData"
      />
    </div>
  </div>

  <div class="rbt-team-area bg-gradient-8 rbt-section-gap">
    <TeamTen />
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
    <TestimonialTwo />
  </div>

  <div class="rbt-rbt-blog-area bg-color-white rbt-section-gapBottom">
    <div class="container">
      <div class="row mb--30 g-5 align-items-end">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title text-start">
            <span class="subtitle bg-primary-opacity">Our Blog</span>
            <h2 class="title">Histudy Blog</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="read-more-btn text-start text-md-end">
            <nuxt-link
              class="rbt-btn btn-gradient hover-icon-reverse radius-round"
              to="/blog-list"
            >
              <div class="icon-reverse-wrapper">
                <span class="btn-text">VIEW ALL POST</span>
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
    class="rbt-call-to-action-area rbt-section-gap bg-gradient-6 rbt-call-to-action-5"
  >
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <CallToActionFive />
          </div>
        </div>
      </div>
    </div>
    <div class="shape-images">
      <nuxt-img src="/images/icons/three-shape.png" alt="Shape Images" />
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";
import { Vue3Marquee } from "vue3-marquee";
import CallToActionFive from "../Call-To-Action/CallToAction-Five";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top.vue";

import BlogData from "../../data/blog/blog.json";
import EventData from "../../data/events.json";

import TestimonialTwo from "../Testimonials/Testimonial-Two";
import TeamTen from "../Team/TeamTen";
import Events from "../Events/Events.vue";
import ServiceTen from "../Services/Service-Ten";
import CounterFive from "../Counters/Counter-Five";
import ServiceNine from "../Services/Service-Nine";
import Card from "../Cards/Card.vue";
import CategoryThree from "../Category/CategoryThree";

import OnlineSchoolForm from "./OnlineSchoolForm";
import CourseSix from "../Category/Filter/Course-Six";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>
<style lang="css">
.textbg {
  /* background-image: url(/_next/static/media/histudy-text.de166f1e.png); */
  background-repeat: repeat-x;
  background-size: auto;
  height: 206px;
  width: 100%;
  max-height: 100%;
}

.linearAutoplay .swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
