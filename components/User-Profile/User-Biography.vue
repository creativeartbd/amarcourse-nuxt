<template>
  <div class="col-lg-12 mt--30">
    <div
      v-if="checkMatchProfile"
      class="profile-content rbt-shadow-box"
      v-for="(data, index) in checkMatchProfile.courseInstructor"
      :key="index"
    >
      <h4 class="rbt-title-style-3">Biography</h4>

      <div
        v-for="(item, innerIndex) in data.body"
        :key="innerIndex"
        class="row g-5"
      >
        <div class="col-lg-8">
          <p class="mt--10 mb--20">{{ item.desc }}</p>
          <ul class="social-icon social-default justify-content-start">
            <li v-for="(social, index) in item.social" :key="index">
              <nuxt-link :to="social.link">
                <i :class="'feather-' + social.icon"></i>
              </nuxt-link>
            </li>
          </ul>
          <ul class="rbt-information-list mt--15">
            <li>
              <a :href="`tel:${item.contact}`">
                <i class="feather-phone"></i>
                {{ item.contact }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${item.mail}`">
                <i class="feather-mail"></i>
                {{ item.mail }}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 offset-lg-2">
          <div class="feature-sin best-seller-badge text-end h-100">
            <span class="rbt-badge-2 w-100 text-center badge-full-height">
              <span class="image">
                <nuxt-img :src="item.awardImg" alt="Best Seller Icon" />
              </span>
              {{ item.sellsType }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["checkMatchProfile"]);
</script>

<style lang="scss" scoped></style>
