<template>
  <div class="rbt-split-area bg-color-white rbt-section-gapTop overflow-hidden">
    <div class="wrapper">
      <div class="section-title text-center mb--60">
        <span class="subtitle bg-secondary-opacity">University Status</span>
        <h2 class="title">University Overview.</h2>
      </div>
      <div class="rbt-splite-style">
        <div class="split-wrapper">
          <div class="row g-0 align-items-center">
            <div class="col-lg-12 col-xl-6 col-12">
              <div class="thumbnail image-left-content">
                <img src="/images/split/split-01.jpg" alt="split Images" />
              </div>
            </div>
            <div class="col-lg-12 col-xl-6 col-12">
              <div class="split-inner">
                <div class="shape">
                  <img src="/images/shape/school.png" alt="Shape Images" />
                </div>
                <h4
                  class="title sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="200"
                >
                  Campus Information
                </h4>
                <p
                  class="description sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  Histudy we prepare you to launch your career by providing a
                  supportive, creative, and professional environment from which
                  to learn practical skills, build a network of industry
                  contacts.
                </p>
                <ul
                  class="split-list sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="350"
                >
                  <li>- Doug DeMarco, Design Prototyping Manager</li>
                  <li>- 108 million paying subscribers</li>
                  <li>- Over 1.7 billion hours of music played monthly</li>
                  <li>- 4,000+ employees working across 16 offices</li>
                </ul>
                <div
                  class="view-more-button mt--35 sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="400"
                >
                  <a class="rbt-moderbt-btn" href="#">
                    <span class="moderbt-btn-text">Schedule A Tour</span>
                    <i class="feather-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rbt-video-area rbt-section-gap bg-color-white">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <div class="inner pr--50 pr_md--0 pr_sm--0">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["isImg"]);
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({ selector: ".popup-video" });
  });
});
</script>

<style lang="scss" scoped></style>
