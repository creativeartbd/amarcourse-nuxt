<template>
  <div :class="classOne">
    <div class="footer-widget">
      <h5 class="ft-title">{{ title }}</h5>
      <ul class="ft-link">
        <li v-for="(value, innerIndex) in footerType" :key="innerIndex">
          <nuxt-link :to="value.link">{{ value.text }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["classOne", "title", "footerType"]);
</script>
