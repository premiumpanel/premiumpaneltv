 

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Form Modal
const formModal = ref(false)
const toggleFormModal = () => {
  formModal.value = !formModal.value
}

// Newsletter Modal
const newsLetterModal = ref(false)
const togglerNewsLetterModal = () => {
  newsLetterModal.value = !newsLetterModal.value
}

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
  <header :class="`uc-header header-four uc-navbar-sticky-wrap z-999 uc-sticky ${isSticky ? 'headerFixed uc-sticky-below uc-sticky-fixed' : ''}`" style="--uc-nav-height: 80px;"
    data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
    <nav :class="`uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent ${isSticky ? 'uc-navbar-sticky' : ''}`"
      data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      style="transform: translateY(0px); opacity: 1;">
      <div class="container max-w-xl">
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
                <a href="#" role="button" aria-haspopup="true">Features <span data-uc-navbar-parent-icon=""
                    class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12" viewBox="0 0 12 12">
                      <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                    </svg></span></a>
                <div
                  class="uc-navbar-dropdown ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
                  data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;"
                  style="width: 1248px; overflow-x: auto; max-width: 1875px; top: 80px; left: 0px;">
                  <div class="row g-0 col-match uc-grid uc-grid-stack" data-uc-grid="">
                    <div class="col-7 uc-first-column">
                      <div class="panel p-3">
                        <h6 class="h6 ms-3">Main pages</h6>
                        <div class="row child-cols-3 g-0">
                          <div>
                            <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                              to="/">
                              <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <img src="/assets/images/demos/screenshots/index.jpg" alt="Home - 01">
                              </div>
                              <div class="panel p-1">
                                <h5 class="fs-7 m-0">Home 1</h5>
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
                                <h5 class="fs-7 m-0">Home 2</h5>
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
                                <h5 class="fs-7 m-0">Home 3</h5>
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
                                <h5 class="fs-7 m-0">Home 4</h5>
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
                                <h5 class="fs-7 m-0">Home 5</h5>
                              </div>
                            </NuxtLink>
                          </div>
                          <div>
                            <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                              to="/home-6">
                              <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <img src="/assets/images/demos/screenshots/index-6.jpg" alt="Home - 06">
                              </div>
                              <div class="panel p-1">
                                <h5 class="fs-7 m-0">Home 6</h5>
                              </div>
                            </NuxtLink>
                          </div>
                          <div>
                            <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                              to="/home-7">
                              <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <img src="/assets/images/demos/screenshots/index-7.jpg" alt="Home - 07">
                              </div>
                              <div class="panel p-1">
                                <h5 class="fs-7 m-0">Home 7</h5>
                              </div>
                            </NuxtLink>
                          </div>
                          <div>
                            <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                              to="/home-8">
                              <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <img src="/assets/images/demos/screenshots/index-8.jpg" alt="Home - 08">
                              </div>
                              <div class="panel p-1">
                                <h5 class="fs-7 m-0">Home 8</h5>
                              </div>
                            </NuxtLink>
                          </div>
                          <div>
                            <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                              to="/home-9">
                              <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <img src="/assets/images/demos/screenshots/index-9.jpg" alt="Home - 09">
                              </div>
                              <div class="panel p-1">
                                <h5 class="fs-7 m-0">Home 9</h5>
                              </div>
                            </NuxtLink>
                          </div>


                        

                          <div>

                            <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                              to="/home-10">
                              <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <img src="/assets/images/demos/screenshots/index-10.jpg" alt="Home - 10">
                              </div>
                              <div class="panel p-1">
                                <h5 class="fs-7 m-0">Home 10</h5>
                              </div>
                            </NuxtLink>
                          </div>
                          <div>
                            <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                              to="/home-11">
                              <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <img src="/assets/images/demos/screenshots/index-11.jpg" alt="Home - 11">
                              </div>
                              <div class="panel p-1">
                                <h5 class="fs-7 m-0">Home 11</h5>
                              </div>
                            </NuxtLink>
                          </div>
                          <div>
                            <NuxtLink class="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                              to="/home-12">
                              <div class="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <img src="/assets/images/demos/screenshots/index-12.jpg" alt="Home - 12">
                              </div>
                              <div class="panel p-1">
                                <h5 class="fs-7 m-0">Home 12</h5>
                              </div>
                            </NuxtLink>
                          </div>
 




                        </div>
                      </div>
                    </div>
                    <div class="col-5">
                      <div class="panel p-3 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                        <h6 class="h6 ms-3">Other pages</h6>
                        <div class="row child-cols-6 g-0">
                          <div>
                            <ul class="uc-nav uc-navbar-dropdown-nav">
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/page-career">
                                  <i class="icon-1 unicon-wikis fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Career</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/page-career-detail">
                                  <i class="icon-1 unicon-wikis fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Job details</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/page-contact">
                                  <i class="icon-1 unicon-wikis fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Contact</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/page-contact-2">
                                  <i class="icon-1 unicon-wikis fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Contact v2</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/blog">
                                  <i class="icon-1 unicon-course fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Blog</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/blog-details">
                                  <i class="icon-1 unicon-course fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Blog details</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/blog-details-2">
                                  <i class="icon-1 unicon-course fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Blog details v2</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/blog-details-3">
                                  <i class="icon-1 unicon-course fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Blog details v3</b>
                                  </span>
                                </NuxtLink>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul class="uc-nav uc-navbar-dropdown-nav">
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/home-2">
                                  <i class="icon-1 unicon-unlocked fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Sign up</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/home-3">
                                  <i class="icon-1 unicon-unlocked fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Sign in</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/home-4">
                                  <i class="icon-1 unicon-unlocked fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Reset Password</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/shop">
                                  <i class="icon-1 unicon-shopping-cart fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Shop</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/shop-cart">
                                  <i class="icon-1 unicon-shopping-cart fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Cart</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/shop-checkout">
                                  <i class="icon-1 unicon-shopping-cart fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Checkout</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/shop-product-detail">
                                  <i class="icon-1 unicon-shopping-cart fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Product detail</b>
                                  </span>
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink class="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                                  to="/shop-order">
                                  <i class="icon-1 unicon-shopping-cart fw-bold text-primary dark:text-secondary"></i>
                                  <span class="vstack gap-narrow">
                                    <b class="fw-bold dark:text-white">Order confirmation</b>
                                  </span>
                                </NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="has-dd-menu">
                <a href="#" role="button" aria-haspopup="true">Products <span data-uc-navbar-parent-icon=""
                    class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12" viewBox="0 0 12 12">
                      <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                    </svg></span></a>
                <div
                  class="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
                  data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
                  style="top: 80px; left: 312.406px !important; max-width: 1875px;">
                  <div class="row child-cols-6 g-0 col-match uc-grid uc-grid-stack" data-uc-grid="">
                    <div class="uc-first-column">
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
                              <span class="fw-normal">Assign tasks, share files, and communicate with your team.</span>
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
                          <NuxtLink class="btn btn-sm btn-primary" to="/page-contact">Get in touch</NuxtLink>
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
                  class="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
                  data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
                  style="max-width: 1875px; top: 80px; left: 431.406px !important; ">
                  <div class="row child-cols-6 g-0 col-match uc-grid uc-grid-stack" data-uc-grid="">
                    <div class="uc-first-column">
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
                              <span class="fw-normal">Assign tasks, share files, and communicate with your team.</span>
                            </span>
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="uc-nav uc-navbar-dropdown-nav p-2 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
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
              <li><a href="https://themeforest.net/user/rk_theme/portfolio"
                  target="_blank">More</a></li>
            </ul>
          </div>
          <div class="uc-navbar-right">
            <ClientOnly>
            <ul
              class="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4">
              <li>
                <a style="cursor: pointer;"
                @click="toggleFormModal" role="button" aria-haspopup="true">Request a demo</a>
                 <CommonFormModal :toggleFormModal="toggleFormModal" :formModal="formModal" />
              </li>
            </ul>
            </ClientOnly>
            <NuxtLink class="btn btn-sm btn-primary rounded-default text-white text-none d-none lg:d-inline-flex"
              to="/page-contact">Get in touch</NuxtLink>
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
    </nav>
  </header>

  <CommonNewaLetterModal :newsLetterModal="newsLetterModal" :togglerNewsLetterModal="togglerNewsLetterModal" />
  <CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />
  <CommonOffcanvus :toggleMenu="toggleMenu" :openMenu="openMenu" />


</template>
