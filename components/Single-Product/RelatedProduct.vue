<template>
  <div v-if="relatedProduct" class="row">
    <div
      v-for="(data, index) in relatedProduct"
      :key="index"
      class="col-lg-4 col-md-6 col-12"
    >
      <div class="rbt-default-card style-three rbt-hover">
        <div class="inner">
          <div class="content pt--0 pb--10">
            <h2 class="title">
              <nuxt-link :to="`/single-product/${data.id}`">{{
                data.title
              }}</nuxt-link>
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
              <span class="current-price theme-gradient"
                >${{ data.price }}.00</span
              >
              <span class="off-price">${{ data.offPrice }}</span>
            </div>
            <div class="addto-cart-btn mt--20">
              <a class="rbt-btn btn-gradient hover-icon-reverse" href="#">
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">Add To Cart</span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["relatedProduct"]);
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
