<template>
  <div v-if="testimonialData">
    <div
      v-for="(data, index) in testimonialData.testimonialSeven"
      :key="index"
      class="scroll-animation-wrapper no-overlay mt--50"
    >
      <div class="scroll-animation scroll-right-left">
        <div
          v-for="(item, innerIndex) in data.left"
          :key="innerIndex"
          class="single-column-20 bg-theme-gradient-odd"
        >
          <div class="rbt-testimonial-box style-2">
            <div class="inner">
              <div class="icons">
                <nuxt-img :src="item.img" alt="Clint Images" />
              </div>
              <div class="description">
                <p class="subtitle-3">{{ item.desc }}</p>
                <div class="clint-info-wrapper">
                  <div class="thumb">
                    <nuxt-img :src="item.client" alt="Clint Images" />
                  </div>
                  <div class="client-info">
                    <h5 class="title">
                      {{ item.title }} <i>{{ item.position }}</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(data, index) in testimonialData.testimonialSeven"
      :key="index"
      class="scroll-animation-wrapper no-overlay mt--30"
    >
      <div class="scroll-animation scroll-left-right">
        <div
          v-for="(item, innerIndex) in data.left"
          :key="innerIndex"
          class="single-column-20 bg-theme-gradient-even"
        >
          <div class="rbt-testimonial-box style-2">
            <div class="inner">
              <div class="icons">
                <nuxt-img :src="item.img" alt="Clint Images" />
              </div>
              <div class="description">
                <p class="subtitle-3">{{ item.desc }}</p>
                <div class="clint-info-wrapper">
                  <div class="thumb">
                    <nuxt-img :src="item.client" alt="Clint Images" />
                  </div>
                  <div class="client-info">
                    <h5 class="title">
                      {{ item.title }} <i>{{ item.position }}</i>
                    </h5>
                  </div>
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
import testimonialData from "../../data/elements/testimonial.json";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
