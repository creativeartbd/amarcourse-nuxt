<template>
  <div class="container-fluid">
    <div class="row g-3">
      <div
        v-for="(data, index) in instagramData"
        :key="index"
        class="col-lg-2 col-md-4 col-sm-6 col-6"
      >
        <div class="instagram-grid">
          <a href="#">
            <nuxt-img
              :width="384"
              :height="431"
              :src="data.img"
              alt="instagram"
            />
            <span class="user-info">
              <span class="icon">
                <i class="icon-instagram"></i>
              </span>
              <span class="user-name">{{ data.name }}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InstagramData from "~/data/elements/instagram.json";

const instagramData = InstagramData.instagram;
</script>

<style scoped>
/* Add your scoped styles here */
</style>
