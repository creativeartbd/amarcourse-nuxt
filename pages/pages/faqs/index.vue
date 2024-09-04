<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="Faqs" text="Faqs" />

  <div
    class="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap"
  >
    <Faq />
  </div>
  <ContactForm gap="rbt-section-gap" />

  <Separator />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title: "Faqs || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import ContactForm from "@/components/Contacts/Contact-Form";
import Faq from "@/components/Faqs/Faq";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
</script>

<style lang="scss" scoped></style>
