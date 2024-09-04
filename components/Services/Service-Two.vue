<template>
  <div
    v-for="(data, index) in ServiceData.serviceTwo"
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
        class="col-xl-4 col-md-6 col-sm-6 col-12 mt--30"
      >
        <div class="rbt-service rbt-service-2 rbt-hover-02">
          <div class="inner">
            <div class="content">
              <h4 class="title">
                <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
              </h4>
              <p>{{ item.desc }}</p>
              <nuxt-link class="transparent-button" :to="item.link">
                Learn More
                <i>
                  <svg
                    width="17"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#27374D" fill="none" fill-rule="evenodd">
                      <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                      <path stroke-linecap="square" d="M.663 5.572h14.594" />
                    </g>
                  </svg>
                </i>
              </nuxt-link>
            </div>
            <div class="thumbnail">
              <nuxt-img :src="item.img" alt="Education Images" />
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
