<template>
  <div id="mobileMenu" :class="{ 'popup-mobile-menu': true }">
    <div id="mobileMenuInner" class="inner-wrapper">
      <div class="inner-top">
        <div class="content">
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
          <div class="rbt-btn-close">
            <button class="close-button rbt-round-btn" @click="toggleMobile">
              <i class="feather-x"></i>
            </button>
          </div>
        </div>
        <p class="description">
          Histudy is a education website template. You can customize all.
        </p>
        <ul class="navbar-top-left rbt-information-list justify-content-start">
          <li>
            <a href="mailto:hello@example.com">
              <i class="feather-mail"></i> example@gmail.com
            </a>
          </li>
          <li>
            <a href="#"> <i class="feather-phone"></i> (302) 555-0107 </a>
          </li>
        </ul>
      </div>

      <Nav />

      <div class="mobile-menu-bottom">
        <div class="rbt-btn-wrapper mb--20">
          <nuxt-link
            class="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
            to="/login"
          >
            <span>Enroll Now</span>
          </nuxt-link>
        </div>

        <div class="social-share-wrapper">
          <span class="rbt-short-title d-block">Find With Us</span>
          <ul
            class="social-icon social-default transparent-with-border justify-content-start mt--20"
          >
            <li>
              <nuxt-link to="https://www.facebook.com/">
                <i class="feather-facebook"></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="https://www.twitter.com">
                <i class="feather-twitter"></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="https://www.instagram.com/">
                <i class="feather-instagram"></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="https://www.linkdin.com/">
                <i class="feather-linkedin"></i>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Nav from "./Nav.vue";

const toggleMobile = () => {
  document.getElementById("mobileMenu")?.classList.remove("active");
};
onMounted(() => {
  var mobileMenu = document.getElementById("mobileMenu");
  var mobileMenuInner = document.getElementById("mobileMenuInner");

  // Function to check if a click occurred inside mobileMenuInner
  function isInsideMobileMenuInner(target) {
    return mobileMenuInner.contains(target);
  }

  // Click listener for mobileMenu
  mobileMenu.addEventListener("click", function (event) {
    // Check if click occurred inside mobileMenuInner
    if (!isInsideMobileMenuInner(event.target)) {
      toggleMobile();
    }
  });
});
</script>
