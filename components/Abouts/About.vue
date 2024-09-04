<template>
  <div class="container">
    <div
      v-for="(data, index) in aboutData.aboutOne"
      :key="index"
      class="row g-5 align-items-center"
    >
      <div class="col-lg-6">
        <div class="thumbnail-wrapper">
          <div class="thumbnail image-1" style="transition: 0.4s">
            <nuxt-img
              width="396"
              height="530"
              src="/images/about/about-07.jpg"
              alt="Education Images"
            />
          </div>
          <div class="thumbnail image-2" style="transition: 0.4s">
            <nuxt-img
              width="405"
              height="490"
              src="/images/about/about-08.jpg"
              alt="Education Images"
            />
          </div>
          <div class="thumbnail image-3" style="transition: 0.4s">
            <nuxt-img
              width="308"
              height="250"
              src="/images/about/about-09.jpg"
              alt="Education Images"
            />
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

          <div
            v-for="(item, innerIndex) in data.children"
            :key="innerIndex"
            class="rbt-feature-wrapper mt--40"
          >
            <div class="rbt-feature feature-style-1">
              <div
                :class="`icon ${
                  item.isPrimary ? 'bg-primary-opacity' : 'bg-pink-opacity'
                }`"
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
  </div>
</template>

<script setup>
import AboutData from "../../data/elements/about.json";

const aboutData = AboutData;
import { ParallaxController } from "parallax-controller";

onMounted(() => {
  const instance = ParallaxController.init({
    scrollAxis: "vertical",
  });
  const options = {
    el: document.querySelector(".image-1"),
    props: { translateY: [0, -20], transition: "0.5s" },
  };
  const options2 = {
    el: document.querySelector(".image-2"),
    props: { translateY: [0, 20], transition: "0.5s" },
  };
  const options3 = {
    el: document.querySelector(".image-3"),
    props: { translateY: [0, 20], transition: "0.5s" },
  };
  const element = instance.createElement(options);
  const element2 = instance.createElement(options2);
  const element3 = instance.createElement(options3);
});
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
