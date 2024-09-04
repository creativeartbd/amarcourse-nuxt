<template>
  <div
    v-if="serviceData"
    class="container"
    v-for="(data, index) in serviceData.serviceThree"
    :key="index"
  >
    <div v-if="head === undefined" class="row mb--60">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h2 class="title">{{ data.sectionTitle }}</h2>
        </div>
      </div>
    </div>
    <Swiper
      class="swiper service-item-3-activation rbt-arrow-between gutter-swiper-30"
      :slides-per-view="1"
      :modules="[Navigation]"
      :navigation="{
        nextEl: '.rbt-arrow-left',
        prevEl: '.rbt-arrow-right',
      }"
      :breakpoints="{
        480: { slidesPerView: 1 },
        481: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 3 },
      }"
    >
      <SwiperSlide
        class="swiper-wrapper"
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
      >
        <div class="swiper-slide">
          <div class="single-slide">
            <div
              :class="[
                'rbt-service',
                'rbt-service-2',
                'rbt-hover-02',
                {
                  'bg-no-shadow':
                    item.bgOne || item.bgTwo || item.bgThree || item.bgFour,
                  'card-bg-1': item.bgOne,
                  'card-bg-2': item.bgTwo,
                  'card-bg-3': item.bgThree,
                  'card-bg-4': item.bgFour,
                },
              ]"
            >
              <div class="inner">
                <div class="content">
                  <h4 class="title">
                    <a href="#">{{ item.title }}</a>
                  </h4>
                  <p>{{ item.desc }}</p>
                  <a href="#" class="transparent-button">
                    Learn More
                    <i>
                      <svg
                        width="17"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#27374D" fill="none" fill-rule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                          <path
                            stroke-linecap="square"
                            d="M.663 5.572h14.594"
                          />
                        </g>
                      </svg>
                    </i>
                  </a>
                </div>
                <div class="thumbnail w-100">
                  <!-- Use 'img' tag instead of 'Image' component -->
                  <nuxt-img
                    :width="300"
                    :height="400"
                    :src="item.img"
                    class="w-100"
                    alt="Education Images"
                  />
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
import ServiceData from "~/data/elements/service.json";

defineProps(["head"]);
const serviceData = ServiceData;
</script>

<style scoped>
/* Add your scoped styles here */
</style>
