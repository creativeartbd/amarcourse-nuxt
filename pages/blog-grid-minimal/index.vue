<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <Banner col="col-lg-12" text="All Blog" :getBlog="getBlog" />
  <div class="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="container">
      <BlogGridMinimal :isPagination="true" :start="0" :end="9" />
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Blog Grid Minimal || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import sal from "sal.js";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

import Banner from "@/components/Common/Banner";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BlogGridMinimal from "@/components/Blogs/BlogGridMinimal";
import BlogData from "../../data/blog/blog.json";
let getBlog = JSON.parse(JSON.stringify(BlogData.blogGrid));

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
