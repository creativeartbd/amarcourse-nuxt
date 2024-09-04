<template>
  <div class="row g-5 row--30 align-items-center">
    <div class="col-lg-6">
      <div class="thumbnail">
        <nuxt-img
          class="w-100 radius-10"
          :src="product.courseImg && product.courseImg"
          alt="Product Images"
        />
      </div>
    </div>
    <div class="col-lg-6">
      <div class="content">
        <div class="rbt-review justify-content-start">
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <span class="rating-count">
            ({{ product.rating }}) - 100% Positive Reviews
          </span>
        </div>

        <h2 class="title mt--10 mb--10">{{ product.title }}</h2>
        <span class="rbt-label-style description">
          By: {{ product.productBy }}
        </span>

        <div class="rbt-price justify-content-start mt--10">
          <span class="current-price theme-gradient">
            ${{ product.price }}.00
          </span>
          <span class="off-price">${{ product.offPrice }}.00</span>
        </div>

        <p class="mt--20">{{ product.desc }}</p>

        <div class="product-action mb--20">
          <div class="pro-qty">
            <span class="dec qtybtn" @click="() => decreasePrice(product.id)">
              -
            </span>
            <span>
              <client-only>
                {{
                  isAddedToCartProducts(product.id)
                    ? cartProducts.filter((elm) => elm.id == product.id)[0]
                        .quantity
                    : qty
                }}</client-only
              ></span
            >
            <span class="inc qtybtn" @click="() => increasePrice(product.id)">
              +
            </span>
          </div>
          <client-only>
            <div class="addto-cart-btn">
              <a
                class="rbt-btn btn-gradient hover-icon-reverse"
                href="#"
                @click="() => addProductsToCart(product.id)"
              >
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">{{
                    isAddedToCartProducts(product.id)
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
          ></client-only>
        </div>

        <ul class="product-feature">
          <li><span>SKU:</span> {{ product.sku }}</li>
          <li>
            <span>Categories: </span> <a href="#">{{ product.categories }}</a>
          </li>
          <li>
            <span>Tag: </span>

            <a
              v-if="product"
              v-for="(list, i) in product.tag"
              class="me-2"
              href="#"
              :key="i"
            >
              {{ list }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  isAddedToCartProducts,
  addProductsToCartWithQuantity,
  cartProducts,
} from "~/context/cart/shop";

defineProps(["product"]);
const qty = ref(1);
const addProductsToCart = (id) => {
  if (!isAddedToCartProducts(id)) {
    addProductsToCartWithQuantity(id, qty.value);
  }
};
const increasePrice = (id) => {
  if (isAddedToCartProducts(id)) {
    const items = [...cartProducts.value];
    const item = items.filter((elm) => elm.id == id)[0];
    const indexOfItemInCart = items.indexOf(item);
    item.quantity += 1;
    items[indexOfItemInCart] = item;
    cartProducts.value = items;
    localStorage?.setItem("cartProducts", JSON.stringify(cartProducts.value));
  } else {
    qty.value += 1;
  }
};
const decreasePrice = (id) => {
  if (isAddedToCartProducts(id)) {
    const items = [...cartProducts.value];
    const item = items.filter((elm) => elm.id == id)[0];
    const indexOfItemInCart = items.indexOf(item);
    if (item.quantity > 1) {
      item.quantity -= 1;
      items[indexOfItemInCart] = item;
      cartProducts.value = items;
      localStorage?.setItem("cartProducts", JSON.stringify(cartProducts.value));
    }
  } else {
    if (qty.value > 1) {
      qty.value -= 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
