<template>
  <div id="hero_header" class="hero-header hero-five-scene section panel overflow-hidden">
    <div class="position-cover bg-gradient-to-t from-secondary to-white dark:from-gray-800 dark:to-gray-900"></div>
    <div class="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="row child-cols-12 justify-center lg:justify-between items-center g-6 lg:g-0">
            <div class="sm:col-8 lg:col-5">
              <div class="panel vstack gap-2 text-center lg:text-start rtl:lg:text-end xl:me-4"
                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                <h1 class="h2 sm:display-6 xl:display-4 fw-light mb-1 xl:mb-2">Use Data & AI, Responsibly</h1>
                <p class="fs-6 xl:fs-4">Unlock your productivity potential with our <br class="d-none lg:d-block">
                  intuitive and powerful to-do app. Manage tasks, set priorities, collaborate with your team, and track
                  progress effortlessly.</p>
                <div class="vstack gap-1 mt-2 xl:mt-4">
                  <form class="row child-cols g-1">
                    <div>
                      <div class="form-group inline-block">
                        <input type="email" class="form-control rounded-default h-48px w-full text-black bg-white"
                          placeholder="Enter your email" required>
                      </div>
                    </div>
                    <div class="col-12 sm:col-auto">
                      <button class="btn btn-md btn-primary rounded-default h-48px w-100 lg:min-w-150px text-white">Get
                        a demo</button>
                    </div>
                  </form>
                  <p class="fs-7 text-dark dark:text-white text-opacity-70">We care about your data in our <NuxtLink
                      to="/page-privacy" class="uc-link text-underline dark:text-secondary">privacy policy</NuxtLink>.
                  </p>
                </div>
                <div class="vstack md:hstack justify-center lg:justify-start gap-2 mt-2 xl:mt-4">
                  <div class="hstack justify-center gap-0">
                    <img src="/assets/images/avatars/02.jpg" alt="Avatar-image"
                      class="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900">
                    <img src="/assets/images/avatars/05.png" alt="Avatar-image"
                      class="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2">
                    <img src="/assets/images/avatars/02.png" alt="Avatar-image"
                      class="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2">
                    <img src="/assets/images/avatars/01.jpg" alt="Avatar-image"
                      class="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2">
                  </div>
                  <div class="panel">
                    <ul class="nav-x justify-center md:justify-start gap-0">
                      <li><img src="/assets/images/common/star-rating.svg" alt="star-rating" class="w-20px text-yellow"
                          data-uc-svg></li>
                      <li><img src="/assets/images/common/star-rating.svg" alt="star-rating" class="w-20px text-yellow"
                          data-uc-svg></li>
                      <li><img src="/assets/images/common/star-rating.svg" alt="star-rating" class="w-20px text-yellow"
                          data-uc-svg></li>
                      <li><img src="/assets/images/common/star-rating.svg" alt="star-rating" class="w-20px text-yellow"
                          data-uc-svg></li>
                      <li><img src="/assets/images/common/star-rating.svg" alt="star-rating" class="w-20px text-yellow"
                          data-uc-svg></li>
                      <li><span class="fs-8 fw-medium ms-narrow">5.0</span></li>
                    </ul>
                    <span class="fs-7 fw-medium">Based on 200+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:col-auto">
              <div class="hero-scroll-scene panel sm:w-550px sm:h-600px lg:w-450px lg:h-500px xl:w-600px xl:h-650px"
                data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                <figure class="featured-image m-0 rounded ratio ratio-1x1 rounded-3 h-100 overflow-hidden ">
                  <img class="media-cover image " src="/assets/images/template/hero-05.jpg" alt="image">
                </figure>
                <div class="hero-five-contries position-absolute sm:w-300px lg:w-250px xl:w-350px d-none sm:d-block"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                  style="top: 20%;">
                  <img src="/assets/images/template/hero-05-countries.png" alt="Countries"
                    data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [-100, 0];">
                </div>
                <div class="hero-five-account position-absolute sm:w-250px lg:w-200px xl:w-300px d-none sm:d-block"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                  style="bottom: 20%;">
                  <img src="/assets/images/template/hero-05-account.png" alt="Account"
                    data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [100, 0];">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>