<template>
  <div class="rbt-image-gallery-wrapper">
    <Swiper
      class="swiper modern-course-carousel-activation rbt-arrow-between"
      :modules="[Navigation]"
      :loop="true"
      :navigation="{
        nextEl: '.rbt-arrow-left',
        prevEl: '.rbt-arrow-right',
      }"
      :slides-per-view="1"
    >
      <SwiperSlide class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="thumbnail mt--0">
            <nuxt-img src="/images/course/single-course-07.jpg" alt="Image" />
          </div>
        </div> </SwiperSlide
      >{{ " " }}
      <SwiperSlide class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="thumbnail mt--0">
            <nuxt-img src="/images/course/single-course-08.jpg" alt="Image" />
          </div>
        </div> </SwiperSlide
      >{{ " " }}
      <SwiperSlide class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="thumbnail mt--0">
            <nuxt-img src="/images/course/single-course-09.jpg" alt="Image" />
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
</script>

<style lang="scss" scoped></style>
