<template>
  <div class="container">
    <TeamHead
      title="Team (Hover Bottom Content)."
      desc="Awesome Hover Bottom Content."
    />
    <div class="row row--15 mt_dec--30">
      <div
        v-for="(data, index) in slicedTeamData"
        :key="index"
        class="col-lg-4 col-md-6 col-12 mt--30"
      >
        <div
          v-for="(item, innerIndex) in data.details"
          :key="innerIndex"
          class="team team-style--bottom"
        >
          <div class="thumbnail">
            <nuxt-img
              :width="415"
              :height="555"
              :src="item.img"
              alt="Blog Images"
            />
          </div>
          <div class="content">
            <h4 class="title">{{ item.name }}</h4>
            <p class="designation">{{ item.type }}</p>
          </div>
          <ul class="social-icon">
            <li>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TeamData from "../../data/elements/team.json";
import TeamHead from "./TeamHead.vue";

const slicedTeamData = ref(TeamData?.team.slice(4, 7) || []);
</script>
