<template>
  <div class="row g-5 align-items-center">
    <div class="col-lg-6">
      <div class="inner">
        <div class="section-title text-start">
          <span class="subtitle bg-white-opacity">Why Choose Us</span>
          <h2 class="title color-white">
            Free Resources Learning English for Beginner
          </h2>
          <p
            class="description has-medium-font-size mt--20 mb--0 color-white opacity-7"
          >
            Learning new technology, data sience, university, communicate to
            global world and build a bright future with our histudy.
          </p>
        </div>
        <div class="countdown-style-1 mt--50">
          <div class="countdown" data-date="2025-12-30">
            <CountDown targetDate="2025-12-30" targetTime="18:00:00" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="rbt-contact-form contact-form-style-1 w-100">
        <div class="section-title text-start">
          <span class="subtitle bg-primary-opacity">
            EDUCATION FOR EVERYONE
          </span>
        </div>
        <h3 class="title">Sign Up for Free Resources</h3>
        <form id="contact-form" @submit.prevent="() => {}" class="w-100">
          <div class="form-group">
            <input name="con_name" type="text" placeholder="Name" />
            <span class="focus-border"></span>
          </div>
          <div class="form-group">
            <input name="con_email" type="email" placeholder="Email" />
            <span class="focus-border"></span>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Phone" />
            <span class="focus-border"></span>
          </div>
          <div class="form-submit-group mt--40">
            <button
              type="submit"
              class="rbt-btn btn-gradient hover-icon-reverse w-100"
            >
              <span class="icon-reverse-wrapper">
                <span class="btn-text">GET IT NOW</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import CountDown from "../Maintenance/CountDonw";
</script>

<style lang="scss" scoped></style>
