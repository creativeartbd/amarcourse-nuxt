<template>
  <div
    v-if="CourseData.courseDetails"
    v-for="(data, index) in CourseData.courseDetails.slice(start, end)"
    :key="index"
    :class="[col, mt]"
    data-sal-delay="150"
    data-sal="slide-up"
    data-sal-duration="800"
  >
    <div class="rbt-card variation-01 rbt-hover">
      <div class="rbt-card-img">
        <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">
          <nuxt-img :src="data.courseImg" alt="Card image" />
          <template v-if="data.offPrice > 0">
            <div class="rbt-badge-3 bg-white">
              <span>-{{ data.offPrice }}%</span>
              <span>Off</span>
            </div>
          </template>
        </nuxt-link>
      </div>
      <div class="rbt-card-body">
        <div class="rbt-card-top">
          <div class="rbt-review">
            <div class="rating">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
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
          <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">{{
            data.courseTitle
          }}</nuxt-link>
        </h4>

        <ul class="rbt-meta">
          <li><i class="feather-book"></i>{{ data.lesson }} Lessons</li>
          <li><i class="feather-users"></i>{{ data.student }} Students</li>
        </ul>
        <template v-if="isDesc">
          <p class="rbt-card-text">{{ data.desc }}</p>
        </template>
        <template v-if="isUser">
          <div class="rbt-author-meta mb--10">
            <div class="rbt-avater">
              <nuxt-link :to="`/profile/${data.id}`">
                <nuxt-img :src="data.userImg" alt="Sophia Jaymes" />
              </nuxt-link>
            </div>
            <div class="rbt-author-info">
              By
              <nuxt-link :to="`/profile/${data.id}`">{{
                data.userName
              }}</nuxt-link>
              In
              <a href="#">{{ data.userCategory }}</a>
            </div>
          </div>
        </template>
        <div class="rbt-card-bottom">
          <div class="rbt-price">
            <span class="current-price">${{ data.price }}</span>
            <span class="off-price">${{ data.offPrice }}</span>
          </div>
          <template v-if="data.button">
            <nuxt-link
              class="rbt-btn-link left-icon"
              :to="`/course-details/${data.id ? data.id : 1}`"
            >
              <i class="feather-shopping-cart"></i> Add To Cart
            </nuxt-link>
          </template>
          <template v-else>
            <nuxt-link
              class="rbt-btn-link"
              :to="`/course-details/${data.id ? data.id : 1}`"
            >
              Learn More<i class="feather-arrow-right"></i>
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseData from "../../data/course-details/courseData.json";

const props = defineProps({
  start: { type: Number, required: true },
  end: { type: Number, required: true },
  col: { type: String, default: "" },
  mt: { type: String, default: "" },
  isDesc: { type: Boolean, default: false },
  isUser: { type: Boolean, default: false },
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
