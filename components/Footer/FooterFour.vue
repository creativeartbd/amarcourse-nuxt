<template>
  <footer class="rbt-footer footer-style-1">
    <div class="footer-top">
      <div class="container">
        <div
          v-for="(footer, index) in footerData"
          :key="index"
          class="row row--15 mt_dec--30"
        >
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
            <div class="footer-widget">
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
              <p class="description mt--20">{{ footer.description }}</p>
              <ul class="social-icon social-default justify-content-start">
                <li
                  v-for="(value, innerIndex) in footer.socialLink"
                  :key="innerIndex"
                >
                  <a :href="value.link">
                    <i :class="value.icon"></i>
                  </a>
                </li>
              </ul>
              <div class="contact-btn mt--30">
                <nuxt-link
                  class="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                  to="/contact"
                >
                  <div class="icon-reverse-wrapper">
                    <span class="btn-text">Contact With Us</span>
                    <span class="btn-icon"
                      ><i class="feather-arrow-right"></i
                    ></span>
                    <span class="btn-icon"
                      ><i class="feather-arrow-right"></i
                    ></span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <SingleFooter
            classOne="col-lg-2 col-md-6 col-sm-6 col-12"
            title="Useful Links"
            :footerType="footer.usefulLinks"
          />
          <SingleFooter
            classOne="col-lg-2 col-md-6 col-sm-6 col-12"
            title="Our Company"
            :footerType="footer.ourCompany"
          />
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="footer-widget">
              <h5 class="ft-title">Get Contact</h5>
              <ul class="ft-link">
                <li>
                  <span>Phone: </span
                  ><a :href="`tel:${footer.phone}`">{{ footer.phone }}</a>
                </li>
                <li>
                  <span>E-mail:</span
                  ><a :href="`mailto:${footer.mail}`">{{ footer.mail }}</a>
                </li>
              </ul>
              <form class="newsletter-form mt--20" @submit.prevent="() => {}">
                <h6 class="w-600">Newsletter</h6>
                <p class="description">{{ footer.descriptionTwo }}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <CopyRight />
</template>

<script setup>
import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter.vue";
import CopyRight from "./CopyRight.vue";

const footerData = FooterData.footerTwo;
</script>
