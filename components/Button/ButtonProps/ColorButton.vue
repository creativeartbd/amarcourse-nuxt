<template>
  <div :class="classOne">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Color Variation."
        text="Button Color"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a :class="`rbt-btn ${btnClassOne}`" href="#">
              {{ btnText }}
            </a>
            <a :class="`rbt-btn ${btnClassTwo}`" href="#">
              {{ btnText }}
            </a>
            <a :class="`rbt-btn ${btnClassThree}`" href="#">
              {{ btnText }}
            </a>
            <a :class="`rbt-btn ${btnClassFour}`" href="#">
              {{ btnText }}
            </a>
            <a :class="`rbt-btn ${btnClassFive}`" href="#">
              {{ btnText }}
            </a>
            <template v-if="lastbtn">
              <a :class="`rbt-btn ${btnClassSix}`" href="#">
                {{ btnText }}
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHead from "./SectionHead";
defineProps([
  "classOne",
  "btnText",
  "btnClassOne",
  "btnClassTwo",
  "btnClassThree",
  "btnClassFour",
  "btnClassFive",
  "btnClassSix",
  "lastbtn",
  "textBg",
  "title",
  "text",
]);
</script>
