<template>
  <div class="row g-5">
    <div
      class="col-lg-6 col-md-12 col-sm-12 col-12"
      data-sal-delay="150"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      <div
        v-if="BlogData"
        v-for="(data, index) in BlogData.blogGrid.slice(0, 1)"
        :key="index"
        class="rbt-card variation-02 height-330 rbt-hover"
      >
        <div class="rbt-card-img">
          <nuxt-link :to="`/blog-details/${data.id}`">
            <nuxt-img :src="data.img" alt="Card image" />
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <h3 class="rbt-card-title">
            <nuxt-link :to="`/blog-details/${data.id}`">{{
              data.title
            }}</nuxt-link>
          </h3>
          <p class="rbt-card-text">{{ data.desc }}</p>
          <div class="rbt-card-bottom">
            <nuxt-link
              :to="`/blog-details/${data.id}`"
              class="transparent-button"
            >
              Learn More
              <i>
                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#27374D" fill="none" fill-rule="evenodd">
                    <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                    <path stroke-linecap="square" d="M.663 5.572h14.594" />
                  </g>
                </svg>
              </i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-lg-6 col-md-12 col-sm-12 col-12"
      data-sal-delay="150"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      <div
        v-if="BlogData"
        v-for="(data, index) in BlogData.blogGrid.slice(1, 4)"
        :key="index"
        :class="`rbt-card card-list variation-02 rbt-hover ${
          data.mt ? 'mt--30' : ''
        }`"
      >
        <div class="rbt-card-img">
          <nuxt-link :to="`/blog-details/${data.id}`">
            <nuxt-img :src="data.img" alt="Card image" />
          </nuxt-link>
        </div>
        <div class="rbt-card-body">
          <h5 class="rbt-card-title">
            <nuxt-link :to="`/blog-details/${data.id}`">{{
              data.title
            }}</nuxt-link>
          </h5>
          <div class="rbt-card-bottom">
            <nuxt-link
              :to="`/blog-details/${data.id}`"
              class="transparent-button"
            >
              Read Article
              <i>
                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#27374D" fill="none" fill-rule="evenodd">
                    <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                    <path stroke-linecap="square" d="M.663 5.572h14.594" />
                  </g>
                </svg>
              </i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["BlogData"]);
</script>
