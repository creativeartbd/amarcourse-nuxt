<template>
  <div class="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
    <div class="content">
      <div class="section-title">
        <h4 class="rbt-title-style-3">Dashboard</h4>
      </div>
      <div class="row g-5">
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <CounterWidget
            counterStyle="two"
            styleClass="bg-primary-opacity"
            iconClass="bg-primary-opacity"
            numberClass="color-primary"
            icon="feather-book-open"
            title="Enrolled Courses"
            :value="30"
          />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <CounterWidget
            counterStyle="two"
            styleClass="bg-secondary-opacity"
            iconClass="bg-secondary-opacity"
            numberClass="color-secondary"
            icon="feather-monitor"
            title="ACTIVE COURSES"
            :value="10"
          />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <CounterWidget
            counterStyle="two"
            styleClass="bg-violet-opacity"
            iconClass="bg-violet-opacity"
            numberClass="color-violet"
            icon="feather-award"
            title="Completed Courses"
            :value="7"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CounterWidget from "../Instructor/Dashboard-Section/widgets/CounterWidget";
</script>

<style lang="scss" scoped></style>
