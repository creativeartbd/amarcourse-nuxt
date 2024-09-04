<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
            <div class="radial-progress-single">
              <div class="m-auto" :style="{ width: '185px', height: '185px' }">
                <CommonCirculerProgressBar :max="80" />
              </div>
              <div class="circle-info">
                <h4 class="title">Design</h4>
                <h6 class="subtitle">Presentation your skill</h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
            <div class="radial-progress-single">
              <div class="m-auto" :style="{ width: '185px', height: '185px' }">
                <CommonCirculerProgressBar :max="60" />
              </div>

              <div class="circle-info">
                <h4 class="title">Photoshop</h4>
                <h6 class="subtitle">Presentation your skill</h6>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
            <div class="radial-progress-single">
              <div class="m-auto" :style="{ width: '185px', height: '185px' }">
                <CommonCirculerProgressBar :max="70" />
              </div>
              <div class="circle-info">
                <h4 class="title">Application</h4>
                <h6 class="subtitle">Presentation your skill</h6>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
            <div class="radial-progress-single">
              <div class="m-auto" :style="{ width: '185px', height: '185px' }">
                <CommonCirculerProgressBar :max="95" />
              </div>
              <div class="circle-info">
                <h4 class="title">Development</h4>
                <h6 class="subtitle">Presentation your skill</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
