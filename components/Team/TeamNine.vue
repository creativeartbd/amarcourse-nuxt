<template>
  <div class="container">
    <TeamHead title="Team (Carousel Style)." desc="Awesome Carousel Style." />

    <div class="row">
      <div class="col-lg-12">
        <Swiper
          class="swiper team-slide-activation-2 rbt-dot-bottom-center ptb--50"
          :modules="[Pagination]"
          :loop="true"
          :spaceBetween="30"
          :slides-per-view="1"
          :pagination="{ el: '.rbt-swiper-pagination', clickable: true }"
          :breakpoints="{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }"
        >
          <SwiperSlide
            v-for="(data, index) in slicedTeamData"
            :key="index"
            class="swiper-wrapper mb-0"
          >
            <div
              v-for="(item, innerIndex) in data.details"
              :key="innerIndex"
              class="swiper-slide"
            >
              <div class="rbt-team team-style-default style-three rbt-hover">
                <div class="inner">
                  <div class="thumbnail">
                    <nuxt-img
                      :width="415"
                      :height="555"
                      :src="item.img"
                      alt="Corporate Template"
                    />
                  </div>
                  <div class="content">
                    <h2 class="title">{{ item.name }}</h2>
                    <h6 class="subtitle theme-gradient">{{ item.type }}</h6>
                    <span class="team-form">
                      <i class="feather-map-pin"></i>
                      <span class="location">{{ item.location }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div class="rbt-swiper-pagination" style="bottom: 0"></div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import TeamData from "../../data/elements/team.json";
import TeamHead from "./TeamHead.vue";

const slicedTeamData = ref(TeamData?.team.slice(0, 7) || []);
</script>
