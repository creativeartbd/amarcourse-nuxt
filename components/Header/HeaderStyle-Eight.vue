<template>
  <header
    class="rbt-header rbt-dark-header-8 rbt-header-8 rbt-transparent-header"
  >
    <div class="rbt-sticky-placeholder"></div>
    <HeaderTopSeven
      gapSpaceBetween="header-space-betwween"
      bgColor="bg-color-transparent"
      flexDirection=""
      btnClass="rbt-switch-btn btn-gradient btn-xs"
      btnText="Call us now"
    />

    <HeaderSix
      sticky="header-sticky"
      gapSpaceBetween=""
      navigationEnd="rbt-navigation-end"
      btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
      btnText="Join Now"
    />
  </header>
</template>

<script setup>
import HeaderSix from "./Headers/Header-Six";
import HeaderTopSeven from "./Header-Top/HeaderTop-Seven";
</script>

<style lang="scss" scoped></style>
