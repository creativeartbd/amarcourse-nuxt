<template>
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6">
        <span class="select-label d-block">Search Style 01</span>
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

      <div class="col-lg-5 offset-lg-1">
        <div class="filter-select rbt-modern-select search-by-category">
          <span class="select-label d-block">Short By</span>
          <select>
            <option>All Categories</option>
            <option>Education</option>
            <option>Course</option>
            <option>Art</option>
            <option>Web Design</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
