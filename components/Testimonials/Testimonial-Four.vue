<template>
    <div v-for="(data, index) in testimonialData" :key="index" class="container">
        <div class="row">
            <div class="col-lg-12 mb--60">
                <div class="section-title text-center">
                    <span class="subtitle bg-primary-opacity">{{ data.tag }}</span>
                    <h2 class="title">{{ data.title }}</h2>
                </div>
            </div>
        </div>
        <div class="row g-5">
            <div v-for="(item, innerIndex) in data.body" :key="innerIndex" class="col-lg-4 col-md-6 col-12">
                <div class="rbt-testimonial-box">
                    <div class="inner">
                        <div class="clint-info-wrapper">
                            <div class="thumb">
                                <nuxt-img :src="item.img" alt="Clint Images" />
                            </div>
                            <div class="client-info">
                                <h5 class="title">{{ item.title }}</h5>
                                <span>
                                    {{ item.position }} <i>{{ item.company }}</i>
                                </span>
                            </div>
                        </div>
                        <div class="description">
                            <p class="subtitle-3">{{ item.desc }}</p>
                            <div class="rating mt--20">
                                <a href="#">
                                    <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-star"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TestimonialData from "~/data/elements/testimonial.json";

const testimonialData = TestimonialData.testimonialFour;
</script>

<style scoped>
/* Add your scoped styles here */
</style>
