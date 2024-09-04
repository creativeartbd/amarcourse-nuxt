<template>
  <div
    :class="`rbt-search-dropdown ${searchIsOpen ? 'active' : ''}`"
    id="searchPopup"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col-lg-12">
          <form @submit.prevent="() => {}">
            <input type="text" placeholder="What are you looking for?" />
            <div class="submit-btn">
              <a class="rbt-btn btn-gradient btn-md" href="#"> Search </a>
            </div>
          </form>
        </div>
      </div>

      <div class="rbt-separator-mid">
        <hr class="rbt-separator m-0" />
      </div>

      <div class="row g-4 pt--30 pb--60">
        <div class="col-lg-12">
          <div class="section-title">
            <h5 class="rbt-title-style-2">Our Top Course</h5>
          </div>
        </div>

        <div
          v-for="(data, index) in topCourses"
          :key="index"
          class="col-lg-3 col-md-4 col-sm-6 col-12"
        >
          <div class="rbt-card variation-01 rbt-hover">
            <div class="rbt-card-img">
              <nuxt-link :to="`/course-details/${data.id}`">
                <nuxt-img :src="data.courseImg" alt="Card image" />
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <h5 class="rbt-card-title">
                <nuxt-link :to="`/course-details/${data.id}`">{{
                  data.courseTitle
                }}</nuxt-link>
              </h5>
              <div class="rbt-review">
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <span class="rating-count">({{ data.review }} Reviews)</span>
              </div>
              <div class="rbt-card-bottom">
                <div class="rbt-price">
                  <span class="current-price">$15</span>
                  <span class="off-price">$25</span>
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
import CourseData from "@/data/course-details/courseData.json";
import { searchIsOpen } from "~/utlis/seachToggle";

const topCourses = CourseData.courseDetails.slice(0, 4);

onMounted(() => {
  document.addEventListener("click", function (event) {
    var searchPopup = document.getElementById("searchPopup");
    var isClickInsidePopup = searchPopup?.contains(event.target);
    var isClickInsidePopupBtn = document
      .getElementsByClassName("search-trigger-active")[0]
      ?.contains(event.target);

    if (!isClickInsidePopup && !isClickInsidePopupBtn) {
      if (searchIsOpen.value) {
        searchIsOpen.value = false;
      }
    }
  });
});
onUnmounted(() => {
  searchIsOpen.value = false;
});
</script>
