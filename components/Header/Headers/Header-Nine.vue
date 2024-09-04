<template>
  <div
    :class="`rbt-header-wrapper ${gapSpaceBetween} ${transparent} ${
      !headerType && isSticky ? 'rbt-sticky' : ''
    }`"
  >
    <div class="container">
      <div :class="`mainbar-row ${navigationEnd} align-items-center`">
        <div class="header-left rbt-header-content">
          <div class="header-info">
            <div class="logo logo-dark">
              <nuxt-link to="/">
                <nuxt-img
                  width="152"
                  height="50"
                  alt="Edu-cause"
                  src="/images/logo/logo.png"
                />
              </nuxt-link>
            </div>
            <div class="logo d-none logo-light">
              <nuxt-link to="/">
                <nuxt-img
                  width="152"
                  height="50"
                  src="/images/dark/logo/logo-light.png"
                  alt="Edu-cause"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="rbt-main-navigation d-none d-xl-block">
          <Nav />
        </div>
        <HeaderRightTwo
          userType="Admin"
          btnText="Enroll Now"
          btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
        />
      </div>
    </div>
    <Search />
  </div>
</template>

<script setup>
import Nav from "../Nav";
import HeaderRightTwo from "../Header-Right/HeaderRight-Two";
import Search from "../Offcanvas/Search";

defineProps(["gapSpaceBetween", "transparent", "navigationEnd", "headerType"]);

const isSticky = ref(false);

const handleScroll = () => {
  const scrolled = window.scrollY;
  isSticky.value = scrolled > 180;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
