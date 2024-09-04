<template>
  <div
    v-for="(data, index) in CardData.cardTwo"
    class="row row--15"
    :key="index"
  >
    <div
      class="col-lg-6 col-md-12 col-sm-12 col-12 mt--30"
      data-sal-delay="150"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      <div class="rbt-card height-330 variation-02 rbt-hover">
        <div class="rbt-card-img">
          <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">
            <nuxt-img :src="data.img" alt="Card image" />

            <div v-if="data.badge" class="rbt-default-badge">
              <span>{{ data.badge }}</span>
            </div>
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <h4 class="rbt-card-title">
            <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">{{
              data.title
            }}</nuxt-link>
          </h4>
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

    <div
      class="col-lg-6 col-md-12 col-sm-12 col-12 mt--30"
      data-sal-delay="150"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      <div
        v-for="(item, innerIndex) in data.children"
        :class="`rbt-card card-list variation-02 rbt-hover ${
          item.mt ? 'mt--30' : ''
        }`"
        :key="innerIndex"
      >
        <div class="rbt-card-img">
          <nuxt-link :to="`/course-details/${item.id ? item.id : 1}`">
            <nuxt-img :src="item.img" alt="Card image" />
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <h5 class="rbt-card-title">
            <nuxt-link :to="`/course-details/${item.id ? item.id : 1}`">{{
              item.title
            }}</nuxt-link>
          </h5>
          <div class="rbt-card-bottom">
            <nuxt-link
              class="transparent-button"
              :to="`/course-details/${item.id ? item.id : 1}`"
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
