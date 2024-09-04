<template>
  <div :class="`default-exp-wrapper ${filterToggle ? 'd-none' : ''}`">
    <div class="filter-inner">
      <div class="filter-select-option">
        <div class="filter-select rbt-modern-select">
          <span class="select-label d-block">Short By</span>
          <select @change="(e) => (selectedSortingOption = e.target.value)">
            <option v-for="(elm, i) in sortingOptions" :key="i">
              {{ elm }}
            </option>
          </select>
        </div>
      </div>

      <div class="filter-select-option">
        <div class="filter-select rbt-modern-select">
          <span class="select-label d-block">Filter By Author</span>
          <select
            data-live-search="true"
            title="Select Author"
            @change="(e) => (selectedInstracors = [e.target.value])"
          >
            <option :value="elm" v-for="(elm, i) in instractors" :key="i">
              {{ elm }}
            </option>
          </select>
        </div>
      </div>

      <div class="filter-select-option">
        <div class="filter-select rbt-modern-select">
          <span class="select-label d-block">Filter By Offer</span>
          <select @change="(e) => (selectedPrice = [e.target.value])">
            <option :value="elm" v-for="(elm, i) in price" :key="i">
              {{ elm }}
            </option>
          </select>
        </div>
      </div>

      <div class="filter-select-option">
        <div class="filter-select rbt-modern-select">
          <span class="select-label d-block">Filter By Category</span>
          <select @change="(e) => (selectedCategories = [e.target.value])">
            <option :value="elm" v-for="(elm, i) in categories" :key="i">
              {{ elm }}
            </option>
          </select>
        </div>
      </div>

      <div class="filter-select-option">
        <div class="filter-select">
          <span class="select-label d-block">Price Range</span>

          <div class="price_filter s-filter clear">
            <form @submit.prevent="() => {}">
              <div id="slider-range">
                <Slider
                  showTooltip="drag"
                  :min="30"
                  :max="100"
                  v-model="priceValue"
                />
              </div>
              <div class="slider__range--output">
                <div class="price__output--wrap">
                  <div class="price--output">
                    <span>Price :</span>
                    <input
                      type="text"
                      id="amount"
                      :value="`${priceValue[0]} - ${priceValue[1]}`"
                      readOnly
                    />
                  </div>
                  <div class="price--filter">
                    <a class="rbt-btn btn-gradient btn-sm" href="#"> Filter </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Slider from "@vueform/slider";
const props = defineProps(["items", "filterToggle"]);
const emits = defineEmits(["setFiltered"]);
import CourseDetails from "@/data/course-details/courseData.json";

const courses = ref(props.items ? props.items : CourseDetails.courseDetails);
const selectedCategories = ref(["All"]);
const selectedPrice = ref(["All"]);
const selectedInstracors = ref(["All"]);
const priceValue = ref([50, 100]);
const selectedSortingOption = ref("Default");
const filtered = computed(() => {
  let tempFiltered = courses.value[0] ? courses.value : [];
  if (selectedCategories.value.length && selectedCategories.value != "All") {
    tempFiltered = [...tempFiltered].filter((elm) =>
      selectedCategories.value.includes(elm.category)
    );
  }
  if (selectedInstracors.value.length && selectedInstracors.value != "All") {
    tempFiltered = [...tempFiltered].filter((elm) =>
      selectedInstracors.value.includes(elm.userName)
    );
  }

  if (selectedPrice.value.length && selectedPrice.value != "All") {
    tempFiltered = [...tempFiltered].filter((elm) =>
      selectedPrice.value.includes("Free") ? !elm.price : elm.price
    );
  }
  tempFiltered = [...tempFiltered].filter(
    (elm) =>
      elm.price >= priceValue.value[0] && elm.price <= priceValue.value[1]
  );
  if (selectedSortingOption.value == "Price: low to high") {
    tempFiltered = [...tempFiltered].sort((a, b) => a.price - b.price);
  } else if (selectedSortingOption.value == "Price: high to low") {
    tempFiltered = [...tempFiltered].sort((a, b) => b.price - a.price);
  }
  return tempFiltered;
});
watch(filtered, () => {
  emits("setFiltered", filtered.value);
});

const categories = [
  "All",
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
  "All",
  "Claudia Pruitt",
  "Fred Guer",
  "Levi Arm",
  "Rafi",
  "Angela",
];
const price = ["All", "Paid", "Free"];
const sortingOptions = ["Default", "Price: low to high", "Price: high to low"];
</script>
<style lang="css">
@import "@vueform/slider/themes/default.css";

.slider-connect {
  background: var(--color-primary) !important;
  cursor: pointer;
}

.slider-tooltip {
  background: var(--color-primary) !important;
  border-color: var(--color-primary) !important ;
}
</style>
