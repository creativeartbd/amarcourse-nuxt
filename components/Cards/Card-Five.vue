<template>
  <div
    v-for="(data, index) in cardData"
    :key="index"
    class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
    data-sal-delay="150"
    data-sal="'slide-up'"
    data-sal-duration="800"
  >
    <div class="rbt-card variation-03 rbt-hover">
      <div class="rbt-card-img">
        <nuxt-link
          class="thumbnail-link"
          :to="`/course-details/${data.id ? data.id : 1}`"
        >
          <nuxt-img :src="data.img" alt="Card image" />
          <span class="rbt-btn btn-white icon-hover">
            <span class="btn-text">Read More</span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
          </span>
        </nuxt-link>
      </div>
      <div class="rbt-card-body">
        <h5 class="rbt-card-title">
          <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">{{
            data.title
          }}</nuxt-link>
        </h5>
        <div class="rbt-card-bottom">
          <nuxt-link
            class="transparent-button"
            :to="`/course-details/${data.id ? data.id : 1}`"
          >
            <i>
              <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#27374D" fill="none" fillRule="evenodd">
                  <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                  <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                </g>
              </svg>
            </i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";

import CardData from "@/data/elements/card";

const cardData = CardData.cardFive;

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style scoped>
/* Your component-specific styles */
</style>
