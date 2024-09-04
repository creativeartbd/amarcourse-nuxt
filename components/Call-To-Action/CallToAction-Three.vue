<template>
  <div
    v-for="(data, index) in CallToActionData.collectionThree"
    class="rbt-callto-action-area bg-color-white rbt-section-gap"
    :key="index"
  >
    <CallToActionHead :tag="data.tag" :title="data.title" />
    <div class="rbt-callto-action rbt-cta-default style-3">
      <div class="container content-wrapper">
        <div class="row g-5 align-items-center">
          <div class="col-lg-8">
            <div class="inner">
              <div class="content text-left">
                <h2 class="title">
                  Ready to start creating a standard website?
                </h2>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="call-to-btn text-start text-lg-end">
              <a class="rbt-btn bg-white-opacity icon-hover" href="#">
                <span class="btn-text">Purchase Histudy</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </a>
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

<style lang="scss" scoped></style>
