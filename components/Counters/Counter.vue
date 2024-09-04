<template>
  <div v-if="counterData">
    <div
      v-for="(data, index) in counterData.counterOne"
      :key="index"
      class="container"
    >
      <CounterHead
        v-if="!head"
        bgClass="bg-primary-opacity"
        mb="mb--40"
        :tag="data.tag"
        :title="data.title"
        :subTitle="data.subTitle"
        :desc="isDesc ? data.desc : ''"
      />
      <div class="row g-5 hanger-line">
        <div
          v-for="(item, innerIndex) in data.body"
          :key="innerIndex"
          :class="
            item.top
              ? 'col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60'
              : 'col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60'
          "
        >
          <div class="rbt-counterup rbt-hover-03 border-bottom-gradient">
            <div class="top-circle-shape"></div>
            <div class="inner">
              <div class="rbt-round-icon">
                <nuxt-img :src="item.img" alt="Icons Images" />
              </div>
              <div class="content">
                <h3 class="counter">
                  <span class="odometer"
                    ><CommonOdometerComponent :number="item.num"
                  /></span>
                </h3>
                <span class="subtitle">{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CounterHead from "./Counter-Head.vue";
import counterData from "../../data/elements/counter.json";

const props = defineProps({
  isDesc: Boolean,
  head: { default: false },
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
