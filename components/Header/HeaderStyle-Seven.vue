<template>
  <header class="rbt-header rbt-header-7 rbt-transparent-header">
    <div class="rbt-sticky-placeholder"></div>
    <HeaderTopTwo
      gapSpaceBetween="bg-not-transparent bg-gradient-7 color-white"
      container="container"
    />

    <HeaderTwo
      :headerSticky="headerSticky"
      transparent="bg-color-white color-white-variation header-sticky rbt-border-bottom-light"
      container="container-fluid"
      gapSpaceBetween=""
      navigationEnd="rbt-navigation-end"
      btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
      btnText="Join Now"
    />
  </header>
</template>

<script setup>
import HeaderTopTwo from "./Header-Top/HeaderTop-Two";
import HeaderTwo from "./Headers/Header-Two";
defineProps(["headerSticky"]);
</script>

<style lang="scss" scoped></style>
