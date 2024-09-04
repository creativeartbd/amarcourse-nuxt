<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <EventHead />
  <div
    class="rbt-counterup-area rbt-section-overlayping-top rbt-section-gapBottom"
  >
    <div class="container">
      <EventList
        :isPagination="true"
        parentClass="card-list-2 event-list-card"
        childClass="col-lg-6 col-md-6 col-12"
        :getEvents="EventData"
      />
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Event List || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import EventHead from "@/components/Events/EventHead";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import EventList from "@/components/Events/Events";

import EventData from "../../../data/events.json";
</script>

<style lang="scss" scoped></style>
