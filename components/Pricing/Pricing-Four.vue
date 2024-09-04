<template>
  <div
    v-for="(data, index) in pricingData.pricingFour"
    class="container"
    :key="index"
  >
    <div class="row g-5 mb--60">
      <div class="col-lg-6 col-md-6 col-12">
        <div class="section-title text-start">
          <span class="subtitle bg-pink-opacity">{{ tag }}</span>
          <h2 class="title">{{ title }}</h2>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-12">
        <div class="pricing-billing-duration text-start text-md-end">
          <ul>
            <li class="nav-item">
              <button
                class="nav-link yearly-plan-btn"
                :class="{ active: !pricingFour }"
                type="button"
                @click="pricingFour = false"
              >
                {{ data.yearlyPlan }}
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link monthly-plan-btn"
                :class="{ active: pricingFour }"
                type="button"
                @click="pricingFour = true"
              >
                {{ data.monthlyPlan }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row gx-0">
      <div class="col-xl-4 col-lg-6 col-md-6 col-12">
        <BasicPlanTwo
          v-for="(item, innerIndex) in data.basicPlan"
          :key="innerIndex"
          :item="item"
          :toggle="pricingFour"
          parentClass="style-3"
        />
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-12">
        <StandardPlanTwo
          v-for="(item, innerIndex) in data.standardPlan"
          :key="innerIndex"
          :item="item"
          :toggle="pricingFour"
          styleType="three"
          parentClass="style-3"
        />
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-12">
        <ExclusivePlanTwo
          v-for="(item, innerIndex) in data.exclusivePlan"
          :key="innerIndex"
          :item="item"
          :toggle="pricingFour"
          styleType="three"
          parentClass="style-3"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BasicPlanTwo from "./Plans/BasicPlan-Two.vue";
import StandardPlanTwo from "./Plans/StandardPlan-Two.vue";
import ExclusivePlanTwo from "./Plans/ExclusivePlan-Two.vue";
import pricingData from "../../data/elements/pricing.json";

const pricingFour = ref(true);

defineProps(["title", "tag"]);
</script>

<style scoped>
/* Your component-specific styles here */
</style>
