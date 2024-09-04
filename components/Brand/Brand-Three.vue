<template>
  <div class="container">
    <div
      v-for="(data, index) in BrandData.brandThree"
      class="row align-items-center"
      :key="index"
    >
      <div class="col-lg-12">
        <div class="section-title text-center mb--40">
          <span class="small-title w-600">{{ data.title }}</span>
        </div>
        <ul
          class="brand-list brand-style-3 justify-content-center justify-content-lg-between"
        >
          <li v-for="(item, innerIndex) in data.brandLogo" :key="innerIndex">
            <a href="#">
              <nuxt-img :src="item.img" alt="Brand Image" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import BrandData from "../../data/elements/brands.json";
</script>

<style lang="scss" scoped></style>
