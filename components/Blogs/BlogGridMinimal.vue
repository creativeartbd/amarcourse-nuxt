<template>
  <div class="row g-5">
    <div
      v-for="(data, index) in selectedGridBlogs.slice(start, end)"
      :key="index"
      class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
    >
      <div class="rbt-card variation-02 rbt-hover card-minimal">
        <div class="rbt-card-body">
          <ul class="meta-list justify-content-start mb--30">
            <li class="list-item">
              <i class="feather-clock"></i>
              <span>{{ data.date }}</span>
            </li>
          </ul>
          <h4 class="rbt-card-title">
            <nuxt-link :to="`/blog-details/${data.id}`">{{
              data.title
            }}</nuxt-link>
          </h4>
          <div class="rbt-card-bottom mt--40">
            <nuxt-link
              class="transparent-button"
              :to="`/blog-details/${data.id}`"
            >
              Learn More
              <i>
                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#27374D" fill="none" fill-rule="evenodd">
                    <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                    <path stroke-linecap="square" d="M.663 5.572h14.594" />
                  </g>
                </svg>
              </i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row" v-if="isPagination">
    <div class="col-lg-12 mt--60">
      <Pagination
        :totalPages="totalPages"
        :pageNumber="page"
        @clickPagination="handleClick"
      />
    </div>
  </div>
</template>

<script setup>
import BlogData from "@/data/blog/blog.json";
import Pagination from "@/components/Common/Pagination.vue";

defineProps(["isPagination", "start", "end"]);
const blogs = ref([]);
const page = ref(1);
const totalPages = ref(0);

const startIndex = computed(() => (page.value - 1) * 9);
const selectedGridBlogs = computed(() =>
  blogs.value.slice(startIndex.value, startIndex.value + 9)
);

const handleClick = (num) => {
  page.value = num;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  blogs.value = BlogData.blogGrid;
  totalPages.value = Math.ceil(BlogData.blogGrid.length / 9);
});
</script>
