<template>
  <div
    :class="`rbt-header-wrapper ${gapSpaceBetween} ${sticky} ${
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
            <nuxt-link :class="`rbt-btn ${btnClass}`" to="/login">
              <span :data-text="btnText">{{ btnText }}</span>
            </nuxt-link>
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
import Nav from "../Nav.vue";

const props = defineProps([
  "gapSpaceBetween",
  "sticky",
  "navigationEnd",
  "btnClass",
  "btnText",
]);
const toggleMobile = () => {
  document.getElementById("mobileMenu")?.classList.toggle("active");
};
const isSticky = ref(false);
const handleScroll = () => {
  const scrolled = window.scrollY;
  isSticky.value = scrolled > 0;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
