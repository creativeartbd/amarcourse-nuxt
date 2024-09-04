<template>
  <div class="row g-5">
    <div class="col-lg-7">
      <div class="rbt-team-tab-content tab-content" id="myTabContent">
        <div
          v-for="(data, index) in teamData"
          :key="index"
          :class="{
            'tab-pane': true,
            fade: !data.isActive,
            active: data.isActive,
            show: data.isActive,
          }"
          :id="`team-tab${index}`"
          role="tabpanel"
          :aria-labelledby="`team-tab${index}-tab`"
        >
          <div
            v-for="(item, innerIndex) in data.details"
            :key="innerIndex"
            class="inner"
          >
            <div class="rbt-team-thumbnail">
              <div class="thumb">
                <nuxt-img
                  :width="415"
                  :height="555"
                  :src="item.img"
                  priority
                  alt="Testimonial Images"
                />
              </div>
            </div>
            <div class="rbt-team-details">
              <div class="author-info">
                <h4 class="title">{{ item.name }}</h4>
                <span class="designation theme-gradient">{{ item.type }}</span>
                <span class="team-form">
                  <i class="feather-map-pin"></i>
                  <span class="location">{{ item.location }}</span>
                </span>
              </div>
              <p>{{ item.desc }}</p>
              <ul
                class="social-icon social-default mt--20 justify-content-start"
              >
                <li>
                  <a href="https://www.facebook.com/"
                    ><i class="feather-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.twitter.com"
                    ><i class="feather-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"
                    ><i class="feather-instagram"></i
                  ></a>
                </li>
              </ul>
              <ul class="rbt-information-list mt--25">
                <li>
                  <a href="#"><i class="feather-phone"></i>{{ item.phone }}</a>
                </li>
                <li>
                  <a href="mailto:hello@example.com"
                    ><i class="feather-mail"></i>{{ item.email }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="top-circle-shape"></div>
      </div>
    </div>
    <div class="col-lg-5">
      <ul class="rbt-team-tab-thumb nav nav-tabs" id="myTab" role="tablist">
        <li v-for="(data, index) in teamData.slice(0, 6)" :key="index">
          <a
            :class="{ active: data.isActive }"
            :id="`team-tab${index}-tab`"
            data-bs-toggle="tab"
            :data-bs-target="`#team-tab${index}`"
            role="tab"
            :aria-controls="`team-tab${index}`"
            :aria-selected="data.isActive"
            href="#"
          >
            <div class="rbt-team-thumbnail">
              <div class="thumb">
                <nuxt-img
                  :width="415"
                  :height="555"
                  :src="data.img"
                  alt="Testimonial Images"
                />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import TeamData from "../../data/elements/team.json";

const teamData = ref(TeamData.team);
</script>

<style scoped>
/* Add your scoped styles here */
</style>
