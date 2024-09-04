<template>
    <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
    <MobileMenu />
  
    <BreadCrumb title="Register" text="Register" />
  
    <div class="rbt-elements-area bg-color-white rbt-section-gap">
      <div class="container">
        <div class="row gy-5 row--30">
          <Login />
        </div>
      </div>
    </div>
  
    <div class="rbt-newsletter-area bg-gradient-6 ptb--50">
      <NewsletterThree />
    </div>
  
    <FooterOne />
  </template>
  
  <script setup>
  useSeoMeta({
    title:
      "Login and Registration || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
    description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  });
  import BreadCrumb from "@/components/Common/BreadCrumb";
  import FooterOne from "@/components/Footer/Footer-One";
  import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
  import MobileMenu from "@/components/Header/MobileMenu";
  
  import Login from "@/components/Login/Login";
  import NewsletterThree from "@/components/Newsletters/Newsletter-Three";
  </script>
  
  <style lang="scss" scoped></style>
  