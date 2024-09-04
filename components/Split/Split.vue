<template>
  <div
    v-if="SplitData"
    v-for="(data, index) in SplitData.splitOne"
    :key="index"
    class="row g-0 align-items-center"
  >
    <div class="col-lg-12 col-xl-6 col-12">
      <div class="thumbnail image-left-content">
        <nuxt-img :src="data.img" width="960" height="650" alt="split Images" />
      </div>
    </div>
    <div class="col-lg-12 col-xl-6 col-12">
      <div class="split-inner">
        <div class="shape">
          <nuxt-img
            :src="data.imgIcon"
            width="96"
            height="96"
            alt="Shape Images"
          />
        </div>
        <h4
          class="title sal-animate"
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-delay="200"
        >
          {{ data.subTitle }}
        </h4>
        <p
          class="description sal-animate"
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-delay="300"
        >
          {{ data.desc }}
        </p>
        <ul
          class="split-list sal-animate"
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-delay="350"
        >
          <li v-for="(item, innerIndex) in data.list" :key="innerIndex">
            {{ item.text }}
          </li>
        </ul>
        <div
          class="view-more-button mt--35 sal-animate"
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-delay="400"
        >
          <a class="rbt-moderbt-btn" href="#">
            <span class="moderbt-btn-text">Schedule A Tour</span>
            <i class="feather-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SplitData from "../../data/elements/split.json";
</script>
