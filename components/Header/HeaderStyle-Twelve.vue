<template>
  <header class="rbt-header">
    <HeaderTopBar />

    <div class="rbt-sticky-placeholder"></div>

    <div :class="`rbt-header-wrapper ${isSticky ? 'rbt-sticky' : ''}`">
      <div class="container">
        <div class="mainbar-row rbt-navigation-center align-items-center">
          <div class="header-left">
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

          <div class="rbt-main-navigation d-none d-xl-block">
            <nav class="mainmenu-nav onepagenav">
              <ul class="mainmenu scrollspyLinks">
                <li
                  v-for="(sec, i) in sections"
                  :class="currentSection === sec.id ? 'current' : ''"
                  :key="i"
                >
                  <a :href="`#${sec.id}`" :style="{ cursor: 'pointer' }">
                    {{ sec.label }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="header-right">
            <div
              class="rbt-offcanvas-trigger"
              id="rbt-offcanvas-activation"
              @click="toggleMobile"
            >
              <span class="offcanvas-trigger">
                <span class="offcanvas-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const isSticky = ref(false);
import addSmoothScroll from "~/utlis/addSmoothScroll";
const currentSection = ref("home");
const toggleMobile = () => {
  document.getElementById("sideNav")?.classList.toggle("side-menu-active");
  document
    .getElementById("offCanvasSideNav")
    .classList.add("offcanvas-menu-active");
};
const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "guideline", label: "Course Guideline" },
  { id: "coursecontent", label: "Course Content" },
  { id: "career", label: "Career" },
];
const sectionIds = ["home", "about", "guideline", "coursecontent", "career"];

const handleScroll = () => {
  const scrollPosition = window.scrollY + 200;

  for (const sectionId of sectionIds) {
    const element = document.getElementById(sectionId);

    if (element && scrollPosition >= element.offsetTop) {
      currentSection.value = sectionId;
    }
  }
};
onMounted(() => {
  addSmoothScroll();
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll2 = () => {
  const scrolled = window.scrollY;
  if (scrolled > 180) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll2);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll2);
});

import HeaderTopBar from "./HeaderTopBar/HeaderTopBar.vue";
</script>

<style lang="scss" scoped></style>
