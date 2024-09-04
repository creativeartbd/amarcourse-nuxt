<template>
  <div
    :class="`rbt-header-top rbt-header-top-1 variation-height-60 ${gapSpaceBetween} ${bgColor} top-expended-activation ${
      !toggle ? 'd-none' : ''
    }`"
  >
    <div class="container">
      <div class="top-expended-wrapper">
        <div
          :class="`top-expended-inner rbt-header-sec align-items-center ${flexDirection}`"
        >
          <div class="rbt-header-sec-col rbt-header-left">
            <div class="rbt-header-content">
              <div class="header-info d-none d-lg-block">
                <ul class="rbt-information-list">
                  <li>
                    <a href="#">
                      <i class="feather-help-circle"></i>Have any Question?
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@example.com">
                      <i class="feather-mail"></i>example@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="feather-phone"></i>+1-202-555-0174
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
            <div
              class="rbt-header-content justify-content-start justify-content-lg-end"
            >
              <HeaderLanguage />
            </div>
          </div>
        </div>
        <div class="header-info">
          <div class="top-bar-expended d-block d-lg-none">
            <button
              class="topbar-expend-button rbt-round-btn"
              @click="toggle = !toggle"
            >
              <i class="color-body feather-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderLanguage from "./Header-Language";
defineProps(["gapSpaceBetween", "bgColor", "flexDirection"]);

const toggle = ref(true);
</script>
./Header-Language.vue
