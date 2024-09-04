<template>
  <BreadCrumb title="Wishlist" text="Wishlist" />

  <div class="wishlist_area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form @submit.prevent="() => {}">
            <div class="cart-table table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th class="pro-thumbnail">Image</th>
                    <th class="pro-title">Product</th>
                    <th class="pro-price">Price</th>
                    <th class="pro-quantity">Quantity</th>
                    <th class="pro-subtotal">Action</th>
                    <th class="pro-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-if="ShopData"
                    v-for="(data, index) in ShopData.shop"
                    :key="index"
                  >
                    <td class="pro-thumbnail">
                      <a href="#">
                        <nuxt-img :src="data.courseImg" alt="Product" />
                      </a>
                    </td>
                    <td class="pro-title">
                      <a href="#">{{ data.title }}</a>
                    </td>
                    <td class="pro-price">
                      <span>${{ data.price }}.00</span>
                    </td>
                    <td class="pro-quantity">
                      <div class="pro-qty">
                        <span class="dec qtybtn"> - </span>
                        <span>
                          <input type="text" :defaultValue="qty" />
                        </span>
                        <span class="inc qtybtn"> + </span>
                      </div>
                    </td>
                    <td class="pro-addtocart">
                      <button
                        class="rbt-btn btn-gradient"
                        @click="() => addProductsToCart(data.id)"
                      >
                        {{
                          isAddedToCartProducts(data.id)
                            ? "added"
                            : "add to cart"
                        }}
                      </button>
                    </td>
                    <td class="pro-remove">
                      <a href="#">
                        <i class="feather-x"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadCrumb from "../Common/BreadCrumb";

import ShopData from "../../data/shop.json";
import { addProductsToCart, isAddedToCartProducts } from "~/context/cart/shop";

const qty = ref(1);
</script>

<style lang="scss" scoped></style>
