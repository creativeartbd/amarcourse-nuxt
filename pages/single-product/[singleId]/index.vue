<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

  <SingleProduct
    :checkMatchProduct="checkMatch !== undefined ? checkMatch : ''"
  />

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Single Product || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import ShopData from "../../../data/shop.json";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";

import SingleProduct from "@/components/Single-Product/SingleProduct";
import FooterOne from "@/components/Footer/Footer-One";
const route = useRoute();
const productId = route.params.singleId;
let getProduct;

getProduct = JSON.parse(JSON.stringify(ShopData.shop));

const checkMatch =
  getProduct.find((product) => product.id == productId) || getProduct[0];
</script>

<style lang="scss" scoped></style>
