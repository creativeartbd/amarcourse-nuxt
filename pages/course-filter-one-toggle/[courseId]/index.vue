<template>
  <HeaderStyleTen headerSticky="rbt-sticky" :headerType="true" />
  <MobileMenu />

  <CategoryHead :category="filteredCourses[0]" />

  <div class="rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="inner">
      <div class="container">
        <CourseFilterOneToggle
          v-if="checkMatchCourse[0]"
          :course="filteredCourses"
        />
        <div class="text-white" v-else>No item found in this category</div>
      </div>
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Category Details Toggle One || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import CategoryHead from "@/components/Category/CategoryHead";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";

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
const filteredCourses = ref([]);
const router = useRoute();
const courseId = router.params.courseId;

const getCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));
const checkMatchCourse = getCourse.filter(
  (course) => slugify(course.category) == slugify(courseId)
);
filteredCourses.value = checkMatchCourse;
</script>

<style lang="scss" scoped></style>
