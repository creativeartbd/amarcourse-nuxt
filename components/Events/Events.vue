<template>
  <div class="row g-5">
    <div
      v-for="(data, index) in getSelectedEvent.slice(start, end)"
      :key="index"
      :class="`${childClass}`"
    >
      <div :class="`rbt-card ${parentClass} variation-01 rbt-hover`">
        <div class="rbt-card-img">
          <nuxt-link :to="`/pages/event-details/${data.id}`">
            <nuxt-img
              :src="data.img"
              width="355"
              height="240"
              priority
              alt="Card image"
            />
            <div class="rbt-badge-3 bg-white">
              <span>{{ data.badgeDate }}</span>
              <span>{{ data.badgeYear }}</span>
            </div>
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <ul class="rbt-meta">
            <li>
              <i class="feather-map-pin"></i>
              {{ data.location }}
            </li>
            <li>
              <i class="feather-clock"></i>
              {{ data.time }}
            </li>
          </ul>
          <h4 class="rbt-card-title">
            <nuxt-link :to="`/pages/event-details/${data.id}`">{{
              data.title
            }}</nuxt-link>
          </h4>
          <div class="read-more-btn">
            <nuxt-link
              class="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
              :to="`/pages/event-details/${data.id}`"
            >
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Get Ticket</span>
                <span class="btn-icon"
                  ><i class="feather-arrow-right"></i
                ></span>
                <span class="btn-icon"
                  ><i class="feather-arrow-right"></i
                ></span>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isPagination" class="row">
    <div class="col-lg-12 mt--60">
      <Pagination
        :totalPages="totalPages"
        :pageNumber="page"
        @clickPagination="handleClick"
      />
    </div>
  </div>
</template>

<script setup>
import Pagination from "../Common/Pagination";
const props = defineProps([
  "getEvents",
  "parentClass",
  "childClass",
  "isPagination",
  "start",
  "end",
]);

const page = ref(1);
const totalPages = ref(0);

const events = ref([]);
const startIndex = computed(() => (page.value - 1) * 6);
const getSelectedEvent = computed(() =>
  events.value.slice(startIndex.value, startIndex.value + 6)
);

const handleClick = (num) => {
  page.value = num;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  events.value = props.getEvents.events;
  totalPages.value = Math.ceil(props.getEvents.events.length / 6);
});
</script>
../Common/Pagination.vue
