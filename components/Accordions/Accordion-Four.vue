<template>
  <div
    class="row g-5 align-items-center"
    v-for="(data, index) in AccordionData.AccordionFour"
    :key="index"
  >
    <div class="col-lg-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
      <div class="rbt-accordion-style accordion">
        <div class="section-title text-start">
          <span class="subtitle bg-pink-opacity">{{ data.tag }}</span>
          <h2 class="title">
            {{ data.title }} <br />
            {{ data.subTitle }}
          </h2>
          <p class="description has-medium-font-size mt--20 mb--40">
            <strong>{{ data.strong }}</strong> {{ data.description }}
          </p>
        </div>

        <div class="rbt-accordion-style rbt-accordion-05 accordion">
          <div class="accordion" :id="'accordionExampleb4_' + index">
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
                :data-bs-parent="'#accordionExampleb4_' + index"
              >
                <div class="accordion-body card-body">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2">
      <div class="thumbnail rbt-image-gallery-1 mb--80 text-end">
        <nuxt-img
          class="image-1 rbt-radius parallax-3"
          style="transition: 0.4s"
          :src="data.imgOne"
          alt="Education Images"
          :width="408"
          :height="500"
        />
        <nuxt-img
          class="image-2 rbt-radius parallax-4"
          style="transition: 0.4s"
          :src="data.imgTwo"
          alt="Education Images"
          :width="408"
          :height="500"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ParallaxController } from "parallax-controller";

onMounted(() => {
  const instance = ParallaxController.init({
    scrollAxis: "vertical",
  });
  const options = {
    el: document.querySelector(".parallax-3"),
    props: { translateY: [0, -20], transition: "0.5s" },
  };
  const options2 = {
    el: document.querySelector(".parallax-4"),
    props: { translateY: [0, 20], transition: "0.5s" },
  };

  const element = instance.createElement(options);
  const element2 = instance.createElement(options2);
});
import AccordionData from "../../data/elements/accordion.json";
</script>

<style scoped>
/* Add scoped styles here */
</style>
