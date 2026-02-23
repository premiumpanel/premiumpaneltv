
<template>

  <div id="hero_header" class="hero-header section panel overflow-hidden">
    <div class="position-cover bg-secondary dark:bg-gray-800"></div>
    <div class="section-outer panel pt-8">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="row child-cols justify-center lg:justify-between items-center g-0"> 

            <div class="col-12 sm:col-10 md:col-8 lg:col-5">
              <div class="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                <h1 class="h2 xl:display-5 mb-1 xl:mb-2">Tools that cover <br> <span
                    class="text-primary dark:text-secondary">all aspects</span> of your growing business.</h1>
                <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">Say goodbye to the hassle of managing
                  multiple software and tools. Lexend offers a comprehensive suite of tools that cover all aspects of
                  your business.</p>
                <form class="row child-cols g-1 mt-1 sm:mt-2">
                  <div>
                    <div class="form-icon-group inline-block">
                      <input type="email"
                        class="form-control rounded-default h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        placeholder="Your email.." required>
                      <span class="form-icon text-gray dark:text-gray-300">
                        <i class="unicon-email icon-1"></i>
                      </span>
                    </div>
                  </div>
                  <div class="col-12 sm:col-auto">
                    <NuxtLink to="/page-pricing"
                      class="btn btn-md btn-primary rounded-default h-48px w-100 lg:min-w-150px text-white">
                      <span class="d-none md:d-block">Try it out for free</span>
                      <span class="d-block md:d-none">Sign up</span>
                    </NuxtLink>
                  </div>
                </form>
                <p class="fs-7 text-dark dark:text-white text-opacity-70">We care about your data in our <NuxtLink
                    to="/page-privacy" class="uc-link text-underline dark:text-secondary">privacy policy</NuxtLink>.</p>
              </div>
            </div>

            <div class="col-12 lg:col-6">
              <div class="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2" 
              style="margin-left: -1rem !important;"
              data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                <img class="ltr:d-block rtl:d-none" src="/assets/images/template/hero-mockup.png" alt="hero-mockup">
                <!-- <img class="ltr:d-none rtl:d-block" src="/assets/images/template/hero-mockup-rtl.png" alt="hero-mockup-rtl"> -->
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>



</template>