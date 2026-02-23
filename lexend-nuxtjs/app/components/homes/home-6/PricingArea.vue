<template>
  <div id="pricing" class="pricing section panel overflow-hidden uc-dark">
    <div
      class="section-outer panel py-4 overflow-hidden md:py-6 xl:py-10 mx-2 rounded-2 lg:rounded-3 bg-secondary dark:bg-primary-700 dark:text-white">
      <div class="position-cover opacity-70 bg-contain pricing-6-bg" style="background-position: 50% 85%;"></div>
      <div class="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900"></div>
      <div class="container xl:max-w-xl">
        <div class="section-inner panel">
          <div class="panel vstack gap-4 sm:gap-6 xl:gap-8">
            <div class="heading vstack items-center gap-2 panel max-w-550px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
              <div class="cstack gap-1 py-1 px-2 border rounded-pill">
                <span class="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary"></span>
                <span class="fs-8 fw-bold text-uppercase">Pricing</span>
              </div>
              <h2 class="title h3 lg:h2 xl:h1 m-0 px-2">Simple <span
                  class="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">scalable</span>
                pricing.</h2>
              <p class="fs-6 xl:fs-5 text-opacity-70">No extra charges. No hidden fees.</p>
            </div>
            <div class="content panel">
              <div class="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});">
                <div>
                  <div
                    class="tier panel vstack justify-between p-2 rounded-1-5 lg:rounded-2 bg-white text-gray-900 text-center">
                    <header class="tier-header vstack gap-2 items-center p-2 md:p-4">
                      <h5 class="h5 lg:h4 m-0 text-primary">Free</h5>
                      <div class="d-flex gap-narrow items-end mt-1">
                        <h3 class="h1 lg:display-6 price m-0 text-dark">$0</h3>
                        <span class="h6 lg:h3 m-0 pb-narrow text-dark">/ mo</span>
                      </div>
                      <p class="desc lg:fs-5">Build a <b>hobby site</b> with every basic features.</p>
                      <NuxtLink class="btn btn-md lg:btn-lg btn-secondary w-100 mt-2" to="/sign-up">
                        <span>Get started</span>
                      </NuxtLink>
                      <p class="details">Free Forever!</p>
                    </header>
                    <div class="tier-body border rounded-1-5 p-2 md:p-4">
                      <ul class="nav-y gap-2 text-start">
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Use on 1 website</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Personal License</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">20 Basic Elements</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Basic Dynamic Data</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Basic Design Library</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Basic support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="tier panel vstack justify-between p-2 rounded-1-5 lg:rounded-2 bg-white text-gray-900 text-center">
                    <div
                      class="position-absolute top-0 end-0 cstack gap-1 py-narrow px-1 my-2 mx-3 bg-secondary rounded-default -rotate-2">
                      <span class="fs-8 fw-bold text-uppercase text-primary">Save $25</span>
                    </div>
                    <header class="tier-header vstack gap-2 items-center p-2 md:p-4">
                      <h5 class="h5 lg:h4 m-0 text-primary">Pro</h5>
                      <div class="d-flex gap-narrow items-end mt-1">
                        <h3 class="h1 lg:display-6 price m-0 text-dark">$79</h3>
                        <span class="h6 lg:h3 m-0 pb-narrow text-dark">/ mo</span>
                      </div>
                      <p class="desc lg:fs-5">Build <b>one website</b> with every pro feature.</p>
                      <NuxtLink class="btn btn-md lg:btn-lg btn-primary w-100 mt-2" to="/sign-up">
                        <span>Get started</span>
                      </NuxtLink>
                      <p class="details">Billed annually.</p>
                    </header>
                    <div class="tier-body border rounded-1-5 p-2 md:p-4">
                      <ul class="nav-y gap-2 text-start">
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Use on 1 website</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Personal License</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">100 Pro Elements</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Full Dynamic Data</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Full Design Library</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Priority support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="tier panel vstack justify-between p-2 rounded-1-5 lg:rounded-2 bg-white text-gray-900 text-center">
                    <header class="tier-header vstack gap-2 items-center p-2 md:p-4">
                      <h5 class="h5 lg:h4 m-0 text-primary">Agency</h5>
                      <div class="d-flex gap-narrow items-end mt-1">
                        <h3 class="h1 lg:display-6 price m-0 text-dark">$199</h3>
                        <span class="h6 lg:h3 m-0 pb-narrow text-dark">/ mo</span>
                      </div>
                      <p class="desc lg:fs-5">Build <b>unlimited websites</b> with every pro feature</p>
                      <NuxtLink class="btn btn-md lg:btn-lg btn-secondary w-100 mt-2" to="/sign-up">
                        <span>Get started</span>
                      </NuxtLink>
                      <p class="details">Billed annually.</p>
                    </header>
                    <div class="tier-body border rounded-1-5 p-2 md:p-4">
                      <ul class="nav-y gap-2 text-start">
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Use on unlimited websites</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Commercial License</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">100 Pro Elements</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Full Dynamic Data</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Full Design Library</span>
                        </li>
                        <li class="hstack items-start gap-2">
                          <i
                            class="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Priority support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center dark:text-white"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
              Prices exclude any applicable taxes.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>