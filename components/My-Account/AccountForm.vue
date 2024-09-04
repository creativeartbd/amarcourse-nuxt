<template>
  <div class="account-details-form">
    <form @submit.prevent="() => {}">
      <div class="row g-5">
        <div class="col-lg-6 col-12">
          <input id="first-name" placeholder="First Name" type="text" />
        </div>

        <div class="col-lg-6 col-12">
          <input id="last-name" placeholder="Last Name" type="text" />
        </div>

        <div class="col-12">
          <input id="display-name" placeholder="Display Name" type="text" />
        </div>

        <div class="col-12">
          <input id="email-address" placeholder="Email Address" type="email" />
        </div>

        <div class="col-12">
          <h4>Password change</h4>
        </div>

        <div class="col-12">
          <input
            id="current-pwd"
            placeholder="Current Password"
            type="password"
          />
        </div>

        <div class="col-lg-6 col-12">
          <input id="new-pwd" placeholder="New Password" type="password" />
        </div>

        <div class="col-lg-6 col-12">
          <input
            id="confirm-pwd"
            placeholder="Confirm Password"
            type="password"
          />
        </div>

        <div class="col-12">
          <button class="rbt-btn btn-gradient icon-hover">
            <span class="btn-text">Save Changes</span>
            <span class="btn-icon">
              <i class="feather-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
