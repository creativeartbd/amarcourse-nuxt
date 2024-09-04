<template>
  <div class="row pt--60 g-5">
    <div class="col-lg-4">
      <div class="thumbnail">
        <nuxt-img
          class="radius-10 w-100"
          src="/images/tab/tabs-10.jpg"
          alt="Corporate Template"
        />
      </div>
    </div>

    <div class="col-lg-8">
      <div class="rbt-contact-form contact-form-style-1 max-width-auto">
        <div class="section-title text-start">
          <span class="subtitle bg-primary-opacity">
            For Become a Instructor
          </span>
        </div>
        <h3 class="title">Instructor Registration</h3>
        <hr class="mb--30" />

        <form @submit.prevent="() => {}" class="row row--15">
          <div class="col-lg-6">
            <div class="form-group">
              <input name="con_name" type="text" placeholder="First Name" />
              <span class="focus-border"></span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group">
              <input name="con_lastname" type="text" placeholder="Last Name" />

              <span class="focus-border"></span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group">
              <input name="con_username" type="text" placeholder="User name" />
              <span class="focus-border"></span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group">
              <input name="con_phone" type="text" placeholder="Phone Number" />
              <span class="focus-border"></span>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="form-group">
              <input name="con_email" type="email" placeholder="Email" />
              <span class="focus-border"></span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group">
              <input
                name="con_password"
                type="password"
                placeholder="Password"
              />
              <span class="focus-border"></span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group">
              <input
                name="con_passwordconfirm"
                type="password"
                placeholder="Password Confirmation"
              />
              <span class="focus-border"></span>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="form-group">
              <textarea placeholder="Bio"></textarea>
              <span class="focus-border"></span>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="form-submit-group">
              <button
                type="submit"
                class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">Become a Instructor</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
