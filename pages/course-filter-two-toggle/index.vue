<template>
  <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
  <MobileMenu />
  <!-- <Cart /> -->

  <CategoryHeadTwo
    :page="page"
    :filtered="filtered"
    @setFiltered="setFiltered"
    :category="getAllCourse"
  />
  <div class="rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="inner">
      <div class="container">
        <CourseFilterOneToggle :course="getSelectedCourse" />

        <div v-if="filtered.length > 6" class="row">
          <div class="col-lg-12 mt--60">
            <Pagination
              :totalPages="totalPages"
              :pageNumber="page"
              @clickPagination="handleClick"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <BackToTop /> -->
  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Course Filter Toggle Two || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHeadTwo from "@/components/Category/CategoryHeadTwo";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";
import Pagination from "@/components/Common/Pagination";
// import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import CourseDetails from "../../data/course-details/courseData.json";

const page = ref(1);

let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));

const filtered = ref(getAllCourse);
watch(filtered, () => {
  page.value = 1;
});
const totalPages = computed(() => {
  return Math.ceil(filtered?.value?.length / 6);
});

const setFiltered = (val) => {
  filtered.value = val;
};

const getSelectedCourse = computed(() =>
  filtered.value.slice((page.value - 1) * 6, (page.value - 1) * 6 + 6)
);
const handleClick = (num) => {
  page.value = num;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped></style>
