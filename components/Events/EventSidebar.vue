<script setup>
import EventData from "~/data/events.json";

const toggle = ref(false);
</script>

<template>
  <aside class="rbt-sidebar-widget-wrapper rbt-gradient-border">
    <div
      :class="{ active: toggle }"
      class="rbt-single-widget rbt-widget-categories has-show-more"
    >
      <div class="inner">
        <h4 class="rbt-widget-title">Categories</h4>
        <ul
          class="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content"
        >
          <li
            v-for="(data, index) in EventData.events"
            :key="index"
            class="rbt-check-group"
          >
            <input
              :id="`cat-list-${index + 1}`"
              type="checkbox"
              :name="`cat-list-${index + 1}`"
            />
            <label :for="`cat-list-${index + 1}`">
              {{ data.category }}
              <span class="rbt-lable count">{{ index + 15 }}</span>
            </label>
          </li>
        </ul>
      </div>
      <div
        @click="toggle = !toggle"
        :class="{ active: toggle }"
        class="rbt-show-more-btn"
      >
        Show More
      </div>
    </div>

    <div class="rbt-single-widget rbt-widget-recent">
      <div class="inner">
        <h4 class="rbt-widget-title">Recent Events</h4>
        <ul class="rbt-sidebar-list-wrapper recent-post-list">
          <li
            v-for="(data, index) in EventData.events.slice(0, 4)"
            :key="index"
          >
            <div class="thumbnail">
              <nuxt-link :to="`/pages/event-details/${data.id}`">
                <nuxt-img :src="data.img" alt="Event Images" />
              </nuxt-link>
            </div>
            <div class="content">
              <h6 class="title">
                <nuxt-link :to="`/pages/event-details/${data.id}`">{{
                  data.title
                }}</nuxt-link>
              </h6>
              <ul class="rbt-meta">
                <li>
                  <i class="feather-clock"></i>
                  {{ data.time }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="rbt-single-widget rbt-widget-tag">
      <div class="inner">
        <h4 class="rbt-widget-title">Event Tags</h4>
        <div class="rbt-sidebar-list-wrapper rbt-tag-list">
          <a v-for="(data, index) in EventData.events" :key="index" href="#">
            {{ data.tag }}
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* Add your scoped styles here */
</style>
