<template>
  <div class="container">
    <div
      class="row g-5 align-items-center"
      v-for="(data, index) in AccordionData.AccordionThree"
      :key="index"
    >
      <div class="col-lg-10 offset-lg-1">
        <div class="rbt-accordion-style accordion">
          <div class="section-title text-center mb--60">
            <span class="subtitle bg-pink-opacity">{{ data.tag }}</span>
            <h2 class="title">
              {{ data.title }} <br />
              {{ data.subTitle }}
            </h2>
            <p class="description has-medium-font-size mt--20">
              <strong>{{ data.strong }}</strong> {{ data.description }}
            </p>
          </div>
          <div class="rbt-accordion-style rbt-accordion-04 accordion">
            <div class="accordion" :id="'accordionExamplec3_' + index">
              <div
                class="accordion-item card"
                v-for="(item, innerIndex) in data.faqBody"
                :key="innerIndex"
              >
                <h2 class="accordion-header card-header" :id="item.heading">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: !item.collapsed }"
                    type="button"
                    :data-bs-toggle="'collapse'"
                    :data-bs-target="'#' + item.collapse"
                    :aria-expanded="item.expanded"
                    :aria-controls="item.collapse"
                  >
                    {{ item.accordionTitle }}
                  </button>
                </h2>
                <div
                  :id="item.collapse"
                  class="accordion-collapse collapse"
                  :class="{ show: item.show }"
                  :aria-labelledby="item.heading"
                  :data-bs-parent="'#accordionExamplec3_' + index"
                >
                  <div class="accordion-body card-body">{{ item.desc }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AccordionData from "../../data/elements/accordion.json";
</script>

<style scoped>
/* Add scoped styles here */
</style>
