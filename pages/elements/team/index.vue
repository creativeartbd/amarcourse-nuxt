<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Instructor" text="Instructor" />

  <div class="rbt-team-area bg-color-white rbt-section-gap">
    <TeamOne />
  </div>
  <div class="rbt-team-area bg-color-white rbt-section-gapBottom">
    <div class="container">
      <TeamHead title="Team (Carousel Style)." desc="Awesome Carousel Style." />
      <TeamTwo />
    </div>
  </div>
  <div class="rbt-team-area bg-color-white rbt-section-gapBottom">
    <TeamThree />
  </div>
  <div class="rbt-team-area bg-color-extra2 rbt-section-gap">
    <TeamFour isHead="{true}" />
  </div>
  <div class="rbt-team-area bg-color-white rbt-section-gap">
    <TeamFive />
  </div>
  <div class="rbt-team-area bg-color-extra2 rbt-section-gap">
    <TeamSix />
  </div>
  <div class="rbt-team-area bg-color-white rbt-section-gap">
    <TeamSeven />
  </div>
  <div class="rbt-team-area bg-color-extra2 rbt-section-gap">
    <TeamEight />
  </div>
  <div class="rbt-team-area bg-color-white rbt-section-gap">
    <TeamNine />
  </div>
  <div class="rbt-team-area bg-gradient-8 rbt-section-gap">
    <TeamTen />
  </div>

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title:
    "Elements - Team || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import TeamOne from "@/components/Team/TeamOne";
import TeamHead from "@/components/Team/TeamHead";
import TeamTwo from "@/components/Team/TeamTwo";
import TeamThree from "@/components/Team/TeamThree";
import TeamFour from "@/components/Team/TeamFour";
import TeamFive from "@/components/Team/TeamFive";
import TeamSix from "@/components/Team/TeamSix";
import TeamSeven from "@/components/Team/TeamSeven";
import TeamEight from "@/components/Team/TeamEight";
import TeamNine from "@/components/Team/TeamNine";
import TeamTen from "@/components/Team/TeamTen";
</script>

<style lang="scss" scoped></style>
