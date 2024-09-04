<template>
  <ClientOnly>
    <div class="header-right">
      <ul class="quick-access">
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

        <li class="access-icon rbt-mini-cart">
          <a
            class="rbt-cart-sidenav-activation rbt-round-btn"
            href="#"
            @click="toggleCart"
          >
            <i class="feather-shopping-cart"></i>
            <span class="rbt-cart-count">{{
              cartCourses.length + cartProducts.length + cartEvents.length
            }}</span>
          </a>
        </li>

        <li class="account-access rbt-user-wrapper d-none d-xl-block">
          <a href="#" class="d-flex items-center">
            <i style="padding-top: 3px" class="feather-user"></i>
            {{ userType }}
          </a>
          <User />
        </li>

        <li class="access-icon rbt-user-wrapper d-block d-xl-none">
          <a class="rbt-round-btn" href="#">
            <i class="feather-user"></i>
          </a>
          <User />
        </li>
      </ul>

      <div class="rbt-btn-wrapper d-none d-xl-block">
        <a :class="`rbt-btn ${btnClass}`" href="#">
          <span :data-text="btnText">{{ btnText }}</span>
        </a>
      </div>

      <div class="mobile-menu-bar d-block d-xl-none">
        <div class="hamberger">
          <button class="hamberger-button rbt-round-btn" @click="toggleMobile">
            <i class="feather-menu"></i>
          </button>
        </div>
      </div></div
  ></ClientOnly>
</template>

<script setup>
import { ref } from "vue";

import User from "../Offcanvas/User";
import { cartCourses } from "~/context/cart/course";
import { cartProducts } from "~/context/cart/shop";
import { searchIsOpen } from "~/utlis/seachToggle";
import { cartEvents } from "~/context/cart/event";

const toggleMobile = () => {
  document.getElementById("mobileMenu")?.classList.toggle("active");
};

defineProps(["btnClass", "btnText", "userType"]);

const toggleCart = () => {
  document.getElementById("cart")?.classList.add("cart-sidenav-menu-active");
  document.getElementById("cartContent")?.classList.add("side-menu-active");
};
</script>
