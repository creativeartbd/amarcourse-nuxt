<template>
  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image"></div>
    <div class="rbt-banner-content">
      <div class="rbt-banner-content-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="page-list">
                <li class="rbt-breadcrumb-item">
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                  <div class="icon-right">
                    <i class="feather-chevron-right"></i>
                  </div>
                </li>
                <li class="rbt-breadcrumb-item active">All Event</li>
              </ul>

              <div class="title-wrapper">
                <h1 class="title mb--0">All Event</h1>
                <a href="#" class="rbt-badge-2">
                  <div class="image">🎉</div>
                  {{ EventData.events?.length }}{{ " " }} Events
                </a>
              </div>
              <p class="description">
                Event that help beginner designers become true unicorns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EventData from "../../data/events.json";
</script>

<style lang="scss" scoped></style>
