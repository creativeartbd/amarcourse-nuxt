<template>
  <span ref="targetElement">
    <ClientOnly> <Vue3Odometer format="d" :value="number" /></ClientOnly
  ></span>
</template>

<script setup>
import Vue3Odometer from "vue3-odometer";
const props = defineProps(["number"]);
const number = ref(0);
const targetElement = ref();
const startCount = () => {
  number.value = props.number / 1;
};
onMounted(() => {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCount();
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

  observer.observe(targetElement.value);
});
</script>

<style lang="scss" scoped></style>
