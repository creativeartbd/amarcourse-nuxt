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
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <CounterWidget
            counterStyle="two"
            styleClass="bg-pink-opacity"
            iconClass="bg-pink-opacity"
            numberClass="color-pink"
            icon="feather-users"
            title="Total Students"
            :value="160"
          />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <CounterWidget
            counterStyle="two"
            styleClass="bg-coral-opacity"
            iconClass="bg-coral-opacity"
            numberClass="color-coral"
            icon="feather-gift"
            title="Total Courses"
            :value="20"
          />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <CounterWidget
            counterStyle="two"
            styleClass="bg-warning-opacity"
            iconClass="bg-warning-opacity"
            numberClass="color-warning"
            icon="feather-dollar-sign"
            title="Total Earnings"
            :value="25000"
          />
        </div>
      </div>
    </div>
  </div>

  <MyCourses />
</template>

<script setup>
import CounterWidget from "./Dashboard-Section/widgets/CounterWidget";
import MyCourses from "./Dashboard-Section/MyCourses";
</script>

<style lang="scss" scoped></style>
