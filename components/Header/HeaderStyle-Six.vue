<template>
  <header :class="`rbt-header rbt-header-default ${headerType}`">
    <div class="rbt-sticky-placeholder"></div>
    <HeaderTopBar v-if="pathName === '/02-course-school'" />
    <HeaderSix
      sticky="bg-color-white header-sticky"
      gapSpaceBetween=""
      navigationEnd="rbt-navigation-center"
      btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
      btnText="Join Now"
    />
  </header>
</template>

<script setup>
import HeaderSix from "./Headers/Header-Six.vue";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar.vue";
const route = useRoute();

const pathName = route.path;
const props = defineProps(["headerType"]);
</script>
