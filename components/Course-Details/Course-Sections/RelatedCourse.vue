<template>
  <div class="row g-5 align-items-end mb--40">
    <div class="col-lg-8 col-md-8 col-12">
      <div class="section-title">
        <span class="subtitle bg-pink-opacity">Top Course</span>
        <h4 class="title">
          More Course By
          <strong class="color-primary ms-3">{{
            checkMatchCourses.userName
          }}</strong>
        </h4>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-12">
      <div class="read-more-btn text-start text-md-end">
        <nuxt-link class="rbt-btn rbt-switch-btn btn-border btn-sm" to="/course-filter-one-toggle">
          <span data-text="View All Course">View All Course</span>
        </nuxt-link>
      </div>
    </div>
  </div>
  <div class="row g-5">
    <div
      v-for="(data, index) in checkMatchCourses.body"
      :key="index"
      class="col-lg-6 col-md-6 col-sm-6 col-12"
      data-sal-delay="150"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      <div class="rbt-card variation-01 rbt-hover">
        <div class="rbt-card-img">
          <nuxt-link :to="`/course-details/${data.id}`">
            <nuxt-img v-if="data.img" :src="data.img" alt="Card image" />
            <div v-if="data.discount > 0" class="rbt-badge-3 bg-white">
              <span>-{{ data.discount }}%</span>
              <span>Off</span>
            </div>
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <div class="rbt-card-top">
            <div class="rbt-review">
              <div class="rating">
                <i class="fas fa-star" v-for="n in 5" :key="n"></i>
              </div>
              <span class="rating-count">({{ data.rating }} Reviews)</span>
            </div>
            <div class="rbt-bookmark-btn">
              <a class="rbt-round-btn" title="Bookmark" href="#">
                <i class="feather-bookmark"></i>
              </a>
            </div>
          </div>
          <h4 class="rbt-card-title">
            <nuxt-link :to="`/course-details/${data.id}`">{{
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
              <nuxt-link :to="`/profile/${data.id}`">
                <nuxt-img
                  v-if="data.avatar"
                  :src="data.avatar"
                  alt="Sophia Jaymes"
                />
              </nuxt-link>
            </div>
            <div class="rbt-author-info">
              By
              <nuxt-link :to="`/profile/${data.id}`">{{
                data.author
              }}</nuxt-link>
              In <a href="#">{{ data.post }}</a>
            </div>
          </div>
          <div class="rbt-card-bottom">
            <div class="rbt-price">
              <span class="current-price">${{ data.price }}</span>
              <span class="off-price">${{ data.offPrice }}</span>
            </div>
            <nuxt-link
              :class="data.button ? 'rbt-btn-link left-icon' : 'rbt-btn-link'"
              :to="`/course-details/${data.id}`"
            >
              <span v-if="data.button"
                ><i class="feather-shopping-cart"></i> Add To Cart</span
              >
              <span v-else>Learn More<i class="feather-arrow-right"></i></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["checkMatchCourses"]);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
