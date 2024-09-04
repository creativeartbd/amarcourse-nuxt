<template>
  <div
    v-for="(data, index) in relatedCourse.body"
    class="col-lg-4 col-md-6 col-sm-12 col-12"
    data-sal-delay="150"
    data-sal="slide-up"
    data-sal-duration="800"
    :key="index"
  >
    <div class="rbt-card variation-01 rbt-hover">
      <div class="rbt-card-img">
        <nuxt-link :to="`/course-details/${data.id}`">
          <nuxt-img :src="data.img" alt="Card image" />
          <div class="rbt-badge-3 bg-white">
            <span>-{{ data.discount }}%</span>
            <span>Off</span>
          </div>
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
            <span class="rating-count"> ({{ data.rating }} Reviews)</span>
          </div>
          <div class="rbt-bookmark-btn">
            <a class="rbt-round-btn" title="Bookmark" href="#">
              <i class="feather-bookmark"></i>
            </a>
          </div>
        </div>

        <h4 class="rbt-card-title">
          <nuxt-link :to="`/course-details/${data.id}`">{{
            data.title
          }}</nuxt-link>
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
            <nuxt-link :to="`/profile/${data.id}`">
              <nuxt-img :src="data.avatar" alt="Sophia Jaymes" />
            </nuxt-link>
          </div>
          <div class="rbt-author-info">
            By
            <nuxt-link :to="`/profile/${data.id}`">{{ data.author }}</nuxt-link>
            In{{ " " }}
            <a href="#">{{ data.post }}</a>
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
</template>

<script setup>
import sal from "sal.js";
defineProps(["relatedCourse"]);
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
