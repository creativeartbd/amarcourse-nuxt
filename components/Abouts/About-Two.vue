<template>
  <div
    v-if="aboutData"
    v-for="(data, index) in aboutData.aboutTwo"
    :key="index"
    class="row g-5 align-items-center"
  >
    <div class="col-lg-6">
      <div class="thumbnail-wrapper">
        <div id="parallaxContainer" class="thumbnail-wrapper">
          <div class="thumbnail image-1 parallax-1" style="transition: 0.4s">
            <nuxt-img
              height="490"
              width="400"
              src="/images/about/about-01.png"
              alt="Education Images"
            />
          </div>
          <div class="thumbnail image-2 parallax-2" style="transition: 0.4s">
            <nuxt-img
              width="280"
              height="250"
              src="/images/about/about-02.png"
              alt="Education Images"
            />
          </div>
          <div class="thumbnail image-3 parallax-3" style="transition: 0.4s">
            <nuxt-img
              width="490"
              height="500"
              src="/images/about/about-03.png"
              alt="Education Images"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="inner pl--50 pl_sm--0 pl_md--0">
        <div class="section-title text-start">
          <span class="subtitle bg-coral-opacity">{{ data.tag }}</span>
          <h2 class="title">
            {{ data.title }} <br />
            {{ data.subTitle }}
          </h2>
        </div>

        <p class="description mt--30">{{ data.desc }}</p>

        <div class="rbt-feature-wrapper mt--20 ml_dec_20">
          <div
            v-for="(item, innerIndex) in data.children"
            :key="innerIndex"
            class="rbt-feature feature-style-2 rbt-radius"
          >
            <div
              class="icon"
              :class="{
                'bg-primary-opacity': item.isPrimary,
                'bg-pink-opacity': !item.isPrimary,
              }"
            >
              <i :class="item.icon"></i>
            </div>
            <div class="feature-content">
              <h6 class="feature-title">{{ item.title }}</h6>
              <p class="feature-description">{{ item.info }}</p>
            </div>
          </div>
        </div>

        <div class="about-btn mt--40">
          <nuxt-link
            class="rbt-btn btn-gradient hover-icon-reverse"
            to="/pages/about-us-01"
          >
            <span class="icon-reverse-wrapper">
              <span class="btn-text">More About Us</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ParallaxController } from "parallax-controller";

onMounted(() => {
  const instance = ParallaxController.init({
    scrollAxis: "vertical",
  });
  const options = {
    el: document.querySelector(".parallax-1"),
    props: { translateY: [0, -20] },
  };
  const options2 = {
    el: document.querySelector(".parallax-2"),
    props: { translateY: [0, 20] },
  };
  const options3 = {
    el: document.querySelector(".parallax-3"),
    props: { translateY: [0, 20] },
  };
  const element = instance.createElement(options);
  const element2 = instance.createElement(options2);
  const element3 = instance.createElement(options3);
});

import aboutData from "../../data/elements/about.json";
</script>

<style lang="scss" scoped>
/* You can add scoped styles here */

@media (max-width: 767px) {
  .image-2 {
    display: none !important;
  }
  .image-3 {
    display: none !important;
  }
}
</style>
