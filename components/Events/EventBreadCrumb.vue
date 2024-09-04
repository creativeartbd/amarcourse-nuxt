<template>
  <div class="breadcrumb-inner breadcrumb-dark">
    <nuxt-img src="/images/bg/bg-image-10.jpg" alt="Education Images" />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="content">
          <div class="content text-start">
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
                {{ getMatchEvent.category }}
              </li>
            </ul>
            <h2 class="title mb--0">{{ getMatchEvent.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["getMatchEvent"]);
</script>

<style lang="scss" scoped></style>
