<template>
  <div class="conter-style-2">
    <div v-for="(data, index) in counterData" :key="index" class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <div class="row row--30">
            <div
              v-for="(item, innerIndex) in data.body"
              :key="innerIndex"
              :class="`col-lg-6 col-md-6 col-sm-6 col-12 ${item.mt}`"
            >
              <div class="rbt-counterup rbt-hover-03">
                <div class="inner">
                  <div class="icon">
                    <nuxt-img
                      :src="item.img"
                      width="100"
                      height="100"
                      alt="Icons Images"
                    />
                  </div>
                  <div class="content">
                    <h3 class="counter">
                      <span class="odometer"
                        ><CommonOdometerComponent :number="item.num"
                      /></span>
                    </h3>
                    <span class="subtitle">{{ item.text }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <div class="inner pl--50 pl_sm--0 pl_md--0">
            <div class="section-title text-start">
              <span class="subtitle bg-pink-opacity">{{ data.tag }}</span>
              <h2 class="title">
                {{ data.title }} <br />
                {{ data.subTitle }}
              </h2>
              <p class="description has-medium-font-size mt--20 mb--0">
                {{ data.desc }}
              </p>
            </div>

            <div class="rbt-feature-wrapper mt--30">
              <div
                v-for="(item, innerIndex) in data.item"
                :key="innerIndex"
                class="rbt-feature feature-style-1 align-items-center"
              >
                <div
                  class="icon"
                  :class="{
                    'bg-primary-opacity': item.primary,
                    'bg-secondary-opacity': item.secondary,
                    'bg-pink-opacity': item.pink,
                  }"
                >
                  <i :class="item.icon"></i>
                </div>
                <div class="feature-content">
                  <h6 class="feature-title">{{ item.text }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CounterData from "@/data/elements/counter.json";

const counterData = CounterData.counterTwo;
</script>

<style scoped>
/* Your component-specific styles */
</style>
