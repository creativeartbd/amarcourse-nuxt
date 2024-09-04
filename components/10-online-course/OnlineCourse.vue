<template>
  <div class="rbt-banner-area rbt-banner-8 variation-01 bg_image bg_image--9">
    <div class="wrapper w-100">
      <div class="container">
        <OnlineCourseBanner />
      </div>
    </div>
  </div>

  <div
    class="rbt-testimonial-area rbt-section-gapBottom overflow-hidden mt_dec--120 mt_lp_dec--30 mt_lg_dec--30 mt_md_dec--30 mt_sm_dec--30"
  >
    <TestimonialTwo />
  </div>

  <div class="rbt-categories-area bg-color-white rbt-section-gapBottom">
    <div class="container">
      <div class="row">
        <CategoryThree />
      </div>
    </div>
  </div>

  <div class="rbt-rbt-course-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <div class="row g-5 align-items-center mb--50">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title">
            <h2 class="title">Course Outline</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="load-more-btn text-start text-md-end">
            <nuxt-link
              class="rbt-btn btn-gradient rbt-marquee-btn radius-round"
              to="/course-filter-one-toggle"
            >
              <span data-text="View All Courses">View All Courses</span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <div
          v-for="(data, index) in getAllCourse.slice(0, 4)"
          :key="index"
          class="col-lg-6 col-md-6 col-sm-6 col-12"
        >
          <div class="rbt-card variation-01 rbt-hover card-list-2">
            <div class="rbt-card-img">
              <nuxt-link :to="`/course-details/${data.id}`">
                <nuxt-img
                  :src="data.courseImg"
                  width="231"
                  height="324"
                  alt="Card image"
                />
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <div class="rbt-card-top">
                <div class="rbt-review">
                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <span class="rating-count">({{ data.review }} Reviews)</span>
                </div>
                <div class="rbt-bookmark-btn">
                  <a class="rbt-round-btn" title="Bookmark" href="#">
                    <i class="feather-bookmark"></i>
                  </a>
                </div>
              </div>

              <h4 class="rbt-card-title">
                <nuxt-link :to="`/course-details/${data.id}`">
                  {{ data.courseTitle }}
                </nuxt-link>
              </h4>

              <ul class="rbt-meta">
                <li><i class="feather-book"></i> {{ data.lesson }} Lessons</li>
                <li>
                  <i class="feather-users"></i> {{ data.student }} Students
                </li>
              </ul>

              <p class="rbt-card-text">{{ data.desc.substring(0, 50) }}...</p>
              <div class="rbt-author-meta mb--10">
                <div class="rbt-avater">
                  <nuxt-link :to="`/profile/${data.id}`">
                    <nuxt-img
                      :src="data.userImg"
                      width="33"
                      height="33"
                      alt="Sophia Jaymes"
                    />
                  </nuxt-link>
                </div>
                <div class="rbt-author-info">
                  By
                  <nuxt-link :to="`/profile/${data.id}`">{{
                    data.userName
                  }}</nuxt-link>
                  In <a href="#">{{ data.userCategory }}</a>
                </div>
              </div>
              <div class="rbt-card-bottom">
                <div class="rbt-price">
                  <span class="current-price">${{ data.price }}</span>
                  <span class="off-price">${{ data.offPrice }}</span>
                </div>
                <nuxt-link
                  class="rbt-btn-link"
                  :to="`/course-details/${data.id}`"
                >
                  Learn More
                  <i class="feather-arrow-right"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-service-area bg-color-white rbt-section-gapBottom">
    <div class="container">
      <ServiceSaven :head="false" />
    </div>
  </div>

  <div class="rbt-course-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity">Courses</span>
            <h2 class="title">Histudy All Courses</h2>
          </div>
        </div>
      </div>
      <CourseSix />
    </div>
  </div>

  <div class="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
    <div class="container">
      <AboutSix
        btnClass="btn-gradient radius-round rbt-marquee-btn marquee-text-y"
        btnText="More About Us"
      />
    </div>
  </div>

  <div class="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
    <CallToActionSix />
  </div>

  <div class="rbt-contact-me bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <div class="content">
            <div class="section-title text-start">
              <h2 class="title">
                Want to stay informed about new courses & histudy?
              </h2>
              <p class="description mt--20">
                Histudy educational platform ipsum dolor sit amet consectetur
                adipisicing elit. Nam inventore praesentium alias incidunt!
                Veritatis.
              </p>
              <div class="social-share-wrapper mt--30">
                <h5>You can also follow us on:</h5>
                <ul
                  class="social-icon social-default transparent-with-border justify-content-start mt--30"
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
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-xl-1">
          <div class="rbt-contact-form contact-form-style-1 max-width-auto">
            <form @submit.prevent="() => {}" id="contact-form" class="w-100">
              <div class="form-group">
                <input name="con_name" type="text" placeholder="Name" />
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <input name="con_email" type="email" placeholder="Email" />
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <input type="text" placeholder="Phone" />
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <textarea placeholder="Message"></textarea>
                <span class="focus-border"></span>
              </div>
              <div class="form-submit-group">
                <button
                  type="submit"
                  class="rbt-btn radius-round btn-gradient hover-icon-reverse"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">GET IT NOW</span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-newsletter-area bg-gradient-6 ptb--50">
    <NewsletterThree />
  </div>
</template>

<script setup>
import sal from "sal.js";

import CourseDetails from "../../data/course-details/courseData.json";

import OnlineCourseBanner from "./OnlineCourseBanner";
import TestimonialTwo from "../Testimonials/Testimonial-Two.vue";
import CategoryThree from "../Category/CategoryThree.vue";
import ServiceSaven from "../Services/Service-Saven";
import CourseSix from "../Category/Filter/Course-Six.vue";
import AboutSix from "../Abouts/About-Six";
import CallToActionSix from "../Call-To-Action/CallToAction-Six.vue";
import NewsletterThree from "../Newsletters/Newsletter-Three.vue";
let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
