<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <form @submit.prevent="() => {}" class="rbt-search-style me-0">
          <input type="text" placeholder="Search Your Course.." />
          <button type="submit" class="rbt-search-btn rbt-round-btn">
            <i class="feather-search"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
