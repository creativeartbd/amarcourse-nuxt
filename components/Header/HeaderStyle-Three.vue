<template>
  <header class="rbt-header rbt-header-10">
    <div class="rbt-sticky-placeholder"></div>
    <HeaderTopEight
      bgColor="bg-color-darker rbt-border-bottom"
      gapSpaceBetween="header-space-betwween"
      container="container-fluid"
    />
    <HeaderMidOne
      container="container-fluid"
      gapSpaceBetween="header-space-betwween"
      bgColor="bg-color-white rbt-border-bottom"
    />
    <HeaderTen
      :headerSticky="headerSticky"
      sticky="header-sticky"
      container="container-fluid"
      gapSpaceBetween="header-space-betwween"
      navigationEnd="rbt-navigation-center"
    />
  </header>
</template>

<script setup>
import HeaderTopEight from "./Header-Top/HeaderTop-Eight";
import HeaderMidOne from "./Header-Top/HeaderMid-One";
import HeaderTen from "./Headers/Header-Ten";
defineProps(["headerSticky"]);
</script>

<style lang="scss" scoped></style>
./Header-Top/HeaderMid-One.vue./Headers/Header-Ten.vue
