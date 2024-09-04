<template>
  <div class="rbt-contact-form contact-form-style-1">
    <h3 class="title">Get a Free Histudy Online Course</h3>
    <form @submit.prevent="() => {}" id="contact-form">
      <div :class="`form-group ${focusedInput === 'name' ? 'focused' : ''}`">
        <input
          name="con_name"
          type="text"
          placeholder="Name"
          @focus="() => setFocusedInput('name')"
          @blur="() => setFocusedInput(null)"
        />
        <span class="focus-border"></span>
      </div>
      <div :class="`form-group ${focusedInput === 'email' ? 'focused' : ''}`">
        <input
          name="con_email"
          placeholder="Email"
          type="email"
          @focus="() => setFocusedInput('email')"
          @blur="() => setFocusedInput(null)"
        />
        <span class="focus-border"></span>
      </div>
      <div :class="`form-group ${focusedInput === 'message' ? 'focused' : ''}`">
        <textarea
          @focus="() => setFocusedInput('message')"
          @blur="() => setFocusedInput(null)"
          placeholder="Message"
        ></textarea>
        <span class="focus-border"></span>
      </div>
      <div class="form-submit-group">
        <button
          type="submit"
          class="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round w-100"
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
</template>

<script setup>
import { ref } from "vue";

const focusedInput = ref(null);

const setFocusedInput = (input) => {
  focusedInput.value = input;
};
</script>
