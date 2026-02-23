<script setup>
import { ref } from "vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay } from "swiper/modules";



const isYearly = ref(false);

const togglePricing = (yearly) => {
  isYearly.value = yearly;
};

const tableShowHide = ref(false);
const toggleTable = () => {
  tableShowHide.value = !tableShowHide.value;
};



</script>


 
<template>
  <div id="pricing" class="pricing section panel overflow-hidden">
    <div class="section-outer panel py-6 xl:py-9 lg:mx-2 mt-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
      <div class="container">
        <div class="section-inner panel">
          <div class="pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div class="section-header vstack items-center gap-2 lg:gap-3">
              <span class="fs-7 fw-medium py-narrow px-2 border rounded-pill">Pricing</span>
              <h2 class="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">Affordable prices and scalable plans <span
                  class="text-tertiary dark:text-primary">to fit any business size</span></h2>
            </div>
            <div class="panel w-100">
              <ul
                class="uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto bg-white shadow-xs"
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
              <div class="uc-switcher mt-4 lg:mt-6">
                <li :class="`${!isYearly ? 'uc-active' : ''}`" :style="`display: ${!isYearly ? 'block' : 'none'}`">
                  <Swiper class="swiper overflow-unset lg:overflow-hidden" :modules="[Autoplay]" :loop="true"
                    :spaceBetween="10" :slidesPerView="3" :watchSlidesProgress="true" :watchOverflow="false"
                    :speed="7000" :allowTouchMove="false" :disableOnInteraction="true" :breakpoints="{
                      0: { slidesPerView: 1.1, spaceBetween: 8 },
                      768: { slidesPerView: 2.1, spaceBetween: 16 },
                      1024: { slidesPerView: 3, spaceBetween: 16 },
                      1200: { slidesPerView: 3, spaceBetween: 24 }
                    }">
                    <SwiperSlide class="swiper-slide">
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs">
                        <span
                          class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Starter</span>
                        <p class="pricing-box-desc opacity-70">For individuals, freelancers</p>
                        <div class="pricing-box-price hstack gap-narrow items-end mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$49</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
                        <hr>
                        <ul class="nav-y gap-1 fs-6">
                          <li class="mb-1"><b>Standout features</b></li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                            Reliable</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover
                            Data Everywhere</li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data with
                            Context</li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Risk Management
                          </li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Privacy
                            Compliance</li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Third-Party
                            Management</li>
                        </ul>
                        <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/sign-up" class="btn btn-md btn-ghost-tertiary border"
                            style="color: #025864 !important; background: rgb(229.7, 238.3, 239.5) !important;">Try for
                            free</NuxtLink>
                          <span class="fs-7 opacity-70">No credit card required!</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs">
                        <span class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Pro</span>
                        <p class="pricing-box-desc opacity-70">For startups, agencies</p>
                        <div class="pricing-box-price hstack gap-narrow items-end mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$89</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
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
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Privacy
                            Compliance</li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Third-Party
                            Management</li>
                        </ul>
                        <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/sign-up" class="btn btn-md btn-primary border">Try for free</NuxtLink>
                          <span class="fs-7 opacity-70">No credit card required!</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs">
                        <span
                          class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Business</span>
                        <p class="pricing-box-desc opacity-70">For large business, companies</p>
                        <div class="pricing-box-price hstack gap-narrow items-end mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$249</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
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
                        <div class="pricing-box-cta vstack items-center gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/page-contact-2" class="btn btn-md btn-ghost-tertiary border w-100"
                            style="color: #025864 !important; background: rgb(229.7, 238.3, 239.5) !important;">Get in
                            touch</NuxtLink>
                          <a href="#" class="uc-link fs-7 fw-medium border-bottom text-tertiary">Learn more</a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </li>
                <li :class="`${isYearly ? 'uc-active' : ''}`" :style="`display: ${isYearly ? 'block' : 'none'}`">
                  <Swiper class="swiper overflow-unset lg:overflow-hidden"
                    data-uc-swiper="items: 1.1; gap: 8; center: true; center-bounds: true;"
                    data-uc-swiper-s="items: 2.1; gap: 16;" data-uc-swiper-m="items: 3; gap: 16;"
                    data-uc-swiper-l="items: 3; gap: 24;" :modules="[Autoplay]" :autoplay="{
                      delay: 7000,
                    }" :loop="true" :spaceBetween="10" :slidesPerView="3" :breakpoints="{
                      0: { slidesPerView: 1, spaceBetween: 8 },
                      576: { slidesPerView: 1, spaceBetween: 16 },
                      768: { slidesPerView: 3, spaceBetween: 16 },
                      1024: { slidesPerView: 3, spaceBetween: 24 },
                      1200: { slidesPerView: 3, spaceBetween: 24 }
                    }">
                    <SwiperSlide class="swiper-slide">
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs">
                        <span
                          class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Starter</span>
                        <p class="pricing-box-desc opacity-70">For individuals, freelancers</p>
                        <div class="pricing-box-price hstack gap-narrow items-end mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$29</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
                        <hr>
                        <ul class="nav-y gap-1 fs-6">
                          <li class="mb-1"><b>Standout features</b></li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Fast and
                            Reliable</li>
                          <li><i class="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"></i> Discover
                            Data Everywhere</li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Enrich Data with
                            Context</li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Risk Management
                          </li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Privacy
                            Compliance</li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Third-Party
                            Management</li>
                        </ul>
                        <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/sign-up" class="btn btn-md btn-ghost-tertiary border"
                            style="color: #025864 !important; background: rgb(229.7, 238.3, 239.5) !important;">Try for
                            free</NuxtLink>
                          <span class="fs-7 opacity-70">No credit card required!</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs">
                        <span class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Pro</span>
                        <p class="pricing-box-desc opacity-70">For startups, agencies</p>
                        <div class="pricing-box-price hstack gap-narrow items-end mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$79</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
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
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Privacy
                            Compliance</li>
                          <li><i class="icon icon-narrow unicon-close fw-bold ltr:me-1 rtl:ms-1"></i> Third-Party
                            Management</li>
                        </ul>
                        <div class="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/sign-up" class="btn btn-md btn-primary border">Try for free</NuxtLink>
                          <span class="fs-7 opacity-70">No credit card required!</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <div
                        class="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs">
                        <span
                          class="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">Business</span>
                        <p class="pricing-box-desc opacity-70">For large business, companies</p>
                        <div class="pricing-box-price hstack gap-narrow items-end mt-2">
                          <h4 class="price h1 lg:display-5 m-0 text-inherit">$229</h4>
                          <span class="duration fs-7 opacity-70">/ month</span>
                        </div>
                        <p class="pricing-box-bill fs-7 opacity-70">Billed once yearly</p>
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
                        <div class="pricing-box-cta vstack items-center gap-1 justify-center text-center mt-4">
                          <NuxtLink to="/page-contact-2" class="btn btn-md btn-ghost-tertiary border w-100"
                            style="color: #025864 !important; background: rgb(229.7, 238.3, 239.5) !important;">Get in
                            touch</NuxtLink>
                          <span class="uc-link fs-7 fw-medium border-bottom text-tertiary">Learn more</span>
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </li>
              </div>
              <p class="text-center mt-4 lg:mt-6">*Yearly discount available on select plans.</p>
            </div> 

            <a @click="toggleTable"
              class="pricing-full-features-toggle btn btn-md btn-outline-tertiary dark:text-primary border px-3 rounded-pill"
              data-uc-toggle="target: #pricing-full-features; animation: uc-animation-fade" role="button"
              style="transform: translateY(0px); opacity: 1; color: #025864 !important; cursor: pointer !important; background: rgb(229.7, 238.3, 239.5) !important;">
              <span><i class="icon-1 fw-bold unicon-add"></i> Full list of features</span>
            </a>




          </div>  
          <div class="pricing-features panel overflow-auto p-2 bg-white text-dark rounded-1-5 lg:rounded-2 mt-4 lg:mt-6"
            id="pricing-full-features" 
             v-show="tableShowHide"
             >
            <table class="uc-table uc-table-divider uc-table-light">
              <thead class="table-head sticky-top z-1">
                <tr class="table-row border-white">
                  <th class="table-header-cell min-w-300px" scope="row">
                    <div class="text-transparent"><span>Nom du forfait</span></div>
                  </th>
                  <th class="table-header-cell min-w-150px w-1/5" scope="col" id="plan-1">
                    <div class="title">
                      <div class="h6 lg:h5 m-0 text-dark"><span>Starter</span></div>
                    </div>
                  </th>
                  <th class="table-header-cell min-w-150px w-1/5" scope="col" id="plan-2">
                    <div class="title">
                      <div class="h6 lg:h5 m-0 text-dark"><span>Pro</span></div>
                    </div>
                  </th>
                  <th class="table-header-cell min-w-150px w-1/5" scope="col" id="plan-3">
                    <div class="title">
                      <div class="h6 lg:h5 m-0 text-dark"><span>Business</span></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr class="table-row table-heading border-0">
                  <th scope="colgroup" colspan="4" class="py-1 px-0">
                    <div class="h6 m-0 bg-secondary text-tertiary w-100 p-2 rounded-default"><span>AI Automation key
                        features</span></div>
                  </th>
                </tr>
                <tr class="table-row border-0">
                  <th scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Users</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div><span>1 user</span></div>
                  </td>
                  <td>
                    <div><span>5 users</span></div>
                  </td>
                  <td>
                    <div><span>Unlimited users</span></div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Tracking & notifications</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Real-time analytics</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Files uploads</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div><span>1GB</span></div>
                  </td>
                  <td>
                    <div><span>5GB</span></div>
                  </td>
                  <td>
                    <div><span>Unlimited</span></div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">CRM and Zapier integrations</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Unlimited team workspaces</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">SSO support</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody class="table-body">
                <tr class="table-row table-heading border-0">
                  <th scope="colgroup" colspan="4" class="py-1 px-0">
                    <div class="h6 m-0 bg-secondary text-tertiary w-100 p-2 rounded-default"><span>Products</span></div>
                  </th>
                </tr>
                <tr class="table-row border-0">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Email Template Builder</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Landing Page Builder</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Reporting & analytics</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">E-commerce and retail</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Large Community</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody class="table-body">
                <tr class="table-row table-heading border-0">
                  <th scope="colgroup" colspan="4" class="py-1 px-0">
                    <div class="h6 m-0 bg-secondary text-tertiary w-100 p-2 rounded-default"><span>Chatbots</span></div>
                  </th>
                </tr>
                <tr class="table-row border-0">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">To-Do List</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Reports</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Spreadsheets</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Collaboration</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Chatbots</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody class="table-body">
                <tr class="table-row table-heading border-0">
                  <th scope="colgroup" colspan="4" class="py-1 px-0">
                    <div class="h6 m-0 bg-secondary text-tertiary w-100 p-2 rounded-default"><span>AI-Powered
                        Solutions</span></div>
                  </th>
                </tr>
                <tr class="table-row border-0">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Automation</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                        <i class="icon-narrow unicon-close fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Teaming</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-6 fw-normal text-dark">Use Case</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


          <div class="pricing-benefits panel vstack gap-2 lg:gap-3 mt-6 lg:mt-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <h4 class="h4 m-0">What every plan gets you</h4>
            <div class="row child-cols-6 lg:child-cols g-2 col-match">
              <div>
                <div
                  class="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                  <span class="icon mb-narrow">
                    <img class="w-40px" src="/assets/images/custom-icons/home-8-icon-01.svg" alt="icon">
                  </span>
                  <span class="fs-6 fw-medium mb-narrow text-inherit">Enrich Data with Context & Risk Management</span>
                </div>
              </div>
              <div>
                <div
                  class="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                  <span class="icon mb-narrow">
                    <img class="w-40px" src="/assets/images/custom-icons/home-8-icon-08.svg" alt="icon">
                  </span>
                  <span class="fs-6 fw-medium mb-narrow text-inherit">Intuitive dashboard for at-a-glance
                    insights</span>
                </div>
              </div>
              <div>
                <div
                  class="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                  <span class="icon mb-narrow">
                    <img class="w-40px" src="/assets/images/custom-icons/home-8-icon-07.svg" alt="icon">
                  </span>
                  <span class="fs-6 fw-medium mb-narrow text-inherit">Automated data analysis and reporting</span>
                </div>
              </div>
              <div>
                <div
                  class="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                  <span class="icon mb-narrow">
                    <img class="w-40px" src="/assets/images/custom-icons/home-8-icon-04.svg" alt="icon">
                  </span>
                  <span class="fs-6 fw-medium mb-narrow text-inherit">Scalable plans to fit any business size</span>
                </div>
              </div>
              <div>
                <div
                  class="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                  <span class="icon mb-narrow">
                    <img class="w-40px" src="/assets/images/custom-icons/home-8-icon-05.svg" alt="icon">
                  </span>
                  <span class="fs-6 fw-medium mb-narrow text-inherit">Third-Party Management & AI-Powered Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>