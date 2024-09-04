<template>
  <div class="container">
    <div :class="`rbt-header-sec align-items-center ${flexDirection}`">
      <div class="rbt-header-sec-col rbt-header-left">
        <div class="rbt-header-content">
          <HeaderLanguage />
        </div>
      </div>

      <div class="rbt-header-sec-col rbt-header-center d-none d-md-block">
        <div class="rbt-header-content">
          <div class="header-info">
            <div class="rbt-search-field">
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

      <div class="rbt-header-sec-col rbt-header-right">
        <div class="rbt-header-content">
          <div class="header-info">
            <ul class="quick-access">
              <li @click="toggleCart">
                <a
                  class="d-none d-xl-block rbt-cart-sidenav-activation"
                  href="#"
                >
                  <i class="feather-shopping-cart"></i>Cart
                </a>
                <a
                  class="d-block d-xl-none rbt-cart-sidenav-activation"
                  href="#"
                >
                  <i class="feather-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="header-info">
            <ul class="quick-access">
              <li
                class="account-access rbt-user-wrapper right-align-dropdown d-none d-xl-block"
              >
                <a href="#">
                  <i class="feather-user"></i>Admin
                </a>
                <User />
              </li>

              <li
                class="access-icon rbt-user-wrapper right-align-dropdown d-block d-xl-none"
              >
                <a class="rbt-round-btn" href="#">
                  <i class="feather-user"></i>
                </a>
                <User />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderLanguage from "./Header-Language.vue";
import User from "../Offcanvas/User.vue";
defineProps(["flexDirection"]);

const cartToggle = ref(false);

const toggleCart = () => {
  cartToggle.value = !cartToggle.value;
};
</script>
