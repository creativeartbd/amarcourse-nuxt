<template>
  <div class="row g-5">
    <div class="col-lg-8">
      <div
        class="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion"
      >
        <div class="accordion" id="tutionaccordionExamplea1">
          <div class="accordion-item card">
            <h2 class="accordion-header card-header" id="accOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accCollapseOne"
                aria-expanded="true"
                aria-controls="accCollapseOne"
              >
                Course Info
              </button>
            </h2>
            <div
              id="accCollapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="accOne"
              data-bs-parent="#tutionaccordionExamplea1"
            >
              <div class="accordion-body card-body">
                <InfoForm />
              </div>
            </div>
          </div>

          <div class="accordion-item card">
            <h2 class="accordion-header card-header" id="accTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accCollapseTwo"
                aria-expanded="false"
                aria-controls="accCollapseTwo"
              >
                Course Intro Video
              </button>
            </h2>
            <div
              id="accCollapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="accTwo"
              data-bs-parent="#tutionaccordionExamplea1"
            >
              <div
                class="accordion-body card-body rbt-course-field-wrapper rbt-default-form"
              >
                <div class="course-field mb--20">
                  <div
                    class="rbt-modern-select bg-transparent height-45 mb--10"
                  >
                    <select class="w-100" id="field-5">
                      <option defaultValue="" disabled>
                        Select Video Sources
                      </option>
                      <option defaultValue="youtube">Youtube</option>
                      <option defaultValue="vimeo">Vimeo</option>
                      <option defaultValue="local">Local</option>
                    </select>
                  </div>
                </div>

                <div class="course-field mb--15">
                  <label htmlFor="videoUrl">Add Your Video URL</label>
                  <input
                    id="videoUrl"
                    type="text"
                    placeholder="Add Your Video URL here."
                  />
                  <small class="d-block mt_dec--5">
                    Example:{{ " " }}
                    <a href="https://www.youtube.com/watch?v=yourvideoid">
                      https://www.youtube.com/watch?v=yourvideoid
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item card">
            <h2 class="accordion-header card-header" id="accThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accCollapseThree"
                aria-expanded="false"
                aria-controls="accCollapseThree"
              >
                Course Builder
              </button>
            </h2>
            <div
              id="accCollapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="accThree"
              data-bs-parent="#tutionaccordionExamplea1"
            >
              <div class="accordion-body card-body">
                <button
                  class="rbt-btn btn-md btn-gradient hover-icon-reverse"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span class="icon-reverse-wrapper">
                    <span class="btn-text">Add New Topic</span>
                    <span class="btn-icon">
                      <i class="feather-plus-circle"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-plus-circle"></i>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div class="accordion-item card rbt-course-field-wrapper">
            <h2 class="accordion-header card-header" id="accSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accCollapseSix"
                aria-expanded="false"
                aria-controls="accCollapseSix"
              >
                Additional Information
              </button>
            </h2>
            <AdditionalForm />
          </div>

          <div class="accordion-item card">
            <h2 class="accordion-header card-header" id="accSeven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accCollapseEight"
                aria-expanded="false"
                aria-controls="accCollapseEight"
              >
                Certificate Template
              </button>
            </h2>
            <div
              id="accCollapseEight"
              class="accordion-collapse collapse"
              aria-labelledby="accSeven"
              data-bs-parent="#tutionaccordionExamplea1"
            >
              <div class="accordion-body card-body">
                <div class="advance-tab-button advance-tab-button-1">
                  <ul
                    class="rbt-default-tab-button nav nav-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <a
                        href="#"
                        class="active"
                        id="landscape-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#landscape"
                        role="tab"
                        aria-controls="landscape"
                        aria-selected="true"
                      >
                        <span>Landscape</span>
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        href="#"
                        id="portrait-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#portrait"
                        role="tab"
                        aria-controls="portrait"
                        aria-selected="false"
                      >
                        <span>Portrait</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="tab-content">
                      <div
                        class="tab-pane fade advance-tab-content-1 active show"
                        id="landscape"
                        role="tabpanel"
                        aria-labelledby="landscape-tab"
                      >
                        <div class="row g-5 mt--10">
                          <div class="col-lg-4">
                            <div class="certificate-inner rbt-image-checkbox">
                              <input
                                type="radio"
                                id="option1"
                                name="radio-group"
                                defaultValue="option1"
                              />
                              <label htmlFor="option1">
                                <nuxt-img
                                  src="/images/icons/certificate-none.svg"
                                  alt="Certificate Image"
                                />
                              </label>
                            </div>
                          </div>
                          <div
                            class="col-lg-4"
                            v-for="(data, index) in previewImages"
                            :key="index"
                          >
                            <div class="certificate-inner rbt-image-checkbox">
                              <input
                                type="radio"
                                :id="`option${index + 2}`"
                                name="radio-group"
                                :value="`option${index + 2}`"
                              />
                              <label :for="`option${index + 2}`">
                                <nuxt-img
                                  :src="data.img"
                                  alt="Certificate Image"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade advance-tab-content-1"
                        id="portrait"
                        role="tabpanel"
                        aria-labelledby="portrait-tab"
                      >
                        <div class="row g-5 mt--10">
                          <div class="col-lg-4">
                            <div class="certificate-inner rbt-image-checkbox">
                              <input
                                type="radio"
                                id="optionport1"
                                name="radio-group"
                                defaultValue="optionport1"
                              />
                              <label htmlFor="optionport1">
                                <nuxt-img
                                  src="/images/icons/certificate-none-portrait.svg"
                                  alt="Certificate Image"
                                />
                              </label>
                            </div>
                          </div>
                          <div
                            class="col-lg-4"
                            v-for="(data, index) in portImages"
                            :key="index"
                          >
                            <div class="certificate-inner rbt-image-checkbox">
                              <input
                                type="radio"
                                :id="`optionport${index + 3}`"
                                name="radio-group"
                                :value="`optionport${index + 3}`"
                              />
                              <label :for="`optionport${index + 3}`">
                                <nuxt-img
                                  :src="data.img"
                                  :width="242"
                                  :height="340"
                                  alt="Certificate Image"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt--10 row g-5">
        <div class="col-lg-4">
          <nuxt-link
            class="rbt-btn hover-icon-reverse bg-primary-opacity w-100 text-center"
            to="/course-details/1"
          >
            <span class="icon-reverse-wrapper">
              <span class="btn-text">Preview</span>
              <span class="btn-icon">
                <i class="feather-eye"></i>
              </span>
              <span class="btn-icon">
                <i class="feather-eye"></i>
              </span>
            </span>
          </nuxt-link>
        </div>
        <div class="col-lg-8">
          <a
            class="rbt-btn btn-gradient hover-icon-reverse w-100 text-center"
            href="#"
          >
            <span class="icon-reverse-wrapper">
              <span class="btn-text">Create Course</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div
        class="rbt-create-course-sidebar course-sidebar sticky-top rbt-shadow-box rbt-gradient-border"
      >
        <div class="inner">
          <div class="section-title mb--30">
            <h4 class="title">Course Upload Tips</h4>
          </div>
          <div class="rbt-course-upload-tips">
            <ul class="rbt-list-style-1">
              <li>
                <i class="feather-check"></i> Set the Course Price option or
                make it free.
              </li>
              <li>
                <i class="feather-check"></i> Standard size for the course
                thumbnail is 700x430.
              </li>
              <li>
                <i class="feather-check"></i> Video section controls the course
                overview video.
              </li>
              <li>
                <i class="feather-check"></i> Course Builder is where you create
                & organize a course.
              </li>
              <li>
                <i class="feather-check"></i> Add Topics in the Course Builder
                section to create lessons, quizzes, and assignments.
              </li>
              <li>
                <i class="feather-check"></i> Prerequisites refers to the
                fundamental courses to complete before taking this particular
                course.
              </li>
              <li>
                <i class="feather-check"></i> Information from the Additional
                Data section shows up on the course single page.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TopicModal />
</template>

<script setup>
import CreateCourseData from "../../data/createCourse.json";

import InfoForm from "./InfoForm";
import TopicModal from "./TopicModal";
import AdditionalForm from "./AdditionalForm";
const previewImages = CreateCourseData.createCourse[0].landscape.filter(
  (item) => item.type === "preview"
);
const portImages = CreateCourseData.createCourse[0].landscape.filter(
  (item) => item.type === "port"
);
</script>

<style lang="scss" scoped></style>
