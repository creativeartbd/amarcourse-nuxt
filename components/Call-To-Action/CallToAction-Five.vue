<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="rbt-cta-5">
            <div
              v-for="(data, index) in callToActionData"
              :key="index"
              class="content"
            >
              <h1 class="title">{{ data.title }}</h1>
              <p>{{ data.desc }}</p>
              <div class="rbt-button-group justify-content-start">
                <a class="rbt-btn btn-gradient" href="#"> Get Bundle </a>
                <a class="rbt-btn btn-border" href="#"> See Features </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CallToActionData from "../../data/elements/calltoaction.json";
import { ref } from "vue";

const callToActionData = CallToActionData.collectionFive;
</script>
