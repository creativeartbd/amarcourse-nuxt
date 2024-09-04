<template>
  <Swiper
    class="swiper event-activation-1 rbt-arrow-between rbt-dot-bottom-center pb--60 icon-bg-primary"
    :slides-per-view="1"
    :space-between="30"
    :pagination="{ el: '.rbt-swiper-pagination', clickable: true }"
    :navigation="{ nextEl: '.rbt-arrow-left', prevEl: '.rbt-arrow-right' }"
    :breakpoints="{
      481: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    }"
    :modules="[Navigation, Pagination]"
  >
    <SwiperSlide
      class="swiper-wrapper"
      v-for="(data, index) in eventData.events"
      :key="index"
    >
      <div class="swiper-slide">
        <div class="single-slide">
          <div class="rbt-card event-grid-card variation-01 rbt-hover">
            <div class="rbt-card-img">
              <nuxt-link :to="`/pages/event-details/${data.id}`">
                <nuxt-img :src="data.img" alt="Card image" />
                <div class="rbt-badge-3 bg-white">
                  <span>{{ data.badgeDate }}</span>
                  <span>{{ data.badgeYear }}</span>
                </div>
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <ul class="rbt-meta">
                <li><i class="feather-map-pin"></i> {{ data.location }}</li>
                <li><i class="feather-clock"></i> {{ data.time }}</li>
              </ul>
              <h4 class="rbt-card-title">
                <nuxt-link :to="`/pages/event-details/${data.id}`">{{
                  data.title
                }}</nuxt-link>
              </h4>
              <div class="read-more-btn">
                <nuxt-link
                  class="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                  :to="`/pages/event-details/${data.id}`"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">Get Ticket</span>
                    <span class="btn-icon"
                      ><i class="feather-arrow-right"></i
                    ></span>
                    <span class="btn-icon"
                      ><i class="feather-arrow-right"></i
                    ></span>
                  </span>
                </nuxt-link>
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

    <div class="rbt-swiper-pagination" style="bottom: 0"></div>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import eventData from "../../data/events.json";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
