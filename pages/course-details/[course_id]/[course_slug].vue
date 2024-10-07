<template>
    <MobileMenu />
    <HeaderStyleTen headerSticky="" :headerType="true" />

    <div class="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <CourseHead :courseHeadData="courseHeadData" :checkMatch="checkMatch !== undefined ? checkMatch : ''" />
    </div>

    <div class="rbt-course-details-area ptb--60">
        <div class="container">
            <div class="row g-5">
                <CourseDetailsOne
                    :courseDetails="courseDetails"
                    :courseId="course_id"
                    :checkMatchCourses="checkMatch !== undefined ? checkMatch : ''"
                />
            </div>
        </div>
    </div>

    <CourseActionBottom :checkMatchCourses="checkMatch !== undefined ? checkMatch : ''" />

    <div class="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
        <SimilarCourses :checkMatchCourses="checkMatch !== undefined ? checkMatch.similarCourse : ''" />
    </div>

    <Separator />
    <FooterOne />
</template>

<script setup>
useSeoMeta({
    title: "Course Details || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
    description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";
import CourseDetailsOne from "@/components/Course-Details/CourseDetails-One";

import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import CourseData from "../../../data/course-details/courseData.json";
import sal from "sal.js";

const route = useRoute();
const course_id = route.params.course_id;

// Get the course info
const {
    data: courseInfo,
    pending,
    error,
} = await useFetch("/api/course", {
    params: {
        course_id: course_id,
    },
});

const singleCourse = courseInfo.value.data;

const courseHeadData = {
    title: singleCourse.post_title,
    excerpt: singleCourse.post_excerpt,
    rating: singleCourse.ratings,
    enrollments: singleCourse.enrollments,
    author: singleCourse.author_name,
    author_image_url: singleCourse.author_image_url,
    categories: singleCourse.categories,
    last_updated: singleCourse.updated_on,
};

const courseDetails = {
    featured_image: singleCourse.featured_image,
    additional_info: singleCourse.course_additional_info,
    description: singleCourse.post_content,
    author_image_url: singleCourse.author_image_url,
    author_name: singleCourse.author_name,
    author_description: singleCourse.author_description,
    rating: singleCourse.ratings,
};

const postId = 17;
let getCourse;

getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));

const checkMatch = getCourse.find((course) => course.id == postId) || getCourse[0];

onMounted(() => {
    sal({
        threshold: 0.01,
        once: true,
    });
});
</script>

<style lang="scss" scoped></style>
