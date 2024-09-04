<template>
  <Swiper
    class="swiper rbt-banner-activation rbt-slider-animation rbt-arrow-between"
    :modules="[FreeMode, Navigation]"
    :slides-per-view="1"
    :space-between="0"
    :loop="false"
    :auto-height="true"
    :navigation="{
      nextEl: '.rbt-arrow-left',
      prevEl: '.rbt-arrow-right',
      clickable: true,
    }"
  >
    <SwiperSlide class="swiper-slide">
      <div
        class="rbt-banner-area rbt-banner-6 variation-03 bg_image bg_image--17"
        data-gradient-overlay="5"
      >
        <div class="wrapper w-100">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="inner text-center">
                  <div class="section-title">
                    <span class="subtitle bg-white-opacity d-inline-block">
                      BASED ON THE BEST HISTUDY
                    </span>
                  </div>
                  <h1 class="title w-700">
                    Hey! Build Your Career <br />{{ " " }}
                    <strong class="color-white"> With Follow Histudy </strong>
                  </h1>
                  <div class="button-group mt--30">
                    <a class="rbt-btn btn-gradient rbt-marquee-btn" href="#">
                      <span data-text="More About University">
                        More About University
                      </span>
                    </a>
                  </div>
                  <div class="social-share-wrapper mt--40">
                    <ul
                      class="social-icon social-default transparent-with-border"
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
                        <a href="https://www.linkdin.com/">
                          <i class="feather-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span class="follow-us-text">
                      Follow By Facebook, Twitter, Instagram, and Linkedin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide class="swiper-slide">
      <div
        class="rbt-banner-area rbt-banner-6 variation-03 bg_image bg_image--21"
        data-black-overlay="5"
      >
        <div class="wrapper w-100">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="inner text-center">
                  <div class="section-title">
                    <span class="subtitle bg-white-opacity d-inline-block">
                      THE BEST TEMPLATE FOR EDUCATION
                    </span>
                  </div>
                  <h1 class="title w-700">
                    Histudy Starter is a community <br />{{ " " }}
                    <strong class="color-white"> for creative people. </strong>
                  </h1>
                  <div class="button-group mt--30">
                    <a
                      class="rbt-btn btn-gradient rbt-marquee-btn radius-round"
                      href="#"
                    >
                      <span data-text="More About University">
                        More About University
                      </span>
                    </a>
                  </div>
                  <div class="social-share-wrapper mt--40">
                    <ul
                      class="social-icon social-default transparent-with-border"
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
                        <a href="https://www.linkdin.com/">
                          <i class="feather-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span class="follow-us-text">
                      Follow By Facebook, Twitter, Instagram, and Linkedin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide class="swiper-slide">
      <div
        class="rbt-banner-area rbt-banner-6 variation-03 bg_image bg_image--16"
        data-gradient-overlay="5"
      >
        <div class="wrapper w-100">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="inner text-center">
                  <div class="section-title">
                    <span class="subtitle bg-white-opacity d-inline-block">
                      THE BEST TEMPLATE FOR EDUCATION
                    </span>
                  </div>
                  <h1 class="title w-700">
                    Learning keeps you <br />{{ " " }}
                    <strong class="color-white">in the lead</strong>
                  </h1>
                  <div class="button-group mt--30">
                    <a
                      class="rbt-btn btn-gradient rbt-marquee-btn radius-round"
                      href="#"
                    >
                      <span data-text="More About University">
                        More About University
                      </span>
                    </a>
                  </div>
                  <div class="social-share-wrapper mt--40">
                    <ul
                      class="social-icon social-default transparent-with-border"
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
                        <a href="https://www.linkdin.com/">
                          <i class="feather-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span class="follow-us-text">
                      Follow By Facebook, Twitter, Instagram, and Linkedin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

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
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
