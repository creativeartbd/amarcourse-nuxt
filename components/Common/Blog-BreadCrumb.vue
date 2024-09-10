<template>
    <div class="breadcrumb-image-container breadcrumb-style-max-width">
        <div class="breadcrumb-image-wrapper">
            <div class="breadcrumb-dark">
                <nuxt-img src="/images/bg/bg-image-10.jpg" alt="Education Images" />
            </div>
        </div>

        <div class="breadcrumb-content-top text-center">
            <ul class="meta-list justify-content-center mb--10">
                <li class="list-item">
                    <div class="author-thumbnail" v-if="matchedBlog.author">
                        <NuxtLink :to="`/profile/${matchedBlog.author.nickname}`">
                            <nuxt-img
                                v-if="matchedBlog.author.image"
                                :src="matchedBlog.author.image"
                                alt="blog-image"
                            />
                        </NuxtLink>
                    </div>

                    <div v-if="matchedBlog.author.nickname" class="author-info">
                        <NuxtLink :to="`/profile/${matchedBlog.author.nickname}`">
                            <strong>{{ matchedBlog.author.nickname }}</strong> </NuxtLink
                        >{{ " " }} in{{ " " }}

                        <a href="#" v-for="(category, categoryIndex) in matchedBlog.categories" :key="categoryIndex">
                            <strong>{{ category.name }}</strong>
                        </a>
                    </div>
                </li>

                <li v-if="matchedBlog.date" class="list-item">
                    <i class="feather-clock"></i>
                    <span>{{ formatDate(matchedBlog.date) }}</span>
                </li>
            </ul>

            <h1 v-if="matchedBlog.title" class="title">{{ matchedBlog.title }}</h1>

            <!-- <p v-if="matchedBlog" v-html=" matchedBlog.excerpt.rendered "></p> -->
        </div>
    </div>
</template>

<script setup>
defineProps(["matchedBlog"]);

const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Customize the format options
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options); // e.g., "September 23, 2023"
};
</script>

<style lang="scss" scoped></style>
