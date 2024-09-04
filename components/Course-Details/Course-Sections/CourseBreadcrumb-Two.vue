<template>
  <div class="col-lg-8 offset-lg-2">
    <div class="content text-center">
      <div
        class="d-flex align-items-center flex-wrap justify-content-center mb--15 rbt-course-details-feature"
      >
        <div class="feature-sin best-seller-badge">
          <span class="rbt-badge-2">
            <span class="image" v-if="getMatchCourse.awardImg">
              <nuxt-img :src="getMatchCourse.awardImg" alt="Best Seller Icon" />
            </span>
            {{ getMatchCourse.sellsType }}
          </span>
        </div>
        <div class="feature-sin rating">
          <a href="#">{{ getMatchCourse.star }}</a>
          <a href="#" v-for="n in 5">
            <i class="fa fa-star"></i>
          </a>
        </div>
        <div class="feature-sin total-rating">
          <a class="rbt-badge-4" href="#"
            >{{ getMatchCourse.ratingNumber }} rating</a
          >
        </div>
        <div class="feature-sin total-student">
          <span>{{ getMatchCourse.studentNumber }} students</span>
        </div>
      </div>
      <h2 class="title theme-gradient">{{ getMatchCourse.courseTitle }}</h2>
      <div class="rbt-author-meta mb--20 justify-content-center">
        <div class="rbt-avater">
          <nuxt-link :to="`/profile/${getMatchCourse.id}`">
            <nuxt-img
              v-if="getMatchCourse.userImg"
              :src="getMatchCourse.userImg"
              :alt="getMatchCourse.userName"
            />
          </nuxt-link>
        </div>
        <div class="rbt-author-info">
          By
          <nuxt-link :to="`/profile/${getMatchCourse.id}`">{{
            getMatchCourse.userName
          }}</nuxt-link>
          In <a href="#">{{ getMatchCourse.userCategory }}</a>
        </div>
      </div>
      <ul class="rbt-meta">
        <li>
          <i class="feather-calendar"></i>Last updated {{ getMatchCourse.date }}
        </li>
        <li><i class="feather-globe"></i>{{ getMatchCourse.language }}</li>
        <li><i class="feather-award"></i>{{ getMatchCourse.courseAward }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps(["getMatchCourse"]);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
