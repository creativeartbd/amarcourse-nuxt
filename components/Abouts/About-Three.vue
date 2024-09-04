<template>
  <div
    v-for="(data, index) in aboutData.aboutThree"
    :key="index"
    class="row g-5 align-items-start"
  >
    <div class="col-lg-6">
      <div class="content">
        <h2 class="title mb--0" data-sal="slide-up" data-sal-duration="700">
          {{ data.title }}
        </h2>
      </div>
    </div>
    <div class="col-lg-6" data-sal="slide-up" data-sal-duration="700">
      <p class="mb--40 mb_sm--20">{{ data.desc }}</p>
      <div class="readmore-btn">
        <nuxt-link class="rbt-moderbt-btn" to="/13-university-classic">
          <span class="moderbt-btn-text">University Overview</span>
          <i class="feather-arrow-right"></i>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutData from "../../data/elements/about.json";

const aboutData = AboutData;
</script>

<style scoped>
/* You can add scoped styles here */
</style>
