<template>
  <div class="container">
    <div
      v-if="CallToActionData"
      v-for="(data, index) in CallToActionData.collectionSix"
      :key="index"
      class="row g-5 align-items-center content-wrapper"
    >
      <div class="col-xxl-3 col-xl-3 col-lg-6">
        <div class="inner">
          <div class="content text-start">
            <h2 class="title color-white mb--0">{{ data.title }}</h2>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="inner-content text-start">
          <p class="color-white">{{ data.desc }}</p>
        </div>
      </div>
      <div class="col-xxl-3 col-xl-3 col-lg-6">
        <div class="call-to-btn text-start text-xl-end">
          <a class="rbt-btn btn-white hover-icon-reverse" href="#">
            <span class="icon-reverse-wrapper">
              <span class="btn-text">Histudy Financial Aid</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CallToActionData from "../../data/elements/calltoaction.json";
</script>
