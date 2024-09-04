<template>
  <div class="inner">
    <a
      :class="`video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15 ${
        hideOnScroll ? 'd-none' : ''
      }`"
      data-vbtype="video"
      href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
    >
      <div class="video-content">
        <nuxt-img
          v-if="getEventData.eventImg"
          class="w-100 rbt-radius"
          :src="getEventData.eventImg"
          alt="Video Images"
        />

        <div class="position-to-top">
          <span class="rbt-btn rounded-player-2 with-animation">
            <span class="play-icon"></span>
          </span>
        </div>
        <span class="play-view-text d-block color-white">
          <i class="feather-eye"></i> Preview this course
        </span>
      </div>
    </a>
    <client-only>
      <div class="content pt--30">
        <div class="add-to-card-button mb--15">
          <a
            class="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
            href="#"
            @click="() => addEventsToCart(getEventData?.id)"
          >
            <span class="btn-text">{{
              isAddedToCartEvents(getEventData?.id)
                ? "Already Added"
                : "Add to Cart"
            }}</span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
          </a>
        </div>
        <div class="buy-now-btn">
          <a
            class="rbt-btn btn-border icon-hover w-100 d-block text-center"
            href="#"
          >
            <span class="btn-text">Book Now</span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
          </a>
        </div>

        <div
          :class="`rbt-widget-details has-show-more ${!toggle ? 'active' : ''}`"
        >
          <ul
            class="has-show-more-inner-content rbt-course-details-list-wrapper"
          >
            <li
              v-for="(item, innerIndex) in getEventData.roadmap"
              :key="innerIndex"
            >
              <span>{{ item.text }}</span>
              <span class="rbt-feature-value rbt-badge-5">{{ item.desc }}</span>
            </li>
          </ul>
          <div
            :class="`rbt-show-more-btn ${!toggle ? 'active' : ''}`"
            @click="toggle = !toggle"
          >
            Show More
          </div>
        </div>

        <div class="social-share-wrapper mt--30 text-center">
          <div
            class="rbt-post-share d-flex align-items-center justify-content-center"
          >
            <ul
              class="social-icon social-default transparent-with-border justify-content-center"
            >
              <li>
                <a href="https://www.facebook.com/">
                  <i class="feather-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <i class="feather-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i class="feather-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkdin.com/">
                  <i class="feather-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr class="mt--20" />
          <div class="contact-with-us text-center">
            <p>For details about the course</p>
            <p class="rbt-badge-2 mt--10 justify-content-center w-100">
              <i class="feather-phone mr--5"></i> Call Us:{{ " " }}
              <a href="#">
                <strong>+444 555 666 777</strong>
              </a>
            </p>
          </div>
        </div>
      </div></client-only
    >
  </div>
</template>

<script setup>
import { addEventsToCart, isAddedToCartEvents } from "~/context/cart/event";

const toggle = ref(false);
const hideOnScroll = ref(false);
// =====> Start ADD-To-Cart
defineProps(["getEventData"]);

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  const isHide = currentScrollPos > 250;
  hideOnScroll.value = isHide;
};
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });

  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
