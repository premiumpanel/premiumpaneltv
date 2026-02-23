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
  <footer id="uc-footer" class="uc-footer panel overflow-hidden uc-dark ">
    <div class="footer-outer pb-4 lg:pb-6 dark:bg-gray-900 dark:text-white">
      <div class="uc-footer-cta py-4 sm:py-6 border-bottom">
        <div class="container max-w-xl">
          <div
            class="uc-footer-inner panel vstack lg:hstack justify-between items-center text-center ltr:lg:text-start rtl:lg:text-end gap-3 sm:gap-4">
            <div class="vstack gap-2">
              <h2 class="h3 xl:h2 m-0">Sign up now or never!</h2>
              <p class="fs-6 xl:fs-4 text-dark dark:text-white text-opacity-70 dark:text-white">Stay up to date with the
                latest news, announcements, and articles.</p>
            </div>
            <div class="panel w-100 sm:w-350px xl:w-450px">
              <form class="row child-cols g-1">
                <div>
                  <div class="form-group inline-block">
                    <input type="email" class="form-control rounded-default h-48px w-full text-black bg-white"
                      placeholder="Your email.." required>
                  </div>
                </div>
                <div class="col-12 sm:col-auto">
                  <button class="btn btn-md btn-primary rounded-default w-full h-48px text-white">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="uc-footer-content pt-6 lg:pt-8">
        <div class="container max-w-xl">
          <div class="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div class="uc-footer-widgets panel">
              <div class="row child-cols-6 md:child-cols col-match g-4">
                <div class="col-12 lg:col-4">
                  <div class="panel vstack items-start gap-3 xl:gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div>
                      <NuxtLink to="/" style="width: 140px">
                        <img class="text-primary" src="/assets/images/common/logo-dark.svg" alt="Lexend">
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
                  <ul class="nav-y gap-2 fw-medium">
                    <li>
                      <NuxtLink to="/page-about" class="fs-7 dark:text-gray-300">Product</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-pricing">Overview</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-features">Features</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-integrations">Solutions</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-career">Tutorials</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-contact">Pricing</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-contact-2">Releases</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="nav-y gap-2 fw-medium">
                    <li>
                      <NuxtLink to="/shop" class="fs-7 dark:text-gray-300">Company</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-sidebar">About us</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-product-detail">Careers</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-product-detail-2">Press</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">News</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-checkout">Media kit</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-order">Contact</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="nav-y gap-2 fw-medium">
                    <li>
                      <NuxtLink to="/request-demo" class="fs-7 dark:text-gray-300">Resources</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/sign-in">Blog</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/sign-in-2">Newsletter</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/sign-up">Events</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/sign-up-2">Help center</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/reset-password">Tutorials</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/reset-password-2">Support</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="nav-y gap-2 fw-medium">
                    <li>
                      <NuxtLink to="/blog" class="fs-7 dark:text-gray-300">Social</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/blog-details">Twitter</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-faq">LinkedIn</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/404">Facebook</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/coming-soon">GitHub</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-terms">AngelList</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-privacy">Dribbble</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div class="d-none lg:d-block">
                  <ul class="nav-y gap-2 fw-medium">
                    <li>
                      <NuxtLink to="/blog" class="fs-7 dark:text-gray-300">Legal</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/blog-details">Terms</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-faq">Privacy</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/404">Cookies</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/coming-soon">Licenses</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-terms">Settings</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-privacy">Contact</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 border-top dark:text-white">
              <p class="opacity-60">Lexend © {{ new Date().getFullYear() }}, All rights reserved.</p>
              <ul class="nav-x justify-center gap-2 text-gray-300">
                <li><a href="https://www.linkedin.com/"><i class="icon icon-2 unicon-logo-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/"><i class="icon icon-2 unicon-logo-facebook"></i></a></li>
                <li><a href="https://www.x.com/"><i class="icon icon-2 unicon-logo-x-filled"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="icon icon-2 unicon-logo-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/"><i class="icon icon-2 unicon-logo-youtube"></i></a></li>
                <li><a href="https://www.dribbble.com/"><i class="icon icon-2 unicon-logo-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>