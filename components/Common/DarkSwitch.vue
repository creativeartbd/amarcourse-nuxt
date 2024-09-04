<template>
  <div id="my_switcher" class="my_switcher">
    <ul @click="toggleTheme">
      <li v-if="isLightTheme">
        <a data-theme="light" class="setColor light">
          <img src="/images/about/vector.svg" alt="Sun images" />
        </a>
      </li>
      <li v-else>
        <a data-theme="dark" class="setColor dark">
          <img src="/images/about/sun-01.svg" alt="Vector Images" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const isLightTheme = ref(true);

onMounted(() => {
  const themeType = localStorage.getItem("histudy-theme");
  if (themeType === "dark") {
    isLightTheme.value = false;
    document.body.classList.add("active-dark-mode");
  }
});

watch(isLightTheme, (newValue) => {
  if (newValue) {
    document.body.classList.remove("active-dark-mode");
    localStorage.setItem("histudy-theme", "light");
  } else {
    document.body.classList.add("active-dark-mode");
    localStorage.setItem("histudy-theme", "dark");
  }
});

const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value;
};
</script>

<style scoped>
/* Add your styles here */
</style>
