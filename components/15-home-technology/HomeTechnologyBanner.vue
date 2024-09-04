<template>
  <div class="wrapper bg-color-secondary-alt">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-10 offset-lg-1">
          <div class="content">
            <div class="inner text-center">
              <div class="section-title">
                <span class="subtitle bg-primary-opacity">
                  Enjoy Learning!
                </span>
              </div>

              <h1 class="banner-title">
                Learn Product Design in{{ " " }}
                <span class="theme-gradient">16 weeks</span>
              </h1>

              <p class="description has-medium-font-size mt--20">
                Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                Redux, React Routing, Animations, Next.js and way more!
              </p>

              <div class="slider-btn rbt-button-group justify-content-center">
                <nuxt-link
                  to="/pages/about-us-01"
                  class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                >
                  <span data-text="Learn More About Us">
                    Learn More About Us
                  </span>
                </nuxt-link>
              </div>
              <div class="brand-area mt--60">
                <span class="follow-us-text">
                  Making sensitive clients more valuable for companies like
                </span>
                <ul
                  class="brand-list brand-style-3 justify-content-start justify-content-lg-between"
                >
                  <li>
                    <a href="#">
                      <nuxt-img
                        src="/images/brand/partner-5.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <nuxt-img
                        src="/images/brand/partner-1.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </li>
                  {{
                    " "
                  }}
                  <li>
                    <a href="#">
                      <nuxt-img
                        src="/images/brand/partner-5.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </li>
                  {{
                    " "
                  }}
                  <li>
                    <a href="#">
                      <nuxt-img
                        src="/images/brand/partner-6.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <nuxt-img
                        src="/images/brand/partner-3.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
