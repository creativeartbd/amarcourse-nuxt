<template>
  <div
    v-if="serviceData"
    v-for="(data, index) in serviceData"
    :key="index"
    class="container"
  >
    <div v-if="isTitle === undefined" class="row mb--60">
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
        class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
      >
        <div class="rbt-flipbox variation-2">
          <div
            :class="[
              'rbt-flipbox-wrap',
              'rbt-service',
              'rbt-service-1',
              item.bgOne ? 'card-bg-1' : '',
              item.bgTwo ? 'card-bg-2' : '',
              item.bgThree ? 'card-bg-3' : '',
              item.bgFour ? 'card-bg-4' : '',
            ]"
          >
            <div class="rbt-flipbox-front rbt-flipbox-face inner">
              <div class="front-thumb w-100">
                <nuxt-img
                  :src="item.imgFront"
                  width="490"
                  height="300"
                  alt="card-icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="#">{{ item.title }}</a>
                </h5>
                <ul class="rbt-list-style-3">
                  <li
                    v-for="(listItem, innerIndex) in item.list"
                    :key="innerIndex"
                  >
                    <i :class="listItem.icon"></i> {{ listItem.text }}
                  </li>
                </ul>
                <a class="rbt-btn-link stretched-link" href="#">
                  Learn More<i class="feather-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="rbt-flipbox-back rbt-flipbox-face inner">
              <div class="flip-back-top">
                <div class="back-thumb w-100">
                  <nuxt-img
                    class="w-100 radius-10"
                    :src="item.img"
                    width="490"
                    height="300"
                    alt="card-icon"
                  />
                </div>
                <p>{{ item.desc }}</p>
              </div>
              <a class="rbt-btn rbt-switch-btn btn-white btn-sm" href="#">
                <span data-text="Learn More">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceData from "@/data/elements/service.json";

const serviceData = ref(ServiceData.serviceEleven);
defineProps(["isTitle"]);
</script>

<style scoped>
/* Your component-specific styles */
</style>
