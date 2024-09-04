<template>
  <div :class="['row', mb]">
    <div class="col-lg-12">
      <div class="section-title text-center">
        <span :class="['subtitle', bgClass]">{{ tag }}</span>
        <h2 class="title">
          {{ title }} <br />
          {{ subTitle }}
        </h2>
        <p class="description has-medium-font-size mt--20 mb--0">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["bgClass", "tag", "title", "subTitle", "desc", "mb"]);
</script>
