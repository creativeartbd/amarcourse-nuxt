<template>
  <div class="rbt-page-banner-wrapper">
    <div class="rbt-banner-image"></div>
    <div class="rbt-banner-content">
      <div class="rbt-banner-content-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="page-list">
                <li class="rbt-breadcrumb-item">
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                  <div class="icon-right">
                    <i class="feather-chevron-right"></i>
                  </div>
                </li>
                <li class="rbt-breadcrumb-item active">All Products</li>
              </ul>

              <div class="title-wrapper">
                <h1 class="title mb--0">All Products</h1>
                <a href="#" class="rbt-badge-2">
                  <div class="image">🎉</div>
                  {{ shopProduct.shop.length }}
                  <span class="ms-2">Products</span>
                </a>
              </div>

              <p class="description">
                Products that help beginner designers become true unicorns.{{
                  " "
                }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="rbt-course-top-wrapper mt--40">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-5 col-md-12">
              <div class="rbt-sorting-list d-flex flex-wrap align-items-center">
                <div class="rbt-short-item">
                  <span class="course-index">
                    Showing 1-{{ getSelectedCourse.length }}{{ " " }}
                    <span class="me-2">of</span>
                    {{ shopProduct.shop.length }} results
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-7 col-md-12">
              <div
                class="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end"
              >
                <div class="rbt-short-item">
                  <div class="filter-select">
                    <span class="select-label d-block">Short By</span>
                    <div
                      class="filter-select rbt-modern-select search-by-category"
                    >
                      <select>
                        <option>Default</option>
                        <option>Latest</option>
                        <option>Popularity</option>
                        <option>Trending</option>
                        <option>Price: low to high</option>
                        <option>Price: high to low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["getSelectedCourse", "shopProduct"]);
</script>

<style lang="scss" scoped></style>
