<template>
  <div
    class="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border"
  >
    <div class="inner">
      <div class="content-item-content">
        <div class="rbt-default-sidebar-wrapper">
          <div class="section-title mb--20">
            <h6 class="rbt-title-style-2">Welcome, Jone Due</h6>
          </div>
          <nav class="mainmenu-nav">
            <ul class="dashboard-mainmenu rbt-default-sidebar-list">
              <li
                v-for="(data, index) in SidebarData.siderbar.slice(0, 7)"
                class="nav-item"
                :key="index"
                role="presentation"
              >
                <nuxt-link
                  :class="`${path === data.link ? 'active' : ''}`"
                  :to="data.link"
                >
                  <i :class="data.icon" />
                  <span>{{ data.text }}</span>
                </nuxt-link>
              </li>
            </ul>
          </nav>

          <div class="section-title mt--40 mb--20">
            <h6 class="rbt-title-style-2">User</h6>
          </div>

          <nav class="mainmenu-nav">
            <ul class="dashboard-mainmenu rbt-default-sidebar-list">
              <li
                v-for="(data, index) in SidebarData.siderbar.slice(7, 10)"
                :key="index"
              >
                <nuxt-link
                  :to="data.link"
                  :class="`${path === data.link ? 'active' : ''}`"
                >
                  <i :class="data.icon" />
                  <span>{{ data.text }}</span>
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SidebarData from "../../data/dashboard/student/siderbar.json";

const route = useRoute();

const path = route.path;
</script>

<style lang="scss" scoped></style>
