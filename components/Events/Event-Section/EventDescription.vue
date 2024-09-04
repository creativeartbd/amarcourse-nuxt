<template>
  <div class="row g-5">
    <div class="col-lg-12">
      <div class="section-title">
        <h4 class="title mb--20">Event Description</h4>
      </div>
      <p>{{ getEventData.desc }}</p>
      <p>{{ getEventData.descTwo }}</p>
    </div>

    <div class="col-lg-6">
      <div class="section-title">
        <h4 class="title mb--20">Description</h4>
      </div>
      <ul class="rbt-list-style-1">
        <li
          v-for="(item, innerIndex) in getEventData.eventDescription"
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
