<template>
  <div
    :class="`rbt-header-wrapper ${gapSpaceBetween} ${transparent} ${sticky} ${
      isSticky ? 'rbt-sticky' : ''
    }`"
  >
    <div class="container">
      <div :class="`mainbar-row ${navigationEnd} align-items-center`">
        <div class="header-left">
          <div class="logo logo-dark">
            <nuxt-link to="/">
              <nuxt-img
                width="152"
                height="50"
                alt="Edu-cause"
                src="/images/logo/logo.png"
              />
            </nuxt-link>
          </div>
          <div class="logo d-none logo-light">
            <nuxt-link to="/">
              <nuxt-img
                width="152"
                height="50"
                src="/images/dark/logo/logo-light.png"
                alt="Edu-cause"
              />
            </nuxt-link>
          </div>
        </div>
        <div class="rbt-main-navigation d-none d-xl-block">
          <Nav />
        </div>
        <div class="header-right">
          <div class="rbt-btn-wrapper d-none d-xl-block">
            <a :class="`rbt-btn ${btnClass}`" href="#">
              <span :data-text="btnText">{{ btnText }}</span>
            </a>
          </div>
          <div class="mobile-menu-bar d-block d-xl-none">
            <div class="hamberger">
              <button
                class="hamberger-button rbt-round-btn"
                @click="toggleMobile"
              >
                <i class="feather-menu"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Nav from "../Nav";
const isSticky = ref(false);

const handleScroll = () => {
  const scrolled = window.scrollY;
  if (scrolled > 180) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

const toggleMobile = () => {
  document.getElementById("mobileMenu")?.classList.toggle("active");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
defineProps([
  "gapSpaceBetween",
  "sticky",
  "navigationEnd",
  "btnClass",
  "btnText",
  "transparent",
]);
</script>
