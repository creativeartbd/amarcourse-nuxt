<template>
  <div
    :class="`rbt-course-grid-column list-column-half ${
      isActiveListView ? 'active-list-view' : ''
    } `"
  >
    <div
      v-for="(data, index) in course"
      class="course-grid-4"
      data-sal-delay="150"
      data-sal="slide-up"
      data-sal-duration="800"
      :key="index"
    >
      <div
        :class="`rbt-card variation-01 rbt-hover ${
          isActiveListView ? 'card-list-2' : ''
        } `"
      >
        <div class="rbt-card-img">
          <nuxt-link :to="`/course-details-2/${data.id}`">
            <nuxt-img :src="data.courseImg" alt="Card image" />
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <div class="rbt-category">
            <a
              v-if="data.courseFor"
              v-for="(crs, i) in data.courseFor"
              :key="i"
              href="#"
            >
              {{ crs }}
            </a>
          </div>
          <h4 class="rbt-card-title">
            <nuxt-link :to="`/course-details-2/${data.id}`">
              {{ data.courseTitle }}
            </nuxt-link>
          </h4>
          <span class="lesson-number">
            {{ data.lesson }} lessons
            <span class="lesson-time ms-2">
              ({{ data.days }} hours total)
            </span>
          </span>
          <p class="rbt-card-text">
            It is a long established fact that a reader will be distracted.
          </p>
          <div class="rbt-card-bottom">
            <nuxt-link
              class="transparent-button"
              :to="`/course-details-2/${data.id}`"
            >
              Learn More
              <i class="feather-arrow-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";
import { isActiveListView } from "~/utlis/courseLayout";

defineProps(["course"]);
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
