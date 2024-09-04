<template>
  <div class="row g-0 parent-gallery-container">
    <template v-for="(data, index) in galleryData" :key="index">
      <div
        style="cursor: pointer"
        :class="'child-gallery-single col-lg-2 col-md-4 col-sm-6 col-6'"
        :href="`${data.img}`"
        data-gall="gallery01"
      >
        <div class="rbt-gallery">
          <nuxt-img
            class="w-100"
            :src="data.img"
            width="253"
            height="274"
            alt="Gallery Images"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import GalleryData from "../../data/elements/gallery.json";

const galleryData = GalleryData?.gallery || [];

onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".child-gallery-single",
      numeration: true,
      infinigall: true,
      spinner: "rotating-plane",
    });
  });
});
</script>
