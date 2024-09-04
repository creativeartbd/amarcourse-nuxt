<template>
  <div class="container">
    <div
      v-if="CallToActionData"
      v-for="(data, index) in CallToActionData.collectionFour"
      :key="index"
      class="row align-items-center content-wrapper row--30 mt_dec--30 position-relative"
    >
      <div class="col-lg-8 mt--30 offset-lg-3">
        <div class="inner">
          <div class="content text-left">
            <h2 class="title">{{ data.title }}</h2>
            <div class="call-to-btn text-start mt--30">
              <a :class="btnClass" href="#">
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">Purchase Histudy</span>
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
      <div class="thumbnail">
        <nuxt-img
          class="w-100"
          :src="data.img"
          width="272"
          height="386"
          alt="Shape Images"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import CallToActionData from "../../data/elements/calltoaction.json";

defineProps(["btnClass"]);
</script>
