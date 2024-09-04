<template>
  <div class="row g-5">
    <div class="col-lg-6">
      <div class="video-popup-wrapper">
        <nuxt-img
          class="w-100 rbt-radius"
          src="/images/others/video-04.jpg"
          alt="Video Images"
        />
        <a
          class="rbt-btn btn-white rounded-player popup-video position-to-top"
          href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
          data-vbtype="video"
          controls
        >
          <span>
            <i class="feather-play"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="addmission-guide-content pl--50 pl_sm--0 pl_md--0 pl_lg--0">
        <h3 class="title">Guides to undergraduate study</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </p>
        <p>
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries.
        </p>
        <h5>The goal should be more than money</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div class="apply-btn">
          <a class="rbt-btn btn-gradient radius-round icon-hover" href="#">
            <span class="btn-text">Applying to University</span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
          </a>
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

<style lang="scss" scoped></style>
