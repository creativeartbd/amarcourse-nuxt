<template>
  <div class="rbt-category-menu-wrapper rbt-category-update">
    <div class="rbt-category-btn">
      <div class="rbt-offcanvas-trigger md-size icon">
        <span class="d-none d-xl-block">
          <i class="feather-grid"></i>
        </span>
        <i title="Category" class="feather-grid d-block d-xl-none"></i>
      </div>
      <span class="category-text d-none d-xl-block">Category</span>
    </div>

    <div
      class="update-category-dropdown category-dropdown-menu d-none d-xl-block"
    >
      <div class="inner">
        <ul class="dropdown-parent-wrapper">
          <SingleCategory
            title="Amar Course"
            :isActive="true"
            :CategoryData="CategoryData"
            :CategoryNum="CategoryData.categoryItemOne"
          />
          <SingleCategory
            title="Course School"
            :isActive="false"
            :CategoryData="CategoryData"
            :CategoryNum="CategoryData.categoryItemOne"
          />
          <SingleCategory
            title="Online School"
            :isActive="false"
            :CategoryData="CategoryData"
            :CategoryNum="CategoryData.categoryItemTwo"
          />
          <SingleCategory
            title="Kindergarten"
            :isActive="false"
            :CategoryData="CategoryData"
            :CategoryNum="CategoryData.categoryItemThree"
          />
          <li class="dropdown-parent-list">
            <nuxt-link to="/05-classic-lms">Classic LMS</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoryData from "@/data/elements/category";
import SingleCategory from "./CategoryProps/SingleCategory";
</script>
