<template>
  <div class="rbt-my-account-tab-button nav" role="tablist">
    <a href="#dashboad" class="active" data-bs-toggle="tab"> Dashboard </a>
    <a href="#orders" data-bs-toggle="tab"> Orders </a>
    <a href="#download" data-bs-toggle="tab"> Download </a>
    <a href="#payment-method" data-bs-toggle="tab"> Payment Method </a>

    <a href="#address-edit" data-bs-toggle="tab"> Address </a>
    <a href="#account-info" data-bs-toggle="tab"> Account Details </a>
    <nuxt-link to="/login">Logout</nuxt-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
