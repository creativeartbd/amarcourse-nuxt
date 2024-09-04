<template>
  <div class="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
    <h3 class="rbt-short-title">{{ courseTitle }}</h3>
    <ul class="mega-menu-item">
      <template v-if="MenuData">
        <template v-for="(data, index) in MenuData.menuData" :key="index">
          <template v-if="data.menuType === type">
            <template v-if="courseType">
              <li
                v-for="(value, innerIndex) in data.menuItems.slice(0, 7)"
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
            <template v-else>
              <li
                v-for="(value, innerIndex) in data.menuItems.slice(7)"
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
                    <span class="rbt-badge-card ms-3">{{
                      value.subTitle
                    }}</span>
                  </template>
                </nuxt-link>
              </li>
            </template>
          </template>
        </template>
      </template>
    </ul>
  </div>
</template>

<script setup>
defineProps(["MenuData", "courseTitle", "type", "courseType", "num"]);
const route = useRoute();

const pathName = route.path;

const isActive = (href) => pathName === href;
</script>
