<template>
  <div class="container">
    <div v-if="callToActionData">
      <div
        v-for="(data, index) in callToActionData.collectionOne"
        :key="index"
        class="row g-5"
      >
        <div
          v-for="(item, innerIndex) in data.left"
          :key="innerIndex"
          class="col-lg-6"
        >
          <div
            class="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1"
          >
            <div class="row align-items-center">
              <div class="col-lg-12 col-xl-5">
                <div class="inner">
                  <div class="rbt-category mb--20">
                    <a href="#">{{ item.tag }}</a>
                  </div>
                  <h4 class="title mb--15">{{ item.title }}</h4>
                  <p class="mb--15">{{ item.desc }}</p>
                </div>
              </div>
              <div class="col-lg-12 col-xl-7">
                <div class="video-popup-wrapper mt_lg--10 mt_md--20 mt_sm--20">
                  <nuxt-img
                    class="w-100 rbt-radius"
                    :src="item.img"
                    alt="Video Images"
                  />
                  <a
                    class="rbt-btn rounded-player-2 sm-size popup-video position-to-top with-animation"
                    data-vbtype="video"
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                    controls
                  >
                    <span class="play-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(item, innerIndex) in data.right"
          :key="innerIndex"
          class="col-lg-6"
        >
          <div
            class="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1"
          >
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="inner">
                  <div class="rbt-category mb--20">
                    <a href="#">{{ item.tag }}</a>
                  </div>
                  <h4 class="title mb--10">{{ item.title }}</h4>
                  <p class="mb--15">{{ item.desc }}</p>
                  <div class="read-more-btn">
                    <nuxt-link
                      class="rbt-btn rbt-switch-btn btn-gradient btn-sm"
                      to="/login"
                    >
                      <span data-text="Join Now">Join Now</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import callToActionData from "../../data/elements/calltoaction.json";
import "venobox/dist/venobox.min.css";
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
