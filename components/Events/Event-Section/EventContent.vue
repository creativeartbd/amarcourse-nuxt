<template>
  <div class="row g-5">
    <div class="col-lg-12">
      <div class="section-title">
        <h4 class="title mb--0">Event Content</h4>
      </div>
    </div>

    <div class="col-lg-6">
      <ul class="rbt-list-style-1">
        <li
          v-for="(item, innerIndex) in getEventData.eventContent.slice(0, 4)"
          :key="innerIndex"
        >
          <i class="feather-check"></i>
          {{ item.listItem }}
        </li>
      </ul>
    </div>

    <div class="col-lg-6">
      <ul class="rbt-list-style-1">
        <li
          v-for="(item, innerIndex) in getEventData.eventContent.slice(4, 8)"
          :key="innerIndex"
        >
          <i class="feather-check"></i>
          {{ item.listItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps(["getEventData"]);
</script>

<style lang="scss" scoped></style>
