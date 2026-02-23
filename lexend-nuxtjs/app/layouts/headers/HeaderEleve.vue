<script setup>
import { ref, onMounted } from 'vue'

// Sticky header
const isSticky = ref(false)
let lastScrollTop = 0

const handleScroll = () => {
  const currentScroll = window.scrollY

  if (currentScroll === 0) {
    isSticky.value = false
  } else if (currentScroll < lastScrollTop) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


// Mobile Menu
const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}



// video popup 
import { useVideoModal } from "../../composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/Q5PG0rMXgvw?si=uhzrlIvzSWwOe_F3';




 

</script>


<template>
  <header
    :class="`uc-header header-twelve uc-navbar-sticky-wrap z-999 uc-sticky ${isSticky ? 'uc-sticky-below uc-sticky-fixed headerFixed' : ''}`"
    data-uc-sticky="start: 1200px; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky shadow-xs backdrop-2; cls-inactive: uc-navbar-transparent backdrop-0; end: !*;">
    <nav :class="`lg:mt-3 xl:mt-4 uc-navbar-float ft-tertiary z-1 ${isSticky ? 'uc-navbar-transparent' : ''}`"
      data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      style="transform: translateY(0px); opacity: 1;">
      <div class="uc-navbar-main" style="--uc-nav-height: 48px">
        <div class="container">
          <div
            :class="`uc-navbar uc-navbar-container min-h-80px lg:px-2 rounded-4 text-dark dark:text-white ${isSticky ? 'uc-navbar-sticky shadow-xs backdrop-2' : 'uc-navbar-transparent backdrop-0'} `"
            data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
            <div class="uc-navbar-left">
              <div class="uc-logo">
                <NuxtLink class="panel text-none" to="/">
                  <img class="dark:d-none" src="/assets/images/common/logo-15-light.svg" alt="Lexend">
                  <img class="d-none dark:d-block" src="/assets/images/common/logo-15-dark.svg" alt="Lexend">
                </NuxtLink>
              </div>
            </div>
            <div class="uc-navbar-right gap-1">
              <ul class="uc-navbar-nav fs-5 fw-medium m-0 ltr:me-2 rtl:ms-2 gap-0 d-none lg:d-flex">
                <li class="has-dd-menu">
                  <a href="#" class="gap-narrow" role="button" aria-haspopup="true">Products<i
                      class="icon-narrow fw-bold unicon-chevron-down"></i></a>
                  <div
                    class="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-2 hide-scrollbar rounded-1-5 overflow-hidden uc-drop"
                    data-uc-drop="mode: hover; offset: 8; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
                    style="top: 72px; left: 477.031px !important; max-width: 1875px;">
                    <div class="row child-cols-6 g-2 col-match">
                      <div>
                        <ul class="uc-nav uc-navbar-dropdown-nav">
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <span
                                class="cstack min-w-48px min-h-48px rounded-1-5 bg-gradient-45n from-quaternary to-primary-100 text-primary"><i
                                  class="icon-2 unicon-task-view"></i></span>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Tasks Automation</h6>
                                <span class="fs-8 fw-normal opacity-60">Managing multiple software and tools for
                                  different tasks.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <span
                                class="cstack min-w-48px min-h-48px rounded-1-5 bg-gradient-45n from-quaternary to-primary-100 text-primary"><i
                                  class="icon-2 unicon-chart-line-data"></i></span>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">AI-Powered Analytics</h6>
                                <span class="fs-8 fw-normal opacity-60">AI-Powered reports, analytics, spreadsheets,
                                  updates and info.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <span
                                class="cstack min-w-48px min-h-48px rounded-1-5 bg-gradient-45n from-quaternary to-primary-100 text-primary"><i
                                  class="icon-2 unicon-policy"></i></span>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Customer Insights</h6>
                                <span class="fs-8 fw-normal opacity-60">Suite of tools that cover all aspects of your
                                  business.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <span
                                class="cstack min-w-48px min-h-48px rounded-1-5 bg-gradient-45n from-quaternary to-primary-100 text-primary"><i
                                  class="icon-2 unicon-partnership"></i></span>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Team Collaboration</h6>
                                <span class="fs-8 fw-normal opacity-60">Assign tasks, share files, and communicate with
                                  your team.</span>
                              </span>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul class="uc-nav uc-navbar-dropdown-nav">
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <span
                                class="cstack min-w-48px min-h-48px rounded-1-5 bg-gradient-45n from-quaternary to-primary-100 text-primary"><i
                                  class="icon-2 unicon-checkmark"></i></span>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">To-Do List</h6>
                                <span class="fs-8 fw-normal opacity-60">Managing multiple software and tools for
                                  different tasks.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <span
                                class="cstack min-w-48px min-h-48px rounded-1-5 bg-gradient-45n from-quaternary to-primary-100 text-primary"><i
                                  class="icon-2 unicon-chart-pie"></i></span>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Reports</h6>
                                <span class="fs-8 fw-normal opacity-60">Our machine learning engine analyzes every
                                  interaction.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <span
                                class="cstack min-w-48px min-h-48px rounded-1-5 bg-gradient-45n from-quaternary to-primary-100 text-primary"><i
                                  class="icon-2 unicon-increase-level"></i></span>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Spreadsheets</h6>
                                <span class="fs-8 fw-normal opacity-60">Suite of tools that cover all aspects of your
                                  business.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <span
                                class="cstack min-w-48px min-h-48px rounded-1-5 bg-gradient-45n from-quaternary to-primary-100 text-primary"><i
                                  class="icon-2 unicon-chart-venn-diagram"></i></span>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Collaboration</h6>
                                <span class="fs-8 fw-normal opacity-60">Assign tasks, share files, and communicate with
                                  your team.</span>
                              </span>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="has-dd-menu">
                  <a href="#" class="gap-narrow" role="button" aria-haspopup="true">Resources<i
                      class="icon-narrow fw-bold unicon-chevron-down"></i></a>
                  <div
                    class="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-1-5 overflow-hidden uc-drop"
                    data-uc-drop="mode: hover; offset: 8; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
                    style="top: 72px; left: 606.219px !important; max-width: 1875px;">
                    <div class="row child-cols-6 g-0 col-match">
                      <div>
                        <ul class="uc-nav uc-navbar-dropdown-nav p-2">
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-checkmark text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">To-Do List</h6>
                                <span class="fs-8 fw-normal opacity-60">Managing multiple software and tools for
                                  different tasks.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-chart-pie text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Reports</h6>
                                <span class="fs-8 fw-normal opacity-60">The latest industry reports, updates and
                                  info.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-increase-level text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Spreadsheets</h6>
                                <span class="fs-8 fw-normal opacity-60">Suite of tools that cover all aspects of your
                                  business.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-chart-venn-diagram text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <h6 class="h6 m-0 dark:text-white">Collaboration</h6>
                                <span class="fs-8 fw-normal opacity-60">Assign tasks, share files, and communicate with
                                  your team.</span>
                              </span>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div class="vstack gap-2 p-3 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                          <div class="featured-image panel" data-uc-lightbox="video-autoplay: true;">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/template/login.webp" alt="Image">
                            </figure>
                            <button
                              class="btn btn-md btn-alt-primary p-0 w-32px h-32px position-absolute bottom-0 ltr:start-0 rtl:end-0 m-2"><i
                                class="icon-1 unicon-play-filled-alt"></i></button>
                            <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }"
                              data-caption="Easy project managment of any complexity."
                              data-attrs="width: 640; height: 480;" class="position-cover" role="button"></a>
                          </div>
                          <div class="vstack justify-between gap-2">
                            <div class="vstack gap-1">
                              <h6 class="h6 xl:h5 m-0">Everything you need is right at your fingertips</h6>
                              <p class="fs-7 opacity-70">Say goodbye to the hassle of managing multiple software and
                                tools.</p>
                            </div>
                            <NuxtLink class="btn btn-md btn-primary fs-6 px-4 rounded-2 d-none lg:d-flex"
                              to="/page-pricing">Start free trial</NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <NuxtLink to="/page-pricing">Pricing</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/page-about">About</NuxtLink>
                  
                </li>
              </ul>
              <ul class="uc-navbar-nav gap-3 xl:gap-4 fw-bold d-none xl:d-flex">
                <li class="d-inline-block">
                  <a href="#" class="hstack gap-1 text-none fw-medium ft-secondary bg-primary-50 dark:bg-gray-800"
                    role="button" aria-haspopup="true">
                    <i class="icon icon-1 unicon-wikis"></i>
                    <span class="fs-6 fw-bold">En</span>
                  </a>




                  <div class="py-1 bg-white dark:bg-gray-800 w-200px rounded-1-5 shadow-sm uc-drop"
                    data-uc-drop="mode: hover; offset: 8; pos: top-center; boundary: !.uc-navbar-container; animation: uc-animation-slide-top-small; duration: 150;"
                    style="max-width: 1875px; top: 72px; left: 959.422px;">


                    <ul class="nav-y gap-0 fs-7">
                      <li><a href="#en"
                          class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img
                            class="w-20px rounded-1 me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/en.svg"
                            alt="English">English</a></li>
                      <li><a href="#fr"
                          class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img
                            class="w-20px rounded-1 me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/fr.svg"
                            alt="French">French</a></li>
                      <li><a href="#ge"
                          class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img
                            class="w-20px rounded-1 me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/ge.svg"
                            alt="Germany">Germany</a></li>
                      <li><a href="#sp"
                          class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img
                            class="w-20px rounded-1 me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/sp.svg"
                            alt="Spain">Spain</a></li>
                      <li><a href="#ar"
                          class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img
                            class="w-20px rounded-1 me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/ar.svg"
                            alt="العربية">Arabic (العربية)</a></li>
                      <li><a href="#ch"
                          class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img
                            class="w-20px rounded-1 me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/ch.svg"
                            alt="中文">Chinese (中文)</a></li>
                    </ul>




                  </div>
                </li>
              </ul>
              <NuxtLink class="btn btn-md btn-primary fs-6 px-4 rounded-2 d-none lg:d-flex" style="text-decoration: none !important;" to="/page-contact-2">
                <span>Book a demo</span>
              </NuxtLink>
              <a @click="toggleMenu" style="cursor: pointer;"
                class="uc-menu-trigger btn btn-md btn-primary w-40px h-40px rounded-circle p-0 d-inline-flex lg:d-none"
                data-uc-toggle="" role="button"></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <CommonVideoModal />
  <CommonOffcanvus :toggleMenu="toggleMenu" :openMenu="openMenu" />



</template>