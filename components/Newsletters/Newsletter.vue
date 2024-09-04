<template>
  <div class="container bg-gradient-5 newsletter-style-1">
    <div
      v-for="(data, index) in NewsletterData.newsletterOne"
      class="row row--15 align-items-center"
      :key="index"
    >
      <div class="col-lg-12 col-xl-7">
        <div class="inner">
          <div class="section-title text-center text-xl-start">
            <span class="subtitle bg-secondary-opacity">
              {{ data.subTitle }}
            </span>
            <h2 class="title">
              <strong>{{ data.strong }}</strong> {{ data.title }}
            </h2>
            <p class="description mt--20">{{ data.desc }}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-5 mt_lg--30 mt_md--30 mt_sm--30">
        <form @submit.prevent="() => {}" class="newsletter-form-1">
          <input type="email" placeholder="Enter Your E-Email" />
          <button
            type="submit"
            class="rbt-btn btn-md btn-gradient hover-icon-reverse"
          >
            <span class="icon-reverse-wrapper">
              <span class="btn-text">Subscribe</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsletterData from "../../data/elements/newsletter.json";
</script>

<style lang="scss" scoped></style>
