<template>
  <div
    v-if="CounterData"
    v-for="(data, index) in CounterData.counterSix"
    :key="index"
    class="container"
  >
    <CounterHead
      v-if="head === undefined"
      bgClass="bg-primary-opacity"
      mb="mb--40"
      :tag="data.tag"
      :title="data.title"
      :subTitle="data.subTitle"
      :desc="data.desc"
    />
    <div class="row g-5">
      <div
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
        class="col-lg-4 col-md-6 col-sm-6 col-12"
      >
        <div class="rbt-counterup style-3">
          <div class="inner">
            <div class="content">
              <h2 class="counter">
                <span class="odometer"
                  ><CommonOdometerComponent :number="item.num"
                /></span>
              </h2>
              <span class="subtitle">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CounterData from "../../data/elements/counter.json";
import CounterHead from "./Counter-Head.vue";

defineProps(["head"]);
</script>

<style scoped>
/* Your component-specific styles */
</style>
