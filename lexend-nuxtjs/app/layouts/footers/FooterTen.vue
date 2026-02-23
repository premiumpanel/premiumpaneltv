<template>
  <footer id="uc-footer" class="uc-footer panel overflow-hidden ft-tertiary "
    data-anime="onview: -100; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 250;">
    <div
      class="footer-outer py-6 lg:py-8 xl:py-9 lg:mx-2 rounded-2 xl:rounded-3 dark:text-white bg-gradient-to-b from-secondary to-transparent dark:from-gray-700 dark:to-transparent">
      <div class="uc-footer-cta">
        <div class="container">
          <div class="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8">
            <div class="panel">
              <div class="row child-cols-12 justify-between items-center g-3 sm:g-4 text-center lg:text-start">
                <div class="lg:col-7 xl:col-6">
                  <div class="vstack gap-1 sm:gap-2">
                    <h2 class="h4 sm:h2 xl:h1 m-0">
                      Automate Tasks, <br> Collaborate Seamlessly
                    </h2>
                  </div>
                </div>
                <div class="lg:col-auto">
                  <div class="vstack gap-2 items-center">
                    <NuxtLink to="/page-pricing-2"
                      class="btn btn-md xl:btn-lg text-white bg-gradient-to-r from-primary to-tertiary gradient-hover hover:bg-opacity-70 dark:hover:bg-opacity-80 border-0 shadow-sm rounded-2 sm:rounded px-3 py-2 lg:min-w-200px">
                      <span>Start a free trial</span>
                    </NuxtLink>
                    <span class="fs-7 dark:text-white text-opacity-75">No credit card required!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <hr class="w-100 my-4 lg:my-6 xl:my-9">
      </div>
      <div class="uc-footer-content">
        <div class="container">
          <div class="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div class="uc-footer-widgets panel">
              <div class="row child-cols-6 sm:child-cols col-match g-4">
                <div class="col-12 sm:col-6">
                  <div class="panel vstack items-start gap-3 xl:gap-4 xl:w-350px">
                    <NuxtLink to="/" style="width: 140px">
                      <img class="text-primary dark:text-white image-filter"
                        src="/assets/images/common/logo-12-light.svg" alt="Lexend" data-uc-svg>
                    </NuxtLink>
                  </div>
                </div>
                <div>
                  <ul class="nav-y gap-2 fs-6 xl:fs-5">
                    <li>
                      <NuxtLink to="/page-integrations">Products</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-features">Features</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-pricing-2">Pricing</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-about">About</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="nav-y gap-2 fs-6 xl:fs-5">
                    <li>
                      <NuxtLink to="/blog-sidebar">Blog</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/blog">Ressources</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/page-contact">Support</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/sign-in">Client Portal</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div class="col-12 lg:col-auto">
                  <div class="panel">
                    <ul class="social-icons nav-x gap-0">
                      <li>
                        <a class="w-40px h-40px d-inline-flex justify-center items-center transition-all duration-200 ease-in hover:scale-110"
                          href="https://themeforest.net/user/rk_theme"><i
                            class="unicon-logo-instagram icon-3"></i></a>
                      </li>
                      <li>
                        <a class="w-40px h-40px d-inline-flex justify-center items-center transition-all duration-200 ease-in hover:scale-110"
                          href="https://facebook.com/"><i class="unicon-logo-facebook icon-3"></i></a>
                      </li>
                      <li>
                        <a class="w-40px h-40px d-inline-flex justify-center items-center transition-all duration-200 ease-in hover:scale-110"
                          href="https://dribbble.com"><i class="unicon-logo-x-filled icon-3"></i></a>
                      </li>
                      <li>
                        <a class="w-40px h-40px d-inline-flex justify-center items-center transition-all duration-200 ease-in hover:scale-110"
                          href="https://www.linkedin.com/"><i class="unicon-logo-linkedin icon-3"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="uc-footer-bottom panel vstack sm:hstack gap-2 justify-between items-center text-center pt-4 border-top text-gray-400 dark:text-gray-200">
              <p>Lexend © 2025, All rights reserved.</p>
              <ul class="nav-x gap-1">
                <li>
                  <NuxtLink to="/page-privacy">Privacy policy</NuxtLink>
                </li>
                <li class="mx-2 lg:mx-3">
                  <NuxtLink to="/page-terms">Terms of use</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>