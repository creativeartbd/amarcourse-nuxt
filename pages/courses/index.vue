<template>
    <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
    <MobileMenu />
    <!-- <Cart /> -->
  
    <CategoryHead
      @setFiltered="setFiltered"
      :page="page"
      :filtered="filtered"
      :category="getAllCourse"
    />
    <div class="rbt-section-overlayping-top rbt-section-gapBottom">
      <div class="container">
        <div class="row row--30 gy-5">
          <div class="col-lg-3 order-2 order-lg-1">
            <CourseSidebar @setFiltered="setFiltered" :category="getAllCourse" />
          </div>
          <div class="col-lg-9 order-1 order-lg-2">
            <CourseTab :course="getSelectedCourse" />
          </div>
        </div>
  
        <div v-if="getAllCourse.length > 6" class="row">
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
  
    <!-- <BackToTop /> -->
    <FooterOne />
  </template>
  
  <script setup>
  useSeoMeta({
    title:
      "Course With Sidebar || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
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
  import CourseTab from "@/components/Category/Filter/CourseTab";
  import CourseSidebar from "@/components/Category/Filter/CourseSidebar";
  const page = ref(1);
  
  let getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.courseDetails.slice(0, 12))
  );
  
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
  