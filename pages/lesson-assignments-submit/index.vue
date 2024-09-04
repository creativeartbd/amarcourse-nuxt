<template>
  <div class="rbt-lesson-area bg-color-white">
    <div class="rbt-lesson-content-wrapper">
      <div class="rbt-lesson-leftsidebar">
        <LessonSidebar />
      </div>

      <div class="rbt-lesson-rightsidebar overflow-hidden">
        <LessonTop />

        <div class="inner">
          <div class="content">
            <LessonAssignmentsSubmit />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonTop from "@/components/Lesson/LessonTop";
import LessonAssignmentsSubmit from "@/components/Lesson/LessonAssignmentsSubmit";
</script>

<style lang="scss" scoped></style>
