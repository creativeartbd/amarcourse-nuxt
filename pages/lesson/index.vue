<template>
  <div class="rbt-lesson-area bg-color-white">
    <div class="rbt-lesson-content-wrapper">
      <div class="rbt-lesson-leftsidebar">
        <LessonSidebar />
      </div>

      <div class="rbt-lesson-rightsidebar overflow-hidden lesson-video">
        <LessonTop />
        <div class="inner">
          <div class="plyr__video-embed rbtplayer">
            <iframe
              src="https://www.youtube.com/embed/qKzhrXqT6oE"
              allowFullScreen
              allow="autoplay"
            ></iframe>
          </div>
          <div class="content">
            <div class="section-title">
              <h4>About Lesson</h4>
              <p>
                Let us analyze the greatest hits of the past and learn what
                makes these tracks so special.{{ " " }}
              </p>
            </div>
          </div>
        </div>
        <LessonPagination urlPrev="#" urlNext="/lesson-intro" />
      </div>
    </div>
  </div>
  <!-- <BackToTop /> -->
</template>

<script setup>
useSeoMeta({
  title: "Lesson || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Plyr from "plyr";

// import BackToTop from "../backToTop";
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
onMounted(() => {
  new Plyr(".rbtplayer", {
    muted: false,
    volume: 1,
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "fullscreen",
    ],
  });
});
</script>

<style lang="scss" scoped></style>
