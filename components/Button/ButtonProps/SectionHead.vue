<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="section-title text-center">
        <span :class="`subtitle ${textBg}`">{{ text }}</span>
        <h2 class="title">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "text", "textBg"]);
</script>
