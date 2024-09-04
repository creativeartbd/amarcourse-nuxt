<template>
  <div
    v-for="(data, index) in pricingData.pricingThree"
    class="container"
    :key="index"
  >
    <div class="row g-5 mb--60">
      <div v-if="title !== ''" class="col-lg-6 col-md-6 col-12">
        <div class="section-title text-start">
          <span class="subtitle bg-pink-opacity">{{ tag }}</span>
          <h2 class="title">{{ title }}</h2>
        </div>
      </div>

      <div :class="col">
        <div :class="'pricing-billing-duration ' + position">
          <ul>
            <li class="nav-item">
              <button
                class="nav-link yearly-plan-btn"
                :class="{ active: !pricingThree }"
                type="button"
                @click="pricingThree = false"
              >
                {{ data.yearlyPlan }}
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link monthly-plan-btn"
                :class="{ active: pricingThree }"
                type="button"
                @click="pricingThree = true"
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
          :toggle="pricingThree"
          styleType="three"
          parentClass="style-2"
        />
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-12">
        <StandardPlan
          v-for="(item, innerIndex) in data.standardPlan"
          :key="innerIndex"
          :item="item"
          :toggle="pricingThree"
          styleType="three"
          parentClass="style-2"
        />
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-12">
        <ExclusivePlan
          v-for="(item, innerIndex) in data.exclusivePlan"
          :key="innerIndex"
          :item="item"
          :toggle="pricingThree"
          styleType="three"
          parentClass="style-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BasicPlan from "./Plans/BasicPlan.vue";
import StandardPlan from "./Plans/StandardPlan.vue";
import ExclusivePlan from "./Plans/ExclusivePlan.vue";
import pricingData from "../../data/elements/pricing.json";

const pricingThree = ref(true);

defineProps(["title", "tag", "col", "position"]);
</script>

<style scoped>
/* Your component-specific styles here */
</style>
