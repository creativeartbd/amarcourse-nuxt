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
              <h4>
                The Complete JavaScript Course 2023: From Zero to Expert!.
              </h4>
              <div class="bg-color-white rbt-shadow-box">
                <h5 class="rbt-title-style-3">Your Assignment</h5>
                <p>Content Here</p>
                <div class="submit-btn">
                  <nuxt-link
                    class="rbt-btn btn-gradient hover-icon-reverse"
                    to="/lesson-assignments-submit"
                  >
                    <span class="icon-reverse-wrapper">
                      <span class="btn-text">Submit Assignment</span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                    </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LessonPagination
          urlPrev="/lesson-quiz"
          urlNext="/lesson-assignments-submit"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
</script>

<style lang="scss" scoped></style>
