<template>
  <div class="rbt-team-area bg-color-white rbt-section-gapBottom">
    <template v-if="AboutUsData">
      <div
        class="container"
        v-for="(data, index) in AboutUsData.aboutUsO1"
        :key="index"
      >
        <div class="row g-5">
          <div class="col-lg-12 mb--60">
            <div class="section-title text-center">
              <span class="subtitle bg-pink-opacity">{{ data.tag }}</span>
              <h2 class="title">{{ data.title }}</h2>
              <p class="description mt--20">{{ data.desc }}</p>
            </div>
          </div>
        </div>
        <div class="row g-5">
          <div
            class="col-lg-4 col-md-6 col-12"
            v-for="(item, innerIndex) in data.body"
            :key="innerIndex"
          >
            <div class="rbt-team team-style-default style-three rbt-hover">
              <div class="inner">
                <div class="thumbnail">
                  <nuxt-img
                    :src="item.img"
                    width="415"
                    height="555"
                    alt="Corporate Template"
                  />
                </div>
                <div class="content">
                  <h2 class="title">{{ item.name }}</h2>
                  <h6 class="subtitle theme-gradient">{{ item.dep }}</h6>
                  <span class="team-form">
                    <i class="feather-map-pin"></i>
                    <span class="location"> {{ item.address }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import AboutUsData from "../../data/pages/aboutUs01.json";
</script>

<style scoped>
/* You can add scoped styles here */
</style>
