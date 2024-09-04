<template>
  <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
  <MobileMenu />
  <!-- <Cart /> -->

  <CategoryHead
    :page="page"
    :filtered="filtered"
    @setFiltered="setFiltered"
    :category="getAllCourse"
  />
  <div class="rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="container">
      <div class="row g-5">
        <CourseCardThree :course="getSelectedCourse" />
      </div>

      <div v-if="filtered.length > 6" class="row">
        <div class="col-lg-12 mt--60">
          <Pagination
            :totalPages="Math.ceil(filtered.length / 6)"
            :pageNumber="page"
            @clickPagination="handleClick"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
    <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
  </div>

  <!-- <BackToTop /> -->
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Course Cart 3 || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import Pagination from "@/components/Common/Pagination";
import FooterOne from "@/components/Footer/Footer-One";

import CourseDetails from "../../data/course-details/courseData.json";
// import BackToTop from "../backToTop";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import CourseCardThree from "@/components/Category/Filter/CourseCard-Three";

import sal from "sal.js";
const page = ref(1);

let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));

const filtered = ref(getAllCourse);
const setFiltered = (val) => {
  filtered.value = val;
};
watch(filtered, () => {
  page.value = 1;
  setTimeout(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  });
});

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
