<template>
  <div
    :class="`rbt-search-dropdown search-with-category-popup ${
      search ? 'active' : ''
    }`"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col-lg-12">
          <div class="rbt-search-with-category">
            <div class="filter-select rbt-modern-select search-by-category">
              <select>
                <option>All Categories</option>
                <option>Education</option>
                <option>Course</option>
                <option>Art</option>
                <option>Web Design</option>
              </select>
            </div>

            <div class="search-field">
              <input type="text" placeholder="Search Course" />
              <button class="rbt-round-btn serach-btn" type="submit">
                <i class="feather-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const search = ref(false);
</script>

<style lang="scss" scoped></style>
