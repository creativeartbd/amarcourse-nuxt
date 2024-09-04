<template>
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-3">
        <div
          class="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border"
        >
          <div class="inner">
            <div class="content-item-content">
              <div class="rbt-widget-details">
                <div class="onepagenav">
                  <ul
                    class="mainmenu rbt-course-details-list-wrapper scrollspyLinks"
                  >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-9">
        <ColorPalette />
        <Gradient />
        <Typography />
        <FormElements />
        <Pagination />
        <Tooltips />
        <Avatars />
        <AnimatedHeading />
        <BorderRadius />
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorPalette from "./Sections/ColorPalette";
import Gradient from "./Sections/Gradient";
import Typography from "./Sections/Typography";
import FormElements from "./Sections/FormElements";
import Pagination from "./Sections/Pagination";
import Tooltips from "./Sections/Tooltips";
import Avatars from "./Sections/Avatars";
import AnimatedHeading from "./Sections/AnimatedHeading";
import BorderRadius from "./Sections/BorderRadius";
import addSmoothScroll from "~/utlis/addSmoothScroll";
const currentSection = ref("colorpalette");

const sections = [
  { id: "colorPalette", label: "Color Palette" },
  { id: "gradient", label: "Color Gradient" },
  { id: "typography", label: "Typography" },
  { id: "formElements", label: "Form Elements" },
  { id: "pagination", label: "Pagination" },
  { id: "tooltips", label: "Tooltips" },
  { id: "avatars", label: "Avatars" },
  { id: "animatedHeading", label: "Animated Heading" },
  { id: "rbtBorderRadius", label: "Border Radius" },
];

const sectionIds = [
  "colorPalette",
  "gradient",
  "typography",
  "formElements",
  "pagination",
  "tooltips",
  "avatars",
  "animatedHeading",
  "rbtBorderRadius",
];
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

<style lang="scss" scoped></style>
