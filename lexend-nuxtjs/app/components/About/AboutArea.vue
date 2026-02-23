<template>
  <div id="hero_header" class="hero-header section panel overflow-hidden">
    <div class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
      data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
      <div class="position-absolute top-0 start-0 rotate-45" style="top: 20% !important; left: 18% !important;">
        <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1"
          data-uc-svg>
      </div>
      <div class="position-absolute top-0 end-0 rotate-45" style="top: 15% !important; right: 18% !important;">
        <img class="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" alt="star-2"
          data-uc-svg>
      </div>
    </div>
    <div class="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
      <div class="container max-w-xl">
        <div class="section-inner panel mt-2 sm:mt-4 lg:mt-0"
          data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div class="vstack items-center gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
            <h1 class="h2 sm:h1 lg:display-6 xl:display-5 m-0">About Lexend.</h1>
            <p class="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">In 2014, Steven Smith have gotten so much
              of our time back that we're now able to put towards things that are actually helping our company as
              opposed to just throwing content out there. and the idea of Lexend was born. Today, Lexend empowers teams
              to easily communicate with customers through personalized documents that can be created in minutes, build
              meaningful relationships.</p>
          </div>
          <div class="panel row child-cols-12 col-match g-1 sm:g-2">
            <div class="col-4">
              <figure
                class="featured-image m-0 rounded ratio ratio-2x3 sm:rounded-2 uc-transition-toggle overflow-hidden">
                <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                  src="/assets/images/template/hero-about-01.jpg" alt="About image">
              </figure>
              <div class="position-absolute top-0 start-0 z-1 ms-n8 mt-n8 d-none lg:d-block">
                <img class="w-200px xl:w-250px d-block dark:d-none" src="/assets/images/template/hand-pencil.svg"
                  alt="hand-pencil">
                <img class="w-200px xl:w-250px d-none dark:d-block" src="/assets/images/template/hand-pencil-dark.svg"
                  alt="hand-pencil-dark">
              </div>
            </div>
            <div class="col-8">
              <div class="h-100"> 

                <figure class="panel h-100 m-0 rounded sm:rounded-2 overflow-hidden">
                  <canvas class="h-100 w-100"></canvas>
                  <img class="media-cover image" src="/assets/images/template/hero-about-02.jpg" alt="About image"
                    fetchpriority="high">
                </figure>




              </div>
              <div class="position-absolute bottom-0 end-0 z-1 me-n8 mb-n8 d-none lg:d-block">
                <img class="w-200px xl:w-250px d-block dark:d-none" src="/assets/images/template/empathing.svg"
                  alt="empathing">
                <img class="w-200px xl:w-250px d-none dark:d-block" src="/assets/images/template/empathing-dark.svg"
                  alt="empathing-dark">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>