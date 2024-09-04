<template>
  <client-only>
    <div class="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
      <h3 class="rbt-short-title">{{ title }}</h3>
      <ul class="mega-menu-item">
        <li v-for="(data, index) in MenuData.menuData" :key="index">
          <template v-if="data.menuType === menuGrid">
            <template v-if="gridNumber == '1'">
              <template
                v-for="(value, innerIndex) in data.gridMenuItems1"
                :key="innerIndex"
              >
                <nuxt-link
                  :class="{ active: isActive(value.link) }"
                  :to="value.coming ? '/maintenance' : value.link"
                >
                  {{ value.title }}
                  <template v-if="value.coming">
                    <span class="rbt-badge-card ms-3">{{ value.coming }}</span>
                  </template>
                  <template v-else-if="value.subTitle">
                    <span class="rbt-badge-card">{{ value.subTitle }}</span>
                  </template>
                </nuxt-link>
              </template>
            </template>
            <template v-else-if="gridNumber == '2'">
              <template
                v-for="(value, innerIndex) in data.gridMenuItems2"
                :key="innerIndex"
              >
                <nuxt-link
                  :class="{ active: isActive(value.link) }"
                  :to="value.coming ? '/maintenance' : value.link"
                >
                  {{ value.title }}
                  <template v-if="value.coming">
                    <span class="rbt-badge-card ms-3">{{ value.coming }}</span>
                  </template>
                  <template v-else-if="value.subTitle">
                    <span class="rbt-badge-card">{{ value.subTitle }}</span>
                  </template>
                </nuxt-link>
              </template>
            </template>
            <template v-else>
              <li
                v-for="(value, innerIndex) in data.gridMenuItems3"
                :key="innerIndex"
              >
                <nuxt-link
                  :class="{ active: isActive(value.link) }"
                  :to="value.coming ? '/maintenance' : value.link"
                >
                  {{ value.title }}
                  <template v-if="value.coming">
                    <span class="rbt-badge-card ms-3">{{ value.coming }}</span>
                  </template>
                  <template v-else-if="value.subTitle">
                    <span class="rbt-badge-card">{{ value.subTitle }}</span>
                  </template>
                </nuxt-link>
              </li>
            </template>
          </template>
        </li>
      </ul>
    </div></client-only
  >
</template>

<script setup>
defineProps(["MenuData", "menuGrid", "title", "gridNumber"]);
const route = useRoute();

const pathName = route.path;

const isActive = (href) =>
  pathName?.replace(/\/\d+$/, "") === href?.replace(/\/\d+$/, "");
</script>

<style lang="scss" scoped></style>
