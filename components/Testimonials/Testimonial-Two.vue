<template>
  <Scroll
    :testimonial="TestimonialData"
    :testimonialData="TestimonialData.testimonialTwo"
  />
</template>

<script setup>
import TestimonialData from "../../data/elements/testimonial.json";
import Scroll from "./Testimonial-Scroll/Scroll.vue";
</script>

<style lang="scss" scoped></style>
