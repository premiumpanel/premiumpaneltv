

<script setup>
 import { ref, onMounted, onUnmounted } from 'vue'
 
// Sticky header
const isSticky = ref(false)

const handleScroll = () => {
  const currentScroll = window.scrollY
  isSticky.value = currentScroll >= 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})



</script>


<template>
 <header :class="`uc-header header-fourteen uc-navbar-sticky-wrap z-999 uc-dark uc-sticky ${isSticky ? 'headerFixed uc-sticky-below uc-sticky-fixed' : ''}`" data-uc-sticky="start: 100vh; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
        <nav :class="`uc-navbar-container rounded-pill ltr:ps-1 rtl:pe-1 border-0 uc-navbar-float ft-tertiary z-1 uc-navbar-transparent ${isSticky ? 'uc-navbar-sticky' : ''}`" data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;" style="transform: translateY(0px); opacity: 1;">
            <div class="uc-navbar-main">
                <div class="container">
                    <div class="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
                        <div class="uc-navbar-left">
                            <div class="uc-logo max-w-128px lg:max-w-150px">
                                <NuxtLink class="panel text-none ltr:lg:ms-2 ltr:xl:ms-3 rtl:lg:ms-2 rtl:xl:ms-3" to="/">
                                    <img src="/assets/images/common/logo-14.svg" alt="Lexend" style="width: 126px !important; height: 32px !important;">
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="uc-navbar-right">
                            <ul class="uc-navbar-nav gap-3 xl:gap-5 d-none lg:d-flex fs-5 fw-medium">
                                <li><a href="#features">Features</a></li>
                                <li><a href="#solutions">Solutions</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#faq">Faq</a></li>
                            </ul>
                            <ul class="uc-navbar-nav gap-3 xl:gap-4 fw-medium text-white ltr:ms-2 ltr:xl:ms-3 rtl:me-2 rtl:xl:me-3 d-none xl:d-flex">
                                <li class="d-inline-block">
                                    <a href="#" class="hstack gap-1 text-none fw-medium" role="button" aria-haspopup="true">
                                        <i class="icon icon-1 unicon-wikis"></i>
                                        <span>En</span>
                                    </a>
                                    <div class="py-1 bg-white dark:bg-gray-800 shadow-xs w-200px rounded-2 uc-drop" data-uc-drop="mode: click; offset: 16; pos: top-right; boundary: !.uc-navbar-container; animation: uc-animation-slide-top-small; duration: 150;">
                                        <ul class="nav-y gap-0 fs-7">
                                            <li><a href="#en" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img class="w-20px me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/en.svg" alt="English">English</a></li>
                                            <li><a href="#fr" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img class="w-20px me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/fr.svg" alt="French">French</a></li>
                                            <li><a href="#ge" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img class="w-20px me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/ge.svg" alt="Germany">Germany</a></li>
                                            <li><a href="#sp" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img class="w-20px me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/sp.svg" alt="Spain">Spain</a></li>
                                            <li><a href="#ar" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img class="w-20px me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/ar.svg" alt="العربية">Arabic (العربية)</a></li>
                                            <li><a href="#ch" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img class="w-20px me-1 rtl:me-0 rtl:ms-1" src="/assets/images/common/ch.svg" alt="中文">Chinese (中文)</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <NuxtLink class="btn btn-md fs-6 lg:px-4 rounded-pill text-dark bg-white hover:bg-secondary d-none lg:d-flex" to="/page-contact-2">
                                <span>Schedule a demo</span>
                            </NuxtLink>
                            <a href="#uc-menu-panel" class="uc-menu-trigger btn btn-md btn-secondary w-40px h-40px rounded-circle p-0 d-inline-flex lg:d-none" data-uc-toggle="" role="button"></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

 