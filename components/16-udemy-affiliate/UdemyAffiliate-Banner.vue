<template>
  <Swiper
    class="swiper udemy-affilite-activation rbt-arrow-between"
    :slides-per-view="1"
    :modules="[Navigation]"
    :navigation="{
      nextEl: '.rbt-arrow-left',
      prevEl: '.rbt-arrow-right',
    }"
  >
    <SwiperSlide
      v-for="(data, index) in CourseData.courseDetails.slice(8, 12)"
      class="swiper-wrapper"
      :key="index"
    >
      <div class="swiper-slide">
        <div class="row gy-5 row--30 align-items-center">
          <div class="col-lg-6">
            <div class="course-thumbnail">
              <nuxt-link :to="`/course-details/${data.id}`">
                <nuxt-img
                  :width="710"
                  :height="488"
                  class="radius-6"
                  :src="data.courseImg"
                  alt="Course Images"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content">
              <div class="inner text-start">
                <div class="section-title">
                  <span class="subtitle bg-secondary-opacity">
                    Enjoy Learning!
                  </span>
                </div>

                <div class="rbt-course-meta-wrapper d-flex align-items-center">
                  <div class="rbt-author-meta">
                    <div class="rbt-avater">
                      <nuxt-link :to="`/profile/${data.id}`">
                        <nuxt-img :src="data.userImg" alt="Sophia Jaymes" />
                      </nuxt-link>
                    </div>
                    <div class="rbt-author-info">
                      By
                      <nuxt-link :to="`/profile/${data.id}`">
                        {{ data.userName }} </nuxt-link
                      >{{ " " }} In <a>{{ data.userCategory }}</a>
                    </div>
                  </div>

                  <div class="feature-sin rating">
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                    <a class="rbt-title-style-2" href="#"> (4.8) </a>
                  </div>
                </div>

                <h2 class="banner-title">
                  Learn {{ data.language }} in{{ " " }}
                  <span class="theme-gradient"> {{ data.lesson }} weeks </span
                  >{{ " " }} with spoken.
                </h2>

                <p class="description has-medium-font-size mt--20">
                  {{ data.desc }}
                </p>

                <div class="slider-btn rbt-button-group justify-content-start">
                  <nuxt-link
                    to="/login"
                    class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                  >
                    <span data-text="ENROLL NOW">ENROLL NOW</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <div class="rbt-swiper-arrow rbt-arrow-left">
      <div class="custom-overfolow">
        <i class="rbt-icon feather-arrow-left"></i>
        <i class="rbt-icon-top feather-arrow-left"></i>
      </div>
    </div>
    <div class="rbt-swiper-arrow rbt-arrow-right">
      <div class="custom-overfolow">
        <i class="rbt-icon feather-arrow-right"></i>
        <i class="rbt-icon-top feather-arrow-right"></i>
      </div>
    </div>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
defineProps(["CourseData"]);
</script>

<style lang="scss" scoped></style>
