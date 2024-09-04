<template>
  <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
  <MobileMenu />
  <!-- <Cart /> -->

  <CategoryHead
    @setCourseFilter="setCourseFilter"
    @filterItem="filterItem"
    :category="getAllCourse"
    @setFiltered="setFiltered"
  />
  <div class="rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="container">
      <div class="row g-5">
        <CourseCardTwo :course="courseFilter" />
      </div>
    </div>
  </div>

  <Separator />
  <!-- <BackToTop /> -->
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Course Masonry || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import FooterOne from "@/components/Footer/Footer-One";

import CourseDetails from "../../data/course-details/courseData.json";
// import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import CourseCardTwo from "@/components/Category/Filter/CourseCar-Four";
import sal from "sal.js";

let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));

const filtered = ref(getAllCourse);
const currentType = ref("All Course");
const setFiltered = (val) => {
  filtered.value = val;
};

const courseFilter = ref(filtered.value);

const setCourseFilter = (val) => {
  courseFilter.value = val;
};

const filterItem = (types) => {
  currentType.value = types;
  const updateItem = filtered.value.filter((curElm) => {
    return curElm.courseType === types;
  });

  if (types !== "All Course") {
    courseFilter.value = updateItem;
  } else {
    courseFilter.value = filtered.value;
  }
};
watch(filtered, () => {
  filterItem(currentType.value);
  setTimeout(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  });
});
</script>

<style lang="scss" scoped></style>
