<template>
  <div
    v-for="(data, index) in tabData.advanceOne"
    :key="index"
    class="container"
  >
    <SectionHead :tag="tag" :title="title" :desc="desc" />
    <div class="row g-5">
      <div
        class="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1"
      >
        <div class="advance-tab-button advance-tab-button-1">
          <ul class="nav nav-tabs tab-button-list" id="myTab" role="tablist">
            <li
              v-for="(item, innerIndex) in data.body"
              :key="innerIndex"
              class="nav-item"
              role="presentation"
            >
              <a
                :href="item.href"
                :class="['nav-link', 'tab-button', { active: item.isActive }]"
                :id="item.tab"
                data-bs-toggle="tab"
                :data-bs-target="'#' + item.target"
                role="tab"
                :aria-controls="item.target"
                :aria-selected="item.isActive"
              >
                <div class="tab">
                  <h4 class="title">{{ item.text }}</h4>
                  <p class="description">{{ item.desc }}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
        <div class="tab-content">
          <div
            v-for="(item, innerIndex) in data.body"
            :key="innerIndex"
            :class="[
              'tab-pane',
              'fade',
              'advance-tab-content-1',
              { 'active show': item.isActive },
            ]"
            :id="item.target"
            role="tabpanel"
            :aria-labelledby="item.tab"
          >
            <div class="thumbnail">
              <nuxt-img
                :src="item.img"
                width="860"
                height="620"
                alt="advance-tab-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TabData from "~/data/elements/advanceTab.json";
import SectionHead from "./SectionHead.vue";

defineProps(["tag", "title", "desc"]);
const tabData = ref(TabData);
</script>

<style scoped>
/* Add your styles here */
</style>
