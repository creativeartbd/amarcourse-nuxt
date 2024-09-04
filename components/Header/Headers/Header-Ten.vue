<template>
  <div
    :class="`rbt-header-wrapper rbt-header-wrapper height-50 ${gapSpaceBetween} ${sticky} ${
      !headerType && isSticky ? headerSticky : ''
    }`"
  >
    <div :class="container">
      <div :class="`mainbar-row ${navigationEnd} align-items-center`">
        <!-- Header Left Section -->
        <div class="header-left d-block d-xl-none">
          <div class="header-info">
            <ul class="quick-access">
              <li class="access-icon">
                <button
                  :class="`search-trigger-active rbt-round-btn ${
                    searchIsOpen ? 'open' : ''
                  }`"
                  @click="searchIsOpen = !searchIsOpen"
                >
                  <i class="feather-search"></i>
                </button>
              </li>
              <li class="access-icon">
                <nuxt-link class="rbt-round-btn" to="/wishlist">
                  <i class="feather-heart"></i>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- Header Center Section -->
        <div class="header-center d-block d-xl-none">
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

        <!-- Main Navigation -->
        <div class="rbt-main-navigation d-none d-xl-block">
          <Nav />
        </div>

        <!-- Header Right Section -->
        <div class="header-right">
          <div class="d-block d-xl-none">
            <ul class="quick-access">
              <li class="access-icon rbt-mini-cart">
                <button
                  class="rbt-cart-sidenav-activation rbt-round-btn"
                  @click="() => setCart(!cartToggle)"
                >
                  <i class="feather-shopping-cart"></i>
                  <span class="rbt-cart-count">5</span>
                </button>
              </li>
              <li class="access-icon rbt-user-wrapper right-align-dropdown">
                <a class="rbt-round-btn" href="#">
                  <i class="feather-user"></i>
                </a>
                <User />
              </li>
            </ul>
          </div>

          <!-- Mobile Menu Bar -->
          <div class="mobile-menu-bar d-block d-xl-none">
            <div class="hamberger">
              <button
                class="hamberger-button rbt-round-btn ms-auto"
                @click="toggleMobile"
              >
                <i class="feather-menu"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SearchWithCategory />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Nav from "../Nav.vue";
import User from "../Offcanvas/User.vue";
import SearchWithCategory from "../Category/SearchWithCategory.vue";
import { searchIsOpen } from "~/utlis/seachToggle";

defineProps([
  "headerType",
  "gapSpaceBetween",
  "sticky",
  "headerSticky",
  "navigationEnd",
  "container",
]);

const isSticky = ref(false);
const toggleMobile = () => {
  document.getElementById("mobileMenu")?.classList.toggle("active");
};

const cartToggle = ref(false);

const setCart = (value) => {
  cartToggle.value = value;
};
const handleScroll = () => {
  const scrolled = window.scrollY;
  if (scrolled > 0) {
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
