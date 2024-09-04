<template>
  <div
    :class="`rbt-header-wrapper ${gapSpaceBetween} ${sticky} ${
      isSticky ? 'rbt-sticky' : ''
    }`"
  >
    <div :class="container">
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
          <ul class="quick-access">
            <li class="access-icon rbt-user-wrapper right-align-dropdown">
              <a class="rbt-round-btn" href="#">
                <i class="feather-user"></i>
              </a>
              <User />
            </li>
            <li class="access-icon rbt-mini-cart" @click="setCart(!cartToggle)">
              <a class="rbt-cart-sidenav-activation rbt-round-btn" href="#">
                <i class="feather-shopping-cart"></i>
                <span class="rbt-cart-count">5</span>
              </a>
            </li>
            <li class="access-icon">
              <a
                :class="`search-trigger-active rbt-round-btn ${
                  searchIsOpen ? 'open' : ''
                }`"
                @click="searchIsOpen = !searchIsOpen"
              >
                <i class="feather-search"></i>
              </a>
            </li>
          </ul>

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
    <Search />
  </div>
</template>

<script setup>
import Nav from "../Nav";
import User from "../Offcanvas/User";
import Search from "../Offcanvas/Search";
import { searchIsOpen } from "~/utlis/seachToggle";
defineProps(["gapSpaceBetween", "sticky", "navigationEnd", "container"]);

const cartToggle = ref(false);
const isSticky = ref(false);

const toggleMobile = () => {
  document.getElementById("mobileMenu")?.classList.toggle("active");
};

const setCart = (value) => {
  cartToggle.value = value;
};
const handleScroll = () => {
  const scrolled = window.scrollY;
  if (scrolled > 180) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Your component-specific styles */
</style>
