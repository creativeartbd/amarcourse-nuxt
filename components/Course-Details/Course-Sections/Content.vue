<template>
  <div class="rbt-course-feature-inner">
    <div class="section-title">
      <h4 class="rbt-title-style-3">{{ checkMatchCourses.title }}</h4>
    </div>
    <div class="rbt-accordion-style rbt-accordion-02 accordion">
      <div class="accordion" id="accordionExampleb2">
        <div
          v-for="(item, innerIndex) in checkMatchCourses.contentList"
          :key="innerIndex"
          class="accordion-item card"
        >
          <h2
            :id="`headingTwo${innerIndex}`"
            class="accordion-header card-header"
          >
            <button
              :class="`accordion-button ${!item.collapsed ? 'collapsed' : ''}`"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapseTwo${innerIndex + 1}`"
              :aria-expanded="item.expand"
              :aria-controls="`collapseTwo${innerIndex + 1}`"
            >
              {{ item.title }}
              <span class="rbt-badge-5 ml--10">{{ item.time }}</span>
            </button>
          </h2>
          <div
            :id="`collapseTwo${innerIndex + 1}`"
            class="accordion-collapse collapse"
            :class="{ show: item.isShow }"
            :aria-labelledby="`headingTwo${innerIndex}`"
            data-bs-parent="#accordionExampleb2"
          >
            <div class="accordion-body card-body pr--0">
              <ul class="rbt-course-main-content liststyle">
                <li v-for="(list, subIndex) in item.listItem" :key="subIndex">
                  <nuxt-link to="/lesson">
                    <div class="course-content-left">
                      <i
                        :class="[
                          list.playIcon
                            ? 'feather-play-circle'
                            : 'feather-file-text',
                        ]"
                      ></i>
                      <span class="text">{{ list.text }}</span>
                    </div>
                    <div class="course-content-right">
                      <template v-if="list.status">
                        <span class="min-lable">{{ list.time }}</span>
                        <span class="rbt-badge variation-03 bg-primary-opacity">
                          <i class="feather-eye"></i> Preview
                        </span>
                      </template>
                      <template v-else>
                        <span class="course-lock">
                          <i class="feather-lock"></i>
                        </span>
                      </template>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["checkMatchCourses"]);
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
