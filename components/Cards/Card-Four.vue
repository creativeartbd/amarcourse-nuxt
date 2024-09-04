<template>
  <div class="row row--15">
    <div
      v-for="(data, index) in CardData.cardFour"
      class="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
      data-sal-delay="150"
      data-sal="slide-up"
      data-sal-duration="800"
      :key="index"
    >
      <div class="rbt-card variation-01 rbt-hover card-list-2">
        <div class="rbt-card-img">
          <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">
            <nuxt-img :src="data.img" alt="Card image" />
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <div class="rbt-category">
            <a href="#">{{ data.categoryOne }}</a>
            <a href="#">{{ data.categoryTwo }}</a>
          </div>
          <h4 class="rbt-card-title">
            <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">{{
              data.title
            }}</nuxt-link>
          </h4>
          <span class="lesson-number">
            {{ data.lesson }} lessons{{ " " }}
            <span class="lesson-time">(4 hours total)</span>
          </span>
          <p class="rbt-card-text">{{ data.desc }}</p>
          <div class="rbt-card-bottom">
            <nuxt-link
              class="transparent-button"
              :to="`/course-details/${data.id ? data.id : 1}`"
            >
              Learn More
              <i>
                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#27374D" fill="none" fillRule="evenodd">
                    <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                    <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                  </g>
                </svg>
              </i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardData from "../../data/elements/card";
</script>

<style lang="scss" scoped></style>
