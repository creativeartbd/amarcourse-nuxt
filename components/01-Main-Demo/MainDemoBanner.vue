<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 pb--120 pt--70 space-responsive-xxl">
        <div class="content">
          <div class="inner">
            <div class="rbt-new-badge rbt-new-badge-one">
              <span class="rbt-new-badge-icon">🏆</span> The Leader in Online
              Learning
            </div>

            <h1 class="title">
              Build The Skills <br />
              To Drive Your Career.
            </h1>
            <p class="description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
              <strong> Velit officia consequat.</strong>
            </p>
            <div class="slider-btn">
              <nuxt-link
                class="rbt-btn btn-gradient hover-icon-reverse"
                to="/course-filter-one-toggle"
              >
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">View Course</span>
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
          <div class="shape-wrapper" id="scene">
            <nuxt-img
              :width="1200"
              :height="1400"
              src="/images/banner/banner-01.png"
              alt="Hero Image"
            />
            <div class="hero-bg-shape-1 layer" data-depth="0.4">
              <nuxt-img
                width="428"
                height="377"
                src="/images/shape/shape-01.png"
                alt="Hero Image Background Shape"
              />
            </div>
            <div class="hero-bg-shape-2 layer" data-depth="0.4">
              <nuxt-img
                width="372"
                height="396"
                src="/images/shape/shape-02.png"
                alt="Hero Image Background Shape"
              />
            </div>
          </div>

          <div
            class="banner-card pb--60 swiper rbt-dot-bottom-center banner-swiper-active"
          >
            <HomeCourses :start="0" :end="3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeCourses from "./Home-Sections/HomeCourse.vue";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
