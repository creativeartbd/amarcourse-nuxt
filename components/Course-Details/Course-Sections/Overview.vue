<template>
  <div
    :class="`rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more ${
      toggle ? 'active' : ''
    }`"
    id="overview"
  >
    <div class="rbt-course-feature-inner has-show-more-inner-content">
      <div class="section-title">
        <h4 class="rbt-title-style-3">{{ checkMatchCourses.title }}</h4>
      </div>
      <p>{{ checkMatchCourses.desc }}</p>

      <div class="row g-5 mb--30">
        <div class="col-lg-6">
          <ul class="rbt-list-style-1">
            <li
              v-if="checkMatchCourses.overviewList"
              v-for="(item, innerIndex) in checkMatchCourses.overviewList.slice(
                0,
                4
              )"
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
              v-if="checkMatchCourses.overviewList"
              v-for="(item, innerIndex) in checkMatchCourses.overviewList.slice(
                4,
                8
              )"
              :key="innerIndex"
            >
              <i class="feather-check"></i>
              {{ item.listItem }}
            </li>
          </ul>
        </div>
      </div>
      <p>{{ checkMatchCourses.descTwo }}</p>
    </div>
    <div
      class="rbt-show-more-btn"
      :class="{ active: toggle }"
      @click="toggle = !toggle"
    >
      Show More
    </div>
  </div>
</template>

<script setup>
defineProps(["checkMatchCourses"]);

const toggle = ref(false);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
