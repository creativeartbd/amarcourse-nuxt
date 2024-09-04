<template>
  <div
    id="animatedHeading"
    class="rbt-elements-area bg-color-white rbt-shadow-box mb--60"
  >
    <div class="wrapper">
      <div class="section-title">
        <h4 class="rbt-title-style-3">Animated Heading</h4>
      </div>
      <div class="row g-5">
        <div class="col-lg-12">
          <h3 class="title">
            Clip Animated
            <span class="header-caption ms-2">
              <span class="cd-headline clip is-full-width">
                <span class="cd-words-wrapper">
                  <b class="is-visible theme-gradient is-visible-one"></b>
                </span>
              </span>
            </span>
          </h3>

          <h3 class="title">
            Rotate Animated
            <span class="header-caption ms-2">
              <span class="cd-headline rotate-1">
                <span class="cd-words-wrapper">
                  <b
                    :class="
                      visibleIndex === 0
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Rotate One.
                  </b>
                  <b
                    :class="
                      visibleIndex === 1
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Rotate Two.
                  </b>
                  <b
                    :class="
                      visibleIndex === 2
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Rotate Three.
                  </b>
                </span>
              </span>
            </span>
          </h3>

          <h3 class="title">
            Type Animated
            <span class="header-caption ms-2">
              <span class="cd-headline type">
                <span class="cd-words-wrapper">
                  <b class="is-visible theme-gradient">Type One.</b>
                  <b class="is-hidden theme-gradient">Type Two.</b>
                  <b class="is-hidden theme-gradient">Type Three.</b>
                </span>
              </span>
            </span>
          </h3>

          <h3 class="title">
            Loading Animated
            <span class="header-caption ms-2">
              <span :class="`cd-headline loading-bar`">
                <span
                  :class="`cd-words-wrapper ${
                    visibleIndex2 === 1 ? 'is-loading' : ''
                  }`"
                >
                  <b
                    :class="
                      visibleIndex === 0
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Loading One.
                  </b>
                  <b
                    :class="
                      visibleIndex === 1
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Loading Two.
                  </b>
                  <b
                    :class="
                      visibleIndex === 2
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Loading Three.
                  </b>
                </span>
              </span>
            </span>
          </h3>

          <h3 class="title">
            Zoom Animated
            <span class="header-caption ms-2">
              <span class="cd-headline zoom">
                <span class="cd-words-wrapper">
                  <b
                    :class="
                      visibleIndex === 0
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Zoom One.
                  </b>
                  <b
                    :class="
                      visibleIndex === 1
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Zoom Two.
                  </b>
                  <b
                    :class="
                      visibleIndex === 2
                        ? 'is-visible theme-gradient'
                        : 'is-hidden theme-gradient'
                    "
                  >
                    Zoom Three.
                  </b>
                </span>
              </span>
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Typed from "typed.js";

const visibleIndex = ref(0);
const visibleIndex2 = ref(0);
const intervalId = ref();
const intervalIdTwo = ref();

const typeitInstance = ref();
onMounted(() => {
  typeitInstance.value = new Typed(".is-visible-one", {
    strings: ["Clip One.", "Clip Two.", "Clip Three."],
    typeSpeed: 80,
    backSpeed: 60,
    startDelay: 200,
    loop: Infinity,
    showCursor: false,
  });
  intervalId.value = setInterval(() => {
    visibleIndex.value = (visibleIndex.value + 1) % 3;
  }, 2000);
  intervalIdTwo.value = setInterval(() => {
    visibleIndex2.value = (visibleIndex2.value + 1) % 2;
  }, 2000);
});
onUnmounted(() => {
  typeitInstance.value?.destroy();
  clearInterval(intervalId.value);
  clearInterval(intervalIdTwo.value);
});
</script>

<style lang="scss" scoped></style>
