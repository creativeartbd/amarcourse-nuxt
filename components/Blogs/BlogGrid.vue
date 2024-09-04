<template>
    <!-- Loading spinner -->
    <div v-if="pending" class="loading-spinner">
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

    <div v-else>
        <BlogGridTop v-if="top" ≤ :BlogData="BlogData" :selectedGridBlogs="visibleBlogs" />

        <div class="row g-5 mt--15">
            <div v-for="(data, index) in visibleBlogs" :key="index" class="col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="rbt-card variation-02 rbt-hover">
                    <div class="rbt-card-img">
                        <nuxt-link :to="`/blog-details/${data.id}/${generateSlug(data.title)}`">
                            <nuxt-img
                                :src="data.featured_image || defaultImage"
                                width="450"
                                height="267"
                                priority
                                alt="Card image"
                            />
                        </nuxt-link>
                    </div>
                    <div class="rbt-card-body">
                        <h5 class="rbt-card-title">
                            <nuxt-link :to="`/blog-details/${data.id}/${generateSlug(data.title)}`">{{
                                data.title
                            }}</nuxt-link>
                        </h5>
                        <p class="rbt-card-text" v-html="data.excerpt"></p>
                        <div class="rbt-card-bottom">
                            <nuxt-link
                                class="transparent-button"
                                :to="`/blog-details/${data.id}/${generateSlug(data.title)}`"
                            >
                                <strong>সম্পূর্ন পড়ুন</strong>
                                <i>
                                    <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="#27374D" fill="none" fill-rule="evenodd">
                                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                                            <path stroke-linecap="square" d="M.663 5.572h14.594" />
                                        </g>
                                    </svg>
                                </i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import BlogGridTop from "./Blog-Sections/BlogGrid-Top.vue";

const defaultImage = "/path/to/default/image.jpg";
defineProps(["isPagination", "top", "start", "end"]);

const page = ref(1);
const perPage = ref(3);

const {
    data: posts,
    pending,
    error,
} = await useFetch("/api/blogs", {
    params: {
        page: 1, // The current page number
        per_page: 3, // The number of posts per page
    },
});

const visibleBlogs = ref(posts.value);

// Generate an SEO-friendly slug from the post title
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
