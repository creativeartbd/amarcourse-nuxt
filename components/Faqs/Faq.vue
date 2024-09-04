<template>
  <div className="container">
    <div
      v-for="(data, index) in AccordionData.AccordionThree"
      :key="index"
      class="row g-5"
    >
      <div class="col-lg-6">
        <div class="rbt-accordion-style accordion">
          <div class="section-title text-start mb--60">
            <h4 class="title">Purchases & Refunds</h4>
          </div>
          <div class="rbt-accordion-style rbt-accordion-04 accordion">
            <div class="accordion" :id="'accordionExamplec3-' + index">
              <div
                v-for="(item, innerIndex) in data.faqBody"
                :key="innerIndex"
                class="accordion-item card"
              >
                <h2 :id="item.heading" class="accordion-header card-header">
                  <button
                    :class="`accordion-button ${
                      !item.collapsed ? 'collapsed' : ''
                    }`"
                    type="button"
                    :data-bs-toggle="'collapse'"
                    :data-bs-target="`#${item.collapse}`"
                    :aria-expanded="item.expanded"
                    :aria-controls="item.collapse"
                  >
                    {{ item.accordionTitle }}
                  </button>
                </h2>
                <div
                  :id="item.collapse"
                  :class="`accordion-collapse collapse ${
                    item.show ? 'show' : ''
                  }`"
                  :aria-labelledby="item.heading"
                  :data-bs-parent="`#accordionExamplec3-${index}`"
                >
                  <div class="accordion-body card-body">
                    {{ item.desc }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="rbt-accordion-style accordion">
          <div class="section-title text-start mb--60">
            <h4 class="title">Making Courses</h4>
          </div>
          <div class="rbt-accordion-style rbt-accordion-04 accordion">
            <div class="accordion" :id="'faqs-accordionExamplec3-' + index">
              <div
                v-for="(item, innerIndex) in data.faqBody2"
                :key="innerIndex"
                class="accordion-item card"
              >
                <h2
                  :id="`faq-${item.heading}`"
                  class="accordion-header card-header"
                >
                  <button
                    :class="`accordion-button ${
                      !item.collapsed ? 'collapsed' : ''
                    }`"
                    type="button"
                    :data-bs-toggle="'collapse'"
                    :data-bs-target="`#faq-${item.collapse}`"
                    :aria-expanded="item.expanded"
                    :aria-controls="`faq-${item.collapse}`"
                  >
                    {{ item.accordionTitle }}
                  </button>
                </h2>
                <div
                  :id="`faq-${item.collapse}`"
                  :class="`accordion-collapse collapse ${
                    item.show ? 'show' : ''
                  }`"
                  :aria-labelledby="`faq-${item.heading}`"
                  :data-bs-parent="`#faqs-accordionExamplec3-${index}`"
                >
                  <div class="accordion-body card-body">
                    {{ item.desc }}
                  </div>
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

<style lang="scss" scoped></style>
