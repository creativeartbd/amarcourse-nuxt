<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(data, index) in Teacher.becomeATeacher"
        class="col-lg-12"
        :key="index"
      >
        <Swiper
          :modules="[Navigation]"
          :loop="true"
          :navigation="{
            nextEl: '.rbt-arrow-left',
            prevEl: '.rbt-arrow-right',
          }"
          :slides-per-view="1"
          class="swiper rbt-gif-banner-area rbt-arrow-between"
        >
          <SwiperSlide
            v-for="(item, innerIndex) in data.gallery"
            class="swiper-wrapper"
            :key="innerIndex"
          >
            <div class="swiper-slide">
              <div class="thumbnail">
                <a href="#">
                  <nuxt-img
                    class="rbt-radius w-100"
                    :src="item.img"
                    alt="Banner Images"
                  />
                </a>
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
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import { Navigation } from "swiper/modules";

import Teacher from "../../data/pages/become-A-Teacher.json";
</script>

<style lang="scss" scoped></style>
