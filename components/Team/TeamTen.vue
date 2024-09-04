<template>
  <div class="container">
    <div class="row mb--60 g-5 align-items-end">
      <div class="col-lg-6 col-md-6 col-12">
        <div class="section-title text-start">
          <span class="subtitle bg-white-opacity">Our Instructor</span>
          <h2 class="title color-white">Expert Instructor</h2>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="read-more-btn text-start text-md-end">
          <a class="rbt-btn hover-icon-reverse radius-round btn-white" href="#">
            <div class="icon-reverse-wrapper">
              <span class="btn-text">BECAME A INSTRUCTOR</span>
              <span class="btn-icon"><i class="feather-arrow-right"></i></span>
              <span class="btn-icon"><i class="feather-arrow-right"></i></span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="row g-5">
      <div
        v-for="(data, index) in teamData"
        :key="index"
        :class="
          data.isLarge
            ? 'col-lg-3 col-md-6 col-sm-6 col-12'
            : 'col-lg-2 col-md-3 col-sm-4 col-12'
        "
      >
        <div class="rbt-team-modal-thumb nav nav-tabs">
          <a
            class="rbt-team-thumbnail w-100"
            :href="'#exampleModal' + index"
            data-bs-toggle="modal"
            :data-bs-target="'#exampleModal' + index"
          >
            <div class="thumb w-100">
              <nuxt-img
                :src="data.img"
                width="415"
                height="555"
                class="w-100"
                alt="Testimonial Images"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div
      v-for="(data, index) in teamData"
      :key="index"
      class="rbt-team-modal modal fade rbt-modal-default"
      :id="'exampleModal' + index"
      :aria-labelledby="'exampleModal' + index"
      tabindex="-1"
      aria-hidden="true"
    >
      <div
        v-for="(item, innerIndex) in data.details"
        :key="innerIndex"
        class="modal-dialog modal-dialog-centered"
      >
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="rbt-round-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="feather-x"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="inner">
              <div class="row g-5 row--30 align-items-center">
                <div class="col-lg-4">
                  <div class="rbt-team-thumbnail">
                    <div class="thumb">
                      <nuxt-img
                        class="w-100"
                        :src="item.img"
                        width="415"
                        height="555"
                        priority
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="rbt-team-details">
                    <div class="author-info">
                      <h4 class="title">{{ item.name }}</h4>
                      <span class="designation theme-gradient">{{
                        item.type
                      }}</span>
                      <span class="team-form"
                        ><i class="feather-map-pin"></i
                        ><span class="location">{{ item.location }}</span></span
                      >
                    </div>
                    <p class="mb--15">{{ item.desc }}</p>
                    <p>{{ item.descTwo }}</p>
                    <ul
                      class="social-icon social-default mt--20 justify-content-start"
                    >
                      <li>
                        <a href="https://www.facebook.com/"
                          ><i class="feather-facebook"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com"
                          ><i class="feather-twitter"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/"
                          ><i class="feather-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkdin.com/"
                          ><i class="feather-linkedin"></i
                        ></a>
                      </li>
                    </ul>
                    <ul class="rbt-information-list mt--25">
                      <li>
                        <a href="#"
                          ><i class="feather-phone"></i>{{ item.phone }}</a
                        >
                      </li>
                      <li>
                        <a href="mailto:hello@example.com"
                          ><i class="feather-mail"></i>{{ item.email }}</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="top-circle-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TeamData from "../../data/elements/team.json";

const teamData = TeamData.team;
</script>
