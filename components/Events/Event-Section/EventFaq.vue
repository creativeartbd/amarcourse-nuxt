<template>
  <div class="course-content rbt-shadow-box mt--60">
    <div class="section-title">
      <h4 class="title mb--0">Event FAQ</h4>
    </div>
    <div :class="eventParentClass">
      <div class="accordion" id="accordionExampleb2">
        <div
          v-for="(data, index) in getEventData.eventFaq"
          :key="index"
          class="accordion-item card"
        >
          <h2 :id="'headingTwo' + index" class="accordion-header card-header">
            <button
              :class="['accordion-button', { collapsed: !data.collapsed }]"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapseTwo1' + index"
              :aria-expanded="data.expand"
              :aria-controls="'collapseTwo1' + index"
            >
              {{ data.title }}
            </button>
          </h2>
          <div
            :id="'collapseTwo1' + index"
            :class="['accordion-collapse collapse', { show: data.isShow }]"
            :aria-labelledby="'headingTwo' + index"
            data-bs-parent="#accordionExampleb2"
          >
            <div class="accordion-body card-body">
              <p>{{ data.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["eventParentClass", "getEventData"]);
</script>

<style scoped>
/* Add your styles here */
</style>
