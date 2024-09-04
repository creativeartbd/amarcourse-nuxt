<template>
  <div class="wrapper">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-violet-opacity">{{ tag }}</span>
            <h2 class="title">{{ title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["tag", "title"]);
</script>

<style lang="scss" scoped></style>
