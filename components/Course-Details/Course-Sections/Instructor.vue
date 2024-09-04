<template>
  <client-only>
    <div class="about-author border-0 pb--0 pt--0">
      <div class="section-title mb--30">
        <h4 class="rbt-title-style-3">{{ checkMatchCourses.title }}</h4>
      </div>
      <div
        v-for="(teacher, innerIndex) in checkMatchCourses.body"
        :key="innerIndex"
        class="media align-items-center"
      >
        <div class="thumbnail">
          <nuxt-link :to="`/profile/${teacher.id}`">
            <nuxt-img
              v-if="teacher.img"
              :src="teacher.img"
              alt="Author Images"
            />
          </nuxt-link>
        </div>
        <div class="media-body">
          <div class="author-info">
            <h5 class="title">
              <nuxt-link
                class="hover-flip-item-wrapper"
                :to="`/profile/${teacher.id}`"
                >{{ teacher.name }}</nuxt-link
              >
            </h5>
            <span class="b3 subtitle">{{ teacher.type }}</span>
            <ul class="rbt-meta mb--20 mt--10">
              <li>
                <i class="fa fa-star color-warning"></i>
                {{ teacher.ratingNumber }} Reviews
                <span class="rbt-badge-5 ml--5">{{ teacher.star }} Rating</span>
              </li>
              <li>
                <i class="feather-users"></i>
                {{ teacher.studentNumber }} Students
              </li>
              <li>
                <a href="#"
                  ><i class="feather-video"></i> {{ teacher.course }} Courses</a
                >
              </li>
            </ul>
          </div>
          <div class="content">
            <p class="description">{{ teacher.desc }}</p>
            <ul
              class="social-icon social-default icon-naked justify-content-start"
            >
              <li v-for="(social, index) in teacher.social" :key="index">
                <nuxt-link :to="social.link">
                  <i :class="`feather-${social.icon}`"></i>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div></div
  ></client-only>
</template>

<script setup>
defineProps(["checkMatchCourses"]);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
