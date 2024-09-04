<template>
  <Swiper
    class="swiper-wrapper"
    :effect="swiperEffect"
    :modules="[EffectCards, Pagination]"
    :grabCursor="true"
    :pagination="swiperPagination"
  >
    <SwiperSlide
      v-for="(data, index) in slicedData"
      :key="index"
      class="swiper-slide"
    >
      <div class="rbt-card variation-01 rbt-hover">
        <div class="rbt-card-img">
          <nuxt-link :to="`/course-details/${data.id}`">
            <nuxt-img :src="data.courseImg" alt="Card image" />
            <div class="rbt-badge-3 bg-white">
              <span>-{{ data.discount }}%</span>
              <span>Off</span>
            </div>
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <ul class="rbt-meta">
            <li>
              <i class="feather-book"></i>
              {{ data.lesson }} Lessons
            </li>
            <li>
              <i class="feather-users"></i>
              {{ data.student }} Students
            </li>
          </ul>
          <h4 class="rbt-card-title">
            <nuxt-link :to="`/course-details/${data.id}`">{{
              data.courseTitle
            }}</nuxt-link>
          </h4>
          <p class="rbt-card-text">{{ data.desc.substring(0, 100) }}</p>
          <div class="rbt-review">
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <span class="rating-count">({{ data.review }} Reviews)</span>
          </div>
          <div class="rbt-card-bottom">
            <div class="rbt-price">
              <span class="current-price">${{ data.price }}</span>
              <span class="off-price">${{ data.offPrice }}</span>
            </div>
            <nuxt-link class="rbt-btn-link" :to="`/course-details/${data.id}`"
              >Learn More<i class="feather-arrow-right"></i
            ></nuxt-link>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <div class="rbt-swiper-pagination"></div>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards, Pagination } from "swiper/modules";
import MainDemoData from "../../../data/course-details/courseData.json";

const props = defineProps({
  start: Number,
  end: Number,
});

const swiperEffect = "cards";
const swiperPagination = {
  el: ".rbt-swiper-pagination",
  clickable: true,
};

const slicedData = MainDemoData.courseDetails?.slice(props.start, props.end);
</script>
