<template>
  <div class="row">
    <div
      v-for="(data, index) in aboutData.aboutFive"
      :key="index"
      class="col-lg-10 offset-lg-1"
    >
      <div class="row row--0 about-wrapper align-items-center theme-shape">
        <div class="col-lg-6">
          <div class="thumbnail">
            <nuxt-img
              :src="data.authorImg"
              width="530"
              height="580"
              alt="About Images"
            />
          </div>
        </div>
        <div class="col-lg-6 mt_md--30 mt_sm--30">
          <div class="content">
            <div class="inner">
              <h4 class="title">
                I'm <span class="theme-gradient">{{ data.name }}</span> <br />
                {{ data.title }}
              </h4>
              <p>{{ data.info }}</p>
              <ul class="contact-address">
                <li><i class="feather-file"></i> {{ data.designation }}</li>
                <li><i class="feather-phone"></i> {{ data.phone }}</li>
                <li><i class="feather-map-pin"></i> {{ data.address }}</li>
              </ul>
              <div class="signature-image mt--20">
                <nuxt-img
                  :src="data.signature"
                  width="150"
                  height="83"
                  alt="Signature Images"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="top-circle-shape position-bottom-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutData from "../../data/elements/about.json";

const aboutData = AboutData;
</script>

<style scoped>
/* You can add scoped styles here */
</style>
