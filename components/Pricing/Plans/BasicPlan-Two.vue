<template>
  <div :class="['pricing-table', parentClass, { active: isActive }]">
    <div class="icon-image text-center">
      <nuxt-img :src="img" width="100" height="100" alt="Pricing Image Icons" />
    </div>
    <div class="pricing-header">
      <h3 class="title">{{ title }}</h3>
      <span class="rbt-badge mb--15">{{ badge }}</span>
      <div class="price-wrap">
        <div :class="['yearly-pricing', { 'd-none': toggle }, 'd-block']">
          <span class="amount">${{ yearlyAmount }}</span>
          <span class="duration">/{{ yearlyDuration }}</span>
        </div>
        <div :class="['monthly-pricing', { 'd-none': !toggle }, 'd-block']">
          <span class="amount">${{ monthlyAmount }}</span>
          <span class="duration">/{{ monthlyDuration }}</span>
        </div>
      </div>
    </div>
    <div class="pricing-body">
      <ul class="list-item">
        <li
          v-for="(item, innerIndex) in list"
          :key="innerIndex"
          :class="{ off: !item.isCheck }"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
    <div class="pricing-btn">
      <a
        class="rbt-btn btn-border radius-round hover-icon-reverse w-100"
        href="#"
      >
        <div class="icon-reverse-wrapper">
          <span class="btn-text">Join Course Plan</span>
          <span class="btn-icon"><i class="feather-arrow-right"></i></span>
          <span class="btn-icon"><i class="feather-arrow-right"></i></span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item", "parentClass", "toggle"]);

const {
  title,
  badge,
  img,
  yearlyDuration,
  yearlyAmount,
  monthlyAmount,
  monthlyDuration,
  isActive,
  list,
} = props.item;
</script>
