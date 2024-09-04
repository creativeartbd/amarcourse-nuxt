<template>
  <div
    :class="`rbt-header-top rbt-header-top-1 variation-height-50 ${gapSpaceBetween} ${bgColor} d-none d-xl-block ${
      !toggle ? 'd-none' : ''
    }`"
  >
    <div :class="container">
      <div class="rbt-header-sec align-items-center" :class="flexDirection">
        <div class="rbt-header-sec-col rbt-header-left">
          <div class="rbt-header-content">
            <div class="header-info">
              <ul class="rbt-information-list">
                <li>
                  <a href="#"> <i class="feather-phone"></i>+1-202-555-0174 </a>
                </li>
              </ul>
            </div>
            <div class="rbt-separator"></div>
            <div class="header-info">
              <ul class="social-share-transparent">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-skype"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rbt-header-sec-col rbt-header-right">
          <div class="rbt-header-content">
            <div class="header-info">
              <ul class="rbt-secondary-menu">
                <li>
                  <nuxt-link to="/my-account">My Account</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pages/faqs">FAQ</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">Contact Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pages/privacy-policy"
                    >Privacy Policy</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/pages/privacy-policy"
                    >Terms & Condition</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <div class="rbt-separator"></div>
            <div class="header-info" @click="toggle = !toggle">
              <div class="header-right-btn d-flex">
                <a :class="`rbt-btn ${btnClass}`" href="#">
                  <span :data-text="btnText">{{ btnText }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps([
  "gapSpaceBetween",
  "bgColor",
  "flexDirection",
  "btnText",
  "btnClass",
  "container",
]);
const toggle = ref(true);
</script>

<style scoped>
/* Your component-specific styles */
</style>
