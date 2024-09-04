<template>
  <div v-for="(data, index) in courseFilter" :key="index" :class="parentClass">
    <div :class="childClass">
      <div class="rbt-card-img">
        <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">
          <nuxt-img
            :src="data.courseImg"
            width="597"
            height="454"
            alt="Card image"
          />
        </nuxt-link>
      </div>
      <div class="rbt-card-body">
        <div class="rbt-card-top">
          <div class="rbt-review">
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <span class="rating-count">({{ data.review }} Reviews)</span>
          </div>
          <div class="rbt-bookmark-btn">
            <a class="rbt-round-btn" title="Bookmark" href="#">
              <i class="feather-bookmark"></i>
            </a>
          </div>
        </div>

        <h4 class="rbt-card-title">
          <nuxt-link :to="`/course-details/${data.id ? data.id : 1}`">{{
            data.courseTitle
          }}</nuxt-link>
        </h4>

        <ul class="rbt-meta mb--10">
          <li>
            <i class="feather-book"></i>
            {{ data.lesson }} Lessons
          </li>
          <li>
            <i class="feather-users"></i>
            {{ data.student }} Students
          </li>
        </ul>

        <p class="rbt-card-text">{{ data.desc }}</p>

        <ul class="rbt-meta rbt-meta-badge mb--20">
          <li v-for="(inner, i) in data.courseTag" :key="i">
            <a href="#">
              <span class="rbt-badge">{{ inner }}</span>
            </a>
          </li>
        </ul>

        <div class="rbt-author-meta mb--10">
          <div class="rbt-avater">
            <nuxt-link :to="`/profile/${data.id}`">
              <nuxt-img
                :src="data.userImg"
                width="33"
                height="33"
                alt="Sophia Jaymes"
              />
            </nuxt-link>
          </div>
          <div class="rbt-author-info">
            By
            <nuxt-link :to="`/profile/${data.id}`">{{
              data.userName
            }}</nuxt-link>
            In <a href="#">{{ data.userCategory }}</a>
          </div>
        </div>
        <div class="rbt-card-bottom">
          <div class="rbt-price">
            <span class="current-price">${{ data.price }}</span>
            <span class="off-price">${{ data.offPrice }}</span>
          </div>
          <nuxt-link
            class="rbt-btn-link left-icon"
            :to="`/course-details/${data.id ? data.id : 1}`"
          >
            <i class="feather-shopping-cart"></i> Add To Cart
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseCard from "../../data/course-details/courseData.json";
const props = defineProps(["parentClass", "childClass", "types"]);
const courseFilter = ref([]);
const filterItem = (types) => {
  const updateItem = CourseCard.courseDetails.filter((curElm) => {
    return curElm.courseType === types;
  });
  courseFilter.value = updateItem;
};

onMounted(() => {
  filterItem(props.types);
});
</script>

<style scoped>
/* Your component's scoped styles */
</style>
