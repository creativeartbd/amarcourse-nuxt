<template> 
  <div
    v-if="selectedBlogs"
    v-for="(item, index) in selectedBlogs.slice(start, end)"
    :key="index"
    class="rbt-card card-list variation-02 rbt-hover mt--30"
  >
    <div class="rbt-card-img">
      <nuxt-link :to="`/blog-details/${item.id}/${generateSlug(item.title)}`">
        <nuxt-img :src="item.featured_image || defaultImage" width="580" height="300" alt="Card image" />
      </nuxt-link>
    </div>
    <div class="rbt-card-body">
      <h5 class="rbt-card-title">
        <nuxt-link :to="`/blog-details/${item.id}/${generateSlug(item.title)}`">{{ item.title }}</nuxt-link>
      </h5>
      <div class="rbt-card-bottom">
        <nuxt-link :to="`/blog-details/${item.id}/${generateSlug(item.title)}`" class="transparent-button">
          Read Article
          <i>
            <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#27374D" fill="none" fillRule="evenodd">
                <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                <path strokeLinecap="square" d="M.663 5.572h14.594" />
              </g>
            </svg>
          </i>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["start", "end", "selectedBlogs"]);
// Generate an SEO-friendly slug from the post title
const generateSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with dashes
    .replace(/^-+|-+$/g, ''); // Remove leading or trailing dashes
};
</script>

<style scoped>
/* Add your styles here */
</style>
