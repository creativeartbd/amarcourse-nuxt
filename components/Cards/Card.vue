<template>
    <div v-if="pending" class="loading-spinner">
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

    <div
        v-if="!pending && allCourses.length"
        v-for="(data, index) in allCourses.slice(start, end)"
        :key="index"
        :class="[col, mt]"
        data-sal-delay="150"
        data-sal="slide-up"
        data-sal-duration="800"
    >
        <div class="rbt-card variation-01 rbt-hover">
            <div class="rbt-card-img">
                <nuxt-link :to="`/course-details/${data?.ID}/${generateSlug(data.post_title)}`">
                    <nuxt-img v-if="data?.thumbnail_url" :src="data.thumbnail_url" alt="Card image" />
                </nuxt-link>
            </div>
            <div class="rbt-card-body">
                <div class="rbt-card-top">
                    <div class="rbt-review">
                        <div class="rating" v-if="data?.ratings?.rating_count > 0">
                            <i v-for="(elm, i) in parseInt(data?.ratings?.rating_sum)" :key="i" class="fas fa-star"></i>
                            <i
                                v-for="(elm, i) in 5 - parseInt(data?.ratings?.rating_sum)"
                                :key="i"
                                class="far fa-star"
                            ></i>
                        </div>
                        <span class="rating-count">({{ data?.ratings?.rating_count }} Reviews)</span>
                    </div>
                    <div class="rbt-bookmark-btn">
                        <a class="rbt-round-btn" title="Bookmark" href="#">
                            <i class="feather-bookmark"></i>
                        </a>
                    </div>
                </div>

                <h4 class="rbt-card-title">
                    <nuxt-link :to="`/course-details/${data?.ID}/${generateSlug(data.post_title)}`">{{
                        data?.post_title || "No title available"
                    }}</nuxt-link>
                </h4>

                <ul class="rbt-meta">
                    <li>
                        <i class="feather-book"></i>
                        {{ data?.lesson_count }} Lesson<span v-if="data?.lesson_count > 1">s</span>
                    </li>
                    <li>
                        <i class="feather-users"></i>
                        {{ data?.total_enroll }} Student<span v-if="data?.total_enroll > 1">s</span>
                    </li>
                </ul>

                <template v-if="data?.post_excerpt">
                    <p class="rbt-card-text">{{ data?.post_excerpt }}</p>
                </template>

                <template v-if="data?.post_author">
                    <div class="rbt-author-meta mb--10">
                        <div class="rbt-avater">
                            <nuxt-link :to="'/'">
                                <nuxt-img :src="data?.post_author?.user_url" alt="Author image" />
                            </nuxt-link>
                        </div>
                        <div class="rbt-author-info">
                            By
                            <nuxt-link :to="'/'">{{ data?.post_author?.display_name || "Unknown Author" }}</nuxt-link>
                            In
                            <a href="#" v-for="(cat, catIndex) in data?.course_category" :key="catIndex">
                                <span>{{ cat?.name || "Uncategorized" }}&nbsp;</span></a
                            >
                        </div>
                    </div>
                </template>

                <div class="rbt-card-bottom">
                    <div class="rbt-price">
                        <span class="current-price">${{ data?.price || "N/A" }}</span>
                    </div>
                    <template v-if="data?.button">
                        <nuxt-link class="rbt-btn-link left-icon" :to="`/course-details/${data?.ID}`">
                            <i class="feather-shopping-cart"></i> Add To Cart
                        </nuxt-link>
                    </template>
                    <template v-else>
                        <nuxt-link
                            class="rbt-btn-link"
                            :to="`/course-details/${data?.ID}/${generateSlug(data.post_title)}`"
                        >
                            Learn More<i class="feather-arrow-right"></i>
                        </nuxt-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    col: { type: String, default: "" },
    mt: { type: String, default: "" },
    isDesc: { type: Boolean, default: false },
    isUser: { type: Boolean, default: false },
});
const { data: courses, pending, error } = await useFetch("/api/courses");
const allCourses = courses.value.data.posts;

const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
