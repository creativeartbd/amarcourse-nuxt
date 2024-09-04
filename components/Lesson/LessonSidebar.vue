<template>
  <div class="rbt-course-feature-inner rbt-search-activation">
    <div class="section-title">
      <h4 class="rbt-title-style-3">Course Content</h4>
    </div>
    <div class="lesson-search-wrapper">
      <form @submit.prevent="() => {}" class="rbt-search-style-1">
        <input
          class="rbt-search-active"
          type="text"
          placeholder="Search Lesson"
        />
        <button class="search-btn disabled">
          <i class="feather-search"></i>
        </button>
      </form>
    </div>
    <hr class="mt--10" />
    <div
      class="rbt-accordion-style rbt-accordion-02 for-right-content accordion"
    >
      <div class="accordion" id="accordionExampleb2">
        <div
          class="accordion-item card"
          v-for="(data, index) in LessonData.lesson"
          :key="index"
        >
          <h2
            class="accordion-header card-header"
            :id="`headingTwo${index + 1}`"
          >
            <button
              class="accordion-button"
              :class="{ collapsed: !data.isShow }"
              type="button"
              data-bs-toggle="collapse"
              :aria-expanded="data.isShow"
              :data-bs-target="`#collapseTwo${index + 1}`"
              :aria-controls="`collapseTwo${index + 1}`"
            >
              {{ data.title }}
              <span class="rbt-badge-5 ml--10">
                1/{{ data.listItem.length }}
              </span>
            </button>
          </h2>
          <div
            :id="`collapseTwo${index + 1}`"
            class="accordion-collapse collapse"
            :class="{ show: data.isShow }"
            :aria-labelledby="`headingTwo${index + 1}`"
          >
            <div class="accordion-body card-body">
              <ul class="rbt-course-main-content liststyle">
                <li
                  v-for="(innerData, innerIndex) in data.listItem"
                  :key="innerIndex"
                >
                  <nuxt-link
                    :class="{ active: isActive(innerData.lssonLink) }"
                    :to="innerData.lssonLink"
                  >
                    <div class="course-content-left">
                      <i
                        v-if="innerData.iconHelp"
                        class="feather-help-circle"
                      ></i>
                      <i
                        v-else
                        class="feather-file-text"
                        v-if="innerData.iconFile"
                      ></i>
                      <i v-else class="feather-play-circle"></i>
                      <span class="text">{{ innerData.lessonName }}</span>
                    </div>
                    <div class="course-content-right">
                      <span
                        v-if="innerData.lable && innerData.time > 0"
                        class="min-lable"
                      >
                        {{ innerData.time }} min
                      </span>
                      <span
                        :class="{
                          'rbt-check': isActive(innerData.lssonLink),
                          unread: !isActive(innerData.lssonLink),
                        }"
                      >
                        <i
                          :class="{
                            'feather-check': isActive(innerData.lssonLink),
                            'feather-circle': !isActive(innerData.lssonLink),
                          }"
                        ></i>
                      </span>
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
const route = useRoute();

const pathName = route.path;
const isActive = (href) => pathName === href;
import LessonData from "../../data/lesson.json";
</script>

<style lang="scss" scoped></style>
