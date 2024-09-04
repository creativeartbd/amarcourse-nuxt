<template>
  <Swiper
    class="swiper category-activation-three rbt-arrow-between icon-bg-gray gutter-swiper-30 ptb--20"
    :slides-per-view="1"
    :modules="[Navigation]"
    :navigation="{ nextEl: '.rbt-arrow-left', prevEl: '.rbt-arrow-right' }"
    :breakpoints="{
      480: { slidesPerView: 1 },
      481: { slidesPerView: 2 },
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
          <div class="rbt-cat-box rbt-cat-box-1 variation-2 text-center">
            <div class="inner">
              <div class="thumbnail">
                <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">
                  <nuxt-img :src="item.cateBigImg" alt="Category Images" />
                </nuxt-link>
              </div>
              <div class="icons">
                <nuxt-img :src="item.cateSmallImg" alt="Icons Images" />
              </div>
              <div class="content">
                <h5 class="title">
                  <nuxt-link :to="`/course-filter-one-toggle/${item.category}`">
                    {{ item.category }}
                  </nuxt-link>
                </h5>
                <div class="read-more-btn">
                  <nuxt-link
                    class="rbt-btn-link"
                    :to="`/course-filter-one-toggle/${item.category}`"
                  >
                    {{ categoryCounts[item.category] || 0 }} Course{{
                      categoryCounts[item.category] !== 1 ? "s" : ""
                    }}
                    <i class="feather-arrow-right"></i>
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
import CourseDetails from "../../data/course-details/courseData.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
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
