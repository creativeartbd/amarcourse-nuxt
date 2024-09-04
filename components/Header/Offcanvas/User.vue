<template>
  <div class="rbt-user-menu-list-wrapper">
    <div v-for="(person, index) in UserData.user" :key="index" class="inner">
      <div class="rbt-admin-profile">
        <div class="admin-thumbnail">
          <nuxt-img :src="person.img" alt="User Images" />
        </div>
        <div class="admin-info">
          <span class="name">{{ person.name }}</span>
          <nuxt-link
            class="rbt-btn-link color-primary"
            to="/instructor/instructor-profile"
          >
            View Profile
          </nuxt-link>
        </div>
      </div>
      <ul class="user-list-wrapper">
        <li v-for="(list, innerIndex) in person.userList" :key="innerIndex">
          <nuxt-link :to="list.link">
            <i :class="list.icon"></i>
            <span>{{ list.text }}</span>
          </nuxt-link>
        </li>
      </ul>
      <hr class="mt--10 mb--10" />
      <ul class="user-list-wrapper">
        <li>
          <a href="#">
            <i class="feather-book-open"></i>
            <span>Getting Started</span>
          </a>
        </li>
      </ul>
      <hr class="mt--10 mb--10" />
      <ul class="user-list-wrapper">
        <li>
          <nuxt-link to="/instructor/instructor-settings">
            <i class="feather-settings"></i>
            <span>Settings</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <i class="feather-log-out"></i>
            <span>Logout</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import UserData from "@/data/user.json";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
