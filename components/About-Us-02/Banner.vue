<template>
  <div class="row g-5 align-items-center">
    <div class="col-lg-10 offset-lg-1">
      <div class="content">
        <div class="inner text-center">
          <div class="rbt-new-badge rbt-new-badge-one">
            <span class="rbt-new-badge-icon">🏆</span> The Leader in Online
            Learning
          </div>

          <h1 class="title">
            Read About Our
            <span class="header-caption ms-2">
              <span class="cd-headline clip is-full-width">
                <span class="cd-words-wrapper">
                  <b class="is-visible theme-gradient"></b>
                </span>
              </span>
            </span>
          </h1>
          <p class="description has-medium-font-size mt--20">
            Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
            Redux, React Routing, Animations, Next.js and way more!
          </p>
          <div class="slider-btn rbt-button-group justify-content-center">
            <nuxt-link
              class="rbt-btn btn-gradient hover-icon-reverse"
              to="/login"
            >
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Log in to Start</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </nuxt-link>
            <nuxt-link
              class="rbt-btn hover-icon-reverse btn-white"
              to="/contact"
            >
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Contact US</span>
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
import Typed from "typed.js";

const typeitInstance = ref();
onMounted(() => {
  typeitInstance.value = new Typed(".is-visible", {
    strings: ["Mission.", "Vission", "Planning"],
    typeSpeed: 80,
    backSpeed: 60,
    startDelay: 200,
    loop: Infinity,
    showCursor: false,
  });
});
onUnmounted(() => {
  typeitInstance.value?.destroy();
});
</script>

<style scoped>
/* You can add scoped styles here */
</style>
