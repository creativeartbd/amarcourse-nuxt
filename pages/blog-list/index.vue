<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <Banner col="col-lg-10 offset-lg-1" text="সকল টিউটোরিয়াল" :getBlog="getAllBlogs" />
  <div class="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="container">
      <BlogList :isPagination="true" />
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Blog Lish || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BlogData from "@/data/blog/blog.json";
let getAllBlogs = JSON.parse(JSON.stringify(BlogData.blogList));
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

import BlogList from "@/components/Blogs/BlogList";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import Banner from "@/components/Common/Banner";
</script>

<style lang="scss" scoped></style>
