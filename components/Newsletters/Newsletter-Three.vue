<template>
  <div class="container">
    <div class="row g-5 align-items-center">
      <div
        v-for="(data, index) in newsletterData"
        :key="index"
        class="col-lg-5 col-md-12 col-12"
      >
        <div class="inner">
          <div class="section-title text-center text-lg-start">
            <h4 class="title">
              <strong>{{ data.subTitle }}</strong
              >
            </h4>
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-12 col-12 text-start text-sm-end">
        <form @submit.prevent="() => {}" class="newsletter-form-1 me-0">
          <input
            v-model="email"
            type="email"
            placeholder="Enter Your E-Email"
          />
          <button
            type="submit"
            class="rbt-btn btn-md btn-gradient hover-icon-reverse"
          >
            <span class="icon-reverse-wrapper">
              <span class="btn-text">Subscribe</span>
              <span class="btn-icon"><i class="feather-arrow-right"></i></span>
              <span class="btn-icon"><i class="feather-arrow-right"></i></span>
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsletterData from "../../data/elements/newsletter.json";
import { ref } from "vue";

const newsletterData = NewsletterData.newsletterTwo;
const email = ref("");
</script>
