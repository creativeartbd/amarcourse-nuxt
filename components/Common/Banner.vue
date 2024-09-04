<template>
  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image"></div>
    <div class="rbt-banner-content">
      <div class="rbt-banner-content-top">
        <div class="container">
          <div class="row">
            <div :class="col">
              <ul class="page-list">
                <li class="rbt-breadcrumb-item">
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                  <div class="icon-right">
                    <i class="feather-chevron-right"></i>
                  </div>
                </li>
                <li class="rbt-breadcrumb-item active">{{ text }}</li>
              </ul>

              <div class="title-wrapper">
                <h1 class="title mb--0">{{ text }}</h1>
                <a href="#" class="rbt-badge-2">
                  <div class="image">🎉</div>
                  {{ " " }}
                  {{ getBlog ? `${getBlog.length} Articles` : "50 Articles" }}
                </a>
              </div>

              <p class="description">
                আমাদের সকল বিষয়ক সম্পর্কে টিউটোরিয়াল.{{ " " }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["text", "col", "getBlog"]);
</script>

<style lang="scss" scoped></style>
