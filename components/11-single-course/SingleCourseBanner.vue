<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <div class="inner text-center ptb--80">
        <div class="section-title">
          <span class="subtitle bg-primary-opacity">
            Hello! Web Development Course
          </span>
        </div>
        <h2 class="title theme-gradient rbt-display-1">
          A Complete Guide to Web Development.
        </h2>

        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. perferendis,
          maiores?
        </p>

        <div class="rbt-single-course-meta text-center mt--20">
          <div class="enroll-btn mt--15">
            <nuxt-link
              class="rbt-btn btn-gradient hover-icon-reverse"
              to="/login"
            >
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Enrol Course Now</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </nuxt-link>
          </div>
        </div>

        <div
          class="rbt-course-block mt--50 rbt-course-block rbt-shadow-box position-relative bg-primary-opacity"
        >
          <div class="row align-items-center g-2 g-lg-5">
            <div class="col-lg-4 col-md-4 col-sm-6 text-start">
              <ul class="rbt-meta">
                <li class="color-primary">
                  <i class="feather-book"></i>12 Lessons
                </li>
                <li class="color-primary">
                  <i class="feather-users"></i>50 Students
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 text-center">
              <div
                class="rbt-price large-size justify-content-start justify-content-lg-center"
              >
                <span class="current-price">$750.00</span>
                <span class="off-price">$1500.00</span>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 text-end">
              <div class="rbt-course-review">
                <div
                  class="rbt-review justify-content-start justify-content-lg-end"
                >
                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <span class="rating-count"> (105+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="top-circle-shape"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
