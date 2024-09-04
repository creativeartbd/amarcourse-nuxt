<template>
  <div class="container">
    <TeamHead
      v-if="head === undefined"
      title="Team (Carousel Style)."
      desc="Awesome Carousel Style."
    />

    <div class="row row--15">
      <div class="col-lg-12">
        <Swiper
          class="swiper team-slide-activation rbt-arrow-between rbt-dot-bottom-center"
          :modules="[Navigation, Pagination]"
          :loop="true"
          :space-between="30"
          :slides-per-view="1"
          :pagination="{
            el: '.rbt-swiper-pagination',
            clickable: true,
          }"
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
              slidesPerView: 4,
            },
          }"
        >
          <SwiperSlide
            v-for="(data, index) in TeamData.team.slice(0, 8)"
            class="swiper-wrapper"
            :key="index"
          >
            <div
              v-for="(item, innerIndex) in data.details"
              class="swiper-slide"
              :key="innerIndex"
            >
              <div class="team team-style--bottom variation-2">
                <div class="thumbnail">
                  <a href="#">
                    <nuxt-img
                      :width="415"
                      :height="555"
                      :src="item.img"
                      alt="Blog Images"
                    />
                  </a>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="title">
                      <a href="#">{{ item.name }}</a>
                    </h4>
                    <p class="designation">{{ item.type }}</p>
                  </div>
                  <div class="icon-right">
                    <a href="#">
                      <i class="feather-arrow-right"></i>
                    </a>
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

          <div class="rbt-swiper-pagination" :style="{ bottom: '0' }"></div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["head"]);
import { Swiper, SwiperSlide } from "swiper/vue";

import { Navigation, Pagination } from "swiper/modules";

import TeamData from "../../data/elements/team.json";
import TeamHead from "./TeamHead.vue";
</script>

<style lang="scss" scoped></style>
