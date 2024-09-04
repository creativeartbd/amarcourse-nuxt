<template>
  <div :class="`rbt-course-action-bottom`">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <div class="section-title text-center text-md-start">
            <h5 class="title mb--0">{{ checkMatchCourses.courseTitle }}</h5>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 mt_sm--15">
          <div class="course-action-bottom-right rbt-single-group">
            <div
              class="rbt-single-list rbt-price large-size justify-content-center"
            >
              <span class="current-price color-primary">{{
                checkMatchCourses.price
              }}</span>
              <span class="off-price">{{ checkMatchCourses.offPrice }}</span>
            </div>
            <div class="rbt-single-list action-btn">
              <nuxt-link
                class="rbt-btn btn-gradient hover-icon-reverse btn-md"
                to="/login"
              >
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">Purchase Now</span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                  <span class="btn-icon">
                    <i class="feather-arrow-right"></i>
                  </span>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["checkMatchCourses"]);
const router = useRoute();
const path = router.path;
const hideOnScroll = ref(false);
const handleScroll = () => {
  const ScrollPosition = window.pageYOffset;
  let isHide;
  if (path === "/course-details-2/[courseId]") {
    isHide = ScrollPosition > 4365 && ScrollPosition < 5609;
  } else {
    isHide = ScrollPosition > 4365;
  }
  hideOnScroll.value = isHide;
};
onMounted(() => {
  var scrollBottom = document.querySelector(".rbt-course-action-bottom");

  window.addEventListener("scroll", function () {
    var topPos = window.scrollY || window.pageYOffset; // Getting the scroll position
    var targetPossition = document.documentElement.scrollHeight * 0.66; // 66% down the document
    var filled =
      (window.scrollY + window.innerHeight) /
      document.documentElement.scrollHeight;

    if (topPos > targetPossition && filled !== 1) {
      scrollBottom?.classList?.add("rbt-course-action-active");
    } else {
      scrollBottom?.classList?.remove("rbt-course-action-active");
    }
  });
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
