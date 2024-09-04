<template>
  <div class="container">
    <TeamHead title="Team (Card Box)." desc="Card Box Style." />
    <div class="row row--15 mt_dec--30">
      <div
        v-for="(data, index) in slicedTeamData"
        :key="index"
        class="col-lg-4 col-md-6 col-12 mt--30"
      >
        <div
          v-for="(item, innerIndex) in data.details"
          :key="innerIndex"
          class="rbt-team team-style-default style-two rbt-hover"
        >
          <div class="inner">
            <div class="thumbnail">
              <nuxt-img
                :width="415"
                :height="555"
                :src="item.img"
                alt="Corporate Template"
              />
            </div>
            <div class="content">
              <h2 class="title">{{ item.name }}</h2>
              <h6 class="subtitle theme-gradient">{{ item.type }}</h6>
              <span class="team-form">
                <i class="feather-map-pin"></i>
                <span class="location">{{ item.location }}</span>
              </span>
              <p class="description">{{ item.desc }}</p>
              <ul class="social-icon social-default icon-naked mt--20">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TeamHead from "./TeamHead.vue";

import TeamData from "../../data/elements/team.json";

const slicedTeamData = ref(TeamData?.team.slice(2, 5));
</script>
