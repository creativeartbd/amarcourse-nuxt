<template>
  <div
    v-for="(data, index) in aboutData"
    :key="index"
    class="row gy-5 align-items-center row--30"
  >
    <div class="col-lg-7">
      <div class="content radius-6 overflow-hidden">
        <div class="plyr__video-embed rbtplayer">
          <iframe
            class="radius-6 overflow-hidden"
            src="https://www.youtube.com/embed/qKzhrXqT6oE"
            allowfullscreen
            allow="autoplay"
            width="636"
            height="414"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div class="inner">
        <div class="section-title text-start">
          <h2 class="title">{{ data.title }}</h2>
          <p class="description mt--20">
            <strong>{{ data.strong }}</strong> {{ data.desc }}
          </p>
          <div class="read-more-btn mt--40">
            <nuxt-link
              class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
              to="/pages/about-us-01"
            >
              <span data-text="About Histudy">About Histudy</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "plyr/dist/plyr.css";
import Plyr from "plyr";
import AboutData from "../../data/elements/about.json";

const aboutData = AboutData.aboutEight;

// Initialize Plyr player after component is mounted
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

<style scoped>
/* You can add scoped styles here */
</style>
