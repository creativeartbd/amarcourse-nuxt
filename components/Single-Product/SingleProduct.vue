<template>
  <div>
    <BreadCrumb title="Single Product" text="Single Product" />

    <div class="rbt-single-product-area rbt-single-product rbt-section-gap">
      <div class="container">
        <ProductBody :product="checkMatchProduct" />
      </div>
    </div>

    <div class="rbt-product-description rbt-section-gapBottom bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <ul
              class="nav nav-tabs tab-button-style-2"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation" @click="setTab(!tab)">
                <a
                  href="#"
                  class="tab-button"
                  :class="{ active: !tab }"
                  id="home-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#home-4"
                  role="tab"
                  aria-controls="home-tab-4"
                  aria-selected="true"
                >
                  <span class="title">Description</span>
                </a>
              </li>
              <li class="nav-item" role="presentation" @click="setTab(!tab)">
                <a
                  href="#"
                  class="tab-button"
                  :class="{ active: tab }"
                  id="profile-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-4"
                  role="tab"
                  aria-controls="profile-tab-4"
                  aria-selected="false"
                >
                  <span class="title">Reviews</span>
                </a>
              </li>
            </ul>

            <div
              :class="{ 'd-none': tab, 'd-block': !tab }"
              class="product-description-content tab-pan fad"
              id="home-4"
              role="tabpanel"
              aria-labelledby="home-tab-4"
            >
              <p>{{ checkMatchProduct.desc }}</p>
              <p>{{ checkMatchProduct.descTwo }}</p>
            </div>

            <div
              :class="{ 'd-block': tab, 'd-none': !tab }"
              class="product-description-content tab-pan fad"
              id="profile-4"
              role="tabpanel"
              aria-labelledby="profile-tab-4"
            >
              <ul class="comment-list">
                <li
                  v-for="(data, index) in checkMatchProduct.review"
                  :key="index"
                  class="comment"
                >
                  <div class="comment-body">
                    <div class="single-comment">
                      <div class="comment-img">
                        <nuxt-img :src="data.userImg" alt="Author Images" />
                      </div>
                      <div class="comment-inner">
                        <h6 class="commenter">
                          <a href="#">{{ data.name }}</a>
                        </h6>
                        <div class="comment-meta">
                          <div class="time-spent">{{ data.date }}</div>
                        </div>
                        <div class="rbt-review justify-content-start mb--20">
                          <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="comment-text">
                          <p class="b2">{{ data.desc }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div class="rbt-comment-form mt--50 rbt-shadow-box">
                <div class="comment-form-inner">
                  <h3 class="title">Add Review</h3>
                </div>
                <ReviewForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rbt-related-product rbt-section-gapBottom bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center mb--50">
              <span class="subtitle bg-secondary-opacity">Related Book</span>
              <h2 class="title">Similar Books.</h2>
            </div>
          </div>
        </div>

        <div class="row g-5">
          <RelatedProduct
            :relatedProduct="checkMatchProduct && checkMatchProduct.related"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadCrumb from "../Common/BreadCrumb.vue";
import ProductBody from "./ProductBody.vue";
import ReviewForm from "./ReviewForm.vue";
import RelatedProduct from "./RelatedProduct.vue";

defineProps(["checkMatchProduct"]);
const tab = ref(false);

const setTab = (value) => {
  tab.value = value;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
