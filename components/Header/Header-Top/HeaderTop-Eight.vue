<template>
  <div
    :class="`rbt-header-top rbt-header-top-1 ${gapSpaceBetween} ${bgColor} top-expended-activation ${
      !toggle ? 'd-none' : ''
    }`"
  >
    <div :class="`${container}`">
      <div class="top-expended-wrapper">
        <div
          v-for="(item, index) in HeaderTopData.headerTopOne"
          :key="index"
          :class="`top-expended-inner rbt-header-sec align-items-center ${flexDirection}`"
        >
          <div class="rbt-header-sec-col rbt-header-left d-none d-xl-block">
            <div class="rbt-header-content">
              <div class="header-info">
                <ul class="rbt-information-list">
                  <li>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                      {{ item.insFollowers }}k
                      <span class="d-none d-xxl-block">{{ item.type }}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-square"></i>
                      {{ item.fbFollowers }}k
                      <span class="d-none d-xxl-block">{{ item.type }}</span>
                    </a>
                  </li>
                  <li v-if="$route.path !== '/10-online-course'">
                    <a href="#">
                      <i class="feather-phone"></i>
                      {{ item.phone }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="rbt-header-sec-col rbt-header-center">
            <div
              class="rbt-header-content justify-content-start justify-content-xl-center"
            >
              <div class="header-info">
                <div class="rbt-header-top-news">
                  <div class="inner">
                    <div class="content">
                      <span
                        class="rbt-badge variation-02 bg-color-primary color-white radius-round"
                      >
                        {{ item.badgeText }}
                      </span>
                      <span class="news-text">
                        <!-- Replace Image tag with appropriate Nuxt.js image component -->
                        <nuxt-img :src="item.img" alt="Hand Emojji Images" />
                        {{ item.introPrice }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
            <div
              class="rbt-header-content justify-content-start justify-content-lg-end"
            >
              <div
                v-if="$route.path !== '/10-online-course'"
                class="header-info d-none d-xl-block"
              >
                <ul class="social-share-transparent">
                  <li>
                    <a href="#"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div
                v-if="$route.path !== '/10-online-course'"
                class="rbt-separator d-none d-xl-block"
              ></div>
              <div class="header-info">
                <ul class="rbt-dropdown-menu switcher-language">
                  <li
                    class="has-child-menu"
                    v-for="(lng, innerIndex) in item.language"
                    :key="innerIndex"
                  >
                    <nuxt-link :to="lng.link">
                      <nuxt-img
                        class="left-image"
                        :src="lng.img"
                        :alt="`${lng.name} Images`"
                      />
                      <span class="menu-item">{{ lng.defaultTitle }}</span>
                      <i class="right-icon feather-chevron-down"></i>
                    </nuxt-link>
                    <ul class="sub-menu">
                      <li
                        v-for="(sublng, subIndex) in lng.subLng"
                        :key="subIndex"
                      >
                        <nuxt-link :to="sublng.link">
                          <nuxt-img
                            class="left-image"
                            :src="sublng.img"
                            :alt="`${sublng.name} Images`"
                          />
                          <span class="menu-item">{{ sublng.name }}</span>
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="header-info">
                <ul class="rbt-dropdown-menu currency-menu">
                  <li
                    class="has-child-menu"
                    v-for="(curnc, innerIndex) in item.currency"
                    :key="innerIndex"
                  >
                    <nuxt-link :to="curnc.link">
                      <span class="menu-item">{{ curnc.defaultCurrency }}</span>
                      <i class="right-icon feather-chevron-down"></i>
                    </nuxt-link>
                    <ul class="sub-menu hover-reverse">
                      <li
                        v-for="(sub, subIndex) in curnc.subCurr"
                        :key="subIndex"
                      >
                        <nuxt-link :to="sub.link"
                          ><span class="menu-item">{{
                            sub.currency
                          }}</span></nuxt-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header-info">
          <div class="top-bar-expended d-block d-lg-none">
            <button
              class="topbar-expend-button rbt-round-btn"
              @click="toggle = !toggle"
            >
              <i class="feather-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderTopData from "@/data/headerTop";
const toggle = ref(true);
defineProps(["bgColor", "gapSpaceBetween", "container", "flexDirection"]);
</script>
