<template>
  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image"></div>

    <div class="rbt-banner-content">
      <input type="checkbox" name="" id="" />
      <CategoryBanner v-if="category" :category="category" />

      <CategoryBanner v-else />

      <div class="rbt-course-top-wrapper mt--40 mt_sm--20">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-5 col-md-12">
              <div class="rbt-sorting-list d-flex flex-wrap align-items-center">
                <div class="rbt-short-item switch-layout-container">
                  <ul class="course-switch-layout">
                    <li class="course-switch-item">
                      <button
                        :class="`rbt-grid-view  ${
                          !isActiveListView ? 'active' : ''
                        } `"
                        @click="isActiveListView = false"
                      >
                        <i class="feather-grid"></i>
                        <span class="text ms-2">Grid</span>
                      </button>
                    </li>
                    <li class="course-switch-item">
                      <button
                        :class="`rbt-grid-view  ${
                          isActiveListView ? 'active' : ''
                        } `"
                        @click="isActiveListView = true"
                      >
                        <i class="feather-list"></i>
                        <span class="text ms-2">List</span>
                      </button>
                    </li>
                  </ul>
                </div>

                <div v-if="category" class="rbt-short-item">
                  <span class="course-index">
                    {{
                      props.page
                        ? "Showing " +
                          (props.page - 1) * 6 +
                          "-" +
                          Math.min(props.page * 6, props.filtered.length) +
                          " of " +
                          props.filtered.length +
                          " results"
                        : ""
                    }}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-12">
              <div
                class="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end"
              >
                <div class="rbt-short-item">
                  <form
                    @submit.prevent="() => {}"
                    class="rbt-search-style me-0"
                  >
                    <input type="text" placeholder="Search Your Course.." />
                    <button type="submit" class="rbt-search-btn rbt-round-btn">
                      <i class="feather-search"></i>
                    </button>
                  </form>
                </div>

                <div
                  v-if="path !== '/course-filter-two-open' && !query?.courseId"
                  class="rbt-short-item"
                >
                  <div class="view-more-btn text-start text-sm-end">
                    <button
                      class="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round"
                      @click="
                        () => {
                          filterToggle = !filterToggle;
                        }
                      "
                    >
                      Filter<i class="feather-filter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CourseFilterTwo
            @setFiltered="setFiltered"
            :items="items ? items : null"
            v-if="path === '/course-filter-two-open' || query?.courseId"
          />

          <div
            v-else
            :class="`row default-exp-wrapper ${
              filterToggle ? 'default-exp-expand' : ''
            } top-border-less`"
          >
            <CourseFilterTwo
              :items="items ? items : null"
              @setFiltered="setFiltered"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { isActiveListView } from "~/utlis/courseLayout";
import CategoryBanner from "./Category-Banner.vue";

import CourseFilterTwo from "./Filter/CourseFilterTwo";
const route = useRoute();

const props = defineProps(["category", "filtered", "page", "items"]);
const path = route.path;
const query = route.query;

const filterToggle = ref(false);

const emits = defineEmits(["setFiltered"]);

const setFiltered = (val) => {
  emits("setFiltered", val);
};
</script>

<style lang="scss" scoped></style>
