<template>
  <div
    class="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-inner text-center">
            <h2 class="title">{{ title }}</h2>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "text"]);
</script>

<style lang="scss" scoped></style>
