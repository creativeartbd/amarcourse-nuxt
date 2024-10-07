<template>
    <div class="col-lg-8">
        <div class="course-details-content">
            <div class="rbt-course-feature-box rbt-shadow-box thuumbnail">
                <CourseBanner v-if="courseDetails.featured_image" :bannerImg="courseDetails.featured_image" />
            </div>

            <!-- <pre>{{ courseDetails.additional_info }}</pre> -->

            <div class="rbt-inner-onepage-navigation sticky-top mt--30">
                <CourseMenu />
            </div>

            <Overview :courseDetails="courseDetails.description" />

            <pre>{{ allTopics }}</pre>

            <div
                class="course-content rbt-shadow-box coursecontent-wrapper mt--30"
                id="coursecontent"
                v-if="!pendingTopics"
            >
                <Content
                    v-for="(data, index) in checkMatchCourses.courseContent"
                    :key="index"
                    :data="data"
                    :checkMatchCourses="data"
                />
            </div>

            <div class="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                <div class="row g-5">
                    <Requirements
                        title="এই কোর্স থেকে আপনি কি শিখতে পারবেন"
                        :requirements="courseDetails.additional_info.course_benefits"
                    />
                </div>
            </div>

            <div class="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                <div class="row g-5">
                    <Requirements
                        title="এই কোর্সটি তাদের জন্য উপযুক্ত"
                        :requirements="courseDetails.additional_info.course_target_audience"
                    />
                </div>
            </div>

            <div class="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                <div class="row g-5">
                    <Requirements
                        title="প্রয়োজনীয়তা এবং নির্দেশাবলী"
                        :requirements="courseDetails.additional_info.course_requirements"
                    />
                </div>
            </div>

            <div class="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                <div class="row g-5">
                    <Requirements
                        title="এই কোর্সে আপনি পাবেন"
                        :requirements="courseDetails.additional_info.course_material_includes"
                    />
                </div>
            </div>

            <div class="rbt-instructor rbt-shadow-box intructor-wrapper mt--30" id="intructor">
                <Instructor
                    :author="courseDetails"
                    v-for="(data, index) in checkMatchCourses.courseInstructor"
                    :key="index"
                    :data="data"
                    :checkMatchCourses="data"
                />
            </div>

            <div class="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30" id="review">
                <Review :review="courseDetails" />
            </div>

            <Featured
                v-for="(data, index) in checkMatchCourses.featuredReview"
                :key="index"
                :data="data"
                :coursesFeatured="data"
            />
        </div>
        <div class="related-course mt--60">
            <RelatedCourse
                v-for="(data, index) in checkMatchCourses.relatedCourse"
                :key="index"
                :checkMatchCourses="data"
            />
        </div>
    </div>

    <div class="col-lg-4">
        <div class="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
            <div class="inner">
                <Viedo :checkMatchCourses="checkMatchCourses && checkMatchCourses" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Featured from "./Course-Sections/Featured";
import Instructor from "./Course-Sections/Instructor";
import Overview from "./Course-Sections/Overview";
import RelatedCourse from "./Course-Sections/RelatedCourse";
import Requirements from "./Course-Sections/Requirements";
import Review from "./Course-Sections/Review";
import Viedo from "./Course-Sections/Viedo";
const props = defineProps({
    checkMatchCourses: {
        type: Object,
        default: () => [],
    },
    courseDetails: {
        type: Object,
        default: "",
    },
    courseId: {
        type: String,
        default: "",
    },
});

// Get the course content
const {
    data: courseTopics,
    pendingTopics,
    errorTopics,
} = await useFetch("/api/course-content", {
    params: {
        course_id: props.courseId,
    },
});

const {
    data: courseLessons,
    pendingLessons,
    errorLessons,
} = await useFetch("/api/lessons", {
    params: {
        course_id: props.courseId,
    },
});

console.log("course lessons is");
console.log(courseLessons.value);
</script>

<style lang="scss" scoped></style>
