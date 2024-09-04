<template>
  <div class="container">
    <TeamHead
      v-if="isHead"
      title="Team (Standard)."
      desc="Standard Image Style."
    />
    <div class="row row--15 mt_dec--30">
      <div
        v-for="(data, index) in teamSlice"
        :key="index"
        class="col-lg-4 col-md-6 col-12 mt--30"
      >
        <div
          v-for="(item, innerIndex) in data.details"
          :key="innerIndex"
          class="rbt-team team-style-default style-three rbt-hover"
        >
          <div class="inner">
            <div class="thumbnail">
              <nuxt-img
                :src="item.img"
                width="415"
                height="555"
                priority
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

defineProps(["isHead"]);
const teamSlice = TeamData?.team.slice(3, 6) || [];
</script>
