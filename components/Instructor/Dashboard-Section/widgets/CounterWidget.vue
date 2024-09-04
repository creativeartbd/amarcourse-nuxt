<template>
  <div
    v-if="counterStyle === 'one' || !counterStyle"
    class="rbt-counterup rbt-hover-03 border-bottom-gradient"
  >
    <div class="top-circle-shape" />
    <div class="inner">
      <div v-if="icon" class="rbt-round-icon">
        <nuxt-img :src="icon" alt="Icons Images" />
      </div>

      <div class="content">
        <h3 class="counter">
          <OdometerComponent :number="value" />
        </h3>
        <span class="subtitle">{{ title }}</span>
      </div>
    </div>
  </div>

  <div
    v-if="counterStyle === 'two'"
    :class="`rbt-counterup
    variation-01
    rbt-hover-03
    rbt-border-dashed
    ${styleClass}`"
  >
    <div class="inner">
      <div :class="`rbt-round-icon ${iconClass}`">
        <i :class="icon" />
      </div>
      <div class="content">
        <h3 :class="`counter without-icon ${numberClass}`">
          <OdometerComponent :number="value" />
        </h3>
        <span class="rbt-title-style-2 d-block">{{ title }}</span>
      </div>
    </div>
  </div>

  <div
    v-if="counterStyle === 'three'"
    class="rbt-counterup rbt-hover-03 style-2 text-color-white"
  >
    <div class="inner">
      <div class="content">
        <h3 class="counter color-white">
          <OdometerComponent :number="value" />
        </h3>
        <h5 class="title color-white">{{ title }}</h5>
        <span class="subtitle color-white">{{ subtitle }}</span>
      </div>
    </div>
  </div>

  <div v-if="counterStyle === 'four'" class="rbt-counterup style-2">
    <div class="inner">
      <div class="content">
        <h3 class="counter">
          <OdometerComponent :number="value" />
        </h3>
        <span class="subtitle">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import OdometerComponent from "~/components/Common/OdometerComponent.vue";

// import "odometer/themes/odometer-theme-default.css";
defineProps([
  "counterStyle",
  "icon",
  "title",
  "subtitle",
  "value",
  "styleClass",
  "iconClass",
  "numberClass",
]);
</script>

<style lang="scss" scoped></style>
