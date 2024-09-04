<template>
  <div class="footer-style-2 ptb--60 bg-color-white">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-12">
          <div class="inner text-center">
            <div class="logo logo-dark">
              <nuxt-link to="/">
                <nuxt-img
                  width="152"
                  height="50"
                  alt="Edu-cause"
                  src="/images/logo/logo.png"
                />
              </nuxt-link>
            </div>
            <div class="logo d-none logo-light">
              <nuxt-link to="/">
                <nuxt-img
                  width="152"
                  height="50"
                  src="/images/dark/logo/logo-light.png"
                  alt="Edu-cause"
                />
              </nuxt-link>
            </div>

            <ul class="social-icon social-default">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>

            <div class="text mt--20">
              <p>
                © {{ new Date().getFullYear() }}
                <a
                  class="mx-2"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  Rainbow-Themes
                </a>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
