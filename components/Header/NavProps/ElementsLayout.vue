<template>
  <div class="col-lg-4 col-xxl-4 single-mega-item">
    <ul class="mega-menu-item">
      <li v-for="(data, index) in MenuData.menuData" :key="index">
        <template v-if="data.menuType === menuGrid">
          <template
            v-for="(value, innerIndex) in data.menuItems"
            :key="innerIndex"
          >
            <template v-if="value.id >= num1 && value.id <= num2">
              <nuxt-link
                :class="{ active: isActive(value.link) }"
                :to="value.coming ? '/maintenance' : value.link"
              >
                {{ value.title }}
                <template v-if="value.coming">
                  <span class="rbt-badge-card ms-3">{{ value.coming }}</span>
                </template>
                <template v-else-if="value.badgeText">
                  <span class="rbt-badge-card ms-3">{{ value.badgeText }}</span>
                </template>
              </nuxt-link>
            </template>
          </template>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(["MenuData", "menuGrid", "num1", "num2"]);
const route = useRoute();

const pathName = route.path;

const isActive = (href) => pathName === href;
</script>

<style lang="scss" scoped></style>
