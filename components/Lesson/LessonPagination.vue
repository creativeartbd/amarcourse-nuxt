<template>
  <div class="bg-color-extra2 ptb--15 overflow-hidden">
    <div class="rbt-button-group">
      <nuxt-link
        v-if="urlPrev"
        class="rbt-btn icon-hover icon-hover-left btn-md bg-primary-opacity"
        :to="urlPrev"
      >
        <span class="btn-icon">
          <i class="feather-arrow-left"></i>
        </span>
        <span class="btn-text">Previous</span>
      </nuxt-link>

      <nuxt-link v-if="urlNext" class="rbt-btn icon-hover btn-md" :to="urlNext">
        <span class="btn-text">Next</span>
        <span class="btn-icon">
          <i class="feather-arrow-right"></i>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps(["urlPrev", "urlNext"]);
</script>

<style lang="scss" scoped></style>
