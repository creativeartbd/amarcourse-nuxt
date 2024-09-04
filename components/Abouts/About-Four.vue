<template>
  <div
    v-for="(data, index) in aboutData.aboutFour"
    :key="index"
    class="row g-5 align-items-start"
  >
    <div class="col-lg-4">
      <div class="content" data-sal="slide-up" data-sal-duration="700">
        <h2 class="title">{{ data.title }}</h2>
      </div>
    </div>
    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="700">
      <p>{{ data.desc }}</p>
    </div>
    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="700">
      <p>{{ data.descTwo }}</p>
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
