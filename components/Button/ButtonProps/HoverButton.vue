<template>
  <div class="col-lg-12">
    <div :class="`rbt-button-group ${mt ? 'mt--30' : ''}`">
      <a :class="`rbt-btn ${switchBtnOne}`" href="#">
        <span :data-text="`Switch X`">{{ SwitchX }}</span>
      </a>
      <a :class="`rbt-btn ${switchBtnTwo}`" href="#">
        <span :data-text="`Switch Y`">{{ SwitchY }}</span>
      </a>
      <a :class="`rbt-btn ${marqueeBtnOne}`" href="#">
        <span :data-text="`Marquee X`">{{ MarqueeX }}</span>
      </a>
      <a :class="`rbt-btn ${marqueeBtnTwo}`" href="#">
        <span :data-text="`Marquee Y`">{{ MarqueeY }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps([
  "SwitchX",
  "SwitchY",
  "MarqueeX",
  "MarqueeY",
  "switchBtnOne",
  "switchBtnTwo",
  "marqueeBtnOne",
  "marqueeBtnTwo",
  "mt",
]);
</script>
