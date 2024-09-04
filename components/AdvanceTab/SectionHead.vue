<template>
  <div class="row mb--60">
    <div class="col-lg-12">
      <div class="section-title text-center">
        <span v-if="tag !== ''" class="subtitle bg-secondary-opacity">{{
          tag
        }}</span>
        <h2 class="title">{{ title }}</h2>
        <p v-if="desc !== ''" class="description mt--30">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["tag", "title", "desc"]);
</script>

<style scoped>
/* Your component-specific styles */
</style>
