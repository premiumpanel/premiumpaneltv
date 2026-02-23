<template>
  <div id="cta" class="cta section panel">
    <div
      class="section-outer panel py-6 sm:py-8 xl:py-9 mx-1 lg:mx-2 rounded-2 xl:rounded-3 bg-secondary dark:bg-gray-800"
      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
      <div class="container">
        <div class="section-inner panel">
          <div class="row child-cols-12 sm:child-cols-6 items-center justify-between g-4 lg:g-6 xl:g-9">
            <div class="lg:col-6 xl:col-auto">
              <div class="panel vstack gap-2 sm:gap-3 xl:gap-5 xl:max-w-500px text-center sm:text-start"
                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                <h1 class="title h2 lg:h1 xl:display-5 mb-0"><span class="text-primary dark:text-primary-400">One
                    Platform,</span> <br> Full Support Transformation</h1>
                <div class="numbers panel">
                  <div class="row child-cols-6 g-1 lg:g-3">
                    <div>
                      <div class="vstack gap-2 lg:gap-1">
                        <h3 class="h3 lg:h2 xl:h1 ft-primary m-0 text-primary dark:text-primary-400">92%</h3>
                        <span class="fs-7 lg:fs-6 text-opacity-80">Reduction in resolution time</span>
                      </div>
                    </div>
                    <div>
                      <div class="vstack gap-1">
                        <h3 class="h3 lg:h2 xl:h1 ft-primary m-0 text-primary dark:text-primary-400">3,5x</h3>
                        <span class="fs-7 lg:fs-6 text-opacity-80">ROI for entrprise customers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="client-feedback panel mt-1">
                  <div class="rounded-2 xl:rounded-3 hstack bg-white dark:bg-opacity-5"
                    style="padding: 12px; box-shadow: 0 0.2rem 1rem -0.1rem var(--shadow-color);">
                    <div class="row items-center justify-center g-2">
                      <div class="col-12 sm:col-auto">
                        <NuxtLink to="/page-contact"
                          class="btn btn-md lg:btn-sm xl:btn-md btn-primary px-4 lg:px-2 xl:px-4 rounded-1-5 xl:rounded-2 w-100">
                          <span>Start Free Trial</span>
                        </NuxtLink>
                      </div>
                      <div class="col-auto">
                        <div class="panel hstack justify-center gap-0">
                          <img src="/assets/images/avatars/02.jpg" alt="Avatar-image"
                            class="w-32px h-32px rounded-circle border border-3 border-white dark:border-gray-700">
                          <img src="/assets/images/avatars/05.png" alt="Avatar-image"
                            class="w-32px h-32px rounded-circle border border-3 border-white dark:border-gray-700 ms-n2">
                          <img src="/assets/images/avatars/06.png" alt="Avatar-image"
                            class="w-32px h-32px rounded-circle border border-3 border-white dark:border-gray-700 ms-n2">
                          <img src="/assets/images/avatars/07.png" alt="Avatar-image"
                            class="w-32px h-32px rounded-circle border border-3 border-white dark:border-gray-700 ms-n2">
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="me-1 xl:me-2">
                          <span class="fs-7 xl:fs-6 text-dark dark:text-white">2,4k trusted us</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-5">
              <figure class="panel ratio ratio-1x1 rounded-2 overflow-hidden m-0">
                <img class="image media-cover" src="/assets/images/features/home-15-solution-01.png" alt="client image">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>