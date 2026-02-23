<template>
  <section id="pricing" class="pricing section panel overflow-hidden">
    <div
      class="section-outer panel py-6 xl:py-10 lg:mx-2 mt-2 rounded-2 xl:rounded-3 bg-gray-800 dark:bg-gray-300 dark:bg-opacity-15 text-white">
      <div class="container">
        <div class="section-inner panel">
          <div class="pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8">
            <div class="section-header vstack items-center gap-2 lg:gap-3">
              <h2 class="h3 md:h1 lg:display-5 m-0 text-center max-w-650px mx-auto text-white">Seamless prices and
                scalable plans</h2>
            </div>

            <div class="panel w-100">
              <ul
                class="uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto border">
                <li :class="{ 'uc-active': activeTab === 'monthly' }">
                  <a class="d-flex justify-center text-white cursor-pointer" @click="switchTab('monthly')">Pay
                    monthly</a>
                </li>
                <li :class="{ 'uc-active': activeTab === 'yearly' }">
                  <a class="d-flex justify-center text-white cursor-pointer" @click="switchTab('yearly')">Pay yearly</a> 
                    <img class="position-absolute top-50 start-100 translate-middle-y mt-n3 ltr:ms-2 rtl:me-2 text-tertiary d-none md:d-block" src="/assets/images/template/50_off.svg" alt="50% OFF">
                </li>  
              </ul>

              <div class="mt-4 lg:mt-6">
                <!-- Monthly Plans -->
                <div v-if="activeTab === 'yearly'">
                  <swiper :modules="[SwiperNavigation, SwiperPagination]" :slides-per-view="3" :space-between="24"
                    :centeredSlides="false" class="overflow-unset lg:overflow-hidden">
                    <swiper-slide>
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-center rounded-1-5 lg:rounded-2 text-center bg-gray-300 bg-opacity-15 text-white">
                        <span
                          class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Starter</span>
                        <p class="pricing-box-desc opacity-70">For individuals, freelancers</p>
                        <div class="pricing-box-price hstack justify-center gap-narrow mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$24</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once monthly</p>
                        <hr>
                        <ul class="nav-y items-center gap-1 fs-6">
                          <li class="mb-1">Standout features</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                            Reliable</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover Data
                            Everywhere</li>
                        </ul>
                        <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/sign-up" class="btn btn-md btn-secondary w-100">Try for free</NuxtLink>
                          <span class="fs-7 opacity-70">No credit card required!</span>
                        </div>
                      </div>
                    </swiper-slide>

                    <swiper-slide>
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-center rounded-1-5 lg:rounded-2 text-center bg-secondary text-dark shadow-xs">
                        <span class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Pro</span>
                        <p class="pricing-box-desc opacity-70">For startups, agencies</p>
                        <div class="pricing-box-price hstack justify-center gap-narrow mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$48</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once monthly</p>
                        <hr>
                        <ul class="nav-y items-center gap-1 fs-6">
                          <li class="mb-1">Standout features</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                            Reliable</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover Data
                            Everywhere</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data
                            with Context</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Risk
                            Management</li>
                        </ul>
                        <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/sign-up" class="btn btn-md btn-primary border">Try for free</NuxtLink>
                          <span class="fs-7 opacity-70">No credit card required!</span>
                        </div>
                      </div>
                    </swiper-slide>

                    <swiper-slide>
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-center rounded-1-5 lg:rounded-2 text-center bg-gray-300 bg-opacity-15 text-white">
                        <span
                          class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Business</span>
                        <p class="pricing-box-desc opacity-70">For large business, companies</p>
                        <div class="pricing-box-price hstack justify-center gap-narrow mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$64</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once monthly</p>
                        <hr>
                        <ul class="nav-y items-center gap-1 fs-6">
                          <li class="mb-1">Standout features</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                            Reliable</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover Data
                            Everywhere</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data
                            with Context</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Risk
                            Management</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Privacy
                            Compliance</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Third-Party
                            Management</li>
                        </ul>
                        <div class="pricing-box-cta vstack items-center gap-2 justify-center text-center mt-4">
                          <NuxtLink to="/page-contact-2" class="btn btn-md btn-secondary w-100">Get in touch</NuxtLink>
                          <NuxtLink to="#" class="uc-link fs-7 fw-medium border-bottom text-secondary">Learn more
                          </NuxtLink>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>

                <!-- Yearly Plans -->
                <div v-if="activeTab === 'monthly'">
                  <swiper :modules="[SwiperNavigation, SwiperPagination]" :slides-per-view="3" :space-between="24"
                    :centeredSlides="false" class="overflow-unset lg:overflow-hidden">
                    <swiper-slide>
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-center rounded-1-5 lg:rounded-2 text-center bg-gray-300 bg-opacity-15 text-white">
                        <span
                          class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Starter</span>
                        <p class="pricing-box-desc opacity-70">For individuals, freelancers</p>
                        <div class="pricing-box-price hstack justify-center gap-narrow mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$12</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
                        <hr>
                        <ul class="nav-y items-center gap-1 fs-6">
                          <li class="mb-1">Standout features</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                            Reliable</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover Data
                            Everywhere</li>
                        </ul>
                        <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/sign-up" class="btn btn-md btn-secondary w-100">Try for free</NuxtLink>
                          <span class="fs-7 opacity-70">No credit card required!</span>
                        </div>
                      </div>
                    </swiper-slide>

                    <swiper-slide>
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-center rounded-1-5 lg:rounded-2 text-center bg-secondary text-dark shadow-xs">
                        <span class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Pro</span>
                        <p class="pricing-box-desc opacity-70">For startups, agencies</p>
                        <div class="pricing-box-price hstack justify-center gap-narrow mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$24</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
                        <hr>
                        <ul class="nav-y items-center gap-1 fs-6">
                          <li class="mb-1">Standout features</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                            Reliable</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover Data
                            Everywhere</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data
                            with Context</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Risk
                            Management</li>
                        </ul>
                        <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/sign-up" class="btn btn-md btn-primary border">Try for free</NuxtLink>
                          <span class="fs-7 opacity-70">No credit card required!</span>
                        </div>
                      </div>
                    </swiper-slide>

                    <swiper-slide>
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-center rounded-1-5 lg:rounded-2 text-center bg-gray-300 bg-opacity-15 text-white">
                        <span
                          class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Business</span>
                        <p class="pricing-box-desc opacity-70">For large business, companies</p>
                        <div class="pricing-box-price hstack justify-center gap-narrow mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$32</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
                        <hr>
                        <ul class="nav-y items-center gap-1 fs-6">
                          <li class="mb-1">Standout features</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                            Reliable</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover Data
                            Everywhere</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data
                            with Context</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Risk
                            Management</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Privacy
                            Compliance</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Third-Party
                            Management</li>
                        </ul>
                        <div class="pricing-box-cta vstack items-center gap-2 justify-center text-center mt-4">
                          <NuxtLink to="/page-contact-2" class="btn btn-md btn-secondary w-100">Get in touch</NuxtLink>
                          <NuxtLink to="#" class="uc-link fs-7 fw-medium border-bottom text-secondary">Learn more
                          </NuxtLink>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>

              <p class="text-center mt-4 lg:mt-6">*Yearly discount available on select plans.</p>
            </div>
            <div class="panel w-100 max-w-lg">
              <div class="row child-cols col-match items-center justify-center text-center gy-4 lg:gy-8"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});">
                <div>
                  <div class="fact-item panel vstack gap-1">
                    <h5 class="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary">280+</h5>
                    <p class="fw-medium">Track of leads</p>
                  </div>
                </div>
                <div>
                  <div class="fact-item panel vstack gap-1">
                    <h5 class="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary">90%</h5>
                    <p class="fw-medium">Satisfied users</p>
                  </div>
                </div>
                <div>
                  <div class="fact-item panel vstack gap-1">
                    <h5 class="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary">10.2k</h5>
                    <p class="fw-medium">Team collaborations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const activeTab = ref('monthly')

const switchTab = (tab) => {
  activeTab.value = tab
}
</script>