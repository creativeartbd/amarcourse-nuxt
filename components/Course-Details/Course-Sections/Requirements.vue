<template>
    <div class="col-lg-12">
        <div class="section-title">
            <h4 class="rbt-title-style-3 mb--20">{{ title }}</h4>
        </div>
        <ul v-if="formattedRequirements.length">
            <li v-for="(item, index) in formattedRequirements" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    requirements: {
        type: Array,
        default: () => [],
    },
    title: {
        type: String,
        default: "",
    },
});

// Ensure there's at least one item in the array and it's a string
const requirementsString = props.requirements[0] || "";
const formattedRequirements = requirementsString.split("\r\n");

console.log(formattedRequirements);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
