<template>
  <li :class="['dropdown-parent-list', isActive ? 'active' : '']">
    <a href="#"> {{ title }} </a>
    <div class="dropdown-child-wrapper">
      <div class="child-inner">
        <div
          v-for="(cate, index) in CategoryNum"
          :key="index"
          class="dropdown-child-list"
        >
          <nuxt-link :to="cate.link"> {{ cate.text }} </nuxt-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
const { props } = defineProps([
  "title",
  "CategoryData",
  "CategoryNum",
  "isActive",
]);
</script>
