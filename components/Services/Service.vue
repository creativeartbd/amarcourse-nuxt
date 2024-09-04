<template>
  <div
    v-for="(data, index) in ServiceData.serviceOne"
    class="container"
    :key="index"
  >
    <div v-if="head === undefined" class="row mb--60">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h2 class="title">{{ data.sectionTitle }}</h2>
        </div>
      </div>
    </div>

    <div class="row row--15 mt_dec--30">
      <div
        v-for="(item, innerIndex) in data.body"
        class="col-xl-3 col-md-6 col-sm-6 col-12 mt--30"
        :key="innerIndex"
      >
        <div class="rbt-flipbox">
          <div
            :class="`rbt-flipbox-wrap rbt-service rbt-service-1 ${
              item.bgOne
                ? 'card-bg-1'
                : '' || item.bgTwo
                ? 'card-bg-2'
                : '' || item.bgThree
                ? 'card-bg-3'
                : '' || item.bgFour
                ? 'card-bg-4'
                : ''
            }`"
          >
            <div class="rbt-flipbox-front rbt-flipbox-face inner">
              <div class="icon">
                <nuxt-img :src="item.img" alt="card-icon" />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="#">{{ item.title }}</a>
                </h5>
                <p>{{ item.desc }}</p>
                <a class="rbt-btn-link stretched-link" href="#">
                  Learn More<i class="feather-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="rbt-flipbox-back rbt-flipbox-face inner">
              <p>{{ item.desc }}</p>
              <a class="rbt-btn rbt-switch-btn btn-white btn-sm" href="#">
                <span data-text="Learn More">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceData from "../../data/elements/service.json";
defineProps(["head"]);
</script>

<style lang="scss" scoped></style>
