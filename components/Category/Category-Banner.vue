<template>
  <div class="rbt-banner-content-top">
    <div class="container">
      <template v-if="category">
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
              <li class="rbt-breadcrumb-item active">
                {{ category.category || "All Courses" }}
              </li>
            </ul>
            <div class="title-wrapper">
              <h1 class="title mb--0">
                {{ category.category || "All Courses" }}
              </h1>
              <a href="#" class="rbt-badge-2">
                <div class="image">🎉</div>
                {{ category.id }} {{ category.length }} Courses
              </a>
            </div>
            <p class="description">
              {{
                category.desc ||
                "Courses that help beginner designers become true unicorns."
              }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps(["category"]);
</script>
