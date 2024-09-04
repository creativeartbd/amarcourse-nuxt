<template>
  <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
  <template v-if="props.error.statusCode == 404">
    <NotFound />
  </template>
  <template v-else>
    <div class="fs-22 mt-50 mb-50" style="min-height: calc(100vh - 200px)">
      An error found with {{ props.error.statusCode }} status code
    </div></template
  >
  <Separator />
  <FooterThree />
</template>

<script setup>
const props = defineProps({
  error: Object,
});
useSeoMeta({
  title: ` ${
    props.error.statusCode == 404 ? "Page not found" : "An error found"
  }  ||  Amar Course - Online Courses & Education plateform.`,
  description: " Amar Course - Online Courses & Education plateform.",
});

import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import NotFound from "@/components/NotFound/NotFound";
</script>
