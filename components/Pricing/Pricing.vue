<template>
  <div v-for="(data, index) in pricingData" :key="index" class="container">
    <div class="row g-5 mb--60">
      <div class="col-lg-6 col-md-6 col-12">
        <div class="section-title text-start">
          <span class="subtitle bg-primary-opacity">{{ tag }}</span>
          <h2 class="title">{{ title }}</h2>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-12">
        <div class="pricing-billing-duration text-start text-md-end">
          <ul>
            <li class="nav-item">
              <button
                class="nav-link yearly-plan-btn"
                :class="{ active: !pricing }"
                type="button"
                @click="pricing = false"
              >
                {{ data.yearlyPlan }}
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link monthly-plan-btn"
                :class="{ active: pricing }"
                type="button"
                @click="pricing = true"
              >
                {{ data.monthlyPlan }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row g-5">
      <div class="col-xl-4 col-lg-6 col-md-6 col-12">
        <BasicPlan
          v-for="(item, innerIndex) in data.basicPlan"
          :key="innerIndex"
          :item="item"
          :toggle="pricing"
          styleType="one"
        />
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-12">
        <StandardPlan
          v-for="(item, innerIndex) in data.standardPlan"
          :key="innerIndex"
          :item="item"
          :toggle="pricing"
          styleType="one"
        />
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-12">
        <ExclusivePlan
          v-for="(item, innerIndex) in data.exclusivePlan"
          :key="innerIndex"
          :item="item"
          :toggle="pricing"
          styleType="one"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BasicPlan from "./Plans/BasicPlan.vue";
import StandardPlan from "./Plans/StandardPlan.vue";
import ExclusivePlan from "./Plans/ExclusivePlan.vue";

import PricingData from "@/data/elements/pricing.json";

const pricingData = ref(PricingData.pricingOne);
const pricing = ref(true);

defineProps(["tag", "title"]);
</script>

<style scoped>
/* Your component-specific styles */
</style>
