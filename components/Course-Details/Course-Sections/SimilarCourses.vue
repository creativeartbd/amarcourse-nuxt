<template>
  <div class="container">
    <div class="section-title mb--30">
      <span class="subtitle bg-primary-opacity">More Similar Courses</span>
      <h4 class="title">Related Courses</h4>
    </div>
    <div class="row g-5">
      <div
        v-if="checkMatchCourses"
        v-for="(item, innerIndex) in checkMatchCourses"
        class="col-lg-4 col-md-6 col-sm-6 col-12"
        :key="innerIndex"
      >
        <div class="rbt-card variation-01 rbt-hover">
          <div class="rbt-card-img">
            <nuxt-link :to="`/course-details/${item.id}`">
              <nuxt-img :src="item.img" alt="Card image" />

              <div v-if="item.discount > 0" class="rbt-badge-3 bg-white">
                <span>-{{ item.discount }}%</span>
                <span>Off</span>
              </div>
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
                <span class="rating-count">
                  {{ " " }}({{ item.rating }} Reviews)
                </span>
              </div>
              <div class="rbt-bookmark-btn">
                <a class="rbt-round-btn" title="Bookmark" href="#">
                  <i class="feather-bookmark"></i>
                </a>
              </div>
            </div>
            <h4 class="rbt-card-title">
              <nuxt-link :to="`/course-details/${item.id}`">{{
                item.title
              }}</nuxt-link>
            </h4>
            <ul class="rbt-meta">
              <li>
                <i class="feather-book"></i>
                {{ item.lesson }} Lessons
              </li>
              <li>
                <i class="feather-users"></i>
                {{ item.student }} Students
              </li>
            </ul>

            <p class="rbt-card-text">{{ item.desc }}</p>

            <div class="rbt-author-meta mb--20">
              <div class="rbt-avater">
                <nuxt-link :to="`/profile/${item.id}`">
                  <nuxt-img :src="item.avatar" alt="Sophia Jaymes" />
                </nuxt-link>
              </div>
              <div class="rbt-author-info">
                By{{ " " }}
                <nuxt-link :to="`/profile/${item.id}`">{{
                  item.author
                }}</nuxt-link
                >{{ " " }} In
                <a href="#">{{ item.post }}</a>
              </div>
            </div>
            <div class="rbt-card-bottom">
              <div class="rbt-price">
                <span class="current-price">${{ item.price }}</span>
                <span class="off-price">${{ item.offPrice }}</span>
              </div>
              <nuxt-link class="rbt-btn-link" to="/course-details/1">
                Learn More<i class="feather-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["checkMatchCourses"]);
</script>

<style lang="scss" scoped></style>
