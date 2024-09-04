<template>
  <div class="container">
    <div class="row row--15 align-items-center">
      <div class="col-lg-12">
        <div
          v-for="(data, index) in NewsletterData?.newsletterTwo"
          :key="index"
          class="inner text-center"
        >
          <div class="section-title text-center">
            <span class="subtitle bg-white-opacity">{{ data.subTitle }}</span>
            <h2 class="title color-white">
              <strong>{{ data.strong }}</strong> {{ data.title }}
            </h2>
            <p class="description color-white mt--20">{{ data.desc }}</p>
          </div>
          <form @submit.prevent="() => {}" class="newsletter-form-1 mt--40">
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
          <span class="note-text color-white mt--20">{{ data.text }}</span>

          <div class="row row--15 mt--50">
            <div
              v-for="(item, innerIndex) in data.body"
              :key="innerIndex"
              :class="[
                'col-lg-3',
                'col-sm-6',
                'col-md-6',
                'single-counter',
                item.offset ? 'offset-lg-3' : 'single-counter',
              ]"
            >
              <div class="rbt-counterup rbt-hover-03 style-2 text-color-white">
                <div class="inner">
                  <div class="content">
                    <h3 class="counter color-white">
                      <span class="odometer"
                        ><CommonOdometerComponent :number="item.num"
                      /></span>
                    </h3>
                    <h5 class="title color-white">{{ item.title }}</h5>
                    <span class="subtitle color-white">{{
                      item.subTitle
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsletterData from "../../data/elements/newsletter.json";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
