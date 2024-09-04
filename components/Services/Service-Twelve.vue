<template>
  <div class="container">
    <div v-if="head === undefined" class="row mb--60">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h2 class="title">{{ ServiceData.serviceTwelve[0].sectionTitle }}</h2>
        </div>
      </div>
    </div>

    <div class="row row--15 mt_dec--30">
      <div
        v-for="(item, innerIndex) in ServiceData.serviceTwelve[0].body"
        :key="innerIndex"
        class="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30"
      >
        <div class="service-card service-card-6">
          <div class="inner">
            <div class="icon">
              <nuxt-img
                :src="`${item.img}`"
                width="60"
                height="60"
                alt="icons Images"
              />
            </div>
            <div class="content">
              <h6 class="title">
                <a href="#">{{ item.title }}</a>
              </h6>
              <p class="description">{{ item.desc }}</p>
            </div>
            <span class="number-text">{{ innerIndex + 1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceData from "@/data/elements/service.json";
defineProps(["head"]);
</script>
