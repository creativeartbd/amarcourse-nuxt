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
            <div class="section-title">
              <p class="mb--10">Quiz</p>
              <h5>Musical Theory</h5>
            </div>
            <div
              class="rbt-dashboard-table table-responsive mobile-table-750 mt--30"
            >
              <LessonQuizResult />
            </div>
          </div>
        </div>

        <LessonPagination
          urlPrev="/lesson-quiz"
          urlNext="/lesson-assignments"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import LessonQuizResult from "@/components/Lesson/LessonQuizResult";
</script>

<style lang="scss" scoped></style>
