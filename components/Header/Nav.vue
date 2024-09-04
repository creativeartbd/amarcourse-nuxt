<template>
  <nav class="mainmenu-nav">
    <ul class="mainmenu">
      <li class="with-megamenu has-menu-child-item position-static">
        <NuxtLink :class="{ open: activeMenuItem === 'home' }"
        @click="toggleMenuItem('home')" to="/">হোম</NuxtLink>
      </li>
      <li class="with-megamenu has-menu-child-item">
        <NuxtLink :class="{ open: activeMenuItem === 'courses' }"
        @click="toggleMenuItem('courses')" to="/courses">সকল কোর্স</NuxtLink>
      </li>
      <li class="with-megamenu has-menu-child-item">
        <NuxtLink  :class="{ open: activeMenuItem === 'blot-list' }"
        @click="toggleMenuItem('courses')" to="/about-us">আমাদের সম্পর্কে</NuxtLink>
      </li>
      <li class="with-megamenu has-menu-child-item">
        <NuxtLink  :class="{ open: activeMenuItem === 'blot-list' }"
        @click="toggleMenuItem('courses')" to="/blog-list">টিউটোরিয়াল</NuxtLink>
      </li>
      <li class="with-megamenu has-menu-child-item">
        <a
          :class="{ open: activeMenuItem === 'courses' }"
          @click="toggleMenuItem('courses')" target="_new" 
          href="https://www.youtube.com/channel/UCkdPCRKSzZTVB9eo9CDdTQw?sub_confirmation=1"
        >
        ফ্রি ভিডিও টিউটোরিয়াল
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import MenuData from "@/data/MegaMenu";
import CourseLayout from "./NavProps/CourseLayout.vue";
import PageLayout from "./NavProps/PageLayout.vue";
import ElementsLayout from "./NavProps/ElementsLayout.vue";

const activeMenuItem = ref(null);
const nestedMenu = ref(-1);
const route = useRoute();

const pathName = route.path;

const isActive = (href) => pathName === href;

const toggleMenuItem = (item) => {
  nestedMenu.value = -1;
  activeMenuItem.value = activeMenuItem.value === item ? null : item;
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
