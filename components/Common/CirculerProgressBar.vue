<template>
  <span style="height: 0px; width: 0px" ref="targetElement"> </span>
  <ClientOnly>
    <svg
      class="CircularProgressbar circle-text count"
      viewBox="0 0 100 100"
      data-test-id="CircularProgressbar"
    >
      <path
        class="CircularProgressbar-trail"
        style="
          stroke: #f6f6f6;
          stroke-dasharray: 298.45130209103036px 298.45130209103036px;
          stroke-dashoffset: 0px;
        "
        d="
      M 50,50
      m 0,-47.5
      a 47.5,47.5 0 1 1 0,95
      a 47.5,47.5 0 1 1 0,-95
    "
        stroke-width="5"
        fill-opacity="0"
      ></path>
      <path
        class="CircularProgressbar-path"
        d="
      M 50,50
      m 0,-47.5
      a 47.5,47.5 0 1 1 0,95
      a 47.5,47.5 0 1 1 0,-95
    "
        :style="`stroke-linecap: round;stroke: rgb(5, 157, 255);stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: ${
          298.451 - (countedNumber * 298.451) / 100
        };`"
        stroke-width="5"
        fill-opacity="0"
      ></path>

      <text
        style="
          font-variant-caps: middle;
          text-anchor: middle;
          fill: #6b7385;
          font-size: 16px !important;
          line-height: 1;
          font-weight: 600;
          color: var(--color-body);
          position: relative;
          margin-left: -14px;
        "
        x="50"
        y="50"
      >
        {{ countedNumber }}%
      </text>
    </svg></ClientOnly
  >
</template>

<script setup>
const targetElement = ref();
const props = defineProps(["max"]);

const countedNumber = ref(0);
const startCountup = () => {
  const intervalId = setInterval(() => {
    countedNumber.value += 1;

    // Check if counted.value has reached a specific value (e.g., props.max)
    if (countedNumber.value >= props.max) {
      // Stop the interval if the condition is met
      clearInterval(intervalId);
    }
  }, 2000 / props.max);
};
onMounted(() => {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCountup();
        observer.unobserve(entry.target);
        // Do something when the observed element enters the viewport
      }
    });
  }

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin around the root
    threshold: 0.5, // Trigger when 50% of the observed element is visible
  };

  // Create an Intersection Observer and pass in the callback function and options
  const observer = new IntersectionObserver(handleIntersection, options);

  // Start observing the target element

  observer.observe(targetElement?.value);
});
</script>

<style lang="scss" scoped></style>
