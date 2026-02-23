<script setup>
import { ref } from "vue";
 const isYearly = ref(false);

const togglePricing = (yearly) => {
  isYearly.value = yearly;
};

 


</script>



<template>
  <div id="pricing" class="pricing section panel overflow-hidden">
    <div
      class="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-50 dark:bg-tertiary-700 border border-tertiary-50 dark:border-white dark:border-opacity-15">
      <div
        class="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block">
      </div>
      <div
        class="position-absolute top-100 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block">
      </div>
      <div class="container">
        <div class="section-inner panel">
          <div class="pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div class="section-header vstack items-center gap-2 lg:gap-3">
              <span
                class="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">Pricing</span>
              <h2 class="h4 sm:h3 lg:h1 m-0 text-center max-w-650px mx-auto">Scalable plans <span
                  class="text-tertiary dark:text-primary">to fit any business size</span></h2>
            </div>
            <div class="panel">
              <ul
                class="uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto bg-white border border-dark dark:border-white dark:border-opacity-15"
                data-uc-switcher="swiping: false;"> 

                <li :class="{ 'uc-active': !isYearly }" role="presentation">
                  <a @click="togglePricing(false)" style="cursor: pointer" class="d-flex justify-center text-dark">Pay
                    Monthly</a>
                </li>
                <li :class="{ 'uc-active': isYearly }" role="presentation">
                  <a @click="togglePricing(true)" style="cursor: pointer" class="d-flex justify-center text-dark">Pay
                    Yearly</a>
                </li>


              </ul>
              <div class="uc-switcher mt-4 lg:mt-6 lg:w-800px">
                <li :class="`${!isYearly ? 'uc-active' : ''}`" :style="`display: ${!isYearly ? 'block' : 'none'}`">
                  <div class="panel">
                    <div class="row child-cols-12 lg:child-cols-6 g-2">
                      <div>
                        <div
                          class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 border border-dark dark:border-white dark:border-opacity-15 text-dark dark:text-white dark:bg-gradient-45 to-transparent">
                          <div class="hstack items-start justify-between gap-2">
                            <div>
                              <div class="vstack items-start gap-1">
                                <span
                                  class="pricing-box-title fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">FREE</span>
                                <p class="pricing-box-desc opacity-70">Free now and forever</p>
                              </div>
                            </div>
                            <div>
                              <div class="pricing-box-price">
                                <h4 class="price h2 fw-normal m-0 text-inherit"><sup class="fs-4 mt-n4">$</sup>0</h4>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <ul class="nav-y gap-1 fs-6">
                            <li class="mb-1"><b>Standout features</b></li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                              Reliable</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover
                              Data Everywhere</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data
                              with Context</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Risk
                              Management</li>
                          </ul>
                          <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                            <NuxtLink to="/sign-up"
                              class="btn btn-md btn-ghost-tertiary border border-dark dark:border-white dark:border-opacity-15 rounded-pill" style="color: #0c5263 !important;">Get
                              started</NuxtLink>
                            <span class="fs-7 opacity-70">No credit card required!</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 border border-dark dark:border-primary text-dark dark:text-white dark:bg-gradient-45 to-transparent">
                          <div class="hstack items-start justify-between gap-2">
                            <div>
                              <div class="vstack items-start gap-1">
                                <span
                                  class="pricing-box-title fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">Go
                                  PRO</span>
                                <p class="pricing-box-desc opacity-70">One month only</p>
                              </div>
                            </div>
                            <div>
                              <div class="pricing-box-price">
                                <h4 class="price h2 fw-normal m-0 text-inherit"><sup class="fs-4 mt-n4">$</sup>24</h4>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <ul class="nav-y gap-1 fs-6">
                            <li class="mb-1"><b>Standout features</b></li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                              Reliable</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover
                              Data Everywhere</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data
                              with Context</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Risk
                              Management</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Privacy
                              Compliance</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Third-Party
                              Management</li>
                          </ul>
                          <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                            <NuxtLink to="/sign-up"
                              class="btn btn-md btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill">Try
                              for free</NuxtLink>
                            <span class="fs-7 opacity-70">No credit card required!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li :class="`${isYearly ? 'uc-active' : ''}`" :style="`display: ${isYearly ? 'block' : 'none'}`">
                  <div class="panel">
                    <div class="row child-cols-12 lg:child-cols-6 g-2">
                      <div>
                        <div
                          class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 border border-dark dark:border-white dark:border-opacity-15 text-dark dark:text-white dark:bg-gradient-45 to-transparent">
                          <div class="hstack items-start justify-between gap-2">
                            <div>
                              <div class="vstack items-start gap-1">
                                <span
                                  class="pricing-box-title fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">FREE</span>
                                <p class="pricing-box-desc opacity-70">Free now and forever</p>
                              </div>
                            </div>
                            <div>
                              <div class="pricing-box-price">
                                <h4 class="price h2 fw-normal m-0 text-inherit"><sup class="fs-4 mt-n4">$</sup>0</h4>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <ul class="nav-y gap-1 fs-6">
                            <li class="mb-1"><b>Standout features</b></li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                              Reliable</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover
                              Data Everywhere</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data
                              with Context</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Risk
                              Management</li>
                          </ul>
                          <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                            <NuxtLink to="/sign-up"
                              class="btn btn-md btn-ghost-tertiary border border-dark dark:border-white dark:border-opacity-15 rounded-pill" style="color: #0c5263 !important;">Get
                              started</NuxtLink>
                            <span class="fs-7 opacity-70">No credit card required!</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 border border-dark dark:border-primary text-dark dark:text-white dark:bg-gradient-45 to-transparent">
                          <div class="hstack items-start justify-between gap-2">
                            <div>
                              <div class="vstack items-start gap-1">
                                <span
                                  class="pricing-box-title fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">Go
                                  PRO</span>
                                <p class="pricing-box-desc opacity-70">Monthly billed yearly</p>
                              </div>
                            </div>
                            <div>
                              <div class="pricing-box-price">
                                <h4 class="price h2 fw-normal m-0 text-inherit"><sup class="fs-4 mt-n4">$</sup>16</h4>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <ul class="nav-y gap-1 fs-6">
                            <li class="mb-1"><b>Standout features</b></li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                              Reliable</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover
                              Data Everywhere</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data
                              with Context</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Risk
                              Management</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Privacy
                              Compliance</li>
                            <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Third-Party
                              Management</li>
                          </ul>
                          <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                            <NuxtLink to="/sign-up"
                              class="btn btn-md btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill">Try
                              for free</NuxtLink>
                            <span class="fs-7 opacity-70">No credit card required!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <p class="text-center mt-4 lg:mt-6">*Yearly discount available on select plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>