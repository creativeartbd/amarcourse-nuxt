<template>
  <div
    :class="`rbt-course-grid-column  ${
      isActiveListView ? 'active-list-view' : ''
    } `"
  >
    <div
      v-if="course?.length"
      v-for="(data, index) in course.slice(start, end)"
      class="course-grid-3"
      :key="index"
    >
      <div
        :class="`rbt-card variation-01 rbt-hover  ${
          isActiveListView ? 'card-list-2' : ''
        } `"
      >
        <div class="rbt-card-img">
          <nuxt-link :to="`/course-details/${data.id}`">
            <nuxt-img :src="data.courseImg" alt="Card image" />
            <div class="rbt-badge-3 bg-white">
              <span>-{{ data.offPrice }}%</span>
              <span>Off</span>
            </div>
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <div class="rbt-card-top">
            <div class="rbt-review">
              <div class="rating">
                <i
                  v-for="(elm, i) in Math.round(Number(data.star))"
                  :key="i"
                  class="fas fa-star"
                ></i>
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
            <li>
              <i class="feather-book"></i>
              {{ data.lesson }} Lessons
            </li>
            <li>
              <i class="feather-users"></i>
              {{ data.student }} Students
            </li>
          </ul>

          <p class="rbt-card-text">{{ data.desc }}</p>
          <div class="rbt-author-meta mb--10">
            <div class="rbt-avater">
              <a href="#">
                <nuxt-img :src="data.userImg" alt="Sophia Jaymes" />
              </a>
            </div>
            <div class="rbt-author-info">
              By
              <nuxt-link :to="`/profile/${data.id}`">{{
                data.userName
              }}</nuxt-link
              >{{ " " }} In <a href="#">{{ data.userCategory }}</a>
            </div>
          </div>
          <div class="rbt-card-bottom">
            <div class="rbt-price">
              <span class="current-price">${{ data.price }}</span>
              <span class="off-price">${{ data.offPrice }}</span>
            </div>
            <nuxt-link class="rbt-btn-link" :to="`/course-details/${data.id}`">
              Learn More<i class="feather-arrow-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 fs-25 text-white text-center">
      No Item Found. Try another filter
    </div>
  </div>
</template>

<script setup>
import { isActiveListView } from "~/utlis/courseLayout";

const props = defineProps(["course", "start", "end"]);
</script>

<style lang="scss" scoped></style>
