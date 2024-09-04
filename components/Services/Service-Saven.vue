<template>
  <div
    v-if="ServiceData"
    v-for="(data, index) in ServiceData.serviceSaven"
    :key="index"
    class="container"
  >
    <div v-if="head === undefined" class="row mb--60">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h2 class="title">{{ data.sectionTitle }}</h2>
        </div>
      </div>
    </div>
    <div class="row row--15 mt_dec--30">
      <div
        class="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-12 mt--30"
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
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
              'bg-card-color-5': item.bgFive,
            },
          ]"
        >
          <div class="inner">
            <div class="icon">
              <nuxt-img
                :src="item.img"
                width="60"
                height="60"
                alt="Shape Images"
              />
              <nuxt-img
                class="opacity_image"
                :src="item.img"
                width="60"
                height="60"
                alt="Shape Images"
              />
            </div>
            <div class="content">
              <h6 class="title">
                <a href="#">{{ data.title }}</a>
              </h6>
              <p class="description">{{ data.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceData from "~/data/elements/service.json"; // Assuming you have the data imported from the appropriate location
defineProps(["head", "head"]);
</script>
