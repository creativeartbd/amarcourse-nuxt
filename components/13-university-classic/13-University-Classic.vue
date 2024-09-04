<template>
  <div class="rbt-slider-main-wrapper position-relative">
    <UniversityBanner />
  </div>

  <div class="rbt-video-area bg-color-white rbt-section-gapTop" id="about">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <div class="video-popup-wrapper">
            <nuxt-img
              class="w-100 rbt-radius"
              src="/images/others/video-06.jpg"
              property="true"
              alt="Video Images"
            />
            <a
              class="rbt-btn rounded-player popup-video position-to-top rbtplayer"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span>
                <i class="feather-play"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="inner pl--50 pl_lg--0 pl_md--0 pl_sm--0">
            <div class="section-title text-start">
              <h4 class="title">Build your Career Life.</h4>
              <p class="description mt--30">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div class="rbt-feature-wrapper mt--40">
                <div class="rbt-feature feature-style-1 align-items-center">
                  <div class="icon bg-pink-opacity">
                    <i class="feather-heart"></i>
                  </div>
                  <div class="feature-content">
                    <h6 class="feature-title">Flexible Classes</h6>
                  </div>
                </div>

                <div class="rbt-feature feature-style-1 align-items-center">
                  <div class="icon bg-primary-opacity">
                    <i class="feather-book"></i>
                  </div>
                  <div class="feature-content">
                    <h6 class="feature-title">Learn From Anywhere</h6>
                  </div>
                </div>

                <div class="rbt-feature feature-style-1 align-items-center">
                  <div class="icon bg-coral-opacity">
                    <i class="feather-monitor"></i>
                  </div>
                  <div class="feature-content">
                    <h6 class="feature-title">
                      Experienced Teacher&apos;s service.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-category-area bg-color-white rbt-section-gapTop">
    <ServiceEight :isHead="false" />
  </div>

  <div class="rbt-banner-area rbt-section-gapTop">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Swiper
            class="swiper viral-banner-activation rbt-arrow-between"
            :slides-per-view="1"
            :modules="[Navigation]"
            :navigation="{
              nextEl: '.rbt-arrow-left',
              prevEl: '.rbt-arrow-right',
            }"
          >
            <div class="swiper-wrapper">
              <SwiperSlide class="swiper-slide">
                <div class="thumbnail">
                  <a href="#">
                    <nuxt-img
                      class="rbt-radius w-100"
                      src="/images/banner/hi_1.png"
                      property="true"
                      alt="Banner Images"
                    />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide class="swiper-slide">
                <div class="thumbnail">
                  <a href="#">
                    <nuxt-img
                      class="rbt-radius w-100"
                      src="/images/banner/hi_2.png"
                      property="true"
                      alt="Banner Images"
                    />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide class="swiper-slide">
                <div class="thumbnail">
                  <a href="#">
                    <nuxt-img
                      class="rbt-radius w-100"
                      src="/images/banner/hi_3.png"
                      alt="Banner Images"
                    />
                  </a>
                </div>
              </SwiperSlide>
            </div>
            <div class="rbt-swiper-arrow rbt-arrow-left">
              <div class="custom-overfolow">
                <i class="rbt-icon feather-arrow-left"></i>
                <i class="rbt-icon-top feather-arrow-left"></i>
              </div>
            </div>
            <div class="rbt-swiper-arrow rbt-arrow-right">
              <div class="custom-overfolow">
                <i class="rbt-icon feather-arrow-right"></i>
                <i class="rbt-icon-top feather-arrow-right"></i>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-advance-tab-area rbt-section-gapTop bg-color-white">
    <AdvanceTab
      tag=""
      title="About Us."
      desc=" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    />
  </div>

  <div class="rbt-program-area rbt-section-gapTop bg-color-white" id="program">
    <div class="container">
      <div class="row g-5 align-items-end mb--60">
        <div class="col-lg-6 col-md-12 col-12">
          <div class="section-title text-start">
            <h2 class="title">Our Program</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <div class="load-more-btn text-start text-lg-end">
            <a class="rbt-btn-link" href="#">
              Browse Histudy Program<i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="rbt-category-gallery">
            <div class="thumbnail">
              <a href="#">
                <nuxt-img
                  src="/images/gallery/gallery-03.jpg"
                  property="true"
                  alt="Gallery Images"
                />
                <div class="rbt-bg-overlay"></div>
              </a>
              <div class="hover-content">
                <h3 class="title">
                  <a href="#">Vue-Js</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="rbt-category-gallery">
            <div class="thumbnail">
              <a href="#">
                <nuxt-img
                  src="/images/gallery/gallery-01.jpg"
                  property="true"
                  alt="Gallery Images"
                />
                <div class="rbt-bg-overlay"></div>
              </a>
              <div class="hover-content">
                <h3 class="title">
                  <a href="#">React Js</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {{ " " }}
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="rbt-category-gallery">
            <div class="thumbnail">
              <a href="#">
                <nuxt-img
                  src="/images/gallery/gallery-05.jpg"
                  property="true"
                  alt="Gallery Images"
                />
                <div class="rbt-bg-overlay"></div>
              </a>
              <div class="hover-content">
                <h3 class="title">
                  <a href="#">Javascript</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rbt-course-area rbt-section-gapTop bg-color-white" id="course">
    <div class="container">
      <div class="row g-5 align-items-end mb--60">
        <div class="col-lg-6 col-md-12 col-12">
          <div class="section-title text-start">
            <h2 class="title">Our Online Courses</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <div class="load-more-btn text-start text-lg-end">
            <a class="rbt-btn-link" href="#">
              Browse Histudy Courses<i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <CardThree />
      </div>
    </div>
  </div>

  <div class="rbt-rbt-blog-area rbt-section-gapTop bg-color-white" id="blog">
    <div class="container">
      <div class="row g-5 align-items-end mb--30">
        <div class="col-lg-6 col-md-12 col-12">
          <div class="section-title text-start">
            <h2 class="title">Our Research</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <div class="load-more-btn text-start text-lg-end">
            <nuxt-link class="rbt-btn-link" to="/blog-list">
              Browse Histudy Post<i class="feather-arrow-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
      <BlogGrid :isPagination="false" :top="false" :start="0" :end="3" />
    </div>
  </div>

  <div class="rbt-event-area bg-color-white rbt-section-gapTop">
    <div class="container">
      <div class="row g-5 align-items-end mb--60">
        <div class="col-lg-6 col-md-12 col-12">
          <div class="section-title text-start">
            <h2 class="title">Our Events</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <div class="load-more-btn text-start text-lg-end">
            <a class="rbt-btn-link" href="#">
              University Upcoming Events
              <i class="feather-arrow-right"></i>
            </a>
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
  <div
    class="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden"
    id="testimonial"
  >
    <div class="container">
      <Course title="University Tuition & Fees" />
    </div>
  </div>

  <div
    class="rbt-testimonial-area bg-color-light rbt-section-gap overflow-hidden"
  >
    <div class="wrapper mb--60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle bg-primary-opacity">
                EDUCATION FOR EVERYONE
              </span>
              <h2 class="title">
                People like histudy education. <br />
                No joking - Parents Review Here!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Testimonial />
  </div>
  <div class="rbt-gallery-area">
    <Gallery />
  </div>
  <div class="rbt-brand-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row align-items-center g-5">
        <BrandOne />
      </div>
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import EventData from "../../data/events.json";
import UniversityBanner from "./UniversityBanner";
import ServiceEight from "../Services/Service-Eight";
import AdvanceTab from "../AdvanceTab/AdvanceTab";
import CardThree from "../Cards/Card-Three";
import BlogGrid from "../Blogs/BlogGrid.vue";
import Events from "../Events/Events.vue";
import Course from "../Accordions/Course.vue";
import Testimonial from "../Testimonials/Testimonial.vue";
import Gallery from "../Gallery/Gallery.vue";
import BrandOne from "../Brand/Brand-One";
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });

  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
../Services/Service-Eight.vue../AdvanceTab/AdvanceTab.vue../Cards/Card-Three.vue../Brand/Brand-One.vue
