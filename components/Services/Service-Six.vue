<template>
  <div
    v-for="(data, index) in ServiceData.serviceSix"
    class="container"
    :key="index"
  >
    <div class="row mb--60">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h2 class="title">{{ data.sectionTitle }}</h2>
        </div>
      </div>
    </div>
    <div class="row row--15 mt_dec--30">
      <div
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
        class="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30"
      >
        <div
          :class="[
            'service-card',
            'service-card-6',
            'bg-color',
            {
              'bg-card-color-1': item.bgOne,
              'bg-card-color-2': item.bgTwo,
              'bg-card-color-3': item.bgThree,
              'bg-card-color-4': item.bgFour,
            },
          ]"
        >
          <div class="inner">
            <div class="icon">
              <nuxt-img :src="item.img" alt="Shape Images" />
              <nuxt-img
                class="opacity_image"
                :src="item.img"
                alt="Shape Images"
              />
            </div>
            <div class="content">
              <h6 class="title">
                <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
              </h6>
              <p class="description">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceData from "../../data/elements/service.json";
</script>

<style scoped>
/* Your component-specific styles here */
</style>
