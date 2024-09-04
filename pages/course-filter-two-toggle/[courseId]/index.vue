<template>
  <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
  <MobileMenu />

  <CategoryHeadTwo
    :page="page"
    :filtered="filtered"
    :items="filteredCourses"
    @setFiltered="setFiltered"
    :category="filteredCourses[0]"
  />

  <div class="rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="inner">
      <div class="container">
        <CourseFilterOneToggle v-if="filtered[0]" :course="filtered" />
        <div class="text-white" v-else>No item found in this category.</div>

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

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Course Category Toggle Two || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import CategoryHeadTwo from "@/components/Category/CategoryHeadTwo";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import Pagination from "@/components/Common/Pagination";
import CourseDetails from "../../../data/course-details/courseData.json";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\d+/g, "") // Remove all numeric digits
    .replace("&", "")
    .replace(/\s+/g, " ") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

const page = ref(1);
const filteredCourses = ref([]);
const router = useRoute();
const courseId = router.params.courseId;

const getCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));
const checkMatchCourse = getCourse.filter(
  (course) => slugify(course.category) == slugify(courseId)
);
filteredCourses.value = checkMatchCourse;

const filtered = ref(filteredCourses.value);
watch(filtered, () => {
  page.value = 1;
});
const totalPages = computed(() => {
  return Math.ceil(filtered?.value?.length / 6);
});

const setFiltered = (val) => {
  filtered.value = val;
};
const handleClick = (num) => {
  page.value = num;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped></style>
