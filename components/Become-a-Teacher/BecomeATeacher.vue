<template>
  <div
    v-if="Teacher"
    v-for="(data, index) in Teacher.becomeATeacher"
    :key="index"
    class="container"
  >
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <span class="subtitle bg-pink-opacity">{{ data.tag }}</span>
          <h2 class="title">{{ data.title }}</h2>
          <p class="description has-medium-font-size mt--20 mb--40">
            {{ data.desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="row row row--30">
      <div class="col-lg-12 mt_md--40 mt_sm--40 order-2 order-lg-1">
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
                :class="['tab-button', item.isActive ? 'active' : '']"
                :id="item.tab"
                href="#"
                :data-bs-toggle="'tab'"
                :data-bs-target="'#' + item.target"
                role="tab"
                :aria-controls="item.target"
                :aria-selected="item.isActive"
              >
                <span class="title">{{ item.text }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="tab-content advance-tab-content-style-2">
          <div
            v-for="(item, innerIndex) in data.body"
            :key="innerIndex"
            :class="['tab-pane', item.isActive ? 'active show' : '']"
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
    <InstructorRegistration />
  </div>
</template>

<script setup>
import Teacher from "../../data/pages/become-A-Teacher.json";
import InstructorRegistration from "./InstructorRegis";
</script>

<style lang="scss" scoped></style>
