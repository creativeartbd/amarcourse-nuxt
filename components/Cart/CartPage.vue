<template>
  <ClientOnly>
    <div class="cart_area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="() => {}">
              <div class="cart-table table-responsive mb--60">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="pro-thumbnail">Image</th>
                      <th class="pro-title">Product</th>
                      <th class="pro-price">Price</th>
                      <th class="pro-quantity">Quantity</th>
                      <th class="pro-subtotal">Total</th>
                      <th class="pro-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartItems />
                  </tbody>
                </table>
              </div>
            </form>

            <div class="row g-5">
              <div class="col-lg-6 col-12">
                <div class="calculate-shipping edu-bg-shade">
                  <div class="section-title text-start">
                    <h4 class="title mb--30">Calculate Shipping</h4>
                  </div>
                  <form @submit.prevent="() => {}">
                    <div class="row">
                      <div class="col-md-6 col-12 mb--25">
                        <div class="rbt-modern-select bg-transparent height-45">
                          <select class="w-100">
                            <option>Bangladesh</option>
                            <option>China</option>
                            <option>country</option>
                            <option>India</option>
                            <option>Japan</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6 col-12 mb--25">
                        <div class="rbt-modern-select bg-transparent height-45">
                          <select class="w-100">
                            <option>Dhaka</option>
                            <option>Barisal</option>
                            <option>Khulna</option>
                            <option>Comilla</option>
                            <option>Chittagong</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6 col-12 mb--25">
                        <input type="text" placeholder="Postcode / Zip" />
                      </div>
                      <div class="col-md-6 col-12 mb--25">
                        <a
                          class="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                          href="#"
                        >
                          <span class="icon-reverse-wrapper">
                            <span class="btn-text">Estimate</span>
                            <span class="btn-icon">
                              <i class="feather-arrow-right"></i>
                            </span>
                            <span class="btn-icon">
                              <i class="feather-arrow-right"></i>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="discount-coupon edu-bg-shade">
                  <div class="section-title text-start">
                    <h4 class="title mb--30">Discount Coupon Code</h4>
                  </div>
                  <form @submit.prevent="() => {}">
                    <div class="row">
                      <div class="col-md-6 col-12 mb--25">
                        <input type="text" placeholder="Coupon Code" />
                      </div>
                      <div class="col-md-6 col-12 mb--25">
                        <button
                          class="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                        >
                          <span class="icon-reverse-wrapper">
                            <span class="btn-text">Apply Code</span>
                            <span class="btn-icon">
                              <i class="feather-arrow-right"></i>
                            </span>
                            <span class="btn-icon">
                              <i class="feather-arrow-right"></i>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col-lg-5 offset-lg-1 col-12">
                <div class="cart-summary">
                  <div class="cart-summary-wrap">
                    <div class="section-title text-start">
                      <h4 class="title mb--30">CartPage Summary</h4>
                    </div>
                    <p>
                      Sub Total
                      <span
                        >${{
                          totalPriceCourse +
                          totalPriceProduct +
                          totalPriceEvent
                        }}.00</span
                      >
                    </p>
                    <p>
                      Shipping Cost <span>${{ 10 }}.00</span>
                    </p>
                    <h2>
                      Grand Total{{ " " }}
                      <span
                        >${{
                          totalPriceCourse +
                          totalPriceProduct +
                          totalPriceEvent +
                          10
                        }}.00</span
                      >
                    </h2>
                  </div>

                  <div class="cart-submit-btn-group">
                    <div class="single-button w-50">
                      <nuxt-link
                        to="/checkout"
                        class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100 text-center"
                      >
                        <span data-text="Checkout">Checkout</span>
                      </nuxt-link>
                    </div>
                    <div class="single-button w-50">
                      <button
                        class="rbt-btn rbt-switch-btn rbt-switch-y w-100 btn-border"
                      >
                        <span data-text="Update CartPage">
                          Update CartPage
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></ClientOnly
  >
</template>

<script setup>
import { totalPriceCourse } from "~/context/cart/course";
import CartItems from "./CartItems";
import { totalPriceProduct } from "~/context/cart/shop";
import { totalPriceEvent } from "~/context/cart/event";
</script>

<style lang="scss" scoped></style>
