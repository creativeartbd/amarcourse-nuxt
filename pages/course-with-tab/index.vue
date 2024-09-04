<template>
  <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
  <MobileMenu />
  <!-- <Cart /> -->

  <CategoryHead
    @setCourseFilter="setCourseFilter"
    @filterItem="filterItem"
    :category="getAllCourse"
    @setFiltered="setFiltered"
    :filtered="filtered"
  />
  <div class="rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="inner">
      <div class="container">
        <CourseTab :course="courseFilter" />
      </div>
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Course With Tab || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CategoryHead from "@/components/Category/CategoryHead";
import CourseTab from "@/components/Category/Filter/CourseTab";

import CourseDetails from "../../data/course-details/courseData.json";
let getAllCourse = JSON.parse(
  JSON.stringify(CourseDetails.courseDetails.slice(0, 12))
);

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
});
</script>

<style lang="scss" scoped></style>
