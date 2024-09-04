<template>
  <div
    v-if="serviceData"
    v-for="(data, index) in serviceData.serviceNine"
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
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
        class="col-xl-3 col-md-6 col-sm-6 col-12 mt--30"
      >
        <div class="rbt-flipbox">
          <div
            :class="`rbt-flipbox-wrap rbt-service rbt-service-1 ${
              item.bgOne
                ? 'card-bg-1'
                : '' || item.bgTwo
                ? 'card-bg-2'
                : '' || item.bgThree
                ? 'card-bg-3'
                : '' || item.bgFour
                ? 'card-bg-4'
                : ''
            }`"
          >
            <div class="rbt-flipbox-front rbt-flipbox-face inner">
              <div class="icon">
                <nuxt-img
                  :src="item.img"
                  width="55"
                  height="55"
                  alt="card-icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <nuxt-link :href="item.link">{{ item.title }}</nuxt-link>
                </h5>
                <p>{{ item.desc }}</p>
                <nuxt-link
                  class="rbt-btn-link stretched-link"
                  :href="item.link"
                >
                  Learn More<i class="feather-arrow-right"></i>
                </nuxt-link>
              </div>
            </div>
            <div class="rbt-flipbox-back rbt-flipbox-face inner">
              <ul class="rbt-list-style-3 color-white">
                <li v-for="(subItem, subIndex) in item.list" :key="subIndex">
                  <i :class="subItem.icon"></i> {{ subItem.text }}
                </li>
              </ul>
              <nuxt-link
                class="rbt-btn rbt-switch-btn btn-white btn-sm"
                :href="item.link"
              >
                <span data-text="Learn More">Learn More</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceData from "../../data/elements/service.json";

const props = defineProps(["head"]);

const serviceData = ServiceData;
</script>
