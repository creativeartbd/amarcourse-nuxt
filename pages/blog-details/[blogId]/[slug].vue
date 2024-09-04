<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <!-- Showing loading until the blog post is loaded -->
  <div v-if="pending" class="loading-spinner">
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>

  <!-- Show the blog posts -->
  <div class="rbt-overlay-page-wrapper" v-else-if="!pending && matchedBlog">
    <BlogBreadCrumb :matchedBlog="matchedBlog" />
    <div class="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
      <div class="blog-content-wrapper rbt-article-content-wrapper">
        <BlogDetails :matchedBlog="matchedBlog" />
        <div class="related-post pt--60">
          <div class="section-title text-start mb--40">
            <span class="subtitle bg-primary-opacity">Related Post</span>
            <h4 class="title">Similar Post</h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Show any error message -->
  <div v-else-if="error" class="error-message text-center mt-5 mb-b">
    <h3 class="sub-title">দুঃখিত, আপনি যে ব্লগটি খুঁজছেন আমরা সেটি খুঁজে পাচ্ছি না।</h3>
  </div>

  <Separator />
  <FooterThree />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";

const route = useRoute();
const postId = route.params.blogId;

const matchedBlog = ref(null);

const { data, pending, error  } = await useFetch('/api/blog/' + postId);
matchedBlog.value = data.value;

// Watch the blog data and update the meta title
watch( () => matchedBlog.value?.title, (newTitle) => {
    if (newTitle) {
      useSeoMeta({
        title: `${newTitle} | Amar Course`,
        description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
      });
    }
  },
  { immediate: true } // This ensures the watcher runs immediately in case the data is already available
);

</script>
