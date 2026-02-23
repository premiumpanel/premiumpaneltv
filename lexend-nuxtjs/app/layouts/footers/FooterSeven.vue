<script setup>

import { ref } from "vue";

const lengModal = ref(false);
const selectedLanguage = ref("English"); // Default selected
const languages = ref([
  { label: "English", code: "en" },
  { label: "العربية", code: "ar" },
  { label: "中文", code: "ch" },
  { label: "Spanish", code: "sp" },
]);

const togglelengModal = () => {
  lengModal.value = !lengModal.value;
};

const selectLanguage = (language) => {
  selectedLanguage.value = language.label;
  lengModal.value = false;
};

</script>

<template>
  <footer id="uc-footer" class="uc-footer panel overflow-hidden uc-dark uc-dark">
    <div class="footer-outer py-6 lg:py-8 xl:py-9 bg-tertiary-700 text-white text-opacity-70 m-2 mt-0 rounded-2">
      <div class="uc-footer-content">
        <div class="container xl:max-w-xl">
          <div class="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div class="uc-footer-widgets panel">
              <div class="row child-cols-6 md:child-cols col-match g-4">
                <div class="col-12 lg:col-6">
                  <div class="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                    <div>
                      <NuxtLink class="panel text-none" to="/" style="width: 140px;">
                        <img class="dark:d-none" src="/assets/images/common/logo-8-light.svg" alt="Lexend">
                        <img class="d-none dark:d-block" src="/assets/images/common/logo-8-dark.svg" alt="Lexend">
                      </NuxtLink>
                      <p class="mt-2">Design amazing digital experiences that create more happy in the world.</p>
                    </div> 

                     <div class="d-inline-block">
                      <a style="cursor: pointer;" @click="togglelengModal" class="hstack gap-1 text-none fw-medium">
                        <i class="icon icon-1 unicon-earth-filled"></i>
                        <span>{{ selectedLanguage }}</span>
                        <span class="uc-icon uc-drop-parent-icon">
                          <svg width="12" height="12" viewBox="0 0 12 12">
                            <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5">
                            </polyline>
                          </svg>
                        </span>
                      </a>
                      <div v-if="lengModal"
                        :class="`p-2 bg-white dark:bg-tertiary-600 shadow-xs rounded w-150px ${lengModal ? 'uc-open' : ''}`">
                        <ul class="nav-y gap-1 fw-medium rtl:items-end">
                          <li v-for="(language, index) in languages" :key="index" @click="selectLanguage(language)">
                            <a style="cursor: pointer;">{{ language.label }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>


                  </div>
                </div>
                <div>
                  <ul class="nav-y gap-2 fw-medium text-white">
                    <li>
                      <NuxtLink to="#how_it_works">How it works</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#features">Features</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#key_features">Key Goods</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#builder_elements">Pro Elements</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#pricing">Pricing</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#">Changelog</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="nav-y gap-2 fw-medium text-white">
                    <li>
                      <NuxtLink to="/page-about">About us</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-career">Careers</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#">Press</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/blog">News</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#">Media kit</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-contacct">Contact</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div class="d-none lg:d-block">
                  <ul class="nav-y gap-2 fw-medium text-white">
                    <li>
                      <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#">Newsletter</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#">Events</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#">Help center</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#">Tutorials</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="#">Support</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 mt-6 border-top">
              <p>Lexend © {{ new Date().getFullYear() }}, All rights reserved.</p>
              <ul class="nav-x justify-center gap-2">
                <li><a class="duration-150 hover:text-primary" href="https://www.linkedin.com/"><i
                      class="icon icon-2 unicon-logo-linkedin"></i></a></li>
                <li><a class="duration-150 hover:text-primary" href="https://www.facebook.com/"><i
                      class="icon icon-2 unicon-logo-facebook"></i></a></li>
                <li><a class="duration-150 hover:text-primary" href="https://www.x.com/"><i
                      class="icon icon-2 unicon-logo-x-filled"></i></a></li>
                <li><a class="duration-150 hover:text-primary" href="https://www.instagram.com/"><i
                      class="icon icon-2 unicon-logo-instagram"></i></a></li>
                <li><a class="duration-150 hover:text-primary" href="https://www.youtube.com/"><i
                      class="icon icon-2 unicon-logo-youtube"></i></a></li>
                <li><a class="duration-150 hover:text-primary" href="https://www.dribbble.com/"><i
                      class="icon icon-2 unicon-logo-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>