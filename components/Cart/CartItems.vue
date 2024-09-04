<template>
  <client-only>
    <tr v-for="(product, i) in cartCourses" :key="i">
      <td class="pro-thumbnail">
        <nuxt-link :to="`/course-details/${product.id}`">
          <nuxt-img
            :src="product.courseImg || product.eventImg"
            alt="Product"
          />
        </nuxt-link>
      </td>
      <td class="pro-title">
        <nuxt-link :to="`/course-details/${product.id}`">
          {{ product.courseTitle || product.title }}
        </nuxt-link>
      </td>
      <td class="pro-price">
        <span>${{ product.price }}.00</span>
      </td>
      <td class="pro-quantity">
        <div class="pro-qty">
          <span
            class="dec qtybtn"
            @click="
              () => {
                decreaseQuantityCourse(i);
              }
            "
          >
            -
          </span>
          <span>{{ product.quantity }}</span>
          <span
            class="inc qtybtn"
            @click="
              () => {
                increaseQuantityCourse(i);
              }
            "
          >
            +
          </span>
        </div>
      </td>
      <td class="pro-subtotal">
        <span>${{ product.price * product.quantity }}.00</span>
      </td>
      <td class="pro-remove">
        <a
          @click="
            () => {
              removeFromCourseCart(product.id);
            }
          "
        >
          <i class="feather-x"></i>
        </a>
      </td>
    </tr>
    <tr v-for="(product, i) in cartProducts" :key="i">
      <td class="pro-thumbnail">
        <nuxt-link :to="`/single-product/${product.id}`">
          <nuxt-img
            :src="product.courseImg || product.eventImg"
            alt="Product"
          />
        </nuxt-link>
      </td>
      <td class="pro-title">
        <nuxt-link :to="`/single-product/${product.id}`">
          {{ product.courseTitle || product.title }}
        </nuxt-link>
      </td>
      <td class="pro-price">
        <span>${{ product.price }}.00</span>
      </td>
      <td class="pro-quantity">
        <div class="pro-qty">
          <span
            class="dec qtybtn"
            @click="
              () => {
                decreaseQuantityProduct(i);
              }
            "
          >
            -
          </span>
          <span>{{ product.quantity }}</span>
          <span
            class="inc qtybtn"
            @click="
              () => {
                increaseQuantityProduct(i);
              }
            "
          >
            +
          </span>
        </div>
      </td>
      <td class="pro-subtotal">
        <span>${{ product.price * product.quantity }}.00</span>
      </td>
      <td class="pro-remove">
        <a
          @click="
            () => {
              removeFromProductCart(product.id);
            }
          "
        >
          <i class="feather-x"></i>
        </a>
      </td>
    </tr>
    <tr v-for="(product, i) in cartEvents" :key="i">
      <td class="pro-thumbnail">
        <nuxt-link :to="`/pages/event-details/${product.id}`">
          <nuxt-img
            :src="product.courseImg || product.eventImg"
            alt="Product"
          />
        </nuxt-link>
      </td>
      <td class="pro-title">
        <nuxt-link :to="`/pages/event-details/${product.id}`">
          {{ product.courseTitle || product.title }}
        </nuxt-link>
      </td>
      <td class="pro-price">
        <span>${{ product.price }}.00</span>
      </td>
      <td class="pro-quantity">
        <div class="pro-qty">
          <span
            class="dec qtybtn"
            @click="
              () => {
                decreaseQuantityEvent(i);
              }
            "
          >
            -
          </span>
          <span>{{ product.quantity }}</span>
          <span
            class="inc qtybtn"
            @click="
              () => {
                increaseQuantityEvent(i);
              }
            "
          >
            +
          </span>
        </div>
      </td>
      <td class="pro-subtotal">
        <span>${{ product.price * product.quantity }}.00</span>
      </td>
      <td class="pro-remove">
        <a
          @click="
            () => {
              removeFromEventCart(product.id);
            }
          "
        >
          <i class="feather-x"></i>
        </a>
      </td>
    </tr>
  </client-only>
</template>

<script setup>
import {
  cartCourses,
  decreaseQuantityCourse,
  increaseQuantityCourse,
  removeFromCourseCart,
} from "~/context/cart/course";
import {
  cartEvents,
  decreaseQuantityEvent,
  increaseQuantityEvent,
  removeFromEventCart,
} from "~/context/cart/event";
import {
  cartProducts,
  decreaseQuantityProduct,
  increaseQuantityProduct,
  removeFromProductCart,
} from "~/context/cart/shop";
</script>

<style lang="scss" scoped></style>
~/context/cart/cart
