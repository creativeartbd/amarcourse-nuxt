<template>
  <div class="rbt-card variation-01 rbt-hover">
    <div class="rbt-card-img">
      <nuxt-link :to="`/course-details/${data.id}`">
        <nuxt-img :src="data.courseThumbnail" :alt="data.title" />
        <div class="rbt-badge-3 bg-white">
          <span>{{ `-${discountPercentage}%` }}</span>
          <span>Off</span>
        </div>
      </nuxt-link>
    </div>
    <div class="rbt-card-body">
      <div v-if="courseStyle === 'two'" class="rbt-card-top">
        <div class="rbt-review">
          <div class="rating">
            <i v-for="index in rating" :key="index" class="fas fa-star"></i>
          </div>
          <span class="rating-count">({{ totalReviews }} Reviews)</span>
        </div>
        <div class="rbt-bookmark-btn">
          <a class="rbt-round-btn" title="Bookmark" href="#">
            <i class="feather-bookmark" />
          </a>
        </div>
      </div>
      <h4 v-if="courseStyle === 'two'" class="rbt-card-title">
        <nuxt-link :to="`/course-details/${data.id}`">{{
          data.title
        }}</nuxt-link>
      </h4>

      <ul class="rbt-meta">
        <li>
          <i class="feather-book" />
          {{ data.lectures }} Lessons
        </li>
        <li>
          <i class="feather-users" />
          {{ data.enrolledStudent }} Students
        </li>
      </ul>

      <div v-if="isProgress" class="rbt-progress-style-1 mb--20 mt--10">
        <div class="single-progress">
          <h6 class="rbt-title-style-2 mb--10">Complete</h6>

          <div v-if="isCompleted" class="progress">
            <div
              class="progress-bar wow fadeInLeft bar-color-success"
              data-wow-duration="0.5s"
              data-wow-delay=".3s"
              role="progressbar"
              :style="{ width: `100%` }"
              :aria-valuenow="100"
              :aria-valuemin="0"
              :aria-valuemax="100"
            ></div>
            <span class="rbt-title-style-2 progress-number"> 100% </span>
          </div>

          <div v-else class="progress">
            <div
              class="progress-bar wow fadeInLeft bar-color-success"
              data-wow-duration="0.5s"
              data-wow-delay=".3s"
              role="progressbar"
              :style="{ width: `${data.progressValue}%` }"
              :aria-valuenow="data.progressValue"
              :aria-valuemin="0"
              :aria-valuemax="100"
            ></div>
            <span class="rbt-title-style-2 progress-number">
              {{ data.progressValue }}%
            </span>
          </div>
        </div>
      </div>

      <div v-if="isProgress" class="rbt-card-bottom">
        <a class="rbt-btn btn-sm bg-primary-opacity w-100 text-center" href="#">
          Download Certificate
        </a>
      </div>

      <h4 v-if="courseStyle === 'one'" class="rbt-card-title">
        <a href="#">{{ data.title }}</a>
      </h4>

      <p v-if="showDescription" class="rbt-card-text">
        {{ data.shortDescription }}
      </p>

      <div
        v-if="courseStyle === 'two' && showAuthor"
        class="rbt-author-meta mb--20"
      >
        <div class="rbt-avater">
          <a href="#">
            <nuxt-img src="/images/client/avater-01.png" alt="Sophia Jaymes" />
          </a>
        </div>
        <div class="rbt-author-info">
          By <a href="#">Patrick</a> In{{ " " }}
          <a href="#">Languages</a>
        </div>
      </div>

      <div v-if="courseStyle === 'one'" class="rbt-review">
        <div class="rating">
          <i v-for="index in rating" :key="index" class="fas fa-star"></i>
        </div>
        <span class="rating-count"> ({{ totalReviews }} Reviews)</span>
      </div>

      <div v-if="!isProgress" class="rbt-card-bottom">
        <div class="rbt-price">
          <span class="current-price">${{ data.offerPrice }}</span>
          <span class="off-price">${{ data.coursePrice }}</span>
        </div>

        <a v-if="isEdit" class="rbt-btn-link left-icon" href="#">
          <i class="feather-edit"></i> Edit
        </a>

        <a v-else class="rbt-btn-link" href="#">
          Learn More
          <i class="feather-arrow-right" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "data",
  "courseStyle",
  "showDescription",
  "showAuthor",
  "isProgress",
  "isCompleted",
  "isEdit",
]);
const discountPercentage = ref("");
const totalReviews = ref("");
const rating = ref("");

const getDiscountPercentage = () => {
  let discount = props.data.coursePrice * ((100 - props.data.offerPrice) / 100);
  discountPercentage.value = discount.toFixed(0);
};

const getTotalReviews = () => {
  let reviews =
    props.data.reviews.oneStar +
    props.data.reviews.twoStar +
    props.data.reviews.threeStar +
    props.data.reviews.fourStar +
    props.data.reviews.fiveStar;
  totalReviews.value = reviews;
};

const getTotalRating = () => {
  let ratingStar = props.data.rating.average;
  rating.value = ratingStar.toFixed(0);
};

onMounted(() => {
  getDiscountPercentage();
  getTotalReviews();
  getTotalRating();
});
</script>

<style lang="scss" scoped></style>
