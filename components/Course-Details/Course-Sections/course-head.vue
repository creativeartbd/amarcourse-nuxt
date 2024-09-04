<template>
  <div v-if="path.includes('/course-details-2/')" class="container">
    <div class="row">
      <CourseBreadcrumbTwo :getMatchCourse="checkMatch && checkMatch" />
    </div>
  </div>
  <template v-else>
    <div class="breadcrumb-inner breadcrumb-dark">
      <nuxt-img src="/images/bg/bg-image-10.jpg" alt="Education Images" />
    </div>
    <div class="container">
      <div class="row">
        <CourseBreadcrumb :getMatchCourse="checkMatch && checkMatch" />
      </div></div
  ></template>
</template>

<script setup>
const route = useRoute();
const path = route.path;
import CourseBreadcrumb from "./Course-Breadcrumb";
import CourseBreadcrumbTwo from "./CourseBreadcrumb-Two";
defineProps(["checkMatch"]);
</script>

<style lang="scss" scoped></style>
