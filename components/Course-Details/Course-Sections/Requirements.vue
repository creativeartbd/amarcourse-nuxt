<template>
  <div class="col-lg-6">
    <div class="section-title">
      <h4 class="rbt-title-style-3 mb--20">{{ checkMatchCourses.title }}</h4>
    </div>
    <ul class="rbt-list-style-1">
      <li
        v-for="(item, innerIndex) in checkMatchCourses.detailsList"
        :key="innerIndex"
      >
        <i class="feather-check"></i>
        {{ item.listItem }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(["checkMatchCourses"]);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
