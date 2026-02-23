<script setup>
import { ref } from "vue";

const showLanguages = ref(false);
const toggleLanguages = () => {
  showLanguages.value = !showLanguages.value;
};

const selectLanguage = (lang) => {
  console.log("Selected:", lang);
  showLanguages.value = false;
};


</script>

<template>
  <header class="uc-header header-global uc-navbar-sticky-wrap z-999">
    <nav class="uc-navbar-container uc-navbar-transparent uc-navbar-float ft-tertiary z-1"
      data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;">
      <div class="uc-navbar-main">
        <div class="container max-w-lg lg:max-w-950px xl:max-w-xl">
          <div class="uc-navbar min-h-56px lg:min-h-100px px-2 lg:px-0 text-gray-900 dark:text-white"
            data-uc-navbar="animation: uc-animation-slide-top-small; duration: 150;">
            <div class="uc-navbar-left">
              <div class="uc-logo">
                <NuxtLink class="panel text-none" to="/"  >
                  <img class="text-primary dark:text-tertiary image-filter" src="/assets/images/common/logo-8-light.svg" alt="Lexend"
                    data-uc-svg /> 

                </NuxtLink>
              </div>
            </div>

            <div class="uc-navbar-center d-none xl:d-flex">
              <ul class="uc-navbar-nav gap-4 xl:gap-5 d-none lg:d-flex fs-5 fw-bold" style="--uc-nav-height: 48px">
                <li>
                  <NuxtLink to="/page-features">Features</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/page-pricing-2">Pricing</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/page-blog">Blog</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/page-about">About</NuxtLink>
                </li>
              </ul>
            </div>

            <div class="uc-navbar-right">
              <!-- Language Dropdown -->
              <div class="d-inline-block" style="position: relative;">
                <a @click.prevent="toggleLanguages" class="hstack gap-1 text-none fw-medium" style="cursor: pointer;">
                  <i class="icon icon-1 unicon-wikis fw-bold"></i>
                </a>

                <div v-if="showLanguages"
                  class="p-2 bg-white dark:bg-gray-300 dark:bg-opacity-15 border shadow-xs rounded w-100px language-dropdown">
                  <ul class="nav-y items-center gap-1 fw-medium rtl:items-end">
                    <li><a @click.prevent="selectLanguage('English')">English</a></li>
                    <li><a @click.prevent="selectLanguage('العربية')">العربية</a></li>
                    <li><a @click.prevent="selectLanguage('中文')">中文</a></li>
                  </ul>
                </div>
              </div>

              <a href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504"
                target="_blank"
                class="btn btn-md btn-primary dark:bg-tertiary dark:text-primary-700 border-0 px-3 d-none lg:d-inline-flex">
                <span>Download App</span>
              </a>
              <a class="d-block lg:d-none" href="#uc-menu-panel" data-uc-navbar-toggle-icon data-uc-toggle></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
}
</style>
