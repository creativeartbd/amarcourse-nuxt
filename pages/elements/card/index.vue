<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Card" text="Card" />

  <div class="rbt-rbt-card-area rbt-section-gap bg-color-white">
    <div class="container">
      <div class="row row--15 align-items-center mb--30">
        <div class="col-lg-12">
          <div class="section-title">
            <h2 class="title">Card Style One</h2>
          </div>
        </div>
      </div>
      <div class="row row--15">
        <Card
          col="col-lg-4 col-md-6 col-sm-6 col-12"
          mt="mt--30"
          :start="0"
          :end="3"
          :isDesc="true"
          :isUser="true"
        />
      </div>
    </div>
  </div>

  <div class="rbt-rbt-card-area rbt-section-gap bg-color-extra2">
    <div class="container">
      <div class="row row--15 align-items-center mb--30">
        <div class="col-lg-12">
          <div class="section-title">
            <h2 class="title">Card Style Two</h2>
          </div>
        </div>
      </div>
      <CardTwo />
    </div>
  </div>

  <div class="rbt-rbt-card-area rbt-section-gap bg-color-white">
    <div class="container">
      <div class="row row--15 align-items-center mb--30">
        <div class="col-lg-12">
          <div class="section-title">
            <h2 class="title">Card Style Three</h2>
          </div>
        </div>
      </div>
      <div class="row row--15">
        <CardThree />
      </div>
    </div>
  </div>

  <div class="rbt-rbt-card-area rbt-section-gap bg-color-extra2">
    <div class="container">
      <div class="row row--15 align-items-center mb--30">
        <div class="col-lg-12">
          <div class="section-title">
            <h2 class="title">Card Style Four</h2>
          </div>
        </div>
      </div>
      <CardFour />
    </div>
  </div>

  <div class="rbt-rbt-card-area rbt-section-gap bg-color-white">
    <div class="container">
      <div class="row row--15 align-items-center mb--30">
        <div class="col-lg-12">
          <div class="section-title">
            <h2 class="title">Card Style Five</h2>
          </div>
        </div>
      </div>
      <div class="row row--15">
        <CardFive />
      </div>
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Card || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Card from "@/components/Cards/Card";
import CardFive from "@/components/Cards/Card-Five";
import CardFour from "@/components/Cards/Card-Four";
import CardThree from "@/components/Cards/Card-Three";
import CardTwo from "@/components/Cards/Card-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import sal from "sal.js";

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
