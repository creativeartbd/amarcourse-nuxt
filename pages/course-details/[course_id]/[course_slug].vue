<template>
    <MobileMenu />
    <HeaderStyleTen headerSticky="" :headerType="true" />

    <div class="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <CourseHead :checkMatch="checkMatch !== undefined ? checkMatch : ''" />
    </div>

    <div class="rbt-course-details-area ptb--60">
        <div class="container">
            <div class="row g-5">
                <CourseDetailsOne :checkMatchCourses="checkMatch !== undefined ? checkMatch : ''" />
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

// Get the course rating
const {
    data: courseRatings,
    pendingRatings,
    errorRatings,
} = await useFetch("/api/ratings", {
    params: {
        course_id: course_id,
    },
});

// Get the course enrollment
const {
    data: courseEnrollments,
    pendingEnrollments,
    errorEnrollments,
} = await useFetch("/api/enrollments", {
    params: {
        course_id: course_id,
    },
});

// Get the course additional information
const {
    data: courseAddInfo,
    pendingAddInfo,
    errorAddInfo,
} = await useFetch("/api/additional-info", {
    params: {
        course_id: course_id,
    },
});

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
