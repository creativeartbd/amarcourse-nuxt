<template>
  <li class="comment">
    <div class="comment-body">
      <div class="single-comment">
        <div class="comment-img">
          <nuxt-img :src="comnt.author_avatar_url" alt="Author Images" />
        </div>
        <div class="comment-inner">
          <h6 class="commenter">
            <a href="#">{{ comnt.author }}</a>
          </h6>
          <div class="comment-meta">
            <div class="time-spent">{{ comnt.date }}</div>
            <div class="reply-edit">
              <div class="reply">
                <a class="comment-reply-link" href="#"> Reply </a>
              </div>
            </div>
          </div>
          <div class="comment-text">
            <p class="b2" v-html=" comnt.content"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- <ul
      v-if="comnt.children"
      v-for="(child, childIndex) in comnt.children"
      class="children"
      :key="childIndex"
    >
      <li class="comment">
        <div class="comment-body">
          <div class="single-comment">
            <div class="comment-img">
              <nuxt-img :src="child.img" alt="Author Images" />
            </div>
            <div class="comment-inner">
              <h6 class="commenter">
                <a href="#">{{ child.name }}</a>
              </h6>
              <div class="comment-meta">
                <div class="time-spent">{{ child.date }}</div>
                <div class="reply-edit">
                  <div class="reply">
                    <a class="comment-reply-link" href="#"> Reply </a>
                  </div>
                </div>
              </div>
              <div class="comment-text">
                <p class="b2">{{ child.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul> -->
  </li>
</template>

<script setup>
defineProps(["comnt"]);
</script>

<style lang="scss" scoped></style>
