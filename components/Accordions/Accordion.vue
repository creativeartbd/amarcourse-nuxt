<template>
  <div
    v-if="AccordionData"
    v-for="(data, index) in AccordionData.accordion"
    :key="index"
    class="container"
  >
    <div class="row mb--60">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <span class="subtitle bg-secondary-opacity">{{ data.tag }}</span>
          <h2 class="title">
            {{ data.title }} <br />
            {{ data.subTitle }}
          </h2>
        </div>
      </div>
    </div>
    <div class="row g-5 align-items-center">
      <div class="col-lg-6">
        <div class="thumbnail rbt-image-gallery-1 mb--80">
          <nuxt-img
            :src="data.imgOne"
            :width="408"
            :height="500"
            style="transition: 0.4s"
            alt="Education Images"
            class="image-1 rbt-radius"
          />
          <nuxt-img
            :src="data.imgTwo"
            :width="408"
            style="transition: 0.4s"
            :height="500"
            alt="Education Images"
            class="image-2 rbt-radius"
          />
        </div>
      </div>
      <div class="col-lg-6 mt_md--40 mt_sm--40">
        <div class="rbt-accordion-style rbt-accordion-01 accordion">
          <div class="accordion" :id="'accordionExamplea1' + index">
            <div
              v-for="(item, innerIndex) in data.accordionBody"
              :key="innerIndex"
              class="accordion-item card"
            >
              <h2 :id="item.heading" class="accordion-header card-header">
                <button
                  :class="[
                    'accordion-button',
                    !item.collapsed ? 'collapsed' : '',
                  ]"
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
                :class="[
                  'accordion-collapse collapse',
                  item.show ? 'show' : '',
                ]"
                :aria-labelledby="item.heading"
                :data-bs-parent="'#accordionExamplea1'"
              >
                <div class="accordion-body card-body">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
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
    el: document.querySelector(".image-1"),
    props: { translateY: [0, -20], transition: "0.5s" },
  };
  const options2 = {
    el: document.querySelector(".image-2"),
    props: { translateY: [0, 20], transition: "0.5s" },
  };

  const element = instance.createElement(options);
  const element2 = instance.createElement(options2);
});
import AccordionData from "../../data/elements/accordion.json";
</script>
