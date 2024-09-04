<template>
  <div class="row g-5 align-items-center">
    <div class="col-lg-6 order-2 order-lg-1">
      <div class="content">
        <div class="inner">
          <div class="rbt-badge-group justify-content-start">
            <span class="meta-text d-flex align-items-center">
              <span class="icon">🎬</span> Video Online Course
            </span>
            <a href="#" class="rbt-badge-2">
              <div class="image">
                <nuxt-img
                  src="/images/testimonial/client-02.png"
                  alt="Education Images"
                />
              </div>
              {{ " " }} Learn with <strong>Fatima Asrafy</strong>
            </a>
          </div>
          <h1 class="title">Online Courses</h1>
          <p class="description has-medium-font-size mt--20">
            Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
            Redux, React Routing, Animations, Next.js and way more!
          </p>
          <div class="slider-btn rbt-button-group justify-content-start">
            <nuxt-link
              to="/login"
              class="rbt-btn btn-gradient radius-round hover-icon-reverse"
            >
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Log in to Start</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </nuxt-link>
            <a
              class="rbt-btn radius-round hover-icon-reverse btn-white"
              href="#"
            >
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Buy The Course</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5 offset-xl-1 order-1 order-lg-2">
      <div class="video-popup-wrapper">
        <nuxt-img
          class="w-100 rbt-radius"
          src="/images/others/video-02.jpg"
          alt="Video Images"
        />
        <a
          class="rbt-btn rounded-player-2 popup-video position-to-top with-animation"
          data-vbtype="video"
          controls
          href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
        >
          <span class="play-icon"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });
});
</script>

<style lang="scss" scoped></style>
