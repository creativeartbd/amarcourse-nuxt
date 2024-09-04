<template>
  <div
    v-for="(data, index) in Brands.brandOne"
    class="row align-items-center g-5"
    :key="index"
  >
    <div class="col-lg-3">
      <div class="brand-content-left">
        <h4 class="mb--0">{{ data.title }}</h4>
      </div>
    </div>
    <div class="col-lg-9">
      <ul
        class="brand-list brand-style-2 justify-content-center justify-content-lg-between"
      >
        <li v-for="(item, innerIndex) in data.brandLogo" :key="innerIndex">
          <a href="#">
            <nuxt-img :src="item.img" alt="Brand Image" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Brands from "../../data/elements/brands.json";
</script>

<style lang="scss" scoped></style>
