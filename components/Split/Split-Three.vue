<template>
  <div class="rbt-video-area rbt-section-gapBottom pt--50 bg-color-white">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <div class="inner pr--50">
            <div class="section-title text-start">
              <span class="subtitle bg-primary-opacity">How We Work</span>
              <h2 class="title">Build your Career And Upgrade Your Life</h2>
              <p class="description mt--30">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div class="read-more-btn">
                <a class="rbt-moderbt-btn" href="#">
                  <span class="moderbt-btn-text">Learn More About Us</span>
                  <i class="feather-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <div class="video-popup-wrapper">
            <img
              class="w-100 rbt-radius"
              src="/images/others/video-01.jpg"
              alt="Video Images"
            />
            <a
              class="popup-video position-to-top"
              data-vbtype="video"
              controls
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span><img src="/images/icons/youtube.png" alt="" /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({ selector: ".popup-video" });
  });
});
</script>
