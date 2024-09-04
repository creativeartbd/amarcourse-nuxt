<template>
  <div
    :class="`rbt-header-wrapper ${gapSpaceBetween} ${sticky} ${
      !headerType && isSticky ? `${headerSticky}` : ''
    }`"
  >
    <div :class="container">
      <div :class="`mainbar-row ${navigationEnd} align-items-center`">
        <div class="header-left rbt-header-content">
          <div class="header-info">
            <div class="logo logo-dark">
              <nuxt-link to="/">
                <h5>আমার কোর্স</h5>
              </nuxt-link>
            </div>
            <div class="logo d-none logo-light">
              <nuxt-link to="/">
                <h5>আমার কোর্স</h5>
              </nuxt-link>
            </div>
          </div>

          <!-- <div class="header-info d-none d-lg-block">
            <Category />
          </div> -->
        </div>

        <div class="rbt-main-navigation d-none d-xl-block">
          <Nav />
        </div>

        <HeaderRightTwo
          userType="Admin"
          btnText="এখনই কোর্সে ভর্তি হন"
          btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
        />
      </div>
    </div>
    <Search />
  </div>
</template>

<script setup>
import HeaderRightTwo from "../Header-Right/HeaderRight-Two.vue";
import Search from "../Offcanvas/Search.vue";
import Category from "../Category/Category.vue";
import Nav from "../Nav.vue";

defineProps([
  "headerType",
  "gapSpaceBetween",
  "sticky",
  "headerSticky",
  "navigationEnd",
  "container",
]);

const isSticky = ref(false);
const handleScroll = () => {
  const scrolled = window.scrollY;
  isSticky.value = scrolled > 0;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
