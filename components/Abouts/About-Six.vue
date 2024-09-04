<template>
  <div
    v-for="(data, index) in aboutData.aboutSix"
    :key="index"
    class="row g-5 align-items-center"
  >
    <div class="col-lg-6">
      <div class="content">
        <nuxt-img :src="data.img" width="638" height="410" alt="About Images" />
      </div>
    </div>
    <div class="col-lg-6" data-sal="slide-up" data-sal-duration="700">
      <div class="inner pl--50 pl_sm--5">
        <div class="section-title text-start">
          <span class="subtitle bg-primary-opacity">{{ data.tag }}</span>
          <h2 class="title">{{ data.title }}</h2>
          <p class="description mt--20">
            <strong>{{ data.strong }}</strong> {{ data.desc }}
          </p>
          <div class="read-more-btn mt--40">
            <nuxt-link :class="`rbt-btn ${btnClass}`" to="/pages/about-us-01">
              <span :data-text="btnText">{{ btnText }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";
import AboutData from "../../data/elements/about.json";

const aboutData = AboutData;

// Props are not directly available in `<script setup>`, so you need to use `defineProps`

const props = defineProps(["btnClass", "btnText"]);
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style scoped>
/* You can add scoped styles here */
</style>
