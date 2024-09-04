<template>
  <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
    <div class="content">
      <div class="section-title">
        <h4 class="rbt-title-style-3">Assignments</h4>
      </div>

      <div class="rbt-dashboard-filter-wrapper multiselect-container">
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
              <th>Assignment Name</th>
              <th>Total Marks</th>
              <th>Total Submit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <span class="h6 mb--5">
                  Write Link short essay on yourself using the 5
                </span>
                <p class="b3">Course: <a href="#">Fundamentals 101</a></p>
              </th>
              <td>
                <p class="b3">80</p>
              </td>
              <td>
                <p class="b3">2</p>
              </td>
              <td>
                <div class="rbt-button-group justify-content-end">
                  <a
                    class="rbt-btn btn-xs bg-primary-opacity radius-round"
                    href="#"
                    title="Edit"
                  >
                    <i class="feather-edit pl--0"></i> Edit
                  </a>
                  <a
                    class="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                    href="#"
                    title="Delete"
                  >
                    <i class="feather-trash-2 pl--0"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <span class="h6 mb--5">Speaking Korean for Beginners</span>
                <p class="b3">Course: <a href="#">Speaking 101</a></p>
              </th>
              <td>
                <p class="b3">20</p>
              </td>
              <td>
                <p class="b3">3</p>
              </td>
              <td>
                <div class="rbt-button-group justify-content-end">
                  <a
                    class="rbt-btn btn-xs bg-primary-opacity radius-round"
                    href="#"
                    title="Edit"
                  >
                    <i class="feather-edit pl--0"></i> Edit
                  </a>
                  <a
                    class="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                    href="#"
                    title="Delete"
                  >
                    <i class="feather-trash-2 pl--0"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <span class="h6 mb--5">Song Writing Techniques 101</span>
                <p class="b3">Course: <a href="#">Song Writing</a></p>
              </th>
              <td>
                <p class="b3">60</p>
              </td>
              <td>
                <p class="b3">10</p>
              </td>
              <td>
                <div class="rbt-button-group justify-content-end">
                  <a
                    class="rbt-btn btn-xs bg-primary-opacity radius-round"
                    href="#"
                    title="Edit"
                  >
                    <i class="feather-edit pl--0"></i> Edit
                  </a>
                  <a
                    class="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                    href="#"
                    title="Delete"
                  >
                    <i class="feather-trash-2 pl--0"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <span class="h6 mb--5">Arabic For Beginners</span>
                <p class="b3">Course: <a href="#">Arabic Writing</a></p>
              </th>
              <td>
                <p class="b3">40</p>
              </td>
              <td>
                <p class="b3">15</p>
              </td>
              <td>
                <div class="rbt-button-group justify-content-end">
                  <a
                    class="rbt-btn btn-xs bg-primary-opacity radius-round"
                    href="#"
                    title="Edit"
                  >
                    <i class="feather-edit pl--0"></i> Edit
                  </a>
                  <a
                    class="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                    href="#"
                    title="Delete"
                  >
                    <i class="feather-trash-2 pl--0"></i>
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
