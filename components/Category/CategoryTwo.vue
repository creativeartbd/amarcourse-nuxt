<template>
  <Swiper
    class="swiper category-activation-one rbt-arrow-between icon-bg-gray gutter-swiper-30 ptb--20"
    slides-per-view="1"
    :modules="[Navigation]"
    :navigation="{ nextEl: '.rbt-arrow-left', prevEl: '.rbt-arrow-right' }"
    :breakpoints="{
      481: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    }"
  >
    <SwiperSlide
      class="swiper-wrapper"
      v-for="(item, innerIndex) in CourseDetails.courseDetails.slice(0, 8)"
      :key="innerIndex"
    >
      <div class="swiper-slide">
        <div class="single-slide">
          <nuxt-link
            class="rbt-cat-box rbt-cat-box-1 text-center"
            :to="`/course-filter-one-toggle/${item.category}`"
          >
            <div class="inner">
              <div class="icons">
                <nuxt-img :src="item.cateSmallImg" alt="Icons Images" />
              </div>
              <div class="content">
                <h5 class="title">{{ item.category }}</h5>
                <div class="read-more-btn">
                  <span class="rbt-btn-link">
                    {{ categoryCounts[item.category] || 0 }} Course{{
                      categoryCounts[item.category] !== 1 ? "s" : ""
                    }}
                    <i class="feather-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </nuxt-link>
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
import CourseDetails from "../../data/course-details/courseData.json";
const useCategoryCount = (course) => {
  const categoryCounts = course.reduce((counts, course) => {
    counts[course.category] = (counts[course.category] || 0) + 1;
    return counts;
  }, {});

  return { categoryCounts };
};

const { categoryCounts } = useCategoryCount(CourseDetails.courseDetails);
const count = 1;
</script>

<style scoped>
/* Your component-specific styles here */
</style>
