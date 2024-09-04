<template>
  <div
    class="rbt-banner-area rbt-banner-8 variation-03 section-bottom-overlay"
    id="home"
  >
    <HomeTechnologyBanner />
    <div class="banner-overlay-section">
      <TeamEight :head="false" />
    </div>
  </div>

  <div class="rbt-about-area bg-color-white rbt-section-gap" id="about">
    <div class="container">
      <AboutSaven />
    </div>
  </div>

  <div class="rbt-service-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-primary-opacity">
              EDUCATION FOR EVERYONE
            </span>
            <h2 class="title">Why Choose Us?</h2>
          </div>
        </div>
      </div>
      <Service :head="false" />
    </div>
  </div>

  <div
    class="rbt-course-banner-area rbt-section-gap bg-color-white"
    id="guideline"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner">
            <div class="section-title text-center mb--60">
              <h2 class="title">
                <span class="theme-gradient">Complete guideline</span> from
                absolute <br />
                beginners to getting hired.
              </h2>
              <div class="rbt-button-group mt--30">
                <nuxt-link
                  to="/course-filter-one-toggle"
                  class="rbt-btn btn-gradient hover-icon-reverse"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">Explore Course</span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                  </span>
                </nuxt-link>
                <nuxt-link
                  to="/course-filter-one-open"
                  class="rbt-btn hover-icon-reverse btn-border"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">Hired List</span>
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
            <div class="row g-5">
              <SingleCourseProp :courseData="SingleCourseData.certificate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="rbt-course-content rbt-section-gap bg-color-extra2"
    id="coursecontent"
  >
    <div class="container">
      <div class="row align-items-end mb--60">
        <div class="col-lg-6 col-md-6">
          <div class="section-title text-start">
            <h2 class="title">Course Content</h2>
            <p class="description has-small-font-size mt--10">
              32 sections • 376 lectures • 27h 8m total length
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="expend-button text-start text-md-end">
            <a class="rbt-btn-link w-700" href="#">
              Expand all sections<i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="row gy-5 row--30">
        <CourseLessonProp
          courseImg="/images/course/course-content.jpg"
          :courseContent="SingleCourseData.courseContent"
        />
      </div>
    </div>
  </div>

  <div class="rbt-brand-area bg-color-secondary-alt rbt-section-gap">
    <BrandThree />
  </div>

  <div class="rbt-video-area bg-color-white rbt-section-gap" id="career">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <div class="video-popup-wrapper">
            <nuxt-img
              class="w-100 rbt-radius"
              src="/images/others/video-05.jpg"
              alt="Video Images"
            />
            <a
              class="rbt-btn rounded-player popup-video position-to-top"
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
          <div class="inner pl--50 pl_lg--0 pl_md--0 pl_sm--0">
            <div class="section-title text-start">
              <h4 class="title">Build your Career Life.</h4>
              <p
                class="description mt--30 mt_md--15 mt_sm--15 mb_md--15 mb_sm--15"
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p class="mb_md--15 mb_sm--15">
                Convenient practice dolor sit adipisicing elit. Minima error
                reiciendis. far from the countries Vokalia and Consonantia,
                there live the blind texts far from the countries Vokalia and
                Consonantia.
              </p>
              <div class="view-all-button">
                <nuxt-link
                  class="rbt-btn btn-border hover-icon-reverse"
                  to="/course-filter-one-toggle"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">View All Courses</span>
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
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="thumb-wrapper bg-color-white rbt-section-gapBottom">
    <TestimonialFour />
  </div>

  <div class="thumb-wrapper bg-color-white rbt-section-gapBottom">
    <TeacherGallery />
  </div>

  <div class="rbt-newsletter-area bg-color-white rbt-section-gapBottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <NewsletterFour />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeTechnologyBanner from "./HomeTechnologyBanner";
import TeamEight from "../Team/TeamEight";
import AboutSaven from "../Abouts/About-Saven.vue";
import Service from "../Services/Service";
import BrandThree from "../Brand/Brand-Three.vue";
import SingleCourseProp from "../11-single-course/SingleCourseProp.vue";
import CourseLessonProp from "../11-single-course/CourseLessonProp.vue";
import TestimonialFour from "../Testimonials/Testimonial-Four.vue";
import TeacherGallery from "../Become-a-Teacher/TeacherGallery";
import NewsletterFour from "../Newsletters/Newsletter-Four.vue";

import SingleCourseData from "../../data/pages/11-singleCourse.json";
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });
});
</script>

<style lang="scss" scoped></style>
./HomeTechnologyBanner.vue../Team/TeamEight.vue../Services/Service.vue../Become-a-Teacher/TeacherGallery.vue
