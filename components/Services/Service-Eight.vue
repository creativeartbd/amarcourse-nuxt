<template>
  <div
    v-for="(data, index) in serviceData.serviceEight"
    :key="index"
    class="container"
  >
    <div v-if="isHead" class="row mb--60">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h2 class="title">{{ data.sectionTitle }}</h2>
        </div>
      </div>
    </div>
    <div class="row g-5">
      <div
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
        class="col-lg-2 col-xl-2 col-xxl-2 col-md-3 col-sm-4 col-6"
      >
        <div class="service-card service-card-5 variation-2">
          <div class="inner">
            <div class="icon">
              <a :to="item.link">
                <nuxt-img :src="item.img" alt="Shape Images" />
              </a>
            </div>
            <div class="content">
              <h6 class="title">
                <a :to="item.link">{{ item.title }}</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceData from "~/data/elements/service.json";

defineProps(["isHead"]);
const serviceData = ref(ServiceData);
</script>

<style>
/* Add your styles here */
</style>
