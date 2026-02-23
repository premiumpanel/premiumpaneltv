<template>
  <div id="cta" class="cta section panel overflow-hidden">
    <div class="section-outer panel py-4 sm:py-6 xl:py-9 bg-secondary dark:bg-gray-800">
      <div class="d-none lg:d-block"
        data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;">
        <div class="position-absolute top-50 start-0 translate-middle-y ms-n6">
          <img class="w-200px xl:w-250px d-block dark:d-none" src="/assets/images/template/talking.svg" alt="talking">
          <img class="w-200px xl:w-250px d-none dark:d-block" src="/assets/images/template/talking-dark.svg"
            alt="talking-dark">
        </div>
        <div class="position-absolute top-50 end-0 translate-middle-y me-n6">
          <img class="w-200px xl:w-250px d-block dark:d-none" src="/assets/images/template/chatting.svg" alt="chatting">
          <img class="w-200px xl:w-250px d-none dark:d-block" src="/assets/images/template/chatting-dark.svg"
            alt="chatting-dark">
        </div>
      </div>
      <div class="d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
        <div class="position-absolute top-0 start-0 rotate-45" style="top: 40% !important; left: 24% !important;">
          <img class="w-32px text-gray-900 dark:text-white image-filter" src="/assets/images/template/star-1.svg" alt="star-1"
            data-uc-svg>
        </div>
        <div class="position-absolute bottom-0 ltr:end-0 rtl:start-0 rotate-45"
          style="bottom: 40% !important; right: 24% !important;">
          <img class="w-32px text-gray-900 dark:text-white image-filter" src="/assets/images/template/star-2.svg" alt="star-2"
            data-uc-svg>
        </div>
        <div class="position-absolute bottom-0 start-0" style="bottom: -4% !important; left: 28% !important;">
          <img class="w-100px xl:w-150px text-gray-900 dark:text-white text-opacity-20 image-filter"
            src="/assets/images/template/arrow-3.svg" alt="arrow-1" data-uc-svg>
        </div>
      </div>
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
            data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2 class="h3 sm:h1 xl:display-6 m-0">Create stunning websites that fits <span class="text-primary">your
                needs.</span></h2>
            <p class="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">Try Lexend today.</p>
            <div class="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2">
              <NuxtLink to="/page-pricing" class="btn btn-md lg:btn-lg btn-primary text-white">Try Lexend today
              </NuxtLink>
              <a href="#uc-contact-modal"
                class="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                data-uc-toggle>Contact sales</a>
            </div>
            <p class="fs-7 text-dark dark:text-white text-opacity-70">14-day trial, no credit card required.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>