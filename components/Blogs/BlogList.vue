<template>
    <div class="row">
        <div class="col-lg-10 offset-lg-1 mt_dec--30">
            <!-- Loading spinner -->
            <div v-if="pending" class="loading-spinner">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

            <!-- Display the first blog post as featured -->
            <div v-if="!pending && selectedBlogs.length > 0" class="col-12 mt--30">
                <div class="rbt-card variation-02 height-auto rbt-hover">
                    <div class="rbt-card-img">
                        <nuxt-link :to="`/blog-details/${selectedBlogs[0].id}/${generateSlug(selectedBlogs[0].title)}`">
                            <nuxt-img
                                :src="selectedBlogs[0].featured_image || defaultImage"
                                width="1085"
                                height="645"
                                :alt="selectedBlogs[0].title"
                                @error="(e) => (e.target.src = defaultImage)"
                            />
                        </nuxt-link>
                    </div>
                    <div class="rbt-card-body">
                        <h3 class="rbt-card-title">
                            <nuxt-link
                                :to="`/blog-details/${selectedBlogs[0].id}/${generateSlug(selectedBlogs[0].title)}`"
                            >
                                {{ selectedBlogs[0].title }}
                            </nuxt-link>
                        </h3>
                        <p class="rbt-card-text" v-html="selectedBlogs[0].excerpt"></p>
                        <div class="rbt-card-bottom">
                            <nuxt-link
                                :to="`/blog-details/${selectedBlogs[0].id}/${generateSlug(selectedBlogs[0].title)}`"
                                class="transparent-button"
                            >
                                Learn More
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

            <!-- Display the remaining blog posts -->
            <BlogListItems v-if="!pending" :selectedBlogs="selectedBlogs.slice(1)" />
        </div>
    </div>

    <!-- Pagination -->
    <div v-if="!pending && isPagination" class="row">
        <div class="col-lg-12 mt--60">
            <Pagination :totalPages="totalPost" :pageNumber="page" @clickPagination="handleClick" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import BlogListItems from "./Blog-Sections/BlogList-Items.vue";
import Pagination from "../Common/Pagination.vue";

defineProps(["isPagination"]);
const page = ref(1);

// Fallback image if no image is found
const defaultImage = "/images/blog/not-found.webp";
// Fetch data using useFetch with reactive parameters
const {
    data: posts,
    pending,
    error,
} = await useFetch("/api/blogs", {
    params: {
        per_page: 5,
        page: page,
    },
});
// Computed properties for blogs and pagination
const selectedBlogs = computed(() => posts.value.posts || []);
const totalPost = computed(() => Math.ceil(posts.value.total_posts / 5));

// Handle pagination click event
const handleClick = (num) => {
    page.value = num;
    // Scroll to the top when pagination is clicked
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// Generate an SEO-friendly slug from the post title
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with dashes
        .replace(/^-+|-+$/g, ""); // Remove leading or trailing dashes
};
</script>
<style scoped>
/* Add your styles here */
</style>
