<template>
  <div>
    <div class="row">
      <div class="col-lg-12 mb--40">
        <div class="section-title text-start">
          <span class="subtitle bg-secondary-opacity">Similar Event</span>
          <h2 class="title">Similar Event</h2>
        </div>
      </div>
    </div>

    <div class="row g-5">
      <div
        v-for="(data, index) in getEventData.eventSimilar"
        :key="index"
        class="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
      >
        <div class="rbt-card event-grid-card variation-01 rbt-hover">
          <div class="rbt-card-img">
            <nuxt-link :to="`/pages/event-details/${index + 1}`">
              <nuxt-img
                :src="data.eventImg"
                width="355"
                height="240"
                alt="Card image"
              />
              <div class="rbt-badge-3 bg-white">
                <span>{{ data.badgeDate }}</span>
                <span>{{ data.badgeYear }}</span>
              </div>
            </nuxt-link>
          </div>
          <div class="rbt-card-body">
            <ul class="rbt-meta">
              <li>
                <i class="feather-map-pin"></i>
                {{ data.location }}
              </li>
              <li>
                <i class="feather-clock"></i>
                {{ data.time }}
              </li>
            </ul>
            <h4 class="rbt-card-title">
              <nuxt-link :to="`/pages/event-details/${index + 1}`">{{
                data.title
              }}</nuxt-link>
            </h4>
            <div class="read-more-btn">
              <nuxt-link
                :to="`/pages/event-details/${index + 1}`"
                class="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
              >
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">Get Ticket</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="load-more mt--60 text-center">
          <a class="rbt-btn rbt-switch-btn btn-border" href="#">
            <span data-text="View More Events">View More Events</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["getEventData"]);
</script>

<style scoped>
/* Add your styles here */
</style>
