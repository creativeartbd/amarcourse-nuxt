<template>
  <div class="lesson-top-bar">
    <div class="lesson-top-left">
      <div class="rbt-lesson-toggle">
        <button
          :class="`lesson-toggle-active btn-round-white-opacity`"
          title="Toggle Sidebar"
          @click="toggleLessonSidebar"
        >
          <i class="feather-arrow-left"></i>
        </button>
      </div>
      <h5>The Complete Histudy 2023: From Zero to Expert!</h5>
    </div>
    <div class="lesson-top-right">
      <div class="rbt-btn-close">
        <nuxt-link
          to="/course-details/1"
          title="Go Back to Course"
          class="rbt-round-btn"
        >
          <i class="feather-x"></i>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const toggleLessonSidebar = () => {
  document
    .getElementsByClassName("lesson-toggle-active")[0]
    ?.classList.toggle("sidebar-hide");
  document
    .getElementsByClassName("rbt-lesson-leftsidebar")[0]
    ?.classList.toggle("sibebar-none");
};
</script>

<style lang="scss" scoped></style>
