<template>
    <div :class="`rbt-course-grid-column  ${isActiveListView ? 'active-list-view' : ''} `">
        <div v-for="(data, index) in course.slice(start, end)" :key="index" class="course-grid-2">
            <div :class="`rbt-card variation-01 rbt-hover  ${isActiveListView ? 'card-list-2' : ''} `">
                <div class="rbt-card-img">
                    <nuxt-link :to="`/course-details/${data.ID}/${generateSlug(data.post_name)}`">
                        <nuxt-img class="h-100" :src="data.thumbnail_url" alt="Card image" />
                        <div class="rbt-badge-3 bg-white">
                            <!-- <span>-{{ data.price }}%</span>
                            <span>Off</span> -->
                        </div>
                    </nuxt-link>
                </div>
                <div class="rbt-card-body">
                    <div class="rbt-card-top">
                        <div class="rbt-review">
                            <div class="rating" v-if="data.ratings.rating_count > 0">
                                <i
                                    v-for="(elm, i) in parseInt(data.ratings.rating_avg)"
                                    :key="i"
                                    class="fas fa-star"
                                ></i>
                                <i
                                    v-for="(elm, i) in 5 - parseInt(data.ratings.rating_avg)"
                                    :key="i"
                                    class="far fa-star"
                                ></i>
                            </div>
                            <span class="rating-count">({{ data.ratings.rating_count }} Reviews)</span>
                        </div>
                        <div class="rbt-bookmark-btn">
                            <a class="rbt-round-btn" title="Bookmark" href="#">
                                <i class="feather-bookmark"></i>
                            </a>
                        </div>
                    </div>

                    <h4 class="rbt-card-title">
                        <nuxt-link :to="`/course-details/${data.ID}/${generateSlug(data.post_name)}`">{{
                            data.post_title
                        }}</nuxt-link>
                    </h4>

                    <ul class="rbt-meta">
                        <li>
                            <i class="feather-book"></i>
                            {{ data.lesson_count }} Lesson<span v-if="data.lesson_count > 1">s</span>
                        </li>
                        <li>
                            <i class="feather-users"></i>
                            {{ data.total_enroll }} Student<span v-if="data.total_enroll > 1">s</span>
                        </li>
                    </ul>

                    <p class="rbt-card-text">{{ data.post_excerpt }}</p>
                    <div class="rbt-author-meta mb--10">
                        <div class="rbt-avater">
                            <a href="#">
                                <nuxt-img :src="data.post_author.user_url" width="33" height="33" alt="Sophia Jaymes" />
                            </a>
                        </div>
                        <div class="rbt-author-info">
                            By
                            <nuxt-link :to="`/profile/${data.ID}`">{{ data.post_author.display_name }}</nuxt-link>
                            In
                            <a href="#" v-for="(cat, catIndex) in data.course_category" :key="catIndex">
                                <span>{{ cat.name }}&nbsp;</span></a
                            >
                        </div>
                    </div>
                    <div class="rbt-card-bottom">
                        <div class="rbt-price">
                            <span class="current-price">${{ data.price }}</span>
                            <span class="off-price" v-if="data.sales_price">${{ data.sales_price }}</span>
                        </div>
                        <nuxt-link
                            class="rbt-btn-link"
                            :to="`/course-details/${data.ID}/${generateSlug(data.post_name)}`"
                        >
                            আরো জানুন<i class="feather-arrow-right"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { isActiveListView } from "~/utlis/courseLayout";
defineProps(["course", "start", "end"]);
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};
</script>
