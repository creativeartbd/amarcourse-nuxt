<template>
  <div class="row g-5">
    <div
      v-if="ContactData"
      class="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
      v-for="(data, index) in ContactData.contactOne"
      :key="index"
      :data-sal="'slide-up'"
      :data-sal-delay="'150'"
      :data-sal-duration="'800'"
    >
      <div class="rbt-address">
        <div class="icon">
          <i :class="data.icon"></i>
        </div>
        <div class="inner">
          <h4 class="title">{{ data.title }}</h4>
          <p v-if="data.numOne !== ''">
            <a :href="data.numOne">{{ data.numOne }}</a>
          </p>
          <p v-if="data.numTwo !== ''">
            <a :href="data.numTwo">{{ data.numTwo }}</a>
          </p>
          <p v-if="data.mailOne !== ''">
            <a :href="`mailto:${data.mailOne}`">{{ data.mailOne }}</a>
          </p>
          <p v-if="data.mailTwo !== ''">
            <a :href="`mailto:${data.mailTwo}`">{{ data.mailTwo }}</a>
          </p>
          <p v-if="data.address !== ''">{{ data.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactData from "../../data/pages/contact.json";
</script>

<style lang="scss" scoped></style>
