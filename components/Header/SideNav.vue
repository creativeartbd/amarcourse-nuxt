<template>
  <div id="offCanvasSideNav">
    <div id="sideNav" :class="`side-menu `">
      <div class="inner-wrapper side-menu-wrapper">
        <div class="inner-top">
          <div class="content">
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
            <div class="rbt-btn-close" id="btn_sideNavClose">
              <button class="rbt-round-btn" @click="toggleMobile">
                <i class="feather-x"></i>
              </button>
            </div>
          </div>
          <p class="description">
            Histudy is a education website template. You can customize all.
          </p>

          <ul
            class="navbar-top-left rbt-information-list justify-content-start"
          >
            <li>
              <a href="mailto:hello@example.com">
                <i class="feather-mail"></i>example@gmail.com
              </a>
            </li>
            <li>
              <a href="#"> <i class="feather-phone"></i>(302) 555-0107 </a>
            </li>
          </ul>
        </div>
        <nav class="side-nav w-100 mt--60 mb--80">
          <ul class="navbar-nav scrollspyLinks">
            <li
              v-for="(sec, i) in sections"
              :class="currentSection === sec.id ? 'current' : ''"
              :key="i"
              @click="toggleMobile"
            >
              <a :href="`#${sec.id}`" :style="{ cursor: 'pointer' }">
                {{ sec.label }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="social-share-wrapper">
          <span class="rbt-short-title d-block">Find With Us</span>
          <ul
            class="social-icon social-default transparent-with-border justify-content-start mt--20"
          >
            <li>
              <a href="https://www.facebook.com/">
                <i class="feather-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i class="feather-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i class="feather-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkdin.com/">
                <i class="feather-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul class="rbt-secondary-menu mt--50">
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <a @click="toggleMobile" class="close_side_menu"></a>
  </div>
</template>

<script setup>
import addSmoothScroll from "~/utlis/addSmoothScroll";

const currentSection = ref("home");

const toggleMobile = () => {
  document.getElementById("sideNav")?.classList.remove("side-menu-active");
  document
    .getElementById("offCanvasSideNav")
    .classList.remove("offcanvas-menu-active");
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
</script>

<style lang="css">
.close_side_menu {
}
</style>
