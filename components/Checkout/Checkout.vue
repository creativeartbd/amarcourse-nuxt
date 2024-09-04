<template>
  <div class="container">
    <div class="row g-5 checkout-form">
      <CheckoutForm />
      <ClientOnly>
        <div class="col-lg-5">
          <div class="row pl--50 pl_md--0 pl_sm--0">
            <div class="col-12 mb--60">
              <h4 class="checkout-title">Cart Total</h4>

              <div class="checkout-cart-total">
                <h4>Product <span>Total</span></h4>

                <ul>
                  <li
                    v-for="(data, index) in [
                      ...cartCourses,
                      ...cartProducts,
                      ...cartEvents,
                    ]"
                    :key="index"
                  >
                    {{ data.courseTitle || data.title }}
                    <span>${{ data.price * data.quantity }}.00</span>
                  </li>
                </ul>

                <p>
                  Sub Total
                  <span
                    >${{
                      totalPriceCourse + totalPriceProduct + totalPriceEvent
                    }}.00</span
                  >
                </p>

                <p>
                  Shipping Fee <span>${{ 10 }}.00</span>
                </p>

                <h4 class="mt--30">
                  Grand Total
                  <span
                    >${{
                      totalPriceCourse +
                      totalPriceProduct +
                      totalPriceEvent +
                      10
                    }}.00</span
                  >
                </h4>
              </div>
            </div>

            <div class="col-12 mb--60">
              <h4 class="checkout-title">Payment Method</h4>
              <div
                class="checkout-payment-method accordion rbt-accordion-style rbt-accordion-05 accordion"
                id="accordionExamplea1"
              >
                <div class="single-method">
                  <input
                    type="radio"
                    id="payment_check"
                    name="payment-method"
                    value="check"
                  />
                  <label
                    htmlFor="payment_check"
                    data-bs-toggle="collapse"
                    data-bs-target="#payment"
                    aria-expanded="true"
                    aria-controls="payment"
                  >
                    Check Payment
                  </label>
                  <div
                    class="accordion-collapse collapse"
                    id="payment"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div class="accordion-body">
                      Please send a Check to Store name with Store Street, Store
                      Town, Store State, Store Postcode, Store Country.
                    </div>
                  </div>
                </div>

                <div class="single-method">
                  <input
                    type="radio"
                    id="payment_bank"
                    name="payment-method"
                    value="bank"
                  />
                  <label
                    htmlFor="payment_bank"
                    data-bs-toggle="collapse"
                    data-bs-target="#bank"
                    aria-expanded="true"
                    aria-controls="bank"
                  >
                    Direct Bank Transfer
                  </label>
                  <div
                    class="accordion-collapse collapse"
                    id="bank"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div class="accordion-body">
                      Please send a Check to Store name with Store Street, Store
                      Town, Store State, Store Postcode, Store Country.
                    </div>
                  </div>
                </div>

                <div class="single-method">
                  <input
                    type="radio"
                    id="payment_cash"
                    name="payment-method"
                    value="cash"
                  />
                  <label
                    htmlFor="payment_cash"
                    data-bs-toggle="collapse"
                    data-bs-target="#cash"
                    aria-expanded="true"
                    aria-controls="cash"
                  >
                    Cash on Delivery
                  </label>
                  <div
                    class="accordion-collapse collapse"
                    id="cash"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div class="accordion-body">
                      Please send a Check to Store name with Store Street, Store
                      Town, Store State, Store Postcode, Store Country.
                    </div>
                  </div>
                </div>

                <div class="single-method">
                  <input
                    type="radio"
                    id="payment_paypal"
                    name="payment-method"
                    value="paypal"
                  />
                  <label
                    htmlFor="payment_paypal"
                    data-bs-toggle="collapse"
                    data-bs-target="#paypal"
                    aria-expanded="true"
                    aria-controls="paypal"
                  >
                    Paypal
                  </label>
                  <div
                    class="accordion-collapse collapse"
                    id="paypal"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div class="accordion-body">
                      Please send a Check to Store name with Store Street, Store
                      Town, Store State, Store Postcode, Store Country.
                    </div>
                  </div>
                </div>

                <div class="single-method">
                  <input
                    type="radio"
                    id="payment_payoneer"
                    name="payment-method"
                    value="payoneer"
                  />
                  <label
                    htmlFor="payment_payoneer"
                    data-bs-toggle="collapse"
                    data-bs-target="#payoneer"
                    aria-expanded="true"
                    aria-controls="payoneer"
                  >
                    Payoneer
                  </label>
                  <div
                    class="accordion-collapse collapse"
                    id="payoneer"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div class="accordion-body">
                      Please send a Check to Store name with Store Street, Store
                      Town, Store State, Store Postcode, Store Country.
                    </div>
                  </div>
                </div>

                <div class="single-method">
                  <input type="checkbox" id="accept_terms" />
                  <label htmlFor="accept_terms">
                    I’ve read and accept the terms & conditions
                  </label>
                </div>
              </div>
              <div class="plceholder-button mt--50">
                <button class="rbt-btn btn-gradient hover-icon-reverse">
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">Place order</span>
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
          </div></div
      ></ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { cartCourses, totalPriceCourse } from "~/context/cart/course";
import CheckoutForm from "./CheckoutForm";
import { cartProducts, totalPriceProduct } from "~/context/cart/shop";
import { cartEvents, totalPriceEvent } from "~/context/cart/event";
</script>

<style lang="scss" scoped></style>
