<template>
  <template v-if="!isExpired && targetDate && targetTime">
    <div
      v-for="(el, i) in Object.entries(remaining)"
      :key="i"
      class="countdown-container"
    >
      <span :key="el[1]" class="countdown-value">{{ el[1] }}</span>
      <span class="countdown-heading">{{ el[0] }}</span>
    </div>
  </template>
  <template v-else>
    <div class="countdown-container days">
      <span class="countdown-value">0</span>
      <span class="countdown-heading">Days</span>
    </div>
    <div class="countdown-container hours">
      <span class="countdown-value">0</span>
      <span class="countdown-heading">Hours</span>
    </div>
    <div class="countdown-container minutes">
      <span class="countdown-value">0</span>
      <span class="countdown-heading">Minutes</span>
    </div>
    <div class="countdown-container seconds">
      <span class="countdown-value">0</span>
      <span class="countdown-heading">Sec</span>
    </div>
  </template>
</template>

<script setup>
const props = defineProps(["targetDate", "targetTime"]);

const remaining = ref({
  days: 0,
  hour: 0,
  mins: 0,
  sec: 0,
});
const isExpired = ref(false);

let timer;
let distance;

const setDate = () => {
  const now = new Date().getTime();
  const countDownDate = new Date(
    props.targetDate + " " + props.targetTime
  ).getTime();

  distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(timer);
    isExpired.value = true;
  } else {
    remaining.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hour: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      sec: Math.floor((distance % (1000 * 60)) / 1000),
    };

    isExpired.value = false;
  }
};

const counter = () => {
  timer = setInterval(() => {
    setDate();
  }, 1000);
};

onMounted(() => {
  setDate();
  counter();
});
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="scss" scoped></style>
