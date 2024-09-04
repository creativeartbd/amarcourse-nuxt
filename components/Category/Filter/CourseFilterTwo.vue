<template>
  <ClientOnly>
    <div class="col-lg-12">
      <div class="rbt-sidebar-widget-wrapper filter-top-2 mt--60">
        <div class="row g-5">
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div
              :class="`rbt-single-widget rbt-widget-categories ${
                show ? 'has-show-more' : ''
              }`"
            >
              <div class="inner">
                <h4 class="rbt-widget-title-2">Categories</h4>
                <ul
                  class="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content"
                >
                  <li
                    v-for="(elm, i) in categories"
                    :key="i"
                    class="rbt-check-group"
                    @click="
                      () => {
                        handleSelectCategory(elm);
                      }
                    "
                  >
                    <input
                      readonly
                      :checked="selectedCategories.includes(elm)"
                      type="checkbox"
                    />
                    <label>
                      {{ elm }}
                      <span class="rbt-lable count">{{
                        courses.filter((el) => el.category == elm).length
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div
                :class="`rbt-show-more-btn ${show ? '' : 'active'}`"
                @click="show = !show"
              >
                Show More
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="rbt-single-widget rbt-widget-rating">
              <div class="inner">
                <h4 class="rbt-widget-title-2">Ratings</h4>
                <ul class="rbt-sidebar-list-wrapper rating-list-check">
                  <li
                    v-for="(elm, i) in stars"
                    :key="i"
                    class="rbt-check-group"
                    @click="selectedRatings = selectedRatings == elm ? 0 : elm"
                  >
                    <input
                      readonly
                      :checked="selectedRatings == elm"
                      type="radio"
                    />
                    <label>
                      <span class="rating">
                        <i
                          v-for="(star, index) in elm"
                          :key="index"
                          class="fas fa-star"
                        ></i>
                        <i
                          v-for="(star, index) in 5 - elm"
                          :key="index"
                          class="off fas fa-star"
                        ></i>
                      </span>
                      <span class="rbt-lable count">{{
                        courses.filter(
                          (el) => Math.round(Number(el.star)) == Math.round(elm)
                        ).length
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="rbt-single-widget rbt-widget-instructor">
              <div class="inner">
                <h4 class="rbt-widget-title-2">Instructors</h4>
                <ul class="rbt-sidebar-list-wrapper instructor-list-check">
                  <li
                    v-for="(elm, i) in instractors"
                    :key="i"
                    class="rbt-check-group"
                    @click="
                      () => {
                        handleSelectedInstracors(elm);
                      }
                    "
                  >
                    <input
                      readonly
                      :checked="selectedInstracors.includes(elm)"
                      type="checkbox"
                    />
                    <label>
                      {{ elm }}
                      <span class="rbt-lable count">{{
                        courses.filter((el) => el.userName == elm).length
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="rbt-single-widget rbt-widget-prices">
              <div class="inner">
                <h4 class="rbt-widget-title-2">Prices</h4>
                <ul class="rbt-sidebar-list-wrapper prices-list-check">
                  <li
                    v-for="(elm, i) in price"
                    :key="i"
                    class="rbt-check-group"
                    @click="
                      () => {
                        handleselectedPrice(elm);
                      }
                    "
                  >
                    <input
                      readonly
                      :checked="selectedPrice.includes(elm)"
                      type="checkbox"
                    />
                    <label>
                      {{ elm }}
                      <span class="rbt-lable count">{{
                        courses.filter((el) => {
                          if (elm == "Free") {
                            return !el.price;
                          }
                          return el.price;
                        }).length
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="rbt-single-widget rbt-widget-lavels">
              <div class="inner">
                <h4 class="rbt-widget-title-2">Levels</h4>
                <ul class="rbt-sidebar-list-wrapper lavels-list-check">
                  <li
                    v-for="(elm, i) in levels"
                    :key="i"
                    class="rbt-check-group"
                    @click="
                      () => {
                        handleselectedLevels(elm);
                      }
                    "
                  >
                    <input
                      readonly
                      :checked="selectedLevels.includes(elm)"
                      type="checkbox"
                    />
                    <label>
                      {{ elm }}
                      <span class="rbt-lable count">{{
                        courses.filter((el) => el.level == elm).length
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="rbt-single-widget rbt-widget-features">
              <div class="inner">
                <h4 class="rbt-widget-title-2">Languages</h4>
                <ul class="rbt-sidebar-list-wrapper features-list-check">
                  <li
                    v-for="(elm, i) in languages"
                    :key="i"
                    class="rbt-check-group"
                    @click="
                      () => {
                        handleselectedLanguages(elm);
                      }
                    "
                  >
                    <input
                      readonly
                      :checked="selectedLanguages.includes(elm)"
                      type="checkbox"
                    />
                    <label>
                      {{ elm }}
                      <span class="rbt-lable count">{{
                        courses.filter((el) => el.language == elm).length
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></ClientOnly
  >
</template>

<script setup>
const props = defineProps(["items"]);
import CourseDetails from "@/data/course-details/courseData.json";
const courses = ref(props.items ? props.items : CourseDetails.courseDetails);
const categories = [
  "Web Design",
  "Backend",
  "Full Stack",
  "Mobile Application",
  "Finance & Accounting",
  "Graphic Design",
  "Personal Development",
  "IT and Software",
  "Art & Humanities",
];
const instractors = [
  "Claudia Pruitt",
  "Fred Guer",
  "Levi Arm",
  "Rafi",
  "Angela",
];
const price = ["Paid", "Free"];
const stars = [5, 4, 3, 2, 1];
const levels = ["Beginner", "Intermediate", "Expert"];
const languages = ["English", "Spanish", "Bangla"];

const show = ref(true);
const selectedCategories = ref([]);
const selectedRatings = ref();
const selectedInstracors = ref([]);
const selectedPrice = ref([]);
const selectedLevels = ref([]);
const selectedLanguages = ref([]);
const handleSelectCategory = (category) => {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter(
      (elm) => elm != category
    );
  } else {
    selectedCategories.value = [...selectedCategories.value, category];
  }
};
const handleSelectedInstracors = (instractor) => {
  if (selectedInstracors.value.includes(instractor)) {
    selectedInstracors.value = selectedInstracors.value.filter(
      (elm) => elm != instractor
    );
  } else {
    selectedInstracors.value = [...selectedInstracors.value, instractor];
  }
};
const handleselectedPrice = (val) => {
  if (selectedPrice.value.includes(val)) {
    selectedPrice.value = selectedPrice.value.filter((elm) => elm != val);
  } else {
    selectedPrice.value = [...selectedPrice.value, val];
  }
};
const handleselectedLevels = (val) => {
  if (selectedLevels.value.includes(val)) {
    selectedLevels.value = selectedLevels.value.filter((elm) => elm != val);
  } else {
    selectedLevels.value = [...selectedLevels.value, val];
  }
};
const handleselectedLanguages = (val) => {
  if (selectedLanguages.value.includes(val)) {
    selectedLanguages.value = selectedLanguages.value.filter(
      (elm) => elm != val
    );
  } else {
    selectedLanguages.value = [...selectedLanguages.value, val];
  }
};

const filtered = computed(() => {
  let tempFiltered = courses.value[0] ? courses.value : [];
  if (selectedCategories.value.length) {
    tempFiltered = [...tempFiltered].filter((elm) =>
      selectedCategories.value.includes(elm.category)
    );
  }
  if (selectedInstracors.value.length) {
    tempFiltered = [...tempFiltered].filter((elm) =>
      selectedInstracors.value.includes(elm.userName)
    );
  }
  if (selectedLevels.value.length) {
    tempFiltered = [...tempFiltered].filter((elm) =>
      selectedLevels.value.includes(elm.level)
    );
  }
  if (selectedLanguages.value.length) {
    tempFiltered = [...tempFiltered].filter((elm) =>
      selectedLanguages.value.includes(elm.language)
    );
  }
  if (selectedRatings.value) {
    tempFiltered = [...tempFiltered].filter(
      (elm) => Math.round(Number(elm.star)) == Math.round(selectedRatings.value)
    );
  }
  if (selectedPrice.value.length) {
    tempFiltered = [...tempFiltered].filter((elm) =>
      selectedPrice.value.includes("Free") ? !elm.price : elm.price
    );
  }

  return tempFiltered;
});
const emits = defineEmits(["setFiltered"]);
watch(filtered, () => {
  emits("setFiltered", filtered.value);
});
</script>

<style lang="scss" scoped>
.mh-180 {
  max-height: 180px !important;
}
</style>
