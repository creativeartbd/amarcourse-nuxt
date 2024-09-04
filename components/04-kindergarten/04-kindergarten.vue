<template>
  <div
    class="rbt-banner-area rbt-banner-4 bg_image bg_image--13 header-transperent-spacer"
    :style="{ paddingTop: '140px' }"
  >
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content text-start">
              <div class="inner">
                <div class="mb--20">
                  <a href="#" class="rbt-badge-2">
                    <div class="image">
                      <nuxt-img
                        src="/images/testimonial/client-02.png"
                        alt="Education Images"
                      />
                    </div>
                    {{ " " }} Learn with <strong>Fatima Asrafy</strong>
                  </a>
                </div>
                <h1 class="title">
                  Putting Your Child&apos;s Future <br />
                  in Great Motion.
                </h1>
                <p class="description">
                  We just don&apos;t give our student only <br />
                  lecture but real life experience.
                </p>

                <ul class="rbt-list-style-2">
                  <li><i class="feather-check"></i>No Cridit Card</li>
                  <li><i class="feather-check"></i>14 Days Trial</li>
                  <li><i class="feather-check"></i>Free For Teachers</li>
                </ul>

                <div class="slider-btn">
                  <nuxt-link
                    class="rbt-btn radius rbt-marquee-btn marquee-text-y"
                    to="/login"
                  >
                    <span data-text="Get Started Today">
                      Get Started Today
                    </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="service-wrapper rbt-section-gap bg-color-white">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity"> Our Curriculum </span>
            <h2 class="title">Our Curriculum</h2>
            <p class="description has-medium-font-size mt--20">
              There are many variations of passages of the Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ServiceEleven :isTitle="false" />
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-callto-action-area mt_dec--half">
    <CallToAction />
  </div>

  <div
    class="rbt-course-area bg-color-light rbt-section-gap default-callto-action-overlap"
  >
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity"> Histudy Course </span>
            <h2 class="title">Weekly Online Classes.</h2>
            <p class="description has-medium-font-size mt--20">
              There are many variations of passages of the Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <CardFive />
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="load-more-btn mt--60 text-center">
            <nuxt-link
              class="rbt-btn rbt-marquee-btn"
              to="/course-filter-one-toggle"
            >
              <span data-text="Load More Course">Load More Course</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-counterup-area bg-color-white rbt-section-gap">
    <CounterTwo />
  </div>

  <div class="rbt-pricing-area bg-color-light rbt-section-gap">
    <Pricing title="Histudy Course Plan" tag="COURSE PRICING" />
  </div>

  <div class="rbt-team-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity">Instructor</span>
            <h2 class="title">Meet Our Teacher.</h2>
            <p class="description has-medium-font-size mt--20">
              There are many variations of passages of the Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
        </div>
      </div>
      <TeamFour :isHead="false" />
      <div class="row">
        <div class="col-lg-12">
          <div class="load-more-btn mt--60 text-center">
            <nuxt-link class="rbt-btn rbt-marquee-btn" to="/elements/team">
              <span data-text="View All Teacher">View All Teacher</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="rbt-testimonial-area bg-color-light rbt-section-gap overflow-hidden"
  >
    <div class="wrapper mb--60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle bg-primary-opacity">
                EDUCATION FOR EVERYONE
              </span>
              <h2 class="title">
                People like histudy education. <br />
                No joking - Parents Review Here!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Testimonial />
  </div>

  <div class="rbt-rbt-blog-area rbt-section-gap bg-color-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity">Histudy Post</span>
            <h2 class="title">From Our Post.</h2>
            <p class="description has-medium-font-size mt--20">
              There are many variations of passages of the Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <div
          v-for="(data, index) in BlogData.blogGrid.slice(0, 3)"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12 col-12"
        >
          <div class="rbt-card variation-02 rbt-hover">
            <div class="rbt-card-img">
              <nuxt-link :to="`/blog-details/${data.id}`">
                <nuxt-img
                  :src="data.img"
                  width="450"
                  height="267"
                  alt="Card image"
                />
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <h5 class="rbt-card-title">
                <nuxt-link :to="`/blog-details/${data.id}`">
                  {{ data.title }}
                </nuxt-link>
              </h5>
              <p class="rbt-card-text">{{ data?.desc }}</p>
              <div class="rbt-card-bottom">
                <nuxt-link
                  class="transparent-button"
                  :to="`/blog-details/${data.id}`"
                >
                  Learn More
                  <i>
                    <svg
                      width="17"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fill-rule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                        <path stroke-linecap="square" d="M.663 5.572h14.594" />
                      </g>
                    </svg>
                  </i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="load-more-btn mt--60 text-center">
            <nuxt-link class="rbt-btn rbt-marquee-btn" to="/blog-list">
              <span data-text="View All Post">View All Post</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Gallery />
</template>

<script setup>
import CallToAction from "../Call-To-Action/CallToAction.vue";
import ServiceEleven from "../Services/Service-Eleven";

import BlogData from "../../data/blog/blog.json";
import CardFive from "../Cards/Card-Five";
import CounterTwo from "../Counters/Counter-Two";
import Pricing from "../Pricing/Pricing";
import TeamFour from "../Team/TeamFour";
import Testimonial from "../Testimonials/Testimonial";
import Gallery from "../Gallery/Gallery";
</script>

<style lang="scss" scoped></style>
