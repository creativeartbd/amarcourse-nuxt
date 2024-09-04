<template>
  <div class="row g-5">
    <div class="col-lg-8">
      <div class="course-details-content">
        <div class="rbt-feature-box rbt-shadow-box thuumbnail">
          <nuxt-img
            class="w-100"
            :src="getMatchEvent.eventImg"
            alt="Card image"
          />
        </div>
        <div class="rbt-feature-box rbt-shadow-box mt--60">
          <EventContent :getEventData="getMatchEvent" />
        </div>
        <div class="rbt-feature-box rbt-shadow-box mt--60">
          <EventDescription :getEventData="getMatchEvent" />
        </div>
        <EventFaq
          eventParentClass="rbt-accordion-style rbt-accordion-02 accordion mt--45"
          :getEventData="getMatchEvent"
        />
        <div class="rbt-participants-area mt--60">
          <EventParticipants :getEventData="getMatchEvent" />
        </div>
        <div class="related-course mt--60">
          <SimilarEvent :getEventData="getMatchEvent" />
        </div>
      </div>
    </div>
    <div class="col-lg-4 mt_md--60 mt_sm--60">
      <div
        class="course-sidebar rbt-gradient-border sticky-top rbt-shadow-box course-sidebar-top"
      >
        <EventViedo :getEventData="getMatchEvent" />
      </div>
    </div>
  </div>
</template>

<script setup>
import EventContent from "./Event-Section/EventContent";
import EventDescription from "./Event-Section/EventDescription";
import EventFaq from "./Event-Section/EventFaq";
import EventParticipants from "./Event-Section/EventParticipants";
import SimilarEvent from "./Event-Section/SimilarEvent";
import EventViedo from "./Event-Section/EventViedo";
defineProps(["getMatchEvent"]);
</script>

<style lang="scss" scoped></style>
