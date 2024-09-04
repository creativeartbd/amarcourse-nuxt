<template>
  <div :class="`rbt-contact-address ${gap}`">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <div class="thumbnail">
            <nuxt-img
              class="w-100 radius-6"
              src="/images/about/contact.jpg"
              alt="Contact Images"
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="rbt-contact-form contact-form-style-1 max-width-auto">
            <div class="section-title text-start">
              <span class="subtitle bg-primary-opacity">
                সবার জন্য শিক্ষা
              </span>
            </div>
            <h3 class="title">অনুগ্রহপূর্বক নিচের ফর্মটি পূরণ করুন</h3>
            <form
              id="contact-form"
              @submit.prevent="() => {}"
              class="rainbow-dynamic-form max-width-auto"
            >
              <div class="form-group">
                <input
                  name="contact-name"
                  id="contact-name"
                  type="text"
                  placeholder="আপনার নাম "
                />
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <input name="contact-phone" type="email" placeholder="ইমেইল এড্রেস" />
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="বিষয়"
                />
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <textarea
                  name="contact-message"
                  id="contact-message"
                  placeholder="আপনার মেসেজ"
                ></textarea>
                <span class="focus-border"></span>
              </div>
              <div class="form-submit-group">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">মেসেজ পাঠান</span>
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
    </div>
  </div>
</template>

<script setup>
defineProps(["gap"]);
</script>

<style lang="scss" scoped></style>
