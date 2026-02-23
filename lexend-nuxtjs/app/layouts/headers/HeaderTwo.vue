 

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


defineProps({
  style_2: Boolean,
  style_3: Boolean,
})
 


 // Mobile Menu
const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}



</script>

 

<template> 
  <header :class="`uc-header header-default uc-navbar-sticky-wrap z-999 ${style_3 ? 'uc-dark' : 'uc-sticky'}  ${isSticky ? 'headerFixed uc-sticky-below uc-sticky-fixed' : ''}`" style="--uc-nav-height: 80px;"
    data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
    <nav :class="`uc-navbar-container ft-tertiary z-1 uc-navbar-transparent ${style_2 ? '' : 'uc-navbar-float'} ${isSticky ? 'uc-navbar-sticky' : ''}`">
 
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
            <ul class="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
              <li><NuxtLink to="/page-features">Features</NuxtLink></li>
              <li><NuxtLink to="/page-pricing">Pricing</NuxtLink></li>
              <li><NuxtLink to="/blog">Insights</NuxtLink></li>
              <li><NuxtLink to="/page-about">About</NuxtLink></li>
              <li><NuxtLink to="/page-contact">Contact</NuxtLink></li>
              <li class="has-dd-menu">
                <a style="cursor: pointer;" role="button" aria-haspopup="true">More <span data-uc-navbar-parent-icon=""
                    class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12" viewBox="0 0 12 12">
                      <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                    </svg></span>
                </a>
                <div class="uc-navbar-dropdown uc-drop w-100"
                  data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div class="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack" data-uc-grid="">
                    <div>
                      <div class="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack" data-uc-grid="">

                        <div>
                          <ul class="uc-nav uc-navbar-dropdown-nav">
                            <li class="uc-nav-header">Main Pages</li>
                            <li><NuxtLink to="/">Home 01</NuxtLink></li>
                            <li><NuxtLink to="/home-2">Home 02</NuxtLink></li>
                            <li><NuxtLink to="/home-3">Home 03</NuxtLink></li>
                            <li><NuxtLink to="/home-4">Home 04</NuxtLink></li>
                            <li><NuxtLink to="/home-5">Home 05</NuxtLink></li>
                            <li><NuxtLink to="/home-6">Home 06</NuxtLink></li>
                            <li><NuxtLink to="/home-7">Home 07</NuxtLink></li>
                            <li><NuxtLink to="/home-8">Home 08</NuxtLink></li>
                            <li><NuxtLink to="/home-9">Home 09</NuxtLink></li>
                            <li><NuxtLink to="/home-10">Home 10</NuxtLink></li>
                            <li><NuxtLink to="/home-11">Home 11 <span class="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">NEW</span></NuxtLink></li>
                            <li><NuxtLink to="/home-12">Home 12 <span class="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">NEW</span></NuxtLink></li>
                            <li><NuxtLink to="/home-13">Home 13 <span class="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">NEW</span></NuxtLink></li>
                            <li><NuxtLink to="/home-14">Home 14 <span class="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">NEW</span></NuxtLink></li> 
                          </ul>
                        </div>
                        <div>
                          <ul class="uc-nav uc-navbar-dropdown-nav">
                            <li class="uc-nav-header">Inner Pages</li>
                            <li><NuxtLink to="/page-features">Features</NuxtLink></li>
                            <li><NuxtLink to="/page-pricing">Pricing</NuxtLink></li>
                            <li><NuxtLink to="/page-pricing-2">Pricing v2</NuxtLink></li>
                            <li><NuxtLink to="/page-integrations">Integrations</NuxtLink></li>
                            <li><NuxtLink to="/page-about">About</NuxtLink></li>
                            <li><NuxtLink to="/page-career">Career</NuxtLink></li>
                            <li><NuxtLink to="/page-team">Team</NuxtLink></li>
                            <li><NuxtLink to="/page-career-detail">Job details</NuxtLink></li>
                            <li><NuxtLink to="/page-contact">Contact</NuxtLink></li>
                            <li><NuxtLink to="/page-contact-2">Contact v2</NuxtLink></li>
                            <li><NuxtLink to="/page-services">Services <span class="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">NEW</span></NuxtLink></li>
                            <li><NuxtLink to="/page-services-detail">Single Service <span class="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">NEW</span></NuxtLink></li>
                          </ul>
                        </div>
                        <div>
                          <ul class="uc-nav uc-navbar-dropdown-nav">
                            <li class="uc-nav-header">CMS Pages</li>
                            <li><NuxtLink to="/blog">Modern</NuxtLink></li>
                            <li><NuxtLink to="/blog-classic">Classic</NuxtLink></li>
                            <li><NuxtLink to="/blog-2cols">Grid 2 cols</NuxtLink></li>
                            <li><NuxtLink to="/blog-3cols">Grid 3 cols</NuxtLink></li>
                            <li><NuxtLink to="/blog-4cols">Grid 4 cols</NuxtLink></li>
                            <li><NuxtLink to="/blog-sidebar">Blog Sidebar</NuxtLink></li>
                            <li><NuxtLink to="/blog-category">Category</NuxtLink></li>
                            <li><NuxtLink to="/blog-author">Author</NuxtLink></li>
                            <li><NuxtLink to="/blog-details">Blog single</NuxtLink></li>
                            <li><NuxtLink to="/blog-details-2">Blog single v2</NuxtLink></li>
                            <li><NuxtLink to="/blog-details-3">Blog single v3</NuxtLink></li>
                          </ul>
                        </div>
                        <div>
                          <ul class="uc-nav uc-navbar-dropdown-nav">
                            <li class="uc-nav-header">Shop Pages</li>
                            <li><NuxtLink to="/shop">Grid 4 cols</NuxtLink></li>
                            <li><NuxtLink to="/shop-3">Grid 3 cols</NuxtLink></li>
                            <li><NuxtLink to="/shop-2">Grid 2 cols</NuxtLink></li>
                            <li><NuxtLink to="/shop-sidebar">With sidebar</NuxtLink></li>
                            <li><NuxtLink to="/shop-product-detail">Product detail</NuxtLink></li>
                            <li><NuxtLink to="/shop-product-detail-2">Product detail v2</NuxtLink></li>
                            <li><NuxtLink to="/shop-cart">Cart</NuxtLink></li>
                            <li><NuxtLink to="/shop-cart-2">Cart v2</NuxtLink></li>
                            <li><NuxtLink to="/shop-checkout">Checkout</NuxtLink></li>
                            <li><NuxtLink to="/shop-checkout-2">Checkout v2</NuxtLink></li>
                            <li><NuxtLink to="/shop-order">Order confirmation</NuxtLink></li>
                          </ul>
                        </div>
                        <div>
                          <ul class="uc-nav uc-navbar-dropdown-nav">
                            <li class="uc-nav-header">Other pages</li>
                            <li><NuxtLink to="/page-about">All components</NuxtLink></li>
                            <!-- <li><NuxtLink to="/content-table">Content Table</NuxtLink></li> -->
                            <li><NuxtLink to="#">Content Table</NuxtLink></li>
                            <!-- <li><NuxtLink to="/home-4-rtl">RTL</NuxtLink></li> -->
                            <li><NuxtLink to="/sign-in">Sign in</NuxtLink></li>
                            <li><NuxtLink to="/sign-in-2">Sign in v2</NuxtLink></li>
                            <li><NuxtLink to="/sign-up">Sign up</NuxtLink></li>
                            <li><NuxtLink to="/sign-up-2">Sign up v2</NuxtLink></li>
                            <li><NuxtLink to="/reset-password">Reset password</NuxtLink></li>
                            <li><NuxtLink to="/reset-password-2">Reset password v2</NuxtLink></li>
                            <li><NuxtLink to="/404">404</NuxtLink></li>
                            <li><NuxtLink to="/coming-soon">Coming Soon</NuxtLink></li>
                            <li><NuxtLink to="/page-terms">Terms of service</NuxtLink></li>
                            <li><NuxtLink to="/page-privacy">Privacy policy</NuxtLink></li>
                          </ul>
                        </div>
                        
                        
                        
                      </div>
                    </div>
                    
                    
                     <div class="col-3" style="flex: 0 0  auto !important; width: 25%; ">
                      <div class="panel w-100 overflow-hidden">
                        <div class="ratio ratio-3x4 overflow-hidden rounded">
                          <img alt="Let's build anything with Lexend!" style="color:transparent"
                            src="/assets/images/template/menu-banner.jpg">
                          <a class="position-cover" href="https://themeforest.net/user/rk_theme/portfolio"
                            target="_blank"></a>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="uc-navbar-right">
            <div class="d-none xl:d-block">
              <NuxtLink class="text-none fw-medium" to="/request-demo">
                <span>Request a demo</span>
              </NuxtLink>
            </div>
            <div class="d-none lg:d-block">
              <NuxtLink class="text-none fw-medium" to="/sign-in">
                <span>Log in</span>
              </NuxtLink>
            </div>
            <NuxtLink class="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
              to="/page-pricing">Start free trial</NuxtLink>
            <div class="d-inline-block">
              <NuxtLink to="#" class="hstack gap-narrow text-none fw-medium" role="button" aria-haspopup="true">En <span
                  data-uc-drop-parent-icon="" class="uc-icon uc-drop-parent-icon"><svg width="12" height="12"
                    viewBox="0 0 12 12">
                    <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                  </svg></span></NuxtLink>
              <div class="p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px uc-drop"
                data-uc-drop="mode: click; offset: 28; pos: bottom-left; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                <ul class="nav-y gap-1 fw-medium items-end">
                  <li><a href="#en">English</a></li>
                  <li><a href="#ar">العربية</a></li>
                  <li><a href="#ch">中文</a></li>
                </ul>
              </div>
            </div>
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

  <CommonOffcanvus :toggleMenu="toggleMenu" :openMenu="openMenu" />


</template>