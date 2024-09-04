<template>
  <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
  <MobileMenu />
  <!-- <Cart /> -->

  <CategoryHead
    :page="page"
    :filtered="filtered"
    @setFiltered="setFiltered"
    :category="filtered"
  />
  <div class="rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="inner">
      <div class="container">
        <CourseFilterOneToggle :course="getSelectedCourse" />

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
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Course Filter One Open || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import CourseDetails from "../../data/course-details/courseData.json";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CategoryHead from "@/components/Category/CategoryHead";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";
import Pagination from "@/components/Common/Pagination";

const page = ref(1);

let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));

const filtered = ref(getAllCourse);
const setFiltered = (val) => {
  filtered.value = val;
};
watch(filtered, () => {
  page.value = 1;
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
