<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12">
        <ul class="brand-list brand-style-1">
          <li v-for="(data, index) in BrandData.brandTwo" key="{index}">
            <a href="#">
              <nuxt-img :src="data.img" alt="Brand Image" />
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
