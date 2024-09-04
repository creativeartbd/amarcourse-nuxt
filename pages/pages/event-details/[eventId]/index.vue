<template>
  <MobileMenu />
  <HeaderStyleTen headerSticky="" :headerType="true" />

  <div class="rbt-breadcrumb-default rbt-breadcrumb-style-3">
    <EventBreadCrumb v-if="getMatchEvent" :getMatchEvent="getMatchEvent" />
  </div>

  <div class="rbt-course-details-area rbt-section-gap">
    <div class="container">
      <EventDetails v-if="getMatchEvent" :getMatchEvent="getMatchEvent" />
    </div>
  </div>

  <div class="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
    <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
  </div>

  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Event Details || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

import EventBreadCrumb from "@/components/Events/EventBreadCrumb";
import EventDetails from "@/components/Events/EventDetails";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import FooterOne from "@/components/Footer/Footer-One";

import EventData from "@/data/events.json";
import sal from "sal.js";
const route = useRoute();
const postId = route.params.eventId;

let getEvent;

getEvent = JSON.parse(JSON.stringify(EventData.events));

const getMatchEvent =
  getEvent.find((event) => event.id == postId) || getEvent[0];

onMounted(() => {
  sal({
    threshold: 0.01,
    once: true,
  });
});
</script>

<style lang="scss" scoped></style>
