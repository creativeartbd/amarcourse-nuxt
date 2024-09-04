<template>
  <div class="col-lg-6">
    <div class="thumbnail">
      <nuxt-img
        class="w-100 radius-10"
        src="/images/about/contact-2.jpg"
        :width="638"
        :height="687"
        alt="Contact Images"
      />
    </div>
  </div>
  <div class="col-lg-6">
    <div class="rbt-contact-form contact-form-style-1 max-width-auto">
      <div class="section-title text-start">
        <span class="subtitle bg-primary-opacity">
          EDUCATION FOR EVERYONE
        </span>
      </div>
      <h3 class="title">Get a Free Course You Can Contact With Me</h3>
      <form @submit.prevent="() => {}" id="contact-form" class="w-100">
        <div class="form-group" :class="{ focused: isNameFocused }">
          <input
            name="con_name"
            type="text"
            @focus="isNameFocused = true"
            @blur="isNameFocused = false"
          />
          <label>Name</label>
          <span class="focus-border"></span>
        </div>
        <div class="form-group" :class="{ focused: isEmailFocused }">
          <input
            name="con_email"
            type="email"
            @focus="isEmailFocused = true"
            @blur="isEmailFocused = false"
          />
          <label>Email</label>
          <span class="focus-border"></span>
        </div>
        <div class="form-group" :class="{ focused: isPhoneFocused }">
          <input
            type="text"
            @focus="isPhoneFocused = true"
            @blur="isPhoneFocused = false"
          />
          <label>Phone</label>
          <span class="focus-border"></span>
        </div>
        <div class="form-group" :class="{ focused: isMessageFocused }">
          <textarea
            @focus="isMessageFocused = true"
            @blur="isMessageFocused = false"
          ></textarea>
          <label>Message</label>
          <span class="focus-border"></span>
        </div>
        <div class="form-submit-group">
          <button
            type="submit"
            class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
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
</template>

<script setup>
const isNameFocused = ref(false);
const isEmailFocused = ref(false);
const isPhoneFocused = ref(false);
const isMessageFocused = ref(false);
</script>

<style lang="scss" scoped></style>
