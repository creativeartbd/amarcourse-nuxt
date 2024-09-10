<template>
    <div class="content" v-if="matchedBlog">
        <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
            <figure v-if="matchedBlog.featured_image">
                <nuxt-img :src="matchedBlog.featured_image" alt="Blog Images" />
                <!-- <figcaption>{{ matchedBlog.caption }}</figcaption> -->
            </figure>
        </div>

        <div v-html="matchedBlog.content" class="mb-5"></div>

        <div class="tagcloud" v-if="matchedBlog.tags">
            <a v-for="(tagItem, innerIndex) in matchedBlog.tags" href="#" :key="innerIndex">
                {{ tagItem.name }}
            </a>
        </div>

        <div class="social-share-block">
            <div class="post-like">
                <a href="#">
                    <i class="feather feather-thumbs-up"></i>
                    <span>2.2k Like</span>
                </a>
            </div>

            <ul class="social-icon social-default transparent-with-border">
                <li v-if="matchedBlog" v-for="(socialItem, innerIndex) in matchedBlog.social" :key="innerIndex">
                    <nuxt-link :to="socialItem.url">
                        <i :class="socialItem.icon"></i>
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <div class="about-author" v-if="matchedBlog.author">
            <BlogAuthor :author="matchedBlog.author" />
        </div>

        <div class="rbt-comment-area">
            <div class="rbt-total-comment-post">
                <div class="title">
                    <h4 class="mb--0">
                        {{ matchedBlog.comment_count }} Comment<span v-if="matchedBlog.comment_count > 1">s</span>
                    </h4>
                </div>
                <div class="add-comment-button">
                    <a class="rbt-btn btn-gradient icon-hover radius-round btn-md" href="#">
                        <span class="btn-text">Add Your Comment</span>
                        <span class="btn-icon">
                            <i class="feather-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>
            <ComntForm :blog-id="matchedBlog.id" />
        </div>

        <div class="rbt-comment-area" v-if="matchedBlog.comment_count > 0">
            <h4 class="title">
                {{ matchedBlog.comment_count }} Comment<span v-if="matchedBlog.comment_count > 1">s</span>
            </h4>
            <ul class="comment-list">
                <Comment v-for="(comnt, innerIndex) in matchedBlog.comments" :comnt="comnt" :key="innerIndex" />
            </ul>
        </div>
    </div>
</template>

<script setup>
import BlogAuthor from "./Blog-Sections/Blog-Author";
import ComntForm from "./Blog-Sections/ComntForm";
import Comment from "./Blog-Sections/Comment";
defineProps(["matchedBlog"]);
</script>

<style lang="scss" scoped></style>
