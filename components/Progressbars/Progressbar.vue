<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="section-title text-center mb--50">
          <span class="subtitle bg-secondary-opacity">
            Colors, percentage types
          </span>
          <h2 class="title">Style One.</h2>
        </div>
      </div>
    </div>
    <div class="row row--15">
      <div class="col-lg-10 offset-lg-1">
        <div class="rbt-progress-style-1 mt--10">
          <div class="single-progress">
            <h6 class="title">Web Development</h6>
            <div class="progress">
              <ProgressbarsLineProgressBar :max="90" />
            </div>
          </div>

          <div class="single-progress">
            <h6 class="title">Photoshop Design</h6>
            <div class="progress">
              <ProgressbarsLineProgressBar
                parent-class="bar-color-2"
                :max="90"
              />
            </div>
          </div>

          <div class="single-progress">
            <h6 class="title">App Development</h6>
            <div class="progress">
              <ProgressbarsLineProgressBar
                parent-class="bar-color-3"
                :max="95"
              />
            </div>
          </div>

          <div class="single-progress">
            <h6 class="title">Application Development</h6>
            <div class="progress">
              <ProgressbarsLineProgressBar
                parent-class="bar-color-4"
                :max="45"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
