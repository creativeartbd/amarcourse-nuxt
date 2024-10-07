<template>
    <div class="col-lg-8">
        <div class="content text-start">
            <ul class="page-list">
                <li class="rbt-breadcrumb-item">
                    <!-- {{ courseHeadData }} -->
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <div class="icon-right">
                        <i class="feather-chevron-right"></i>
                    </div>
                </li>
                <li class="rbt-breadcrumb-item active">
                    {{ getMatchCourse.category }}
                </li>
            </ul>
            <h2 class="title">{{ courseHeadData.title }}</h2>
            <p class="description">{{ courseHeadData.excerpt }}</p>

            <div class="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
                <div class="feature-sin best-seller-badge">
                    <span class="rbt-badge-2">
                        <span class="image" v-if="getMatchCourse.awardImg">
                            <nuxt-img :src="getMatchCourse.awardImg" alt="Best Seller Icon" />
                        </span>
                        {{ getMatchCourse.sellsType }}
                    </span>
                </div>

                <div class="feature-sin rating">
                    <a href="#" v-for="n in parseInt(courseHeadData.rating.rating_avg)" :key="n">
                        <i class="fas fa-star"></i>
                    </a>
                    <a href="#" v-for="n in parseInt(5 - courseHeadData.rating.rating_avg)" :key="n">
                        <i class="far fa-star"></i>
                    </a>
                </div>

                <div class="feature-sin total-rating">
                    <a class="rbt-badge-4" href="#">{{ courseHeadData.rating.rating_count }} rating</a>
                </div>

                <div class="feature-sin total-student">
                    <span>{{ courseHeadData.enrollments.length }} students</span>
                </div>
            </div>

            <div class="rbt-author-meta mb--20">
                <div class="rbt-avater">
                    <nuxt-link :to="`/profile/${getMatchCourse.id}`">
                        <nuxt-img
                            v-if="courseHeadData.author_image_url"
                            :src="courseHeadData.author_image_url"
                            :alt="courseHeadData.author"
                        />
                    </nuxt-link>
                </div>
                <div class="rbt-author-info">
                    By
                    <nuxt-link :to="`/profile/${getMatchCourse.id}`">{{ courseHeadData.author }}</nuxt-link>
                    In
                    <a href="#" v-for="(cat, catId) in courseHeadData.categories" :key="catId">{{ cat.name }}&nbsp;</a>
                </div>
            </div>

            <ul class="rbt-meta">
                <li><i class="feather-calendar"></i>Last updated {{ formateDate(courseHeadData.last_updated) }}</li>
                <li><i class="feather-globe"></i>Bangla</li>
                <li><i class="feather-award"></i> {{ getMatchCourse.courseAward }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
defineProps(["getMatchCourse", "courseHeadData"]);
const formateDate = (dateString) => {
    // Create a Date object from the input string
    const date = new Date(dateString);

    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based, so add 1
    const day = date.getDate().toString().padStart(2, "0");

    // Return the formatted date string (YYYY-MM-DD)
    return `${year}-${month}-${day}`;
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
