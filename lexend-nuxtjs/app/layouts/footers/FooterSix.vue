
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
  <footer id="uc-footer" class="uc-footer panel overflow-hidden ft-tertiary ">
    <div
      class="footer-outer py-4 lg:py-6 xl:py-10 bg-gradient-to-t from-tertiary-200 dark:from-primary-700 to-primary-25 dark:to-gray-900 dark:text-white">
      <div class="uc-footer-content">
        <div class="container">
          <div class="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div class="uc-footer-widgets panel">
              <div class="row child-cols-6 md:child-cols col-match g-4">
                <div class="col-12 md:col-6">
                  <div class="panel vstack items-start gap-3 xl:gap-4 md:max-w-1/2">
                    <div>
                      <NuxtLink to="/" style="width: 140px">
                        <img class="dark:d-none" src="/assets/images/common/logo-new-light.svg" alt="Lexend">
                        <img class="d-none dark:d-block" src="/assets/images/common/logo-new-dark.svg" alt="Lexend">
                      </NuxtLink>
                      <p class="lg:fs-5 mt-2 fw-medium">Design amazing digital experiences that create more happy in the
                        world.</p>
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
                        :class="`d-nones p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px ${lengModal ? 'uc-open' : ''}`">
                        <ul class="nav-y gap-1 fw-medium items-end">
                          <li v-for="(language, index) in languages" :key="index" @click="selectLanguage(language)">
                            <a style="cursor: pointer;">{{ language.label }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ul class="nav-y gap-2 fw-bold">
                    <li class="h6 fs-8 text-uppercase mb-2 opacity-60">Products</li>
                    <li><a href="#">Email Builder</a></li>
                    <li><a href="#">Landing Builder</a></li>
                    <li><a href="#">Reporting</a></li>
                    <li><a href="#">Chatbots</a></li>
                    <li><a href="#">AI Tools</a></li>
                  </ul>
                </div>
                <div>
                  <ul class="nav-y gap-2 fw-bold">
                    <li class="h6 fs-8 text-uppercase mb-2 opacity-60">Company</li>
                    <li><NuxtLink to="/page-about">About us</NuxtLink></li>
                    <li><NuxtLink to="/page-career">Careers</NuxtLink></li>
                    <li><NuxtLink to="/blog-sidebar">Press</NuxtLink></li>
                    <li><NuxtLink to="/blog-sidebar">News</NuxtLink></li>
                    <li><NuxtLink to="/page-contact">Contact</NuxtLink></li>
                  </ul>
                </div>
                <div class="d-none lg:d-block">
                  <ul class="nav-y gap-2 fw-bold">
                    <li class="h6 fs-8 text-uppercase mb-2 opacity-60">Resources</li>
                    <li><NuxtLink to="/blog-sidebar">Blog</NuxtLink></li>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="uc-footer-bottom panel vstack md:hstack gap-2 justify-between items-center text-center pt-4 lg:pt-6 border-top dark:text-white">
              <p>Lexend © {{ new Date().getFullYear() }}, All rights reserved.</p>
              <ul class="nav-x gap-1">
                <li><NuxtLink to="/page-privacy">Privacy policy</NuxtLink></li>
                <li class="mx-2 lg:mx-3"><a href="page-terms">Terms of use</a></li>
                <li><a href="#"
                    class="btn btn-sm btn-primary text-tertiary dark:bg-tertiary dark:text-primary p-0 w-32px h-32px rounded-circle"><i
                      class="icon icon-1 unicon-logo-facebook"></i></a></li>
                <li><a href="#"
                    class="btn btn-sm btn-primary text-tertiary dark:bg-tertiary dark:text-primary p-0 w-32px h-32px rounded-circle"><i
                      class="icon icon-1 unicon-logo-x-filled"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>