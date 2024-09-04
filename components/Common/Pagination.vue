<template>
  <nav>
    <div class="nav-links">
      <ul class="rbt-pagination">
        <!-- Previous Button -->
        <li :class="{ disabled: pageNumber === 1 }">
          <a href="#" aria-label="Previous" @click="handlePreviousClick">
            <i class="feather-chevron-left" />
          </a>
        </li>

        <!-- Dynamic Page Numbers (show current and next page) -->
        <li
          v-for="num in dynamicPageRange"
          :key="num"
          :class="{ active: pageNumber === num }"
        >
          <a href="#" @click="() => handleClick(num)">{{ num }}</a>
        </li>

        <!-- Ellipsis -->
        <li v-if="showEllipsis">
          <span>...</span>
        </li>

        <!-- Last Page -->
        <li :class="{ active: pageNumber === totalPages }">
          <a href="#" @click="() => handleClick(totalPages)">
            {{ totalPages }}
          </a>
        </li>

        <!-- Next Button -->
        <li :class="{ disabled: pageNumber === totalPages }">
          <a href="#" aria-label="Next" @click="handleNextClick">
            <i class="feather-chevron-right" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(["totalPages", "pageNumber"]);
const emits = defineEmits(["clickPagination"]);

const handleClick = (num) => {
  if (num >= 1 && num <= props.totalPages) {
    emits("clickPagination", num);
  }
};

const handlePreviousClick = () => {
  if (props.pageNumber > 1) {
    emits("clickPagination", props.pageNumber - 1);
  }
};

const handleNextClick = () => {
  if (props.pageNumber < props.totalPages) {
    emits("clickPagination", props.pageNumber + 1);
  }
};

// Compute the dynamic range for the visible page numbers
const dynamicPageRange = computed(() => {
  const currentPage = props.pageNumber;
  const totalPages = props.totalPages;

  // Calculate the start and end of the sliding window
  let start = Math.max(1, currentPage);
  let end = Math.min(totalPages - 1, start + 1);

  // If near the end, adjust to show the last pages correctly
  if (currentPage >= totalPages - 2) {
    start = Math.max(1, totalPages - 2);
    end = totalPages - 1;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

// Determine when to show the ellipsis
const showEllipsis = computed(() => {
  return props.pageNumber < props.totalPages - 2;
});
</script>
