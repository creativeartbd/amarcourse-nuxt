<template>
    <div class="course-content">
        <pre>{{ review.rating.count_by_value }}</pre>

        <div class="section-title">
            <h4 class="rbt-title-style-3">Review</h4>
        </div>
        <div class="row g-5 align-items-center">
            <div class="col-lg-3">
                <div class="rating-box">
                    <div class="rating-number">{{ Math.ceil(review.rating.rating_avg) }}</div>
                    <div class="rating">
                        <div class="feature-sin rating">
                            <a href="#" v-for="n in parseInt(review.rating.rating_avg)" :key="n">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-star-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                    />
                                </svg>
                            </a>
                            <a href="#" v-for="n in 5 - parseInt(review.rating.rating_avg)" :key="n">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-star"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <span class="sub-title">Course Rating</span>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="review-wrapper">
                    <div class="single-progress-bar" v-for="(r, i) in review.rating.count_by_value" :key="i">
                        <div class="rating-text">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                                v-for="(rr, ii) in parseInt(i)"
                                :key="ii"
                            >
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                />
                            </svg>
                        </div>
                        <div class="progress">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                :style="{ width: (100 / 3) * r + '%' }"
                                :aria-valuenow="(100 / 3) * r"
                                aria-valuemin="0"
                                :aria-valuemax="(100 / 3) * r"
                            ></div>
                        </div>
                        <span class="value-text">{{ Math.ceil((100 / 3) * r) }}%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["review"]);
</script>

<style lang="scss" scoped></style>
