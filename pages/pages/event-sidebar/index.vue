<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <EventHead />
  <div
    class="rbt-counterup-area rbt-section-overlayping-top rbt-section-gapBottom"
  >
    <div class="container">
      <div class="row row--30 gy-5">
        <div class="col-lg-4 col-xl-3 order-2 order-lg-1">
          <EventSidebar />
        </div>
        <div class="col-lg-8 col-xl-9 order-1 order-lg-2">
          <EventGrid
            :isPagination="true"
            parentClass="event-grid-card"
            childClass="col-xl-4 col-lg-6 col-md-6 col-12"
            :getEvents="EventData"
          />
        </div>
      </div>
    </div>
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Event Sidebar || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import EventHead from "@/components/Events/EventHead";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import EventGrid from "@/components/Events/Events";

import EventData from "../../../data/events.json";
import EventSidebar from "@/components/Events/EventSidebar";
</script>

<style lang="scss" scoped></style>
