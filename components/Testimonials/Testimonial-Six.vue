<template>
  <div class="col-xl-9">
    <div class="overflow-hidden">
      <Scroll
        :testimonial="TestimonialData"
        :testimonialData="TestimonialData.testimonialTwo"
      />
    </div>
  </div>
</template>

<script setup>
import TestimonialData from "../../data/elements/testimonial.json";
import Scroll from "./Testimonial-Scroll/Scroll.vue";
defineProps(["tag"]);
</script>

<style lang="scss" scoped></style>
