<template>
    <div
        :class="`rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more ${toggle ? 'active' : ''}`"
        id="overview"
    >
        <div class="rbt-course-feature-inner has-show-more-inner-content">
            <p v-html="courseDetails"></p>
        </div>
    </div>
</template>

<script setup>
defineProps(["courseDetails"]);

const toggle = ref(false);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
