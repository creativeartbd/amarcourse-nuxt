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
            <LessonQuiz />
          </div>
        </div>

        <LessonPagination urlPrev="/lesson" urlNext="/lesson-quiz-result" />
      </div>
    </div>
  </div>
</template>

<script setup>
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import LessonQuiz from "@/components/Lesson/LessonQuiz";
</script>

<style lang="scss" scoped></style>
