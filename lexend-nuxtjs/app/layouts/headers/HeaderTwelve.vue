<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue'


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

 

// video popup 
import { useVideoModal } from "../../composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/Q5PG0rMXgvw?si=uhzrlIvzSWwOe_F3';



// Mobile Menu
const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}


</script>


<template>
  <header
    :class="`uc-header header-thirteen uc-navbar-sticky-wrap z-999 uc-sticky ${isSticky ? 'headerFixed uc-sticky-below uc-sticky-fixed' : ''}`"
    data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    style="">
    <nav
      :class="`uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent ${isSticky ? 'uc-navbar-sticky' : ''}`"
      data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      style="transform: translateY(0px); opacity: 1;">
      <div class="uc-navbar-main" style="--uc-nav-height: 100px">
        <div class="container">
          <div class="uc-navbar min-h-64px lg:min-h-96px text-dark dark:text-white"
            data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
            <div class="uc-navbar-left">
              <div class="uc-logo ltr:ms-1 rtl:me-1">
                <NuxtLink class="panel text-none" to="/" style="width: 140px;">
                  <img class="dark:d-none" src="/assets/images/common/logo-13-light.svg" alt="Lexend">
                  <img class="d-none dark:d-block" src="/assets/images/common/logo-13-dark.svg" alt="Lexend">
                </NuxtLink>
              </div>
            </div>
            <div class="uc-navbar-center">
              <ul class="uc-navbar-nav fw-medium gap-3 xl:gap-5 d-none lg:d-flex" style="--uc-nav-height: 100px">
                <li class="has-dd-menu">
                  <a href="#" class="gap-1" role="button" aria-haspopup="true">Solutions<span
                      data-uc-navbar-parent-icon="" class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12"
                        viewBox="0 0 12 12">
                        <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                      </svg></span></a>
                  <div
                    class="uc-navbar-dropdown uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-drop"
                    data-uc-drop=" offset: 0; boundary: true;  stretch: x; animation: uc-animation-slide-top-small; duration: 150;"
                    style="overflow-x: auto !important; top: 100px !important; left: -692.555px !important; width: 1905px !important; max-width: 1905px !important;">
                    <div class="uc-dropbar-content">
                      <div class="container">
                        <div class="uc-dropbar-inner after-bg">
                          <div class="row gx-5 col-match justify-between">
                            <div class="col-8">
                              <div class="panel vstack gap-4 py-4">
                                <div class="vstack gap-narrow flex-none">
                                  <h5 class="h5 xl:h4 fw-medium m-0">Workflow quick-start automation guide</h5>
                                  <p class="fs-7 text-gray-300">How Lexend can help you automate your work</p>
                                </div>
                                <div class="row child-cols-4 gx-4 col-match justify-between">
                                  <div>
                                    <h6 class="h6 mb-3"><i
                                        class="fs-7 unicon-glyph-square-fill fw-bold ltr:me-narrow rtl:ms-narrow"></i>
                                      Automation</h6>
                                    <ul class="uc-nav uc-navbar-dropdown-nav vstack flex-auto gap-2">
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-checkmark fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">To-Do List</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">Managing multiple
                                              software and tools for different tasks.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-chart-pie fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Reports</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">The latest industry
                                              reports, updates and info.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-increase-level fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Spreadsheets</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">Suite of tools that
                                              cover all aspects of your business.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 class="h6 mb-3"><i
                                        class="fs-7 unicon-glyph-circle-fill fw-bold ltr:me-narrow rtl:ms-narrow"></i>
                                      Teaming</h6>
                                    <ul class="uc-nav uc-navbar-dropdown-nav vstack flex-auto gap-2">
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-chart-venn-diagram fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Collaboration</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">Assign tasks, share
                                              files, and communicate with your team.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-chat fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Chatbots</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">Assign tasks, share
                                              files, and communicate with your team.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-checkmark fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">To-Do List</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">Managing multiple
                                              software and tools for different tasks.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 class="h6 mb-3"><i
                                        class="fs-7 unicon-glyph-caution fw-bold ltr:me-narrow rtl:ms-narrow"></i> Use
                                      Case</h6>
                                    <ul class="uc-nav uc-navbar-dropdown-nav vstack flex-auto gap-2">
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-chart-pie fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Reports</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">The latest industry
                                              reports, updates and info.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-increase-level fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Spreadsheets</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">Suite of tools that
                                              cover all aspects of your business.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i
                                              class="icon-1 unicon-chart-venn-diagram fw-bold text-primary dark:text-quaternary"></i>
                                          </div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Collaboration</b>
                                            <span class="fs-8 text-gray-400 dark:text-gray-300">Assign tasks, share
                                              files, and communicate with your team.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start">
                                <div class="row child-cols gx-2">
                                  <div class="col-4">
                                    <div class="featured-image panel" data-uc-lightbox="video-autoplay: true;">
                                      <figure
                                        class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                          src="/assets/images/template/login.webp" alt="Image">
                                      </figure>
                                      <button
                                        class="btn btn-md btn-alt-primary bg-tertiary p-0 w-32px h-32px position-absolute bottom-0 ltr:start-0 rtl:end-0 m-1"><i
                                          class="icon-narrow unicon-play-filled-alt text-primary"></i></button>
                                      <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }"
                                        data-caption="Easy project managment of any complexity."
                                        data-attrs="width: 640; height: 480;" class="position-cover" role="button"></a>
                                    </div>
                                  </div>
                                  <div>
                                    <div class="vstack gap-1">
                                      <span class="fs-6 fw-bold m-0 text-dark dark:text-white">Say goodbye to the hassle
                                        of multi-tasks</span>
                                      <p class="fs-7">Managing multiple tasks with AI automation.</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="panel category-section">
                                  <h5 class="h6">Start with ease!</h5>
                                  <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                    <li>
                                      <NuxtLink to="/page-contact">Hire an Expert</NuxtLink>
                                    </li>
                                    <li>
                                      <a href="#">Customer stories</a>
                                    </li>
                                    <li>
                                      <a href="#">Resources</a>
                                    </li>
                                    <li>
                                      <NuxtLink to="/blog-sidebar">Blog</NuxtLink>
                                    </li>
                                    <li>
                                      <NuxtLink to="/page-career">Career</NuxtLink>
                                    </li>
                                    <li>
                                      <NuxtLink to="/page-contact">Help Center</NuxtLink>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white">
                      <div class="container">
                        <ul class="nav-x gap-4 fs-8 fw-medium">
                          <li>
                            <a href="#"><i class="fs-8 unicon-api fw-bold"></i><span
                                class="border-bottom hover:border-primary duration-150">Explore Apps</span></a>
                          </li>
                          <li>
                            <a href="#"><i class="fs-8 unicon-airplay fw-bold"></i><span
                                class="border-bottom hover:border-primary duration-150">AI Solutions</span></a>
                          </li>
                          <li>
                            <a href="#"><i class="fs-8 unicon-cloud-lightning fw-bold"></i><span
                                class="border-bottom hover:border-primary duration-150">Join Lexend Early
                                Access</span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="has-dd-menu">
                  <a href="#" class="gap-1" role="button" aria-haspopup="true">Products <span
                      data-uc-navbar-parent-icon="" class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12"
                        viewBox="0 0 12 12">
                        <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                      </svg></span></a>
                  <div
                    class="uc-navbar-dropdown uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-drop"
                    data-uc-drop=" offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;"
                    style="overflow-x: auto !important; top: 100px !important; left: -692.555px !important; width: 1905px !important; max-width: 1905px !important;">
                    <div class="uc-dropbar-content">
                      <div class="container">
                        <div class="uc-dropbar-inner after-bg">
                          <div class="row gx-5 col-match justify-between">
                            <div class="col-8">
                              <div class="panel vstack gap-4 py-4">
                                <div class="panel vstack gap-4">
                                  <div class="vstack gap-narrow">
                                    <h5 class="h5 xl:h4 fw-medium m-0">Lexend's AI Automation Platform</h5>
                                    <p class="fs-7 text-gray-300">AI-Powered Automation across 500+ apps</p>
                                  </div>
                                  <div class="row child-cols-6 gx-6">
                                    <div class="vstack gap-3">
                                      <h6 class="h6 m-0"><i
                                          class="fs-7 unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow"></i> Products
                                      </h6>
                                      <div>
                                        <NuxtLink
                                          class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="icon rounded dark:bg-white">
                                            <img class="w-32px" src="/assets/images/custom-icons/icon-01.svg"
                                              alt="icon">
                                          </span>
                                          <div class="panel">
                                            <span class="fs-7 fw-medium mb-narrow text-inherit">Email Template
                                              Builder</span>
                                            <p class="fs-8 text-muted">Design personalized emails that convert</p>
                                          </div>
                                        </NuxtLink>
                                      </div>
                                      <div>
                                        <NuxtLink
                                          class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="icon rounded dark:bg-white">
                                            <img class="w-32px" src="/assets/images/custom-icons/icon-02.svg"
                                              alt="icon">
                                          </span>
                                          <div class="panel">
                                            <span class="fs-7 fw-medium mb-narrow">Landing Page Builder</span>
                                            <p class="fs-8 text-muted">Deliver the right message to the right user</p>
                                          </div>
                                        </NuxtLink>
                                      </div>
                                      <div>
                                        <NuxtLink
                                          class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="icon rounded dark:bg-white">
                                            <img class="w-32px" src="/assets/images/custom-icons/icon-03.svg"
                                              alt="icon">
                                          </span>
                                          <div class="panel">
                                            <span class="fs-7 fw-medium mb-narrow">Reporting &amp; analytics</span>
                                            <p class="fs-8 text-muted">Track sales &amp; campaign performance</p>
                                          </div>
                                        </NuxtLink>
                                      </div>
                                      <div>
                                        <NuxtLink
                                          class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="icon rounded dark:bg-white">
                                            <img class="w-32px" src="/assets/images/custom-icons/icon-07.svg"
                                              alt="icon">
                                          </span>
                                          <div class="panel">
                                            <span class="fs-7 fw-medium mb-narrow">Chatbots, Free forever</span>
                                            <p class="fs-8 text-muted">Track sales &amp; campaign performance</p>
                                          </div>
                                        </NuxtLink>
                                      </div>
                                      <div>
                                        <NuxtLink
                                          class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="border-bottom hover:border-primary duration-150">View all
                                            products</span>
                                          <i
                                            class="d-inline-flex fs-8 unicon-arrow-up-right fw-bold rtl:rotate-y-180"></i>
                                        </NuxtLink>
                                      </div>
                                    </div>
                                    <div class="vstack gap-3">
                                      <h6 class="h6 m-0"><i
                                          class="fs-7 unicon-gamification fw-bold ltr:me-narrow rtl:ms-narrow"></i>
                                        Professional Solutions</h6>
                                      <div>
                                        <NuxtLink
                                          class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="icon rounded dark:bg-white">
                                            <img class="w-32px" src="/assets/images/custom-icons/icon-04.svg"
                                              alt="icon">
                                          </span>
                                          <div class="panel">
                                            <span class="fs-7 fw-medium mb-narrow">AI-Powered Tools</span>
                                            <p class="fs-8 text-muted">Say hello to your AI growth assistant</p>
                                          </div>
                                        </NuxtLink>
                                      </div>
                                      <div>
                                        <NuxtLink
                                          class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="icon rounded dark:bg-white">
                                            <img class="w-32px" src="/assets/images/custom-icons/icon-05.svg"
                                              alt="icon">
                                          </span>
                                          <div class="panel">
                                            <span class="fs-7 fw-medium mb-narrow">E-commerce and retail</span>
                                            <p class="fs-8 text-muted">Amplify the conversation across channels</p>
                                          </div>
                                        </NuxtLink>
                                      </div>
                                      <div>
                                        <NuxtLink
                                          class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="icon rounded dark:bg-white">
                                            <img class="w-32px" src="/assets/images/custom-icons/icon-06.svg"
                                              alt="icon">
                                          </span>
                                          <div class="panel">
                                            <span class="fs-7 fw-medium mb-narrow">Large Community</span>
                                            <p class="fs-8 text-muted">Our services offerings</p>
                                          </div>
                                        </NuxtLink>
                                      </div>
                                      <div>
                                        <NuxtLink
                                          class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="icon rounded dark:bg-white">
                                            <img class="w-32px" src="/assets/images/custom-icons/icon-08.svg"
                                              alt="icon">
                                          </span>
                                          <div class="panel">
                                            <span class="fs-7 fw-medium mb-narrow">AI-Powered Automation</span>
                                            <p class="fs-8 text-muted">Our services offerings</p>
                                          </div>
                                        </NuxtLink>
                                      </div>
                                      <div>
                                        <NuxtLink
                                          class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                          to="/page-features">
                                          <span class="border-bottom hover:border-primary duration-150">View all
                                            solutions</span>
                                          <i
                                            class="d-inline-flex fs-8 unicon-arrow-up-right fw-bold rtl:rotate-y-180"></i>
                                        </NuxtLink>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start">
                                <div class="panel category-section">
                                  <h5 class="h6">Get started is Easy!</h5>
                                  <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                    <li>
                                      <NuxtLink to="/page-contact">Hire an Expert</NuxtLink>
                                    </li>
                                    <li>
                                      <a href="#">Customer stories</a>
                                    </li>
                                    <li>
                                      <a href="#">Resources</a>
                                    </li>
                                    <li>
                                      <NuxtLink to="/blog-sidebar">Blog</NuxtLink>
                                    </li>
                                    <li>
                                      <NuxtLink to="/page-career">Career</NuxtLink>
                                    </li>
                                    <li>
                                      <NuxtLink to="/page-contact">Help Center</NuxtLink>
                                    </li>
                                  </ul>
                                </div>
                                <div class="panel category-section">
                                  <h5 class="h6">Terms and privacy</h5>
                                  <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                    <li>
                                      <NuxtLink to="/page-terms">Terms of service</NuxtLink>
                                    </li>
                                    <li>
                                      <NuxtLink to="/page-privacy">Privacy Policy</NuxtLink>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white">
                      <div class="container">
                        <ul class="nav-x gap-4 fs-8 fw-medium">
                          <li>
                            <a href="#"><i class="fs-8 unicon-api fw-bold"></i><span
                                class="border-bottom hover:border-primary duration-150">Explore Apps</span></a>
                          </li>
                          <li>
                            <a href="#"><i class="fs-8 unicon-airplay fw-bold"></i><span
                                class="border-bottom hover:border-primary duration-150">AI Solutions</span></a>
                          </li>
                          <li>
                            <a href="#"><i class="fs-8 unicon-cloud-lightning fw-bold"></i><span
                                class="border-bottom hover:border-primary duration-150">Join Lexend Early
                                Access</span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <NuxtLink to="/blog-sidebar">Resources</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/page-pricing">Pricing</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/page-about">About</NuxtLink>
                </li>
              </ul>
            </div>
            <div class="uc-navbar-right">
              <ul
                class="uc-navbar-nav gap-3 xl:gap-4 fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4 d-none xl:d-flex">
                <li class="d-inline-block">
                  <a href="#" class="hstack gap-1 text-none fw-medium" role="button" aria-haspopup="true">
                    <i class="icon icon-1 unicon-wikis"></i>
                    <span>En</span>
                  </a>
                  <div class="w-200px py-1 bg-white dark:bg-gray-700 shadow-xs rounded-2 uc-drop"
                    data-uc-drop="mode: click; offset: 0; pos: top-right; boundary: !.uc-navbar-container; animation: uc-animation-slide-top-small; duration: 150;">
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
              <NuxtLink
                class="btn btn-md fs-6 lg:px-3 rounded-pill text-white dark:text-dark bg-dark dark:bg-white hover:bg-opacity-90 dark:hover:bg-opacity-80 d-none lg:d-flex"
                to="/page-pricing-2">
                <span>Start a free trial</span>
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