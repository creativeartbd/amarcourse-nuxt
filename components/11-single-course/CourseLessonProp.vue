<template>
  <div class="row gy-5 row--30">
    <div class="col-lg-6">
      <div class="feature-course-thumbnail">
        <div class="video-popup-wrapper rbt-shadow-box">
          <nuxt-img
            class="w-100 radius-10"
            :src="courseImg"
            width="563"
            height="428"
            alt="Card image"
          />
          <a
            class="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-white-color"
            data-vbtype="video"
            controls
            href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
          >
            <span class="play-icon"></span>
          </a>
        </div>
        <div class="enroll-btn mt--15">
          <a
            class="rbt-btn btn-gradient hover-icon-reverse w-100 radius-round"
            href="#"
          >
            <span class="icon-reverse-wrapper">
              <span class="btn-text">Continue Course</span>
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
    <div class="col-lg-6 rbt-scroll-max-height rbt-scroll">
      <div class="course-content">
        <div
          class="rbt-accordion-style rbt-accordion-02 right-no-padding accordion"
        >
          <div class="accordion" id="accordionExampleb2">
            <div
              class="accordion-item card"
              v-for="(data, index) in courseContent"
              :key="index"
            >
              <h2
                class="accordion-header card-header"
                :id="'headingTwo' + (index + 1)"
              >
                <button
                  class="accordion-button"
                  :class="{ collapsed: !data.isShow }"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#collapseTwo' + (index + 1)"
                  :aria-expanded="data.isShow"
                  :aria-controls="'collapseTwo' + (index + 1)"
                >
                  {{ data.title }}
                </button>
              </h2>
              <div
                :id="'collapseTwo' + (index + 1)"
                :class="{
                  'accordion-collapse': true,
                  collapse: true,
                  show: data.isShow,
                }"
                :aria-labelledby="'headingTwo' + (index + 1)"
                data-bs-parent="#accordionExampleb2"
              >
                <div class="accordion-body card-body">
                  <ul class="rbt-course-main-content liststyle">
                    <li v-for="(list, i) in data.list" :key="i">
                      <a href="#">
                        <div class="course-content-left">
                          <i
                            :class="
                              'feather-' +
                              (list.isPlay ? 'play-circle' : 'file-text')
                            "
                          ></i>
                          <span class="text">{{ list.text }}</span>
                        </div>
                        <div
                          :class="{
                            'course-content-right': true,
                            'only-lock': list.isLoc,
                          }"
                        >
                          <template v-if="list.isLoc">
                            <i class="feather-lock"></i>
                          </template>
                          <template v-else>
                            <span class="rbt-badge bg-pink-opacity">
                              {{ list.min }} min
                            </span>
                            <span class="rbt-badge bg-primary-opacity">
                              Preview
                            </span>
                          </template>
                        </div>
                      </a>
                    </li>
                  </ul>
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
defineProps(["courseImg", "courseContent"]);

onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });
});
</script>
