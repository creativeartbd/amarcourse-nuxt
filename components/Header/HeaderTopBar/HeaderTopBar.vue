<template>
  <div
    class="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news bg-image1"
    :class="{ deactive: !toggle }"
  >
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner justify-content-center">
              <div class="content">
                <span
                  class="rbt-badge variation-02 bg-color-primary color-white radius-round"
                >
                  Limited Time Offer
                </span>
                <span class="news-text color-white-off">
                  <nuxt-img
                    src="/images/icons/hand-emojji.svg"
                    alt="Hand Emojji Images"
                  />
                  Intro price. Get Histudy for Big Sale -95% off.
                </span>
              </div>
              <div class="right-button">
                <nuxt-link
                  class="rbt-btn-link color-white"
                  to="https://themeforest.net/checkout/from_item/42846507?license=regular"
                >
                  <span>
                    Purchase Now <i class="feather-arrow-right"></i>
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="icon-close position-right">
      <button
        class="rbt-round-btn btn-white-off bgsection-activation"
        @click="toggle = !toggle"
      >
        <i class="feather-x"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toggle = ref(true);
</script>
