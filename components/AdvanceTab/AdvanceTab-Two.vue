<template>
  <div
    v-if="TabData"
    class="container"
    v-for="(data, index) in TabData.advanceTwo"
    :key="index"
  >
    <SectionHead :tag="data.tag" :title="data.title" />
    <div class="row g-5">
      <div class="col-lg-8 col-md-12 col-sm-12 col-12">
        <div class="tab-content" id="myTabContent">
          <div
            v-for="(item, innerIndex) in data.body"
            :class="[
              'tab-pane fade advance-tab-content-1',
              item.isActive ? 'active show' : '',
            ]"
            :id="item.target"
            role="tabpanel"
            :aria-labelledby="item.tab"
            :key="innerIndex"
          >
            <div class="thumbnail">
              <nuxt-img
                :width="860"
                :height="620"
                :src="item.img"
                alt="advance-tab-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30">
        <div class="advance-tab-button advance-tab-button-1 right-align">
          <ul
            :id="'myTab-2' + index"
            class="nav nav-tabs tab-button-list"
            role="tablist"
          >
            <li
              v-for="(item, innerIndex) in data.body"
              :class="'nav-item'"
              :key="innerIndex"
              role="presentation"
            >
              <a
                :href="'#' + item.target"
                class="nav-link tab-button"
                :class="{ active: item.isActive }"
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
    </div>
  </div>
</template>

<script setup>
import TabData from "../../data/elements/advanceTab.json";
import SectionHead from "./SectionHead.vue";
</script>
