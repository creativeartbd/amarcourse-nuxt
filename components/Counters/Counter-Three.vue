<template>
  <div v-for="(data, index) in counterData" class="container" :key="index">
    <CounterHead
      bgClass="bg-primary-opacity"
      mb="mb--60"
      :tag="data.tag"
      :title="data.title"
      :subTitle="data.subTitle"
      :desc="data.desc"
    />

    <div class="row g-5">
      <div
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
        class="col-lg-3 col-md-6 col-sm-6 col-12"
        :class="{ 'mt--60 mt_md--30': item.mt }"
        @mouseenter="handleMouseEnter(innerIndex)"
        @mouseleave="handleMouseLeave"
      >
        <div
          class="rbt-counterup rbt-hover-active"
          :class="{
            active: activeIndex === innerIndex,
            'rbt-hover-03': true,
          }"
        >
          <div class="inner">
            <div
              class="rbt-round-icon"
              :class="{
                'bg-primary-opacity': item.primary,
                'bg-secondary-opacity': item.secondary,
                'bg-pink-opacity': item.pink,
                'bg-violet-opacity': item.violet,
              }"
            >
              <i :class="item.icon"></i>
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
</template>

<script setup>
import CounterHead from "./Counter-Head.vue";
import CounterData from "../../data/elements/counter.json";

const activeIndex = ref(null);
const handleMouseEnter = (index) => {
  activeIndex.value = index;
};

const handleMouseLeave = () => {
  activeIndex.value = null;
};

const counterData = CounterData.counterThree;
</script>

<style scoped>
/* Your component-specific styles here */
</style>
