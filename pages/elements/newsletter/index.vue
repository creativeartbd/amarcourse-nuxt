<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Newsletter" text="Newsletter" />

  <div class="rbt-newsletter-area bg-color-white rbt-section-gap">
    <Newsletter />
  </div>

  <div
    class="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap"
  >
    <NewsletterTwo />
  </div>

  <div class="rbt-newsletter-area bg-gradient-6 ptb--50">
    <NewsletterThree />
  </div>

  <div class="rbt-newsletter-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <NewsletterFour />
        </div>
      </div>
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Newsletter || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import Newsletter from "@/components/Newsletters/Newsletter";
import NewsletterFour from "@/components/Newsletters/Newsletter-Four";
import NewsletterThree from "@/components/Newsletters/Newsletter-Three";
import NewsletterTwo from "@/components/Newsletters/Newsletter-Two";
</script>

<style lang="scss" scoped></style>
