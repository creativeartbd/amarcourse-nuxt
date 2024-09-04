<template>
  <div :class="classOne">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul :class="classList">
            <li>
              <a href="https://www.facebook.com/">
                <i class="feather-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i class="feather-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i class="feather-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkdin.com/">
                <i class="feather-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["classOne", "classList"]);
</script>

<style lang="scss" scoped></style>
