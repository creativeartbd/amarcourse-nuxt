<template>
  <div
    v-if="CallToActionData"
    v-for="(data, index) in CallToActionData.collectionTwo"
    :key="index"
    class="rbt-callto-action-area bg-color-extra2 rbt-section-gap"
  >
    <CallToActionHead :tag="data.tag" :title="data.title" />

    <div class="rbt-callto-action rbt-cta-default style-2">
      <div class="container content-wrapper overflow-hidden">
        <div class="row gy-5 align-items-center">
          <div class="col-lg-8">
            <div class="inner">
              <div class="content text-left">
                <h3
                  class="title"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="200"
                >
                  {{ data.subTitle }}
                </h3>
                <h6
                  class="subtitle"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  {{ data.desc }}
                </h6>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="call-to-btn text-start text-lg-end position-relative"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="400"
            >
              <a class="rbt-btn rbt-switch-btn rbt-switch-y" href="#">
                <span data-text="Purchase Histudy"> Purchase Histudy </span>
              </a>
              <div class="shape-text-image">
                <nuxt-img
                  class="rbt-rotatation-round"
                  :src="data.img"
                  alt="Education Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CallToActionData from "../../data/elements/calltoaction.json";
import CallToActionHead from "./CallToAction-Head";
</script>
