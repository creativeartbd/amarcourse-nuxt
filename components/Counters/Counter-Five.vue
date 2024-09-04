<template>
  <div class="container">
    <div
      v-if="counterData"
      v-for="(data, index) in counterData.counterFive"
      :key="index"
      class="row g-5"
    >
      <div
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
        class="col-lg-3 col-md-6 col-sm-6 col-12 single-counter"
      >
        <div class="rbt-counterup style-2">
          <div class="inner">
            <div class="content">
              <h3 class="counter">
                <span class="odometer">{{ item.num }}</span>
              </h3>
              <span class="subtitle">{{ data.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CounterData from "../../data/elements/counter.json";

const counterData = CounterData;
</script>
