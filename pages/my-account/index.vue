<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <MobileMenu />

  <BreadCrumb title="My Account" text="My Account" />

  <div class="my-account-section bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row g-5">
            <div class="col-lg-3 col-12">
              <AccountSidebar />
            </div>
            <div class="col-lg-9 col-12">
              <MyAccount
                v-if="AccountInfo"
                v-for="(data, index) in AccountInfo.account"
                :key="index"
                :account="data"
              />
            </div>
          </div>
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
    "My Accouts || Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
  description: "Histudy - Online Courses & Education Vue 3 Nuxtjs Template",
});
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import AccountInfo from "../../data/myAccount.json";
import AccountSidebar from "@/components/My-Account/AccountSidebar";
import MyAccount from "@/components/My-Account/MyAccount";
</script>

<style lang="scss" scoped></style>
