<template>
  <div
    v-for="(data, index) in aboutData.aboutSaven"
    :key="index"
    class="row g-5 align-items-center"
  >
    <div class="col-lg-6 order-2 order-lg-1">
      <div class="inner">
        <div class="section-title text-start">
          <span class="subtitle bg-primary-opacity">{{ data.tag }}</span>
          <h2 class="title">{{ data.title }}</h2>
          <p class="description mt--20">
            <strong>{{ data.strong }}</strong> {{ data.desc }}
          </p>
          <div class="read-more-btn mt--40">
            <nuxt-link
              class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
              to="/pages/about-us-01"
            >
              <span data-text="About Histudy">About Histudy</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2">
      <div class="content">
        <nuxt-img :src="data.img" width="638" height="410" alt="About Images" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutData from "../../data/elements/about.json";

const aboutData = AboutData;
</script>

<style scoped>
/* You can add scoped styles here */
</style>
