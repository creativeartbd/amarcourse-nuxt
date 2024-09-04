<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <div class="rbt-conatct-area bg-gradient-11 rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center mb--60">
            <span class="subtitle bg-secondary-opacity"> যোগাযোগ</span>
            <h2 class="title">
              আমাদের সম্পর্কে বা কোর্স সম্পর্কে যদি আপনার কোন জিজ্ঞাসা থাকে তাহলে অনুগ্রহপূর্বক নিচের ফর্মটি পূরণ করুন। আমরা অবশ্যই ২৪ ঘন্টার মধ্যে আপনার প্রশ্নের উত্তর দেওয়ার চেষ্টা করব।
            </h2>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  </div>

  <ContactForm />

  <div class="rbt-google-map bg-color-white rbt-section-gapTop">
    <iframe
      class="w-100"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.34841644498!2d90.35901571030868!3d23.73495177859202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf3936810b51%3A0x293b63216f863486!2sP9M6%2BW9G%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1723796662157!5m2!1sen!2sbd"
      height="600"
      :style="{ border: '0' }"
    ></iframe>
  </div>

  <FooterThree />
</template>

<script setup>
useSeoMeta({
  title:
    "Contact || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import Contact from "@/components/Contacts/Contact";
import ContactForm from "@/components/Contacts/Contact-Form";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import FooterThree from "@/components/Footer/Footer-Three";
</script>

<style lang="scss" scoped></style>
