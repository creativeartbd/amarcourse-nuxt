<template>
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
</template>

<script setup>
import addSmoothScroll from "~/utlis/addSmoothScroll";

const currentSection = ref("overview");
const sections = [
  { id: "overview", label: "Overview" },
  { id: "coursecontent", label: "Course Content" },
  { id: "details", label: "Details" },
  { id: "intructor", label: "Intructor" },
  { id: "review", label: "Review" },
];
const sectionIds = [
  "overview",
  "coursecontent",
  "details",
  "intructor",
  "review",
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
