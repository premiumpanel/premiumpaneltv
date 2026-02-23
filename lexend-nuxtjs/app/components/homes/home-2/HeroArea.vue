<template>
  <div id="hero_header" class="hero-header section panel overflow-hidden">
    <div class="section-outer panel py-6 xl:py-9 pt-9 lg:pt-10 bg-secondary dark:bg-gray-900">
      <div class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
        <div class="position-absolute top-0 start-0 rotate-45" style="top: 35% !important; left: 47% !important;">
          <img class="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1"
            data-uc-svg>
        </div>
        <div class="position-absolute top-0 end-0 rotate-45" style="top: 12% !important; right: 15% !important;">
          <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" alt="star-2"
            data-uc-svg>
        </div>
        <div class="position-absolute top-0 start-0 translate-middle-y -rotate-12"
          style="top: 15% !important; left: 35% !important;">
          <img class="w-48px xl:w-56px d-block dark:d-none" src="/assets/images/template/icon-trophy.svg"
            alt="icon-trophy">
          <img class="w-48px xl:w-56px d-none dark:d-block" src="/assets/images/template/icon-trophy-dark.svg"
            alt="icon-trophy-dark">
        </div>
        <div class="position-absolute top-0 start-0 translate-middle-y rotate-45 ms-n3" style="top: 35% !important;">
          <img class="w-48px xl:w-56px d-block dark:d-none" src="/assets/images/template/icon-location.svg"
            alt="icon-location">
          <img class="w-48px xl:w-56px d-none dark:d-block" src="/assets/images/template/icon-location-dark.svg"
            alt="icon-location-dark">
        </div>
        <div class="position-absolute bottom-0 start-0 translate-middle-y"
          style="bottom: 15% !important; left: 30% !important;">
          <img class="w-40px xl:w-48px d-block dark:d-none" src="/assets/images/template/icon-globe.svg"
            alt="icon-globe">
          <img class="w-40px xl:w-48px d-none dark:d-block" src="/assets/images/template/icon-globe-dark.svg"
            alt="icon-globe-dark">
        </div>
        <div class="position-absolute bottom-0 ltr:end-0 rtl:start-0 translate-middle-y rotate-45"
          style="bottom: 20% !important; right: 8% !important;">
          <img class="w-48px xl:w-56px d-block dark:d-none" src="/assets/images/template/icon-crown.svg"
            alt="icon-crown">
          <img class="w-48px xl:w-56px d-none dark:d-block" src="/assets/images/template/icon-crown-dark.svg"
            alt="icon-crown-dark">
        </div>
        <div class="position-absolute top-0 end-0 translate-middle-y -rotate-12"
          style="top: 60% !important; right: 48% !important;">
          <img class="w-48px xl:w-56px d-block dark:d-none" src="/assets/images/template/icon-diamond.svg"
            alt="icon-diamond">
          <img class="w-48px xl:w-56px d-none dark:d-block" src="/assets/images/template/icon-diamond-dark.svg"
            alt="icon-diamond-dark">
        </div>
        <div class="position-absolute top-0 end-0 translate-middle-y -rotate-12 me-n3" style="top: 35% !important;">
          <img class="w-48px xl:w-56px d-block dark:d-none" src="/assets/images/template/icon-chat.svg" alt="icon-chat">
          <img class="w-48px xl:w-56px d-none dark:d-block" src="/assets/images/template/icon-chat-dark.svg"
            alt="icon-chat-dark">
        </div>
      </div>
      <div class="container max-w-xl">
        <div class="section-inner panel py-4">
          <div class="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gx-0">
            <div class="col-12 sm:col-9 lg:col-5">
              <div class="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end"
                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                <span class="fs-6 fw-bold text-primary dark:text-secondary">CRM Tool Workflow</span>
                <h1 class="h2 sm:h1 lg:display-6 xl:display-5 mb-1 xl:mb-2">Streamline your Tool Workflow.</h1>
                <p class="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">Keep data consistent, with native CRM
                  integrations that streamline your entire Tool workflow.</p>
                <form class="row child-cols g-1 mt-1 sm:mt-2">
                  <div>
                    <input
                      class="form-control h-48px lg:h-56px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      type="text" placeholder="Your email address" required>
                  </div>
                  <div class="col-12 sm:col-auto">
                    <NuxtLink to="/page-pricing"
                      class="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white">Start free trial
                    </NuxtLink>
                  </div>
                </form>
                <p class="fs-7 text-dark dark:text-white text-opacity-70">No credit card required.</p>
              </div>
            </div>
            <div class="col-12 lg:col-6 xl:col-7">
              <div class="hero-scene panel rtl:me-6 rtl:ms-n6"
                data-anime="targets: > *; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
                <div class="panel overflow-hidden">
                  <img class="d-block dark:d-none" src="/assets/images/template/hero-two.png" alt="Main hero image">
                  <img class="d-none dark:d-block" src="/assets/images/template/hero-two-dark.png"
                    alt="Main hero image">
                </div>
              </div>
            </div>
          </div>
          <div class="brands panel overflow-hidden mt-4 sm:mt-6 lg:mt-8 opacity-50">
            <div class="block-panel panel" data-anime="opacity: [0, 1]; duration: 450; delay: 750;">
              <div class="element-brands text-gray-900 dark:text-white ">
                <div class="swiper" data-uc-swiper="items: 2; center: true; center-bounds: true;"
                  data-uc-swiper-s="items: 4; center: false; center-bounds: false;"
                  data-uc-swiper-m="items: 6; gap: 80;">
                  <div class="swiper-wrapper items-center ease-linear">
                    <div class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px" src="/assets/images/brands/brand-01.svg" alt="Proline"
                        data-uc-svg>
                    </div>
                    <div class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px" src="/assets/images/brands/brand-02.svg" alt="Iceberg"
                        data-uc-svg>
                    </div>
                    <div class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px" src="/assets/images/brands/brand-03.svg" alt="PinPoint"
                        data-uc-svg>
                    </div>
                    <div class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px" src="/assets/images/brands/brand-04.svg" alt="Clues"
                        data-uc-svg>
                    </div>
                    <div class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px" src="/assets/images/brands/brand-05.svg" alt="Snowflake"
                        data-uc-svg>
                    </div>
                    <div class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px" src="/assets/images/brands/brand-06.svg" alt="Proline"
                        data-uc-svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>