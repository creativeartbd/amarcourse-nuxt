<template>
  <div
    class="rbt-countdown-area rbt-maintenance-area bg_image bg_image--6 bg_image_fixed rbt-section-gap vh-100 d-flex align-items-center justify-content-center"
    data-black-overlay="5"
  >
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-12">
          <div class="inner">
            <div class="section-title text-center">
              <span class="subtitle bg-white-opacity">
                Down For Maintenance
              </span>
              <h2 class="title color-white">
                Sorry, We are down for Maintenance
              </h2>
              <p
                class="description has-medium-font-size mt--20 mb--0 color-white opacity-7"
              >
                We&apos;re currently under maintenance, if all goas as planned
                we&apos;ll be back in
              </p>
            </div>
            <div class="countdown-style-1 mt--50 justify-content-center">
              <div
                class="countdown justify-content-center"
                data-date="2025-12-30"
              >
                <CountDown targetDate="2025-12-30" targetTime="18:00:00" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Maintence || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import CountDown from "@/components/Maintenance/CountDonw";
</script>

<style lang="scss" scoped></style>
