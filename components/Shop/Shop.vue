<template>
  <ShopHead :shopProduct="ShopData" :getSelectedCourse="getSelectedCourse" />

  <div class="rbt-shop-area rbt-section-overlayping-top rbt-section-gapBottom">
    <div class="container">
      <div class="row g-5">
        <div
          v-if="ShopData"
          v-for="(data, index) in getSelectedCourse"
          class="col-lg-4 col-md-6 col-12"
          :key="index"
        >
          <div class="rbt-default-card style-three rbt-hover">
            <div class="inner">
              <div class="content pt--0 pb--10">
                <h2 class="title">
                  <nuxt-link :to="`/single-product/${data.id}`">
                    {{ data.title }}
                  </nuxt-link>
                </h2>

                <span class="team-form">
                  <span class="location">By {{ data.productBy }}</span>
                </span>
              </div>
              <div class="thumbnail">
                <nuxt-link :to="`/single-product/${data.id}`">
                  <nuxt-img :src="data.courseImg" alt="Histudy Book Image" />
                </nuxt-link>
              </div>
              <div class="content">
                <div class="rbt-review justify-content-center">
                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <span class="rating-count">
                    ({{ data.rating }}) - 100% Positive Reviews
                  </span>
                </div>
                <div class="rbt-price justify-content-center mt--10">
                  <span class="current-price theme-gradient">
                    ${{ data.price }}.00
                  </span>
                  <span class="off-price">${{ data.offPrice }}</span>
                </div>
                <ClientOnly>
                  <div class="addto-cart-btn mt--20">
                    <a
                      class="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                      @click="() => addProductsToCart(data.id)"
                    >
                      <span class="icon-reverse-wrapper">
                        <span class="btn-text">{{
                          isAddedToCartProducts(data.id)
                            ? "Already Added"
                            : "Add To Cart"
                        }}</span>
                        <span class="btn-icon">
                          <i class="feather-arrow-right"></i>
                        </span>
                        <span class="btn-icon">
                          <i class="feather-arrow-right"></i>
                        </span>
                      </span>
                    </a></div
                ></ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 mt--60">
          <Pagination
            :totalPages="totalPages"
            :pageNumber="page"
            @clickPagination="handleClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ShopData from "../../data/shop.json";

import ShopHead from "./ShopHead";
import Pagination from "../Common/Pagination.vue";
import { addProductsToCart, isAddedToCartProducts } from "~/context/cart/shop";
const products = ref(ShopData.shop);
const page = ref(1);
const totalPages = ref(Math.ceil(products.value.length / 6));

const qty = ref(1);

const getSelectedCourse = computed(() =>
  products.value.slice((page.value - 1) * 6, (page.value - 1) * 6 + 6)
);
const handleClick = (num) => {
  page.value = num;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// =====> Start ADD-To-Cart
</script>

<style lang="scss" scoped></style>
