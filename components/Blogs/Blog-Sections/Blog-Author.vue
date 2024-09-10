<template>
    <div class="media">
        <div class="thumbnail" v-if="author.image">
            <a href="#">
                <nuxt-img :src="author.image" alt="Author Images" />
            </a>
        </div>
        <div class="media-body">
            <div class="author-info">
                <h5 class="title">
                    <a class="hover-flip-item-wrapper" href="#"> {{ author.nickname }} </a>
                </h5>
                <!-- <span class="b3 subtitle">{{ author.about }}</span> -->
            </div>
            <div class="content">
                <p class="description">{{ author.description }}</p>
                <!-- <ul class="social-icon social-default icon-naked justify-content-start">
          <li
            v-for="(socialItem, innerIndex) in author.social"
            :key="innerIndex"
          >
            <a :href="socialItem.url">
              <i :class="socialItem.icon"></i>
            </a>
          </li>
        </ul> -->
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["author"]);
</script>

<style lang="scss" scoped></style>
