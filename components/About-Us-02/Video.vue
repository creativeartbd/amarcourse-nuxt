<template>
  <div class="rbt-video-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="video-popup-wrapper">
            <nuxt-img
              class="w-100 rbt-radius"
              src="/images/bg/bg-image-12.jpg"
              alt="Video Images"
            />
            <a
              class="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-theme-color"
              data-vbtype="video"
              controls
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span class="play-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Assuming the `img` import points to the correct image path

// Importing CSS directly in Vue 3 setup
import "venobox/dist/venobox.min.css";

// Importing venobox library dynamically
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });
});
</script>

<style scoped>
/* You can add scoped styles here */
</style>
