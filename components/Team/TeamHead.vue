<template>
  <div class="row mb--60">
    <div class="col-lg-12">
      <div class="section-title text-center">
        <h5 class="title">{{ title }}</h5>
        <p class="description mt--10">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "desc"]);
</script>

<style lang="scss" scoped></style>
