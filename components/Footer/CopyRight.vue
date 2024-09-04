<template>
  <Separator />
  <div class="copyright-area copyright-style-1 ptb--20">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
          <p class="rbt-link-hover text-center text-lg-start">
            Copyright © {{ new Date().getFullYear() }}
            <a
              target="_blank"
              href="https://themeforest.net/user/rainbow-themes/portfolio"
            >
            আমার কোর্স.
            </a>
            All Rights Reserved
          </p>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
          <ul
            class="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10"
          >
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <nuxt-link to="/pages/privacy-policy">Privacy policy</nuxt-link>
            </li>
            <li>
              <a href="#">Subscription</a>
            </li>
            <li>
              <a href="#">Login & Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Separator from "../Common/Separator.vue";
</script>
