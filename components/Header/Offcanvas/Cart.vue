<template>
  <client-only>
    <div id="cart">
      <div id="cartContent" :class="`rbt-cart-side-menu`">
        <div class="inner-wrapper">
          <div class="inner-top">
            <div class="content">
              <div class="title">
                <h4 class="title mb--0">Your shopping cart</h4>
              </div>
              <div class="rbt-btn-close" id="btn_sideNavClose">
                <button
                  class="minicart-close-button rbt-round-btn"
                  @click="
                    () => {
                      closeCart();
                    }
                  "
                >
                  <i class="feather-x"></i>
                </button>
              </div>
            </div>
          </div>
          <nav class="side-nav w-100">
            <div class="rbt-minicart-wrapper">
              <li
                v-for="(data, index) in cartCourses"
                class="minicart-item"
                :key="index"
              >
                <div class="thumbnail">
                  <nuxt-link :to="`/course-details/${data?.id}`">
                    <nuxt-img
                      :src="data?.courseImg || data?.eventImg"
                      alt="Product Images"
                    />
                  </nuxt-link>
                </div>
                <div class="product-content">
                  <h6 class="title">
                    <nuxt-link :to="`/course-details/${data?.id}`">
                      {{ data?.courseTitle || data?.title }}
                    </nuxt-link>
                  </h6>

                  <span class="quantity">
                    {{ data?.quantity }} *
                    <span class="price">${{ data?.price }}</span>
                  </span>
                </div>
                <div class="close-btn">
                  <button
                    class="rbt-round-btn"
                    @click="
                      () => {
                        removeFromCourseCart(data?.id);
                      }
                    "
                  >
                    <i class="feather-x"></i>
                  </button>
                </div>
              </li>
              <li
                v-for="(data, index) in cartProducts"
                class="minicart-item"
                :key="index"
              >
                <div class="thumbnail">
                  <nuxt-link :to="`/single-product/${data?.id}`">
                    <nuxt-img
                      :src="data?.courseImg || data?.eventImg"
                      alt="Product Images"
                    />
                  </nuxt-link>
                </div>
                <div class="product-content">
                  <h6 class="title">
                    <nuxt-link :to="`/single-product/${data?.id}`">
                      {{ data?.courseTitle || data?.title }}
                    </nuxt-link>
                  </h6>

                  <span class="quantity">
                    {{ data?.quantity }} *
                    <span class="price">${{ data?.price }}</span>
                  </span>
                </div>
                <div class="close-btn">
                  <button
                    class="rbt-round-btn"
                    @click="
                      () => {
                        removeFromProductCart(data?.id);
                      }
                    "
                  >
                    <i class="feather-x"></i>
                  </button>
                </div>
              </li>
              <li
                v-for="(data, index) in cartEvents"
                class="minicart-item"
                :key="index"
              >
                <div class="thumbnail">
                  <nuxt-link :to="`/pages/event-details/${data?.id}`">
                    <nuxt-img
                      :src="data?.courseImg || data?.eventImg"
                      alt="Product Images"
                    />
                  </nuxt-link>
                </div>
                <div class="product-content">
                  <h6 class="title">
                    <nuxt-link :to="`/pages/event-details/${data?.id}`">
                      {{ data?.courseTitle || data?.title }}
                    </nuxt-link>
                  </h6>

                  <span class="quantity">
                    {{ data?.quantity }} *
                    <span class="price">${{ data?.price }}</span>
                  </span>
                </div>
                <div class="close-btn">
                  <button
                    class="rbt-round-btn"
                    @click="
                      () => {
                        removeFromEventCart(data?.id);
                      }
                    "
                  >
                    <i class="feather-x"></i>
                  </button>
                </div>
              </li>
            </div>
          </nav>

          <div class="rbt-minicart-footer">
            <hr class="mb--0" />
            <div class="rbt-cart-subttotal">
              <p class="subtotal">
                <strong>Subtotal:</strong>
              </p>
              <p class="price">
                ${{ totalPriceCourse + totalPriceProduct + totalPriceEvent }}
              </p>
            </div>
            <hr class="mb--0" />
            <div class="rbt-minicart-bottom mt--20">
              <div class="view-cart-btn">
                <nuxt-link
                  class="rbt-btn btn-border icon-hover w-100 text-center"
                  to="/cart"
                >
                  <span class="btn-text">View Cart</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </nuxt-link>
              </div>
              <div class="checkout-btn mt--20">
                <nuxt-link
                  class="rbt-btn btn-gradient icon-hover w-100 text-center"
                  to="/checkout"
                >
                  <span class="btn-text">Checkout</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="close_side_menu"
        href="#"
        @click="
          () => {
            closeCart();
          }
        "
      ></a>
    </div>
  </client-only>
</template>

<script setup>
import {
  cartCourses,
  removeFromCourseCart,
  totalPriceCourse,
} from "~/context/cart/course";
import {
  cartEvents,
  removeFromEventCart,
  totalPriceEvent,
} from "~/context/cart/event";
import {
  cartProducts,
  removeFromProductCart,
  totalPriceProduct,
} from "~/context/cart/shop";

const closeCart = () => {
  document.getElementById("cart")?.classList.remove("cart-sidenav-menu-active");
  document.getElementById("cartContent")?.classList.remove("side-menu-active");
};
watch(
  () => useRoute().path,
  () => {
    closeCart();
  }
);
</script>

<style lang="scss" scoped></style>
