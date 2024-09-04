<template>
  <div class="rbt-categories-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="title">Style One</h5>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategoryOne />
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="title">Style Two</h5>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategoryTwo />
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="title">Style Three</h5>
          </div>
        </div>
      </div>

      <div class="row g-5 mt--30">
        <CategoryThree />
      </div>
      <div class="row mt--60">
        <div class="col-lg-12">
          <div class="section-title text-center mb--60">
            <h5 class="title">Carousel (Slider)</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <CategoryThreeSlider />
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="title">Style Four</h5>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategoryFour />
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="title">Style Five</h5>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategoryFive />
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="title">Style Six</h5>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategorySix />
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="title">Style Seven</h5>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategorySeven />
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="title">Style Eight</h5>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <CategoryEight />
      </div>
    </div>
  </div>

  <div class="rbt-categories-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center mb--30">
            <h5 class="title">Style Nine</h5>
          </div>
        </div>
      </div>
      <CategoryNine />
    </div>
  </div>

  <div class="rbt-categories-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center mb--30">
            <h5 class="title">Style Ten</h5>
          </div>
        </div>
      </div>
      <CategoryTen />
    </div>
  </div>
</template>

<script setup>
import CategoryEight from "./CategoryEight.vue";
import CategoryFive from "./CategoryFive";
import CategoryFour from "./CategoryFour.vue";
import CategoryNine from "./CategoryNine";
import CategoryOne from "./CategoryOne.vue";
import CategorySeven from "./CategorySeven";
import CategorySix from "./CategorySix.vue";
import CategoryTen from "./CategoryTen";
import CategoryThree from "./CategoryThree.vue";
import CategoryThreeSlider from "./CategoryThreeSlider";
import CategoryTwo from "./CategoryTwo";
</script>

<style lang="scss" scoped></style>
