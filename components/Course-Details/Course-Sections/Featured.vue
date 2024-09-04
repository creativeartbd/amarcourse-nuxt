<template>
  <div
    :class="`about-author-list rbt-shadow-box featured-wrapper mt--30 has-show-more ${
      toggle ? 'active' : ''
    }`"
  >
    <div class="section-title">
      <h4 class="rbt-title-style-3">{{ coursesFeatured.title }}</h4>
    </div>
    <div class="has-show-more-inner-content rbt-featured-review-list-wrapper">
      <div
        v-for="(user, innerIndex) in coursesFeatured.body"
        :key="innerIndex"
        class="rbt-course-review about-author"
      >
        <div class="media">
          <div class="thumbnail">
            <a href="#">
              <nuxt-img
                v-if="user.userImg"
                :src="user.userImg"
                alt="Author Images"
              />
            </a>
          </div>
          <div class="media-body">
            <div class="author-info">
              <h5 class="title">
                <a class="hover-flip-item-wrapper" href="#">{{
                  user.userName
                }}</a>
              </h5>
              <div class="rating">
                <a href="#" v-for="n in 5">
                  <i class="fa fa-star"></i>
                </a>
              </div>
            </div>
            <div class="content">
              <p class="description">{{ user.desc }}</p>
              <ul
                class="social-icon social-default transparent-with-border justify-content-start"
              >
                <li>
                  <a href="#"><i class="feather-thumbs-up"></i></a>
                </li>
                <li>
                  <a href="#"><i class="feather-thumbs-down"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="rbt-show-more-btn"
      :class="{ active: toggle }"
      @click="toggle = !toggle"
    >
      Show More
    </div>
  </div>
</template>

<script setup>
defineProps(["coursesFeatured"]);

const toggle = ref(false);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
