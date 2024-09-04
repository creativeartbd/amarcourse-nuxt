<template>
  <div
    v-if="testimonial"
    v-for="(data, index) in testimonialData"
    :key="index"
    class="scroll-animation-wrapper mt--50"
  >
    <div class="scroll-animation scroll-right-left">
      <div
        v-for="(item, innerIndex) in data.left"
        :key="innerIndex"
        class="single-column-20"
      >
        <div class="rbt-testimonial-box">
          <div class="inner">
            <div class="clint-info-wrapper">
              <div class="thumb">
                <nuxt-img
                  :src="item.img"
                  width="494"
                  height="494"
                  alt="Clint Images"
                />
              </div>
              <div class="client-info">
                <h5 class="title">{{ item.title }}</h5>
                <span
                  >{{ item.position }} <i>{{ item.company }}</i></span
                >
              </div>
            </div>
            <div class="description">
              <p class="subtitle-3">{{ item.desc }}</p>
              <!-- <a class="rbt-btn-link" href="#"
                >Read Project Case Study<i class="feather-arrow-right"></i
              ></a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="testimonialData"
    v-for="(data, index) in testimonialData"
    :key="index"
    class="scroll-animation-wrapper mt--30"
  >
    <div class="scroll-animation scroll-left-right">
      <div
        v-for="(item, innerIndex) in data.right"
        :key="innerIndex"
        class="single-column-20"
      >
        <div class="rbt-testimonial-box">
          <div class="inner">
            <div class="clint-info-wrapper">
              <div class="thumb">
                <nuxt-img
                  :src="item.img"
                  width="494"
                  height="494"
                  alt="Clint Images"
                />
              </div>
              <div class="client-info">
                <h5 class="title">{{ item.title }}</h5>
                <span
                  >{{ item.position }} <i>{{ item.company }}</i></span
                >
              </div>
            </div>
            <div class="description">
              <p class="subtitle-3">{{ item.desc }}</p>
              <!-- <a class="rbt-btn-link" href="#"
                >Read Project Case Study<i class="feather-arrow-right"></i
              ></a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["testimonial", "testimonialData"]);
</script>
