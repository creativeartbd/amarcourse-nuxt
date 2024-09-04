<template>
  <div v-if="AccordionData" class="container">
    <div
      v-for="(data, index) in AccordionData.AccordionTwo"
      :key="index"
      class="row g-5 align-items-center"
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
          <div class="rbt-accordion-style rbt-accordion-02 accordion">
            <div class="accordion" :id="'accordionExampleb2' + index">
              <div
                v-for="(item, innerIndex) in data.faqBody"
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
                  :data-bs-parent="'#accordionExampleb2'"
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
            :src="data.imgOne"
            alt="Education Images"
            class="image-1 rbt-radius parallax-1"
            style="transition: 0.4s"
            :width="408"
            :height="500"
          />
          <nuxt-img
            :src="data.imgTwo"
            alt="Education Images"
            class="image-2 rbt-radius parallax-2"
            style="transition: 0.4s"
            :width="408"
            :height="500"
          />
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
    el: document.querySelector(".parallax-1"),
    props: { translateY: [0, -20], transition: "0.5s" },
  };
  const options2 = {
    el: document.querySelector(".parallax-2"),
    props: { translateY: [0, 20], transition: "0.5s" },
  };

  const element = instance.createElement(options);
  const element2 = instance.createElement(options2);
});
import AccordionData from "../../data/elements/accordion.json";
</script>
