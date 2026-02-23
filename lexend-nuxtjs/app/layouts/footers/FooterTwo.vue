

<script setup>
import { ref } from 'vue'

const languages = [
  { label: 'English', href: '#en' },
  { label: 'العربية', href: '#ar' },
  { label: '中文', href: '#ch' }
]

const active = ref(false)
// handle active function   
const hendleActive = () => {
  active.value = !active.value
}

defineProps({
  style_footer: {
    type: Boolean,
    default: false,
  },
})
 

</script>



<template>
  <footer id="uc-footer" :class="`uc-footer panel overflow-hidden ${style_footer ? '' : 'uc-dark'}`"> 
    <div class="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
      <div class="container max-w-xl">
        <div class="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
          <div class="uc-footer-widgets panel">
            <div class="row child-cols-6 md:child-cols col-match g-4">
              <div class="col-12 lg:col-4">
                <div class="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                  <div class="vstack gap-2">
                    <NuxtLink to="/"> 
                      <img class="text-primary" src="/assets/images/common/logo-dark-2.svg" alt="Lexend">
                    </NuxtLink>
                    <p>This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a
                      custom proposal with dynamic pricing tables.</p>
                  </div>
                  <div class="hstack items-start gap-1">
                    <a href="#">
                      <img class="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150 image-filter"
                        src="/assets/images/common/playstore.svg" alt="Google Play Store" data-uc-svg>
                    </a>
                    <a href="#">
                      <img class="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150 image-filter"
                        src="/assets/images/common/appstore.svg" alt="Apple Store" data-uc-svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <ul class="nav-y gap-1 fw-medium">
                  <li><NuxtLink to="/page-about">About</NuxtLink></li>
                  <li><NuxtLink to="/page-pricing">Pricing</NuxtLink></li>
                  <li><NuxtLink to="/page-features">Features</NuxtLink></li>
                  <li><NuxtLink to="/page-integrations">Integrations</NuxtLink></li>
                  <li><NuxtLink to="/page-career">Career</NuxtLink></li>
                  <li><NuxtLink to="/page-contact">Contact</NuxtLink></li>
                  <li><NuxtLink to="/page-contact-2">Contact v2</NuxtLink></li>
                </ul>
              </div>
              <div>
                <ul class="nav-y gap-1 fw-medium">
                  <li><NuxtLink to="/shop">Shop</NuxtLink></li>
                  <li><NuxtLink to="/shop-sidebar">With sidebar</NuxtLink></li>
                  <li><NuxtLink to="/shop-product-detail">Product detail</NuxtLink></li>
                  <li><NuxtLink to="/shop-product-detail-2">Product detail v2</NuxtLink></li>
                  <li><NuxtLink to="/shop-cart">Cart</NuxtLink></li>
                  <li><NuxtLink to="/shop-checkout">Checkout</NuxtLink></li>
                  <li><NuxtLink to="/shop-order">Order confirmation</NuxtLink></li>
                </ul>
              </div>
              <div>
                <ul class="nav-y gap-1 fw-medium">
                  <li><NuxtLink to="/request-demo">Request a demo</NuxtLink></li>
                  <li><NuxtLink to="/sign-in">Sign in</NuxtLink></li>
                  <li><NuxtLink to="/sign-in-2">Sign in v2</NuxtLink></li>
                  <li><NuxtLink to="/sign-up">Sign up</NuxtLink></li>
                  <li><NuxtLink to="/sign-up-2">Sign up v2</NuxtLink></li>
                  <li><NuxtLink to="/reset-password">Reset password</NuxtLink></li>
                  <li><NuxtLink to="/reset-password-2">Reset password v2</NuxtLink></li>
                </ul>
              </div>
              <div>
                <ul class="nav-y gap-1 fw-medium">
                  <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                  <li><NuxtLink to="/blog-details">Blog detail</NuxtLink></li>
                  <li><NuxtLink to="/page-faq">FAQ</NuxtLink></li>
                  <li><NuxtLink to="/404">404</NuxtLink></li>
                  <li><NuxtLink to="/coming-soon">Coming Soon</NuxtLink></li>
                  <li><NuxtLink to="/page-terms">Terms of service</NuxtLink></li>
                  <li><NuxtLink to="/page-privacy">Privacy policy</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>
 
          
          <div
            class="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
            <div class="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2" style="display: flex; flex-wrap: wrap;">
              <p class="opacity-60">Lexend © {{ new Date().getFullYear() }}, All rights reserved.</p>
              <ul class="nav-x gap-2 fw-medium">
                <li><a href="#">Privacy notice</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Cookie settings</a></li>
              </ul>
            </div>
            <div class="hstack justify-center lg:justify-end gap-2 lg:gap-3">
              <ul class="nav-x gap-2">
                <li><a href="https://www.linkedin.com/"><i class="icon icon-2 unicon-logo-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/"><i class="icon icon-2 unicon-logo-facebook"></i></a></li>
                <li><a href="https://www.x.com/"><i class="icon icon-2 unicon-logo-x-filled"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="icon icon-2 unicon-logo-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/"><i class="icon icon-2 unicon-logo-youtube"></i></a></li>
              </ul>
              <div class="vr"></div>
              <div class="d-inline-block">
                <a href="#" class="hstack gap-1 text-none fw-medium" role="button" aria-haspopup="true">
                  <i class="icon icon-1 unicon-earth-filled"></i>
                  <span>English</span>
                  <span data-uc-drop-parent-icon="" class="uc-icon uc-drop-parent-icon"><svg width="12" height="12"
                      viewBox="0 0 12 12">
                      <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                    </svg></span>
                </a>
                <div class="p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px uc-drop"
                  data-uc-drop="mode: click; offset: 28; pos: top-right; boundary: !.uc-footer-bottom; animation: uc-animation-slide-top-small; duration: 150;"
                  style="top: -100px; left: 1098px; max-width: 1875px;">
                  <ul class="nav-y gap-1 fw-medium items-end">
                    <li><a href="#en">English</a></li>
                    <li><a href="#ar">العربية</a></li>
                    <li><a href="#ch">中文</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  </footer>
</template>