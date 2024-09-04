<template>
  <div
    class="rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer"
    style="padding-top: 145px"
  >
    <div class="wrapper w-100">
      <div class="container">
        <div class="row g-5 justify-content-between align-items-center">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="content">
              <div class="inner">
                <div class="section-title text-start">
                  <span class="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                </div>
                <h1 class="title">
                  Innovative
                  <span class="theme-gradient">Language Academic</span>
                  Platform for Your Career.
                </h1>
                <div class="rbt-like-total">
                  <div class="profile-share">
                    <a
                      href="#"
                      class="avatar"
                      data-tooltip="Mark JOrdan"
                      tabIndex="0"
                    >
                      <nuxt-img
                        src="/images/testimonial/client-04.png"
                        alt="education"
                      />
                    </a>
                    <a href="#" class="avatar" data-tooltip="Mark" tabIndex="0">
                      <nuxt-img src=/images/testimonial/client-05.png
                      :width='55' :height=55 alt="education" />
                    </a>
                    <a
                      href="#"
                      class="avatar"
                      data-tooltip="Jordan"
                      tabIndex="0"
                    >
                      <nuxt-img
                        src="/images/testimonial/client-06.png"
                        alt="education"
                      />
                    </a>
                    <div class="more-author-text">
                      <h5 class="total-join-students">
                        Join Over 3000+ Students
                      </h5>
                      <p class="subtitle">Have a new ideas every week.</p>
                    </div>
                  </div>
                </div>
                <div class="rbt-button-group justify-content-start mt--30">
                  <a class="rbt-btn btn-gradient rbt-switch-btn" href="#">
                    <span data-text="Sign Up Now">Sign Up Now</span>
                  </a>
                  <a class="rbt-btn btn-border rbt-switch-btn" href="#">
                    <span data-text="Find Courses">Find Courses</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2">
            <div class="thumbnail-wrapper">
              <div class="thumbnail text-end">
                <nuxt-img
                  width="597"
                  height="479"
                  src="/images/banner/language-club.png"
                  alt="Education Images"
                />
              </div>
              <div class="card-info bounce-slide">
                <div class="inner">
                  <div class="name">Hillery. <span>/ USA</span></div>
                  <div class="rating-wrapper d-block d-sm-flex">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <span>(Google Review)</span>
                  </div>
                </div>
                <div class="notify-icon">
                  <nuxt-img
                    src="/images/testimonial/client-12.png"
                    alt="Client Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row g-5">
        <CategoryFour />
      </div>
    </div>
  </div>

  <div class="rbt-course-card-area rbt-section-gap bg-color-white">
    <div class="container">
      <div class="row align-items-center mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-pink-opacity"> Our Language Courses </span>
            <h2 class="title">Language Courses</h2>
            <p class="description has-medium-font-size mt--20">
              Language Academy Courses?
            </p>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <div
          v-if="CourseDetails"
          v-for="(data, index) in getAllCourse"
          :key="index"
          class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <div class="rbt-card variation-03 rbt-hover">
            <div class="rbt-card-img">
              <nuxt-link
                class="thumbnail-link"
                :to="`/course-details/${data.id}`"
              >
                <nuxt-img
                  :src="data.courseImg"
                  width="355"
                  height="244"
                  alt="Card image"
                />
                <span class="rbt-btn btn-white icon-hover btn-md">
                  <span class="btn-text">Read More</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </span>
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <h4 class="rbt-card-title">
                <nuxt-link :to="`/course-details/${data.id}`">{{
                  data.courseTitle
                }}</nuxt-link>
              </h4>
              <div class="rbt-card-bottom">
                <nuxt-link
                  class="transparent-button"
                  :to="`/course-details/${data.id}`"
                >
                  <svg
                    width="17"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#27374D" fill="none" fill-rule="evenodd">
                      <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                      <path
                        stroke-linecap="square"
                        d="M.663 5.572h14.594"
                      ></path>
                    </g>
                  </svg>
                </nuxt-link>
              </div>
            </div>
            <div class="card-information">
              <div class="card-flag">
                <nuxt-img
                  :src="data.countryFlag"
                  width="21"
                  height="21"
                  alt="united-kingdom"
                />
              </div>
              <div class="card-count">{{ data.lesson }} programs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-counterup-area rbt-section-gapBottom bg-gradient-1">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-primary-opacity">Why Choose Us</span>
            <h2 class="title">Why Choose Histudy</h2>
            <p class="description has-medium-font-size mt--20 mb--0">
              Language Academic?
            </p>
          </div>
        </div>
      </div>
      <Counter :head="false" />
    </div>
  </div>

  <div
    class="rbt-about-area about-style-1 rbt-section-gapTop pb--30 pb_md--80 pb_sm--80 bg-color-white"
  >
    <div class="container">
      <AboutTwo />
    </div>
  </div>

  <div
    class="rbt-countdown-area bg_image bg_image--6 bg_image_fixed rbt-section-gap"
    data-black-overlay="5"
  >
    <div class="container">
      <CountDownTwo />
    </div>
  </div>

  <div class="rbt-rbt-blog-area rbt-section-gap bg-gradient-1">
    <div class="container">
      <div class="row mb--55 row--30 align-items-end">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-pink-opacity">Our Posts</span>
            <h2 class="title">Histudy News</h2>
            <p class="description has-medium-font-size mt--20">
              Language Academy Blog.
            </p>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <div
          v-if="BlogData"
          v-for="(data, index) in BlogData.blogGrid.slice(0, 3)"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12 col-12"
        >
          <div class="rbt-card variation-02 rbt-hover">
            <div class="rbt-card-img">
              <nuxt-link :to="`/blog-details/${data.id}`">
                <nuxt-img
                  :src="data.img"
                  width="450"
                  height="267"
                  priority
                  alt="Card image"
                />
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <h5 class="rbt-card-title">
                <nuxt-link :to="`/blog-details/${data.id}`">{{
                  data.title
                }}</nuxt-link>
              </h5>
              <p class="rbt-card-text">{{ data?.desc }}</p>
              <div class="rbt-card-bottom">
                <nuxt-link
                  class="transparent-button"
                  :to="`/blog-details/${data.id}`"
                >
                  Learn More
                  <i>
                    <svg
                      width="17"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fill-rule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                        <path
                          strokeLinecap="square"
                          d="M.663 5.572h14.594"
                        ></path>
                      </g>
                    </svg>
                  </i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";

import BlogData from "../../data/blog/blog.json";
import CourseDetails from "../../data/course-details/courseData.json";

import CategoryFour from "../Category/CategoryFour";
import Counter from "../Counters/Counter.vue";
import AboutTwo from "../Abouts/About-Two.vue";
import CountDownTwo from "../Counters/CountDownTwo";

let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.languageAcademy));
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
