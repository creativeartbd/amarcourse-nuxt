<template>
  <div v-for="(data, index) in counterData" class="container" :key="index">
    <div class="row g-5 align-items-center">
      <div class="col-lg-6">
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
          <div class="read-more-btn mt--40">
            <nuxt-link
              class="rbt-btn hover-icon-reverse"
              to="/pages/about-us-01"
            >
              <div class="icon-reverse-wrapper">
                <span class="btn-text">More About Us</span>
                <span class="btn-icon"
                  ><i class="feather-arrow-right"></i
                ></span>
                <span class="btn-icon"
                  ><i class="feather-arrow-right"></i
                ></span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="row g-5">
          <div
            v-for="(item, innerIndex) in data.body"
            class="col-lg-6 col-md-6 col-sm-6 col-12"
            :key="innerIndex"
          >
            <div class="rbt-counterup style-2">
              <div class="inner">
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
    </div>
  </div>
</template>

<script setup>
import CounterData from "../../data/elements/counter.json";

const counterData = CounterData.counterFour;
</script>

<style scoped>
/* Your component-specific styles here */
</style>
