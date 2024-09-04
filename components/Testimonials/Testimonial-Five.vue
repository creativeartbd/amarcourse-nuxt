<template>
  <div
    v-for="(data, index) in TestimonialData.testimonialThree"
    class="container"
    :key="index"
  >
    <div class="row">
      <div class="col-lg-12 mb--60">
        <div class="section-title text-center">
          <span class="subtitle bg-primary-opacity">
            {{ data.tag }}
          </span>
          <h2 class="title">{{ data.title }}</h2>

          <p v-if="isDesc" class="description mt--20">{{ data.desc }}</p>
        </div>
      </div>
    </div>

    <Swiper
      v-for="(parent, parentIndex) in TestimonialData.testimonialTwo"
      class="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30"
      :slides-per-view="1"
      :key="parentIndex"
      :modules="[Navigation]"
      :navigation="{
        nextEl: '.rbt-arrow-left',
        prevEl: '.rbt-arrow-right',
      }"
      :breakpoints="{
        575: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 3,
        },
      }"
    >
      <SwiperSlide
        v-for="(data, index) in parent.left"
        class="swiper-wrapper"
        :key="index"
      >
        <div class="swiper-slide">
          <div class="single-slide">
            <div class="rbt-testimonial-box">
              <div class="inner bg-no-shadow bg-color-primary-opacity">
                <div class="clint-info-wrapper">
                  <div class="thumb">
                    <nuxt-img :src="data.img" alt="Clint Images" />
                  </div>
                  <div class="client-info">
                    <h5 class="title">{{ data.title }}</h5>
                    <span>
                      {{ data.position }} <i>{{ data.company }}</i>
                    </span>
                  </div>
                </div>
                <div class="description">
                  <p class="subtitle-3">{{ data.desc }}</p>
                  <div class="rating mt--20">
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
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
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
defineProps(["isDesc"]);
import TestimonialData from "../../data/elements/testimonial.json";
</script>

<style lang="scss" scoped></style>
