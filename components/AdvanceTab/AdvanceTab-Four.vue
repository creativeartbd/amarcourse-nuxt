<template>
  <div
    v-if="TabData"
    v-for="(data, index) in TabData.advanceFour"
    :key="index"
    class="container"
  >
    <SectionHead
      v-if="head === undefined"
      :tag="data.tag"
      :title="data.title"
    />
    <div class="row g-5">
      <div class="col-lg-10 offset-lg-1">
        <div class="advance-tab-button">
          <ul
            class="nav nav-tabs tab-button-style-2"
            id="myTab-4"
            role="tablist"
          >
            <li
              v-for="(item, innerIndex) in data.body"
              :key="innerIndex"
              role="presentation"
            >
              <a
                :class="`tab-button ${item.isActive ? 'active' : ''}`"
                :id="item.tab"
                data-bs-toggle="tab"
                :data-bs-target="`#${item.target}`"
                role="tab"
                :aria-controls="item.target"
                :aria-selected="item.isActive"
                href="#"
              >
                <span class="title">{{ item.text }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-10 offset-lg-1">
        <div class="tab-content advance-tab-content-style-2">
          <div
            v-for="(item, innerIndex) in data.body"
            :key="innerIndex"
            :class="`tab-pane fade ${item.isActive ? 'active show' : ''}`"
            :id="item.target"
            role="tabpanel"
            :aria-labelledby="item.tab"
          >
            <div class="content">
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-for="(value, subIndex) in data.gallery"
      :key="subIndex"
      class="row g-5 mt--40"
    >
      <div class="col-lg-6">
        <div class="rbt-category-gallery">
          <div class="thumbnail">
            <a href="#">
              <nuxt-img
                :src="value.img"
                :width="value.width"
                :height="value.height"
                alt="Gallery Images"
              />
            </a>
            <div class="rbt-bg-overlay"></div>
            <div class="hover-content">
              <h3 class="title">{{ value.text }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="row g-5">
          <div
            v-for="(subValue, subInnerIndex) in value.subGallery"
            :key="subInnerIndex"
            :class="`${
              subValue.lgImg ? 'col-lg-12' : 'col-lg-6 col-md-6 col-sm-6 col-12'
            }`"
          >
            <div class="rbt-category-gallery">
              <div class="thumbnail">
                <a href="#">
                  <nuxt-img
                    :src="subValue.img"
                    :width="subValue.width"
                    :height="subValue.height"
                    alt="Gallery Images"
                  />
                </a>
                <div class="rbt-bg-overlay"></div>
                <div class="hover-content">
                  <h3 class="title">{{ subValue.text }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TabData from "../../data/elements/advanceTab.json";
import SectionHead from "./SectionHead";

defineProps(["head"]);
</script>

<style scoped>
/* Your component-specific styles */
</style>
./SectionHead.vue
