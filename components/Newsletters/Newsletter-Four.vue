<template>
    <div class="section-title text-center" v-for="(data, index) in NewsletterData.newsletterFour" :key="index">
        <h2 class="title">
            {{ data.title }} <br />
            {{ data.subTitle }}
        </h2>
        <form @submit.prevent="() => {}" class="newsletter-form-1 mt--50 radius-round">
            <input class="rbt-border" type="email" placeholder="Enter Your E-Email" />
            <button type="submit" class="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round">
                <span class="icon-reverse-wrapper">
                    <span class="btn-text">Subscribe</span>
                    <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                    </span>
                </span>
            </button>
        </form>
    </div>
</template>

<script setup>
import NewsletterData from "../../data/elements/newsletter.json";
</script>

<style lang="scss" scoped></style>
