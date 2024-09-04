<template>
  <div
    v-if="serviceData"
    v-for="(data, index) in serviceData.serviceTen"
    :key="index"
    class="container"
  >
    <div v-if="head" class="row mb--60">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <h2 class="title">{{ data.sectionTitle }}</h2>
        </div>
      </div>
    </div>
    <div class="row row--15 mt_dec--30">
      <div
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
        class="col-xl-6 col-md-6 col-sm-6 col-12 mt--30"
      >
        <div class="rbt-service rbt-service-2 variation-2 rbt-hover-02">
          <div class="inner">
            <div class="content">
              <h4 class="title">
                <nuxt-link :href="item.link">{{ item.title }}</nuxt-link>
              </h4>
              <p>{{ item.desc }}</p>
              <div class="row">
                <div class="col-lg-6">
                  <ul class="rbt-list-style-3">
                    <li
                      v-for="(subItem, subIndex) in item.listLeft"
                      :key="subIndex"
                    >
                      <i :class="subItem.icon"></i>
                      {{ subItem.text }}
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="rbt-list-style-3">
                    <li
                      v-for="(subItem, subIndex) in item.listRight"
                      :key="subIndex"
                    >
                      <i :class="subItem.icon"></i>
                      {{ subItem.text }}
                    </li>
                  </ul>
                </div>
              </div>
              <nuxt-link
                class="rbt-btn btn-gradient hover-icon-reverse btn-sm mt--30"
                :href="item.link"
              >
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">Read More</span>
                  <span class="btn-icon"
                    ><i class="feather-arrow-right"></i
                  ></span>
                  <span class="btn-icon"
                    ><i class="feather-arrow-right"></i
                  ></span>
                </span>
              </nuxt-link>
            </div>
            <div class="thumbnail w-100">
              <nuxt-img
                :src="item.img"
                width="300"
                height="400"
                class="w-100"
                alt="Education Images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceData from "../../data/elements/service.json";

const serviceData = ServiceData;

const props = defineProps(["head"]);
</script>
