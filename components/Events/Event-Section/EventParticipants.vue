<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title text-start mb--20">
          <span class="subtitle bg-secondary-opacity">Event Participants</span>
          <h2 class="title">Event Participants</h2>
        </div>
      </div>
    </div>
    <div class="row g-5">
      <div
        v-for="(data, index) in getEventData.eventParticipants"
        :key="index"
        class="col-lg-6 col-md-6 col-12"
      >
        <div class="rbt-team team-style-default style-two rbt-hover">
          <div class="inner">
            <div class="thumbnail">
              <nuxt-img :src="data.img" alt="Corporate Template" />
            </div>
            <div class="content">
              <h2 class="title">{{ data.name }}</h2>
              <h6 class="subtitle theme-gradient">{{ data.type }}</h6>
              <span class="team-form">
                <i class="feather-map-pin"></i>
                <span class="location">{{ data.location }}</span>
              </span>
              <p class="description">{{ data.desc }}</p>
              <ul class="social-icon social-default icon-naked mt--20">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["getEventData"]);
</script>

<style scoped>
/* Add your styles here */
</style>
