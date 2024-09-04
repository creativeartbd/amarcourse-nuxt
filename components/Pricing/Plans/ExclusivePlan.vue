<template>
  <div :class="`pricing-table ${parentClass} ${item.isActive ? 'active' : ''}`">
    <div class="pricing-header">
      <h3
        :class="[
          'title',
          {
            'color-primary': isPrimary,
            'color-secondary': isSecondary,
            'color-pink': isPink,
          },
        ]"
      >
        {{ title }}
      </h3>
      <span class="rbt-badge mb--35">{{ badge }}</span>
      <div class="price-wrap">
        <div
          :class="['yearly-pricing', { 'd-none': toggle, 'd-block': !toggle }]"
        >
          <span
            :class="[
              'amount',
              {
                'color-primary': isPrimary,
                'color-secondary': isSecondary,
                'color-pink': isPink,
              },
            ]"
          >
            ${{ yearlyAmount }}
          </span>
          <span
            :class="[
              'duration',
              'ms-1',
              {
                'color-primary': isPrimary,
                'color-secondary': isSecondary,
                'color-pink': isPink,
              },
            ]"
          >
            /{{ yearlyDuration }}
          </span>
        </div>
        <div
          :class="['monthly-pricing', { 'd-block': toggle, 'd-none': !toggle }]"
        >
          <span
            :class="[
              'amount',
              {
                'color-primary': isPrimary,
                'color-secondary': isSecondary,
                'color-pink': isPink,
              },
            ]"
          >
            ${{ monthlyAmount }}.00
          </span>
          <span
            :class="[
              'duration',
              'ms-1',
              {
                'color-primary': isPrimary,
                'color-secondary': isSecondary,
                'color-pink': isPink,
              },
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
          { 'bg-primary-opacity': !isActive },
          'hover-icon-reverse',
          'w-100',
        ]"
        href="#"
      >
        <div class="icon-reverse-wrapper">
          <span class="btn-text">Join Course Plan</span>
          <span class="btn-icon"><i class="feather-arrow-right"></i></span>
          <span class="btn-icon"><i class="feather-arrow-right"></i></span>
        </div>
      </a>
    </div>
    <div v-if="styleType === 'three'" class="pricing-btn">
      <a
        :class="[
          'rbt-btn',
          {
            'bg-primary-opacity': isPrimary,
            'bg-secondary-opacity': isSecondary,
            'bg-pink-opacity': isPink,
          },
          'hover-icon-reverse',
          'w-100',
        ]"
        href="#"
      >
        <div class="icon-reverse-wrapper">
          <span class="btn-text">Join Course Plan</span>
          <span class="btn-icon"><i class="feather-arrow-right"></i></span>
          <span class="btn-icon"><i class="feather-arrow-right"></i></span>
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
          <i
            :class="['feather', item.isCheck ? 'feather-check' : 'feather-x']"
          ></i>
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
