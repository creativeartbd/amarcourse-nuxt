<template>
  <div class="container">
    <div
      v-for="(data, index) in testimonialData"
      :key="index"
      class="row align-items-center row--30"
    >
      <div class="col-lg-6">
        <div class="rbt-testimonial-content tab-content" id="myTabContent">
          <div
            v-for="(item, innerIndex) in data.body"
            :key="innerIndex"
            :class="{
              'tab-pane': true,
              fade: true,
              'active show': item.isSelected,
            }"
            :id="item.target"
            role="tabpanel"
            :aria-labelledby="item.tab"
          >
            <div class="inner">
              <div class="rating mb--30">
                <a href="#"><i class="fa fa-star"></i></a>
                <a href="#"><i class="fa fa-star"></i></a>
                <a href="#"><i class="fa fa-star"></i></a>
                <a href="#"><i class="fa fa-star"></i></a>
                <a href="#"><i class="fa fa-star"></i></a>
              </div>
              <p>{{ item.desc }}</p>
            </div>
            <div class="author-info">
              <h6>
                <span>{{ item.name }}</span> - {{ item.post }}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mt_md--30 mt_sm--30">
        <ul
          class="testimonial-thumb-wrapper nav nav-tabs"
          id="myTab"
          role="tablist"
        >
          <li v-for="(user, indexUser) in data.user" :key="indexUser">
            <a
              :class="{ active: user.isSelected }"
              :id="user.tab"
              role="tab"
              href="#"
              data-bs-toggle="tab"
              :data-bs-target="'#' + user.target"
              :aria-controls="user.target"
              :aria-selected="user.isSelected"
            >
              <div class="testimonial-thumbnai">
                <div class="thumb">
                  <nuxt-img
                    :src="user.img"
                    width="494"
                    height="494"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import TestimonialData from "../../data/elements/testimonial.json";

const testimonialData = TestimonialData?.testimonialOne || [];
</script>
