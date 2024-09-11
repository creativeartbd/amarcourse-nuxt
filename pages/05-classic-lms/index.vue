<template>
    <MobileMenu />
    <HeaderTopBar />
    <HeaderStyleNine headerType="" />
    <ClassicLms />
    <!-- <Cart /> -->

    <!-- <BackToTop /> -->
    <Separator />
    <FooterOne />
</template>

<script setup>
useSeoMeta({
    title: "Home Class LMS || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
    description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderTopBar from "@/components/Header/HeaderTopBar/HeaderTopBar";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
// import Cart from "@/components/Header/Offcanvas/Cart";
// import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import ClassicLms from "@/components/05-classic-lms/05-ClassicLms";
</script>

<style lang="scss" scoped></style>
~/components/Header/HeaderStyle-Nine.vue
