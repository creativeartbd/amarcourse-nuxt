<template>
  <div
    v-if="TabData"
    v-for="(data, index) in TabData.advanceFive"
    :key="index"
    class="container"
  >
    <div class="row mb--40">
      <div class="col-lg-12">
        <div
          class="section-title text-center sal-animate"
          data-sal="slide-up"
          data-sal-duration="700"
          data-sal-delay="100"
        >
          <span class="subtitle bg-secondary-opacity">{{ data.tag }}</span>
          <h2 class="title">{{ data.title }}</h2>
        </div>
      </div>
    </div>

    <div class="row row row--30 align-items-center">
      <div class="col-lg-5">
        <nuxt-img
          :src="data.img"
          alt="Corporate Template"
          class="radius-small"
        />
      </div>
      <div class="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1">
        <div class="rbt-default-tab">
          <ul class="nav nav-tabs tab-button" role="tablist">
            <li
              v-for="(item, innerIndex) in data.body"
              :key="innerIndex"
              class="nav-item tabs__tab"
              role="presentation"
            >
              <button
                :class="{ 'nav-link': true, active: item.isActive }"
                :id="item.tab"
                data-bs-toggle="tab"
                :data-bs-target="'#' + item.target"
                type="button"
                role="tab"
                :aria-controls="item.target"
                :aria-selected="item.isActive"
              >
                {{ item.text }}
              </button>
            </li>
          </ul>
          <div class="rainbow-tab-content tab-content">
            <div
              v-for="(item, innerIndex) in data.body"
              :key="innerIndex"
              :class="['tab-pane fade', item.isActive ? 'active show' : '']"
              :id="item.target"
              role="tabpanel"
              :aria-labelledby="item.tab"
            >
              <p>{{ item.desc }}</p>
              <p>{{ item.descTwo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TabData from "../../data/elements/advanceTab.json";
</script>
