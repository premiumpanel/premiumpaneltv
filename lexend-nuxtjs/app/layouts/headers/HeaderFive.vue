 

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)
const activeSection = ref('overview') // default active section

let lastScrollTop = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  isSticky.value = currentScroll > lastScrollTop
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll

  // Scrollspy logic:
  const sections = [
    'overview',
    'features',
    'how_it_works',
    'pricing',
    'clients_feedback',
    'insights'
  ]

  for (const section of sections) {
    const el = document.getElementById(section)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    // When top of section is near the top of viewport (+ some offset)
    if (rect.top <= 50 && rect.bottom > 50) {
      activeSection.value = section
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // run once on mount
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})



// Mobile Menu
const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}



</script>





<template>
  <header
    :class="`uc-header header-six uc-navbar-sticky-wrap z-999 uc-sticky ${isSticky ? 'headerFixed uc-sticky-below uc-sticky-fixed' : ''}`"
    data-uc-sticky="start: 1200px; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    style="">
    <nav
      :class="`uc-navbar-container lg:mt-3 rounded-0 lg:rounded-pill uc-navbar-float ft-tertiary z-1 uc-navbar-transparent ${isSticky ? 'uc-navbar-sticky' : ''}`"
      data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      style="transform: translateY(0px); opacity: 1;">
      <div class="uc-navbar-main" style="--uc-nav-height: 80px">
        <div class="container max-w-lg lg:max-w-950px xl:max-w-xl">
          <div class="uc-navbar min-h-64px lg:min-h-80px px-2 lg:px-0 text-gray-900 dark:text-white"
            data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;">
            <div class="uc-navbar-left">
              <div class="uc-logo">
                <NuxtLink class="panel text-none" to="/">
                  <img v-if="!isSticky" src="/assets/images/common/logo-dark.svg" alt="Lexend">
                  <img v-if="isSticky" src="/assets/images/common/logo-light.svg" alt="Lexend">
                </NuxtLink>


              </div>
            </div>
            <div class="uc-navbar-center"> 

              <ul class="uc-navbar-nav gap-3 xl:gap-5 d-none lg:d-flex fs-5 fw-medium">
                <li :class="{ 'uc-active': activeSection === 'overview' }" class="d-none">
                  <a href="#overview">Overview</a>
                </li>
                <li :class="{ 'uc-active': activeSection === 'features' }">
                  <a href="#features">Features</a>
                </li>
                <li :class="{ 'uc-active': activeSection === 'how_it_works' }">
                  <a href="#how_it_works">How it works</a>
                </li>
                <li :class="{ 'uc-active': activeSection === 'pricing' }">
                  <a href="#pricing">Pricing</a>
                </li>
                <li :class="{ 'uc-active': activeSection === 'clients_feedback' }">
                  <a href="#clients_feedback">Reviews</a>
                </li>
                <li :class="{ 'uc-active': activeSection === 'insights' }">
                  <a href="#insights">Insights</a>
                </li>
              </ul>




            </div>
            <div class="uc-navbar-right">
              <NuxtLink class="btn btn-sm btn-primary px-3 d-none lg:d-inline-flex" to="/page-pricing-2">
                <span>See pricing</span>
              </NuxtLink>
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
  <CommonOffcanvus :toggleMenu="toggleMenu" :openMenu="openMenu" />

</template>