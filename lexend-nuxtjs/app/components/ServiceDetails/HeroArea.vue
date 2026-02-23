<template>
  <div id="hero_header" class="hero-header section panel overflow-hidden mx-2" style="padding-bottom: 8rem; padding-top: 4rem;">
    <div class="position-cover bg-gradient-to-t from-secondary to-transparent dark:from-gray-800 rounded-2"></div>
    <div class="section-outer panel py-6 lg:py-8 xl:py-10 xl:pt-8">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="row child-cols-12 lg:child-cols-6 items-center g-2 lg:g-4"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div class="panel vstack gap-narrow lg:gap-2">
              <h1 class="h2 md:h1 lg:display-6 xl:display-3 xl:mb-2">Web & App Development</h1>
              <p class="fs-6 fw-bold text-muted">Starting at $10,000</p>
            </div>
            <div class="panel">
              <p class="fs-6 lg:fs-5 xl:fs-4 text-muted">Build powerful, scalable applications that grow with your
                business. From responsive websites to native mobile apps, we deliver solutions that perform.</p>
              <div class="hstack items-center gap-2 mt-2 lg:mt-4">
                <NuxtLink to="/page-contact"
                  class="btn btn-sm btn-outline-primary dark:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-primary w-56px h-56px rounded-circle">
                  <i class="icon-narrow fw-bold unicon-arrow-up-right"></i>
                </NuxtLink>
                <span class="fs-6 fw-medium text-muted">Get in touch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>