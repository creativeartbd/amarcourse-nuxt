<template>
  <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
    <div class="content">
      <div class="section-title">
        <h4 class="rbt-title-style-3">Announcements</h4>
      </div>

      <div class="rbt-callto-action rbt-cta-default style-2">
        <div
          class="content-wrapper overflow-hidden pt--30 pb--30 bg-color-primary-opacity"
        >
          <div class="row gy-5 align-items-end">
            <div class="col-lg-8">
              <div class="inner">
                <div class="content text-left">
                  <h5 class="mb--5">Notify your all students.</h5>
                  <p class="b3">Create Announcement</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="call-to-btn text-start text-lg-end position-relative">
                <a class="rbt-btn btn-sm rbt-switch-btn rbt-switch-y" href="#">
                  <span data-text="Add New Announcement">
                    Add New Announcement
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rbt-dashboard-filter-wrapper multiselect-container mt--60">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="filter-select rbt-modern-select">
              <span class="select-label d-block">Courses</span>
              <Multiselect
                mode="multiple"
                v-model="valueCourses"
                :options="courses"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="filter-select rbt-modern-select">
              <span class="select-label d-block">Short By</span>
              <Multiselect
                v-model="sortByOptionsValue"
                :options="sortByOptions"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="filter-select rbt-modern-select">
              <span class="select-label d-block">Short By Offer</span>
              <Multiselect
                v-model="sortByOffersValue"
                :options="sortByOffers"
              />
            </div>
          </div>
        </div>
      </div>

      <hr class="mt--30" />

      <div class="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
        <table class="rbt-table table table-borderless">
          <thead>
            <tr>
              <th>Date</th>
              <th>Announcements</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <span class="h6 mb--5">March 16, 2022</span>
                <p class="b3">10.00am</p>
              </th>
              <td>
                <span class="h6 mb--5">Announcement Title</span>
                <p class="b3">Course: Fundamentals 101</p>
              </td>
              <td>
                <div class="rbt-button-group justify-content-end">
                  <a class="rbt-btn-link left-icon" href="#">
                    <i class="feather-edit"></i> Edit
                  </a>
                  <a class="rbt-btn-link left-icon" href="#">
                    <i class="feather-trash-2"></i> Delete
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <span class="h6 mb--5">Janu 16, 2022</span>
                <p class="b3">12.00am</p>
              </th>
              <td>
                <span class="h6 mb--5">Web Design</span>
                <p class="b3">Course: Web Design</p>
              </td>
              <td>
                <div class="rbt-button-group justify-content-end">
                  <a class="rbt-btn-link left-icon" href="#">
                    <i class="feather-edit"></i> Edit
                  </a>
                  <a class="rbt-btn-link left-icon" href="#">
                    <i class="feather-trash-2"></i> Delete
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <span class="h6 mb--5">Janu 16, 2022</span>
                <p class="b3">12.00am</p>
              </th>
              <td>
                <span class="h6 mb--5">App Development</span>
                <p class="b3">Course: App Development</p>
              </td>
              <td>
                <div class="rbt-button-group justify-content-end">
                  <a class="rbt-btn-link left-icon" href="#">
                    <i class="feather-edit"></i> Edit
                  </a>
                  <a class="rbt-btn-link left-icon" href="#">
                    <i class="feather-trash-2"></i> Delete
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <span class="h6 mb--5">Janu 16, 2022</span>
                <p class="b3">12.00am</p>
              </th>
              <td>
                <span class="h6 mb--5">Announcement Title</span>
                <p class="b3">Course: Web Design</p>
              </td>
              <td>
                <div class="rbt-button-group justify-content-end">
                  <a class="rbt-btn-link left-icon" href="#">
                    <i class="feather-edit"></i> Edit
                  </a>
                  <a class="rbt-btn-link left-icon" href="#">
                    <i class="feather-trash-2"></i> Delete
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import Multiselect from "@vueform/multiselect";
const courses = [
  { value: "Web Design HTML", label: "Web Design HTML" },
  { value: "Graphic Photoshop", label: "Graphic Photoshop" },
  { value: "English Career", label: "English Career" },
  { value: "Spoken English Career", label: "Spoken English Career" },
  { value: "Art Painting Experts", label: "Art Painting Experts" },
  { value: "App Development Experts", label: "App Development Experts" },
  { value: "Web Application Experts", label: "Web Application Experts" },
  { value: "Php Development Experts", label: "Php Development Experts" },
];

const sortByOptions = [
  "Default",
  "Latest",
  "Popularity",
  "Trending",
  "Price: low to high",
  "Price: high to low",
];

const sortByOffers = ["Free", "Paid", "Premium"];
const valueCourses = ref([courses[2]]);
const sortByOptionsValue = ref("Default");
const sortByOffersValue = ref("Free");
</script>

<style>
@import "@vueform/multiselect/themes/default.css";
.multiselect-container {
  --ms-font-size: 1.5rem;
  --ms-line-height: 1.3;
  --ms-max-height: 30rem;
  --ms-option-py: 0.5rem;
  --ms-option-font-size: 1.5rem;
  --ms-option-line-height: 1;
  --ms-option-bg-selected: var(--color-primary);
}
.multiselect-container ul li {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
