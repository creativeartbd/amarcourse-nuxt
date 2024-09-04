<template>
  <div class="header-info">
    <ul class="rbt-dropdown-menu switcher-language">
      <li class="has-child-menu">
        <a href="#">
          <nuxt-img
            class="left-image"
            src="/images/icons/en-us.png"
            alt="Language Images"
          />
          <span class="menu-item">English</span>
          <i class="right-icon feather-chevron-down"></i>
        </a>
        <ul class="sub-menu">
          <li>
            <a href="#">
              <nuxt-img
                class="left-image"
                src="/images/icons/fr.png"
                alt="Language Images"
              />
              <span class="menu-item">Français</span>
            </a>
          </li>
          <li>
            <a href="#">
              <nuxt-img
                class="left-image"
                src="/images/icons/de.png"
                alt="Language Images"
              />
              <span class="menu-item">Deutsch</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="header-info">
    <ul class="rbt-dropdown-menu currency-menu">
      <li class="has-child-menu">
        <a href="#">
          <span class="menu-item">USD</span>
          <i class="right-icon feather-chevron-down"></i>
        </a>
        <ul class="sub-menu hover-reverse">
          <li>
            <a href="#">
              <span class="menu-item">EUR</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="menu-item">GBP</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
