<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <Banner col="col-lg-12" text="All Blog" :getBlog="getAllBlogs" />
  <div class="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="container">
      <BlogGrid :isPagination="true" :top="true" :start="0" :end="6" />
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Blog Grid || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BlogData from "../../data/blog/blog.json";

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

import Banner from "@/components/Common/Banner";
import BlogGrid from "@/components/Blogs/BlogGrid";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import sal from "sal.js";
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
let getAllBlogs = JSON.parse(JSON.stringify(BlogData.blogGrid));
</script>

<style lang="scss" scoped></style>
