<template>
  <header class="rbt-header rbt-header-4">
    <div class="rbt-sticky-placeholder"></div>
    <HeaderTopFour
      bgColor="bg-color-white border-top-bar-primary-color rbt-border-bottom"
      gapSpaceBetween="header-space-betwween"
      container="container-fluid"
      flexDirection=""
      btnClass="rbt-switch-btn btn-gradient btn-xs"
      btnText="Call us now"
    />

    <HeaderFour
      sticky="bg-color-white header-sticky"
      gapSpaceBetween="header-space-betwween"
      container="container-fluid"
      navigationEnd="rbt-navigation-start"
      btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
      btnText="Enroll Now"
    />
  </header>
</template>

<script setup>
import HeaderTopFour from "./Header-Top/HeaderTop-Four";
import HeaderFour from "./Headers/Header-Four";
</script>

<style lang="scss" scoped></style>
