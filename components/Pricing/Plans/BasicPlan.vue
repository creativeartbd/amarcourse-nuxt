<template>
  <div :class="`pricing-table ${parentClass} ${item.isActive ? 'active' : ''}`">
    <div class="pricing-header">
      <h3
        :class="[
          'title',
          isPrimary
            ? 'color-primary'
            : isSecondary
            ? 'color-secondary'
            : isPink
            ? 'color-pink'
            : '',
        ]"
      >
        {{ title }}
      </h3>
      <span class="rbt-badge mb--35">{{ badge }}</span>
      <div class="price-wrap">
        <div :class="['yearly-pricing', toggle ? 'd-none' : 'd-block']">
          <span
            :class="[
              'amount',
              isPrimary
                ? 'color-primary'
                : isSecondary
                ? 'color-secondary'
                : isPink
                ? 'color-pink'
                : '',
            ]"
          >
            ${{ yearlyAmount }}
          </span>
          <span
            :class="[
              'duration',
              'ms-1',
              isPrimary
                ? 'color-primary'
                : isSecondary
                ? 'color-secondary'
                : isPink
                ? 'color-pink'
                : '',
            ]"
          >
            /{{ yearlyDuration }}
          </span>
        </div>
        <div :class="['monthly-pricing', toggle ? 'd-block' : 'd-none']">
          <span
            :class="[
              'amount',
              isPrimary
                ? 'color-primary'
                : isSecondary
                ? 'color-secondary'
                : isPink
                ? 'color-pink'
                : '',
            ]"
          >
            ${{ monthlyAmount }}.00
          </span>
          <span
            :class="[
              'duration',
              'ms-1',
              isPrimary
                ? 'color-primary'
                : isSecondary
                ? 'color-secondary'
                : isPink
                ? 'color-pink'
                : '',
            ]"
          >
            /{{ monthlyDuration }}
          </span>
        </div>
      </div>
    </div>
    <div v-if="styleType === 'two'" class="pricing-btn">
      <a
        :class="[
          'rbt-btn',
          !isActive ? 'bg-primary-opacity' : '',
          'hover-icon-reverse',
          'w-100',
        ]"
        href="#"
      >
        <div class="icon-reverse-wrapper">
          <span class="btn-text">Join Course Plan</span>
          <span class="btn-icon">
            <i class="feather-arrow-right"></i>
          </span>
          <span class="btn-icon">
            <i class="feather-arrow-right"></i>
          </span>
        </div>
      </a>
    </div>
    <div v-if="styleType === 'three'" class="pricing-btn">
      <a
        :class="[
          'rbt-btn',
          isPrimary
            ? 'bg-primary-opacity'
            : isSecondary
            ? 'bg-secondary-opacity'
            : isPink
            ? 'bg-pink-opacity'
            : '',
          'hover-icon-reverse',
          'w-100',
        ]"
        href="#"
      >
        <div class="icon-reverse-wrapper">
          <span class="btn-text">Join Course Plan</span>
          <span class="btn-icon">
            <i class="feather-arrow-right"></i>
          </span>
          <span class="btn-icon">
            <i class="feather-arrow-right"></i>
          </span>
        </div>
      </a>
    </div>
    <div class="pricing-body">
      <ul class="list-item">
        <li
          v-for="(item, innerIndex) in list"
          :key="innerIndex"
          :class="{ off: !item.isCheck }"
        >
          <i :class="['feather-' + (item.isCheck ? 'check' : 'x')]"></i>
          {{ item.text }}
        </li>
      </ul>
    </div>
    <div v-if="styleType === 'one'" class="pricing-btn">
      <a
        :class="[
          'rbt-btn',
          !isActive ? 'bg-primary-opacity' : '',
          'hover-icon-reverse',
          'w-100',
        ]"
        href="#"
      >
        <div class="icon-reverse-wrapper">
          <span class="btn-text">Join Course Plan</span>
          <span class="btn-icon">
            <i class="feather-arrow-right"></i>
          </span>
          <span class="btn-icon">
            <i class="feather-arrow-right"></i>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item", "parentClass", "styleType", "toggle"]);
const {
  title,
  badge,
  yearlyDuration,
  yearlyAmount,
  monthlyAmount,
  monthlyDuration,
  isActive,
  list,
  isPrimary,
  isSecondary,
  isPink,
} = props.item;
</script>
