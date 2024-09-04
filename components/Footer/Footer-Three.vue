<template>
  <footer class="rbt-footer footer-style-1">
    <div class="footer-top">
      <div class="container">
        <div
          v-if="footerData"
          v-for="(footer, index) in footerData.footerOne"
          :key="index"
          class="row row--15 mt_dec--30"
        >
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
            <div class="footer-widget">
              <div class="logo logo-dark">
                <nuxt-link to="/">
                  <h3>আমার কোর্স</h3>
                </nuxt-link>
              </div>
              <div class="logo d-none logo-light">
                <nuxt-link to="/">
                  <h3>আমার কোর্স</h3>
                </nuxt-link>
              </div>

              <p class="description mt--20">{{ footer.description }}</p>

              <div class="contact-btn mt--30">
                <nuxt-link
                  class="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                  to="/contact"
                >
                  <div class="icon-reverse-wrapper">
                    <span class="btn-text">আমাদের সাথে যোগযোগ করুন</span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>

          <SingleFooter
            :classOne="'offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30'"
            title="প্রয়োজনীয় লিংক"
            :footerType="footer.usefulLinks"
          />

          <SingleFooter
            :classOne="'col-lg-2 col-md-6 col-sm-6 col-12 mt--30'"
            title="আমাদের সম্পর্কে"
            :footerType="footer.ourCompany"
          />

          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
            <div class="footer-widget">
              <h5 class="ft-title">যোগাযোগ</h5>
              <ul class="ft-link">
                <li>
                  <span>মোবাইল: </span>
                  <a :href="footer.phone">{{ footer.phone }}</a>
                </li>
                <li>
                  <span>ইমেইল: </span>
                  <a :href="'mailto:' + footer.mail">{{ footer.mail }}</a>
                </li>
                <li>
                  <span>ঠিকানা: </span>
                  {{ footer.address }}
                </li>
              </ul>
              <ul
                class="social-icon social-default icon-naked justify-content-start mt--20"
              >
                <li
                  v-for="(value, innerIndex) in footer.socialLink"
                  :key="innerIndex"
                >
                  <a :href="value.link">
                    <i :class="value.icon"></i>
                  </a>
                </li>
              </ul>
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
import SingleFooter from "./FooterProps/SingleFooter";
import CopyRight from "./CopyRight";

const footerData = ref(FooterData);
</script>
./FooterProps/SingleFooter.vue./CopyRight.vue
