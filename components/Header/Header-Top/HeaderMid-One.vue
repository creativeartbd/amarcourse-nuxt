<template>
  <div
    :class="`rbt-header-middle position-relative rbt-header-mid-1 ${gapSpaceBetween} ${bgColor} d-none d-xl-block`"
  >
    <div :class="container">
      <div :class="`rbt-header-sec align-items-center ${flexDirection}`">
        <!-- Left Section -->
        <div class="rbt-header-sec-col rbt-header-left">
          <div class="rbt-header-content">
            <div class="header-info">
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
          </div>
        </div>

        <!-- Center Section -->
        <div class="rbt-header-sec-col rbt-header-center">
          <div class="rbt-header-content">
            <div class="header-info">
              <div class="rbt-search-with-category">
                <div class="filter-select rbt-modern-select search-by-category">
                  <select>
                    <option>All Categories</option>
                    <option>Education</option>
                    <option>Course</option>
                    <option>Art</option>
                    <option>Web Design</option>
                  </select>
                </div>
                <div class="search-field">
                  <input type="text" placeholder="Search Course" />
                  <button class="rbt-round-btn serach-btn" type="submit">
                    <i class="feather-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="rbt-header-sec-col rbt-header-right">
          <div class="rbt-header-content">
            <div class="header-info">
              <ul class="quick-access">
                <li class="access-icon rbt-mini-cart">
                  <a
                    class="rbt-cart-sidenav-activation rbt-round-btn"
                    href="#"
                    @click="() => setCart(!cartToggle)"
                  >
                    <i class="feather-shopping-cart"></i>
                    <span class="rbt-cart-count">5</span>
                  </a>
                </li>

                <li class="access-icon rbt-user-wrapper">
                  <a class="rbt-round-btn" href="#">
                    <i class="feather-user"></i>
                  </a>
                  <User />
                </li>
              </ul>
            </div>

            <div class="header-info">
              <nuxt-link
                class="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none"
                to="/course-filter-one-toggle"
              >
                <span data-text="Get Free Course">Get Free Course</span>
              </nuxt-link>
            </div>

            <div class="header-info d-xl-none">
              <ul class="quick-access">
                <li class="access-icon">
                  <a class="search-trigger-active rbt-round-btn" href="#">
                    <i class="feather-search"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="header-info d-block d-xl-none">
              <div class="mobile-menu-bar">
                <div class="hamberger">
                  <button class="hamberger-button rbt-round-btn">
                    <i class="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import User from "../Offcanvas/User.vue";

defineProps(["gapSpaceBetween", "bgColor", "flexDirection", "container"]);

const cartToggle = ref(false);

const setCart = (value) => {
  cartToggle.value = value;
};
</script>
