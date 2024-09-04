<template>
  <NuxtLoadingIndicator :height="5" :duration="2000" />

  <slot></slot>
  <CommonScrollTop />
  <HeaderOffcanvasCart />
  <DarkSwitch />
</template>

<script setup>
import "sal.js/dist/sal.css";
import DarkSwitch from "~/components/Common/DarkSwitch.vue";
onMounted(() => {
  // Check if the window object is defined
  if (typeof window !== "undefined") {
    // Import the script only on the client side
    import("bootstrap/dist/js/bootstrap.esm").then((module) => {
      // Module is imported, you can access any exported functionality if
    });
  }

  // sal({
  //   threshold: 0.01,
  //   once: true,
  // });
});
</script>
