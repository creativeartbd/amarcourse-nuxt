<template>
  <div
    class="rbt-banner-area rbt-banner-2 header-transperent-spacer"
    :style="{ paddingTop: '127px' }"
  >
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-content text-center">
              <div class="inner">
                <div class="rbt-new-badge rbt-new-badge-one mb--30">
                  <span class="rbt-new-badge-icon">🏆</span> The Leader in
                  Online Learning
                </div>
                <h1 class="title">
                  We teaching, educate and{{ " " }}
                  <span class="theme-gradient">build the future</span> of online
                  learning
                </h1>
              </div>
            </div>
          </div>
        </div>
        <ServiceThree :head="false" />
      </div>
    </div>
  </div>

  <div
    class="rbt-course-area bg-color-white rbt-section-gapTop masonary-wrapper-activation"
  >
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-primary-opacity">Popular Course</span>
            <h2 class="title">
              Online Coaching Lessons For <br />
              Remote Learning
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <ul
            class="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs"
            id="rbt-myTab"
            role="tablist"
          >
            <li
              v-for="(courseType, index) in courseTypes"
              :key="index"
              class="nav-item"
              role="presentation"
            >
              <ClientOnly>
                <button
                  :class="activeTab === courseType ? 'active' : ''"
                  type="button"
                  @click="() => handleButtonClick(courseType)"
                >
                  <span class="filter-text">{{ courseType }}</span>

                  <span
                    v-if="courseType === 'All Course'"
                    class="course-number"
                  >
                    {{ getAllCourse.filter((course) => course).length }}
                  </span>

                  <span v-else class="course-number">
                    0
                    {{
                      getAllCourse.filter(
                        (course) => course.courseType === courseType
                      ).length
                    }}
                  </span>
                </button></ClientOnly
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="tab-content mt--60" id="rbt-myTabContent">
            <div class="row g-5">
              <div
                v-for="(data, index) in courseFilter.slice(0, 6)"
                class="col-lg-6 col-md-6 col-sm-6 col-12"
                :key="index"
              >
                <div class="rbt-card variation-01 rbt-hover card-list-2">
                  <div class="rbt-card-img">
                    <nuxt-link :to="`/course-details/${data.id}`">
                      <nuxt-img :src="data.courseImg" alt="Card image" />
                    </nuxt-link>
                  </div>
                  <div class="rbt-card-body">
                    <div class="rbt-card-top">
                      <div class="rbt-review">
                        <div class="rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <span class="rating-count">
                          ({{ data.review }} Reviews)
                        </span>
                      </div>
                      <div class="rbt-bookmark-btn">
                        <a class="rbt-round-btn" title="Bookmark" href="#">
                          <i class="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>

                    <h4 class="rbt-card-title">
                      <nuxt-link :to="`/course-details/${data.id}`">
                        {{ data.courseTitle }}
                      </nuxt-link>
                    </h4>

                    <ul class="rbt-meta">
                      <li>
                        <i class="feather-book"></i> {{ data.lesson }} Lessons
                      </li>
                      <li>
                        <i class="feather-users"></i> {{ data.student
                        }}{{ " " }}
                        Students
                      </li>
                    </ul>

                    <p class="rbt-card-text">
                      {{ data.desc.substring(0, 50) }}...
                    </p>
                    <div class="rbt-author-meta mb--10">
                      <div class="rbt-avater">
                        <a href="#">
                          <nuxt-img :src="data.userImg" alt="Sophia Jaymes" />
                        </a>
                      </div>
                      <div class="rbt-author-info">
                        By{{ " " }}
                        <nuxt-link :to="`/profile/${data.id}`">
                          {{ data.userName }} </nuxt-link
                        >{{ " " }} In
                        <a href="#">{{ data.userCategory }}</a>
                      </div>
                    </div>
                    <div class="rbt-card-bottom">
                      <div class="rbt-price">
                        <span class="current-price">${{ data.price }}</span>
                        <span class="off-price">${{ data.offPrice }}</span>
                      </div>
                      <nuxt-link
                        class="rbt-btn-link"
                        :to="`/course-details/${data.id}`"
                      >
                        Learn More
                        <i class="feather-arrow-right"></i>
                      </nuxt-link>
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

  <div class="rbt-course-category rbt-section-gap overflow-hidden">
    <div class="container">
      <div class="row mb--25">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h5 class="subtitle bg-secondary-opacity">
              Histudy Feature Category
            </h5>
          </div>
        </div>
      </div>
      <CourseTagTwo />
    </div>
  </div>

  <div class="rbt-team-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-pink-opacity">Our Instructor</span>
            <h2 class="title">Word Class Best Instructor</h2>
            <p class="description has-medium-font-size mt--20">
              There are many variations of passages of the Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
        </div>
      </div>
      <TeamSix :isHead="false" />
    </div>
  </div>

  <TestimonialThree
    :isStar="true"
    bgClass="bg-gradient-7 text-white"
    designation="designation"
    subTitleBg="bg-coral-opacity"
  />

  <div class="rbt-event-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-primary-opacity">OUR EVENTS</span>
            <h2 class="title">University Upcoming Events</h2>
          </div>
        </div>
      </div>
      <Events
        :isPagination="false"
        parentClass="card-list-2 event-list-card"
        childClass="col-lg-6 col-md-6 col-12"
        :getEvents="EventData"
        :start="0"
        :end="4"
      />
    </div>
  </div>

  <div class="rbt-rbt-blog-area rbt-section-gap bg-color-white">
    <div class="container">
      <div class="row g-5 align-items-center mb--30">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title">
            <span class="subtitle bg-pink-opacity">Blog Post</span>
            <h2 class="title">Post Popular Post.</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="read-more-btn text-start text-md-end">
            <nuxt-link
              class="rbt-btn btn-gradient hover-icon-reverse"
              to="/blog-list"
            >
              <div class="icon-reverse-wrapper">
                <span class="btn-text">See All Articles</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <BlogGridTop :BlogData="BlogData" />
    </div>
  </div>

  <div class="rbt-newsletter-area bg-gradient-6 ptb--50">
    <NewsletterThree />
  </div>
</template>

<script setup>
import sal from "sal.js";

import CourseDetails from "../../data/course-details/courseData.json";
import EventData from "../../data/events.json";
import BlogData from "../../data/blog/blog.json";

import ServiceThree from "../Services/Service-Three";
import CourseTagTwo from "../Common/CourseTag-Two";
import TeamSix from "../Team/TeamSix";
import TestimonialThree from "../Testimonials/Testimonial-Three";
import Events from "../Events/Events";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top.vue";
import NewsletterThree from "../Newsletters/Newsletter-Three";

let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));

const courseTypes = ["All Course", "featured", "popular", "trending", "latest"];

const courseFilter = ref(getAllCourse);
const activeTab = ref("All Course");
const filterItem = (types) => {
  const updateItem = getAllCourse.filter((curElm) => {
    return curElm.courseType === types;
  });

  if (types !== "All Course") {
    courseFilter.value = updateItem;
  } else {
    courseFilter.value = getAllCourse;
  }
};

const handleButtonClick = (courseType) => {
  courseFilter.value = getAllCourse;
  activeTab.value = courseType;

  filterItem(courseType);
};
onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
