

 
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




// modal open  
const lengModal = ref(false)
const togglelengModal = () => {
  lengModal.value = !lengModal.value
}


// Newsletter Modal
const newsLetterModal = ref(false)
const togglerNewsLetterModal = () => {
  newsLetterModal.value = !newsLetterModal.value
}



// video popup 
import {useVideoModal} from "../../composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/Q5PG0rMXgvw?si=uhzrlIvzSWwOe_F3';



// Mobile Menu
const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}

 
</script>




<template>

  <header :class="`uc-header header-five uc-navbar-sticky-wrap z-999 uc-sticky ${isSticky ? 'headerFixed uc-sticky-below uc-sticky-fixed' : ''}`"
    data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    style="">
    <nav :class="`uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent ${isSticky ? 'uc-navbar-sticky' : ''}`"
      data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      style="transform: translateY(0px); opacity: 1;">
      <div class="uc-navbar-top bg-primary-700 text-white uc-dark d-none lg:d-block" style="--uc-nav-height: 32px">
        <div class="hide-on-sticky">
          <div class="container container-expand max-w-1440px">
            <div class="uc-navbar min-h-32px fs-8">
              <div class="uc-navbar-left" style="margin-right: 1.5rem">
                <ul class="uc-navbar-nav gap-2 fw-medium">
                  <li>
                    <a href="#">Customer stories</a>
                  </li>
                  <li>
                    <NuxtLink to="/page-terms">Terms and conditions</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/page-contact">
                      <span>Hire an Expert</span>
                      <i class="fs-8 unicon-arrow-up-right fw-bold ms-narrow rtl:-rotate-90"></i>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="uc-navbar-right">
                <div class="uc-navbar-item">
                  <a class="btn btn-xs p-0 fs-8 text-white" href="tel:01032701349">
                    <i class="icon-narrow unicon-phone"></i>
                    <span>Tel: +1 327 1349</span>
                  </a>
                </div>
                <div class="uc-navbar-item">
                  <a class="btn btn-xs p-0 fs-8 text-white" href="#chat">
                    <i class="icon-narrow unicon-chat-bot"></i>
                    <span>Live Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uc-navbar-main" style="--uc-nav-height: 80px">
        <div class="container container-expand max-w-1440px">
          <div class="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white"
            data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;">
            <div class="uc-navbar-left">
              <div class="uc-logo text-dark dark:text-white">
                <NuxtLink class="panel text-none" to="/" style="width: 140px">
                  <img class="dark:d-none" src="/assets/images/common/logo-light.svg" alt="Lexend">
                  <img class="d-none dark:d-block" src="/assets/images/common/logo-dark.svg" alt="Lexend">
                </NuxtLink>
              </div>
              <ul
                class="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4">
                <li class="has-dd-menu">
                  <a href="#" role="button" aria-haspopup="true">Products <span data-uc-navbar-parent-icon=""
                      class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12" viewBox="0 0 12 12">
                        <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                      </svg></span></a>
                  <div
                    class="uc-dropbar uc-full-dd uc-products uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top border-dark dark:border-white border-opacity-5 rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-drop"

                    data-uc-drop="mode: click; offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;"
                    style="width: 1905px; overflow-x: auto !important; max-width: 1905px; top: 80px; left: -248.5px !important;">
                    <div class="container max-w-xl">
                      <div class="uc-dropbar-inner after-bg">
                        <div class="row gx-5 col-match justify-between">
                          <div class="col-8">
                            <div class="panel vstack gap-4 py-4">
                              <div class="panel vstack gap-4">
                                <div class="hstack gap-4 justify-between">
                                  <h5 class="h5 fw-medium m-0">Discover our Products &amp; Solutions</h5>
                                  <NuxtLink to="/pages-services" class="btn btn-sm dark:text-white">
                                    <span>See what's new</span>
                                    <span class="cstack w-32px h-32px rounded-circle bg-primary-100 dark:bg-primary">
                                      <i class="icon-narrow unicon-arrow-right fw-bold rtl:rotate-180"></i>
                                    </span>
                                  </NuxtLink>
                                </div>
                                <div class="row child-cols-4 g-3">
                                  <div>
                                    <NuxtLink class="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/page-features">
                                      <span class="icon">
                                        <i class="icon-2 unicon-email text-gray-900 dark:text-white"></i>
                                      </span>
                                      <div class="panel">
                                        <h6 class="h6 fs-7 fw-medium mb-narrow">Email Template Builder</h6>
                                        <p class="fs-8 text-muted">Design personalized emails that convert</p>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/page-features">
                                      <span class="icon">
                                        <i class="icon-2 unicon-blog text-gray-900 dark:text-white"></i>
                                      </span>
                                      <div class="panel">
                                        <h6 class="h6 fs-7 fw-medium mb-narrow">Landing Page Builder</h6>
                                        <p class="fs-8 text-muted">Deliver the right message to the right user</p>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/page-features">
                                      <span class="icon">
                                        <i class="icon-2 unicon-increase-level text-gray-900 dark:text-white"></i>
                                      </span>
                                      <div class="panel">
                                        <h6 class="h6 fs-7 fw-medium mb-narrow">Reporting &amp; analytics</h6>
                                        <p class="fs-8 text-muted">Track sales &amp; campaign performance</p>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/page-features">
                                      <span class="icon">
                                        <i class="icon-2 unicon-magic-wand-filled text-gray-900 dark:text-white"></i>
                                      </span>
                                      <div class="panel">
                                        <h6 class="h6 fs-7 fw-medium mb-narrow">AI-Powered Tools</h6>
                                        <p class="fs-8 text-muted">Say hello to your AI growth assistant</p>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/page-features">
                                      <span class="icon">
                                        <i class="icon-2 unicon-store text-gray-900 dark:text-white"></i>
                                      </span>
                                      <div class="panel">
                                        <h6 class="h6 fs-7 fw-medium mb-narrow">E-commerce and retail</h6>
                                        <p class="fs-8 text-muted">Amplify the conversation across multiple channels</p>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/page-features">
                                      <span class="icon">
                                        <i class="icon-2 unicon-shopping-catalog text-gray-900 dark:text-white"></i>
                                      </span>
                                      <div class="panel">
                                        <h6 class="h6 fs-7 fw-medium mb-narrow">See all products</h6>
                                        <p class="fs-8 text-muted">See all our product and services offerings</p>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                              <div class="panel vstack gap-2">
                                <div class="hstack gap-4 justify-between">
                                  <h6 class="h6 m-0 fs-8 text-uppercase">Templates and integrations</h6>
                                  <NuxtLink to="/pages-integrations"
                                    class="btn btn-text h-24px p-0 fs-8 text-uppercase dark:text-white">
                                    <span>See +80 integrations</span>
                                  </NuxtLink>
                                </div>
                                <div class="row child-cols g-0">
                                  <div>
                                    <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/">
                                      <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                        <img src="/assets/images/demos/screenshots/index.jpg" alt="Home - 01">
                                      </div>
                                      <div class="panel p-1">
                                        <span class="fs-8 fw-medium m-0 text-gray-900 dark:text-white">SaaS</span>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/home-2">
                                      <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                        <img src="/assets/images/demos/screenshots/index-2.jpg" alt="Home - 02">
                                      </div>
                                      <div class="panel p-1">
                                        <span class="fs-8 fw-medium m-0 text-gray-900 dark:text-white">Startup</span>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/home-3">
                                      <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                        <img src="/assets/images/demos/screenshots/index-3.jpg" alt="Home - 03">
                                      </div>
                                      <div class="panel p-1">
                                        <span class="fs-8 fw-medium m-0 text-gray-900 dark:text-white">Software</span>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/home-4">
                                      <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                        <img src="/assets/images/demos/screenshots/index-4.jpg" alt="Home - 04">
                                      </div>
                                      <div class="panel p-1">
                                        <span class="fs-8 fw-medium m-0 text-gray-900 dark:text-white">Mobile
                                          Apps</span>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                  <div>
                                    <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                                      to="/home-5">
                                      <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                        <img src="/assets/images/demos/screenshots/index-5.jpg" alt="Home - 05">
                                      </div>
                                      <div class="panel p-1">
                                        <span class="fs-8 fw-medium m-0 text-gray-900 dark:text-white">Digital
                                          Agency</span>
                                      </div>
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800">
                              <div class="panel category-section">
                                <h6 class="h6 fs-8 text-uppercase">Professional solutions</h6>
                                <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                  <li>
                                    <a href="#">Service-based Business</a>
                                  </li>
                                  <li>
                                    <a href="#">Marketing Automation</a>
                                  </li>
                                  <li>
                                    <a href="#">Project Management Software</a>
                                  </li>
                                  <li>
                                    <a href="#">Cloud-Based Solutions</a>
                                  </li>
                                  <li>
                                    <a href="#">Start-ups</a>
                                  </li>
                                  <li>
                                    <a href="#">Developers</a>
                                  </li>
                                </ul>
                              </div>
                              <div class="panel category-section">
                                <h6 class="h6 fs-8 text-uppercase">Get started is Easy!</h6>
                                <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                  <li>
                                    <NuxtLink to="/page-contant">Hire an Expert</NuxtLink>
                                  </li>
                                  <li>
                                    <a href="#">Customer stories</a>
                                  </li>
                                  <li>
                                    <a href="#">Ressources</a>
                                  </li>
                                  <li>
                                    <NuxtLink to="/blog">Blog</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="/page-career">Career</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="/page-team">Team</NuxtLink>
                                  </li>
                                  <li>
                                    <NuxtLink to="/page-contact">Get in touch</NuxtLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="has-dd-menu">
                  <a href="#" role="button" aria-haspopup="true">Resources <span data-uc-navbar-parent-icon=""
                      class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12" viewBox="0 0 12 12">
                        <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                      </svg></span></a>
                  <div
                    class="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-0 overflow-hidden uc-drop"
                    data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
                    style="max-width: 1875px; top: 80px; left: 315px !important;">
                    <div class="row child-cols-6 g-0 col-match">
                      <div>
                        <ul class="uc-nav uc-navbar-dropdown-nav p-2">
                          <li>
                            <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-checkmark fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">To-Do List</b>
                                <span class="fw-normal">Managing multiple software and tools for different tasks.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-chart-pie fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">Reports</b>
                                <span class="fw-normal">The latest industry reports, updates and info.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-increase-level fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">Spreadsheets</b>
                                <span class="fw-normal">Suite of tools that cover all aspects of your business.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-chart-venn-diagram fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">Collaboration</b>
                                <span class="fw-normal">Assign tasks, share files, and communicate with your
                                  team.</span>
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
                              <h5 class="h6 m-0">Everything you need is right at your fingertips</h5>
                              <p class="fs-7 opacity-70">Say goodbye to the hassle of managing multiple software and
                                tools.</p>
                            </div>
                            <NuxtLink class="btn btn-sm btn-primary" to="/page-pricing">Start free trial</NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="has-dd-menu">
                  <a href="#" role="button" aria-haspopup="true">Learn <span data-uc-navbar-parent-icon=""
                      class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12" viewBox="0 0 12 12">
                        <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                      </svg></span></a>
                  <div
                    class="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-0 overflow-hidden uc-drop"
                    data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
                    style="top: 80px; left: 443.906px !important; max-width: 1875px;">
                    <div class="row child-cols-6 g-0 col-match">
                      <div>
                        <ul class="uc-nav uc-navbar-dropdown-nav p-2">
                          <li>
                            <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/blog">
                              <i class="icon-1 unicon-course fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">Blog</b>
                                <span class="fw-normal">Managing multiple software and tools for different tasks.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <a class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              
                            @click="togglerNewsLetterModal"                          
                           style="cursor: pointer"

                            data-uc-toggle="" role="button">
                              <i class="icon-1 unicon-email fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">Newsletter</b>
                                <span class="fw-normal">The latest industry reports, updates and info.</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-features">
                              <i class="icon-1 unicon-play fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">Video Tutorials</b>
                                <span class="fw-normal">Assign tasks, share files, and communicate with your
                                  team.</span>
                              </span>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul
                          class="uc-nav uc-navbar-dropdown-nav p-2 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                          <li>
                            <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-career">
                              <i class="icon-1 unicon-star fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">We're hiring</b>
                                <span class="fw-normal">Managing multiple software and tools for different tasks.</span>
                              </span>
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                              to="/page-contact">
                              <i class="icon-1 unicon-headset fw-bold text-primary dark:text-secondary"></i>
                              <span class="vstack gap-narrow mt-nnarrow">
                                <b class="fw-bold dark:text-white">Help Center</b>
                                <span class="fw-normal">The latest industry reports, updates and info.</span>
                              </span>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li><NuxtLink to="/page-pricing">Pricing</NuxtLink></li>
                <li><a href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504"
                    target="_blank">Buy now</a></li>
              </ul>
            </div>
            <div class="uc-navbar-right">
              <ul
                class="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4">
                <li class="d-inline-block">
                  <a style="cursor: pointer;" 
                  @click="togglelengModal"
                  class="hstack gap-1 text-none fw-medium" role="button" aria-haspopup="true">
                    <i class="icon icon-1 unicon-wikis"></i>
                    <span>En</span>
                  </a>
                  
                  <CommonLangModal :lengModal="lengModal" :togglelengModal="togglelengModal" />                 


                </li>
              </ul>
              <NuxtLink class="btn btn-md btn-primary rounded-default lg:px-3 text-none shadow-xs d-none lg:d-inline-flex"
                to="/page-contact">Send inquiry</NuxtLink>
              <a class="d-block lg:d-none uc-icon uc-navbar-toggle-icon" @click="toggleMenu" style="cursor: pointer;"
                data-uc-navbar-toggle-icon="" data-uc-toggle="" role="button" aria-label="Open menu"><svg width="20"
                  height="20" viewBox="0 0 20 20">
                   
                  <rect class="line-1" y="3" width="20" height="2"></rect>
                  <rect class="line-2" y="9" width="20" height="2"></rect>
                  <rect class="line-3" y="9" width="20" height="2"></rect>
                  <rect class="line-4" y="15" width="20" height="2"></rect>
                </svg></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <CommonNewaLetterModal :newsLetterModal="newsLetterModal" :togglerNewsLetterModal="togglerNewsLetterModal" />
  <CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />
  <CommonOffcanvus :toggleMenu="toggleMenu" :openMenu="openMenu" />



</template>