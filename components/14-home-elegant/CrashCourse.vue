<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="section-title text-center mb--60">
        <h2 class="title">Special Crash Course.</h2>
        <p class="description mt--30">
          Far far away, behind the word mountains, far from the countries
          Vokalia and <br />
          Consonantia, there live the blind texts.
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <div class="row g-5">
        <CardSix
          parentClass="col-lg-6 col-xl-4 col-md-6 col-12"
          childClass="rbt-card variation-01 rbt-hover elegant-course"
          types="special"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardSix from "../Cards/Card-Six.vue";
</script>

<style lang="scss" scoped></style>
