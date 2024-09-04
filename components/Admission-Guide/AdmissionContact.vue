<template>
  <div class="row g-5">
    <div
      class="col-lg-6 col-md-6 col-sm-6 col-12"
      data-sal="slide-up"
      data-sal-delay="150"
      data-sal-duration="800"
    >
      <div class="rbt-address text-center">
        <div class="icon">
          <i class="feather-headphones"></i>
        </div>
        <div class="inner">
          <h4 class="title">Call us</h4>
          <p>
            <a href="tel:+444555666777">+444 555 666 777</a>
          </p>
          <p>
            <a href="tel:+222222222333">+222 222 222 333</a>
          </p>
        </div>
      </div>
    </div>
    <div
      class="col-lg-6 col-md-6 col-sm-6 col-12"
      data-sal="slide-up"
      data-sal-delay="250"
      data-sal-duration="800"
    >
      <div class="rbt-address text-center">
        <div class="icon">
          <i class="feather-map-pin"></i>
        </div>
        <div class="inner">
          <h4 class="title">Visit us</h4>
          <p>
            5678 Bangla Main Road, cities 580 <br />
            GBnagla, example 54786
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sal from "sal.js";

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
