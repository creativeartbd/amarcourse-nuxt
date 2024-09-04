<template>
  <div
    v-if="CourseData"
    class="container"
    v-for="(data, index) in CourseData.course"
    :key="index"
  >
    <div class="row mb--50">
      <div class="col-lg-12">
        <div class="section-title text-center">
          <span v-if="tag" class="subtitle bg-pink-opacity">{{ tag }}</span>
          <h2 class="title">{{ title }}</h2>
        </div>
      </div>
    </div>
    <div class="row g-5 align-items-start">
      <div class="col-lg-7 order-2 order-lg-1">
        <div
          class="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion"
        >
          <div class="accordion" :id="'tutionaccordionExamplea1' + index">
            <div
              v-for="(item, innerIndex) in data.courseBody"
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
                  {{ item.subTitle }}
                </button>
              </h2>
              <div
                :id="item.collapse"
                :class="`accordion-collapse collapse ${
                  item.show ? 'show' : ''
                }`"
                :aria-labelledby="item.heading"
                :data-bs-parent="'#tutionaccordionExamplea1' + index"
              >
                <div class="accordion-body card-body">
                  <h6 class="title">{{ item.text }}</h6>
                  <div class="table-responsive mobile-table-750">
                    <table class="rbt-table table table-borderless">
                      <thead>
                        <tr>
                          <th>Program Term</th>
                          <th>Tuition Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Term 1-6</th>
                          <td>{{ "$" + item.cost }}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Total</th>
                          <th>{{ "$" + item.cost }}</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 order-1 order-lg-2">
        <div class="thumbnail">
          <nuxt-img
            :src="data.img"
            class="radius-6"
            width="526"
            height="644"
            alt="histudy image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseData from "../../data/elements/accordion.json";
defineProps(["title", "tag"]);
</script>
