<template>
  <div
    v-for="(data, index) in cardData.cardThree"
    :key="index"
    class="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
    :data-sal-delay="150"
    data-sal="slide-up"
    :data-sal-duration="800"
  >
    <div class="rbt-card variation-01 rbt-hover card-list-2">
      <div class="rbt-card-img">
        <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">
          <nuxt-img :src="data.img" width="231" height="324" alt="Card image" />
        </nuxt-link>
      </div>
      <div class="rbt-card-body">
        <div class="rbt-card-top">
          <div class="rbt-review">
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <span class="rating-count">({{ data.rating }} Reviews)</span>
          </div>
          <div class="rbt-bookmark-btn">
            <nuxt-link
              class="rbt-round-btn"
              title="Bookmark"
              :to="data.bookmarkLink"
            >
              <i class="feather-bookmark"></i>
            </nuxt-link>
          </div>
        </div>
        <h4 class="rbt-card-title">
          <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">{{
            data.title
          }}</nuxt-link>
        </h4>
        <ul class="rbt-meta">
          <li>
            <i class="feather-book"></i>
            {{ data.lesson }} Lessons
          </li>
          <li>
            <i class="feather-users"></i>
            {{ data.student }} Students
          </li>
        </ul>
        <p class="rbt-card-text">{{ data.desc }}</p>
        <div class="rbt-author-meta mb--10">
          <div class="rbt-avater">
            <nuxt-link :to="data.authorLink">
              <nuxt-img
                :src="data.avatar"
                width="33"
                height="33"
                alt="Sophia Jaymes"
              />
            </nuxt-link>
          </div>
          <div class="rbt-author-info">
            By
            <nuxt-link :to="data.authorLink">{{ data.author }}</nuxt-link>
            In
            <nuxt-link :to="data.postLink">{{ data.post }}</nuxt-link>
          </div>
        </div>
        <div class="rbt-card-bottom">
          <div class="rbt-price">
            <span class="current-price">${{ data.price }}</span>
            <span class="off-price">${{ data.offPrice }}</span>
          </div>
          <nuxt-link
            :to="data.buttonLink"
            class="rbt-btn-link"
            :class="{ 'left-icon': data.button }"
          >
            {{ data.button ? "Add To Cart" : "Learn More"
            }}<i class="feather-arrow-right"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardData from "~/data/elements/card.json";

const cardData = ref(CardData);
</script>

<style scoped>
/* Add your styles here */
</style>
