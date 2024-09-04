<template>
  <header class="rbt-header rbt-header-10">
    <HeaderTopBar
      v-if="isMatchingPath(['/01-main-demo', '/16-udemy-affiliate'])"
    />
    <HeaderTopEight
      v-else
      bg-color="bg-not-transparent bg-color-darker"
      gap-space-between="header-space-betwween"
      container="container-fluid"
      flex-direction=""
      btn-class="rbt-switch-btn btn-gradient btn-xs"
      btn-text="Call us now"
    />
    <HeaderEight
      :header-sticky="headerSticky"
      sticky="header-sticky"
      container="container-fluid"
      gap-space-between="header-space-betwween"
      navigation-end="rbt-navigation-start"
    />
  </header>
</template>

<script setup>
import HeaderTopEight from "./Header-Top/HeaderTop-Eight.vue";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar.vue";
import HeaderEight from "./Headers/Header-Eight.vue";

defineProps(["headerSticky"]);
const route = useRoute();

const pathName = route.path;

const isMatchingPath = (paths) => {
  return paths.includes(pathName);
};
</script>
