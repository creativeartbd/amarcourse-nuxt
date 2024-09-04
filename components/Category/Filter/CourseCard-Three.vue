<template>
  <div
    v-for="(data, index) in course"
    :key="index"
    class="col-lg-4 col-md-6 col-sm-6 col-12"
    data-sal-delay="150"
    data-sal="slide-up"
    data-sal-duration="800"
  >
    <div class="rbt-card variation-03 rbt-hover">
      <div class="rbt-card-img">
        <nuxt-link class="thumbnail-link" :to="`/course-details-2/${data.id}`">
          <nuxt-img
            :src="data.courseImg"
            width="355"
            height="240"
            alt="Card image"
          />
          <span class="rbt-btn btn-white icon-hover">
            <span class="btn-text">Read More</span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
          </span>
        </nuxt-link>
      </div>
      <div class="rbt-card-body">
        <h4 class="rbt-card-title">
          <nuxt-link :to="`/course-details-2/${data.id}`">
            {{ data.courseTitle }}
          </nuxt-link>
        </h4>
        <div class="rbt-card-bottom">
          <nuxt-link
            class="transparent-button"
            :to="`/course-details-2/${data.id}`"
          >
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
</template>

<script setup>
import sal from "sal.js";

defineProps(["course"]);

onMounted(() => {
  // Initialize sal
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>
