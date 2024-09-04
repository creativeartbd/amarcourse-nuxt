<template>
  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image"></div>

    <div class="rbt-banner-content">
      <CategoryBanner v-if="category" :category="category" />
      <CategoryBanner v-else />

      <div class="rbt-course-top-wrapper mt--40 mt_sm--20">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-5 col-md-12">
              <div class="rbt-sorting-list d-flex flex-wrap align-items-center">
                <!-- Grid/List Layout Switch -->
                <div
                  class="rbt-short-item switch-layout-container"
                  v-if="path !== '/course-card-3' && path !== '/course-masonry'"
                >
                  <ul class="course-switch-layout">
                    <li class="course-switch-item">
                      <button
                        :class="`rbt-grid-view ${
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
                <!-- Course Index -->
                <div class="rbt-short-item" v-if="category">
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
            <!-- Search Form -->
            <div class="col-lg-7 col-md-12">
              <div
                class="rbt-sorting-list d-flex flex-wrap align-items-end justify-content-start justify-content-lg-end"
              >
                <div
                  class="rbt-short-item"
                  v-if="path !== '/course-with-sidebar'"
                >
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
                <!-- Short By Select -->
                <div
                  class="rbt-short-item"
                  v-if="
                    path === '/course-with-tab' ||
                    path === '/course-with-tab-two' ||
                    path === '/course-with-sidebar'
                  "
                >
                  <div class="filter-select">
                    <div
                      class="filter-select rbt-modern-select search-by-category"
                    >
                      <select
                        @change="
                          (e) => (selectedSortingOption = e.target.value)
                        "
                      >
                        <option v-for="(elm, i) in sortingOptions" :key="i">
                          {{ elm }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- Filter Button -->
                <div
                  class="rbt-short-item"
                  v-if="
                    path === '/course-filter-two-open' ||
                    path === '/course-filter-two-toggle' ||
                    path === '/course-filter-one-toggle' ||
                    path === '/course-card-2' ||
                    path === '/course-card-3' ||
                    path === '/course-masonry'
                  "
                >
                  <div class="view-more-btn text-start text-sm-end">
                    <button
                      class="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round"
                      @click="toggleFilter"
                    >
                      Filter<i class="feather-filter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Course Filter -->
            <CourseFilter
              @setFiltered="setFiltered"
              :items="category"
              v-if="path === '/course-filter-one-open'"
            />
            <CourseFilter
              @setFiltered="setFiltered"
              :items="category"
              v-else
              :filterToggle="filterToggle"
            />
            <!-- Course Tabs -->
            <div
              class="col-lg-12 mt--60"
              v-if="
                path === '/course-with-tab' ||
                path === '/course-with-tab-two' ||
                path === '/course-masonry'
              "
            >
              <ul
                class="rbt-portfolio-filter filter-tab-button justify-content-start nav nav-tabs"
                id="rbt-myTab"
                role="tablist"
              >
                <li
                  v-for="(courseType, index) in [
                    'All Course',
                    'featured',
                    'popular',
                    'trending',
                    'latest',
                  ]"
                  :key="index"
                  class="nav-item"
                  role="presentation"
                >
                  <button
                    :class="{ active: activeTab === courseType }"
                    type="button"
                    @click="handleButtonClick(courseType)"
                  >
                    <span class="filter-text">{{ courseType }}</span>
                    <span
                      class="course-number"
                      v-if="courseType === 'All Course'"
                    >
                      {{ category.filter((course) => course).length }}
                    </span>
                    <span class="course-number" v-else>
                      {{
                        category.filter(
                          (course) => course.courseType === courseType
                        ).length
                      }}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoryBanner from "./Category-Banner.vue";
import CourseFilter from "./Filter/CourseFilter.vue";
const props = defineProps(["category", "filtered", "page"]);
const emits = defineEmits(["setCourseFilter", "filterItem", "setFiltered"]);
const selectedSortingOption = ref("Default");
const filtered = () => {
  if (selectedSortingOption.value == "Price: low to high") {
    return [...props.filtered]?.sort((a, b) => a.price - b.price);
  } else if (selectedSortingOption.value == "Price: high to low") {
    return [...props.filtered]?.sort((a, b) => b.price - a.price);
  } else {
    return [...props.filtered];
  }
};
watch(selectedSortingOption, () => {
  emits("setFiltered", filtered());
});
const sortingOptions = ["Default", "Price: low to high", "Price: high to low"];

const route = useRoute();

const path = route.path;

const filterToggle = ref(true);
const activeTab = ref("All Course");
import { isActiveListView } from "~/utlis/courseLayout";

const toggleFilter = () => {
  filterToggle.value = !filterToggle.value;
};

const handleButtonClick = (courseType) => {
  emits("setCourseFilter", props.category);

  activeTab.value = courseType;

  emits("filterItem", courseType);

  // Your logic here
};
const setFiltered = (val) => {
  emits("setFiltered", val);
};
</script>
