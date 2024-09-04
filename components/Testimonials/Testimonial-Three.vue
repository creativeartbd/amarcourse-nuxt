<template>
  <div class="rbt-testimonial-area bg-color-white rbt-section-gap">
    <div v-if="testimonialData" class="container">
      <div
        class="row"
        v-for="(data, index) in testimonialData.testimonialThree"
        :key="index"
      >
        <div class="col-lg-12 mb--60">
          <div class="section-title text-center">
            <span :class="`subtitle ${subTitleBg}`">{{ data.tag }}</span>
            <h2 class="title">{{ data.title }}</h2>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="rbt-accordion-style rbt-accordion-01 accordion">
              <div class="accordion" id="accordionExamplea1">
                <div
                  class="accordion-item card"
                  v-for="(item, innerIndex) in data.accordion"
                  :key="innerIndex"
                >
                  <h2 class="accordion-header card-header" :id="item.heading">
                    <button
                      :class="`accordion-button ${
                        !item.collapsed ? 'collapsed' : ''
                      }`"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#${item.collapse}`"
                      :aria-expanded="item.expanded"
                      :aria-controls="item.collapse"
                    >
                      {{ item.btnText }}
                    </button>
                  </h2>
                  <div
                    :id="item.collapse"
                    :class="`accordion-collapse collapse ${
                      item.show ? 'show' : ''
                    }`"
                    :aria-labelledby="item.heading"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div class="accordion-body card-body">
                      {{ item.desc }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <Swiper
              :slide-per-view="1"
              :modules="[Pagination]"
              :pagination="{
                el: '.rbt-swiper-pagination',
                clickable: true,
              }"
              class="swiper testimonial-activation-1 rbt-dot-bottom-left pb--60"
            >
              <SwiperSlide
                v-for="(item, innerIndex) in data.body"
                :key="innerIndex"
                class="swiper-slide"
              >
                <div :class="`rbt-testimonial-box no-box-shadow ${bgClass}`">
                  <div class="inner">
                    <div class="clint-info-wrapper">
                      <div class="thumb">
                        <nuxt-img :src="item.img" :alt="item.title" />
                      </div>
                      <div class="client-info">
                        <h5 class="title">{{ item.title }}</h5>
                        <span :class="designation">
                          {{ item.position }} <i>{{ item.company }}</i>
                        </span>
                      </div>
                    </div>
                    <div class="description">
                      <p class="subtitle-3">{{ item.desc }}</p>
                      <template v-if="isStar">
                        <div class="rating mt--20">
                          <a href="#"><i class="fa fa-star"></i></a>{{ " " }}
                          <a href="#"><i class="fa fa-star"></i></a>{{ " " }}
                          <a href="#"><i class="fa fa-star"></i></a>{{ " " }}
                          <a href="#"><i class="fa fa-star"></i></a>{{ " " }}
                          <a href="#"><i class="fa fa-star"></i></a>{{ " " }}
                        </div>
                      </template>
                      <template v-else>
                        <a class="rbt-btn-link" href="#">
                          Read Project Case Study
                          <i class="feather-arrow-right"></i>
                        </a>
                      </template>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div class="rbt-swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import TestimonialData from "../../data/elements/testimonial.json";
import { Pagination } from "swiper/modules";
defineProps(["bgClass", "designation", "isStar", "subTitleBg"]);

const testimonialData = TestimonialData;
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
