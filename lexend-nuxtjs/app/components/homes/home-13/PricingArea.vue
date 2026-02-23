<script setup>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// video popup  
import { useVideoModal } from "../../../composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/Q5PG0rMXgvw?si=uhzrlIvzSWwOe_F3';




</script>

<template>
  <div class="panel overflow-hidden mx-1 lg:mx-2 mt-1 xl:mt-2 rounded-2 xl:rounded-3 bg-secondary dark:bg-gray-800">

    <!-- Section start -->
    <div id="pricing" class="pricing section panel overflow-hidden">
      <div class="section-outer panel pt-6 sm:pt-8 xl:pt-10">
        <div class="container">
          <div class="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div
              class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 xl:mb-9 max-w-700px mx-auto text-center">
              <h2 class="h3 sm:h2 xl:h1 m-0">Scalable and affordable prices*</h2>
            </div>
            <div class="section-content panel">
              <Swiper class="swiper overflow-unset lg:overflow-hidden"
                data-uc-swiper="items: 1.05; gap: 8; active: 1; center: true; center-bounds: true;"
                data-uc-swiper-s="items: 2.1; gap: 16;" data-uc-swiper-m="items: 3; gap: 16;"
                data-uc-swiper-l="items: 3; gap: 24;" :loop="true" :spaceBetween="10"
                :slidesPerView="3" :pagination="{ el: '.swiper-pagination', clickable: true }" :breakpoints="{
                  0: { slidesPerView: 1, spaceBetween: 8 },
                  768: { slidesPerView: 2, spaceBetween: 16 },
                  1024: { slidesPerView: 3, spaceBetween: 16 },
                  1200: { slidesPerView: 3, spaceBetween: 24 }
                }">

                <SwiperSlide class="swiper-slide">
                  <div
                    class="pricing-box panel p-3 sm:px-3 sm:py-6 xl:px-5 xl:py-8 vstack items-start rounded-1-5 lg:rounded-2 bg-white dark:bg-opacity-5 text-dark shadow-xs">
                    <span class="pricing-box-title fs-3 ft-secondary fw-bold mb-narrow dark:text-white">Free</span>
                    <p class="pricing-box-desc fs-7 dark:text-white opacity-70">Basic features and reporting.</p>
                    <div class="pricing-box-price hstack gap-narrow items-end mt-3">
                      <h4 class="price h1 lg:display-6 xl:display-5 m-0 dark:text-white">$0</h4>
                      <span class="duration fs-7 dark:text-white opacity-70 mb-1">/mo</span>
                    </div>
                    <div class="pricing-box-cta vstack gap-1 justify-center text-center my-4">
                      <NuxtLink to="/sign-up"
                        class="btn btn-md xl:btn-lg btn-outline-dark dark:text-white dark:hover:text-dark dark:hover:bg-white border rounded-pill">
                        Start
                        for free</NuxtLink>
                      <span class="fs-7 dark:text-white opacity-70">No credit card required!</span>
                    </div>
                    <ul class="nav-y gap-1 fs-7 xl:fs-6 dark:text-white">
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Unlimited transcription</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Limited AI Summariesn</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>800 mins storage</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Record zoom, Gmeet, MS Teams, more</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <div
                    class="pricing-box panel p-3 sm:px-3 sm:py-6 xl:px-5 xl:py-8 vstack items-start rounded-1-5 lg:rounded-2 text-white dark:text-dark shadow-xs bg-gray-800 dark:bg-secondary">
                    <div class="pricing-box-title hstack gap-1 mb-narrow">
                      <span class="fs-3 ft-secondary fw-bold text-white dark:text-dark">Business</span>
                      <span class="fs-7 py-narrow px-2 rounded-pill bg-yellow text-dark">Most Popular</span>
                    </div>
                    <p class="pricing-box-desc fs-7 text-white dark:text-dark opacity-70">Manage your fast growing
                      team or business</p>
                    <div class="pricing-box-price hstack gap-narrow items-end mt-3">
                      <h4 class="price h1 lg:display-6 xl:display-5 m-0 text-white dark:text-dark">$49</h4>
                      <span class="duration fs-7 text-opacity-70 mb-1">/mo</span>
                    </div>
                    <div class="pricing-box-cta vstack gap-1 justify-center text-center my-4">
                      <NuxtLink to="/sign-up" class="btn btn-md xl:btn-lg btn-primary rounded-pill">Start a free
                        trial</NuxtLink>
                      <span class="fs-7 text-white dark:text-dark opacity-70">No credit card required.</span>
                    </div>
                    <ul class="nav-y gap-1 fs-7 xl:fs-6 text-white dark:text-dark">
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Unlimited transcription</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Limited AI Summariesn</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>800 mins storage</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Record zoom, Gmeet, MS Teams, more</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <div
                    class="pricing-box panel p-3 sm:px-3 sm:py-6 xl:px-5 xl:py-8 vstack items-start rounded-1-5 lg:rounded-2 bg-white dark:bg-opacity-5 text-dark shadow-xs">
                    <div class="pricing-box-title hstack gap-1 mb-narrow">
                      <span class="fs-3 ft-secondary fw-bold dark:text-white">Enterprise</span>
                      <span class="fs-7 py-narrow px-2 rounded-pill bg-quaternary">40% Off</span>
                    </div>
                    <p class="pricing-box-desc fs-7 dark:text-white opacity-70">For advanced security. control &
                      support</p>
                    <div class="pricing-box-price hstack gap-narrow items-end mt-3">
                      <h4 class="price h1 lg:display-6 xl:display-5 m-0 dark:text-white">$79</h4>
                      <span class="duration fs-7 dark:text-white opacity-70 mb-1">/mo</span>
                    </div>
                    <div class="pricing-box-cta vstack gap-1 justify-center text-center my-4">
                      <NuxtLink to="/sign-up"
                        class="btn btn-md xl:btn-lg btn-outline-dark dark:text-white dark:hover:text-dark dark:hover:bg-white border rounded-pill">
                        Get
                        in touch</NuxtLink>
                      <span class="fs-7 dark:text-white opacity-70">Let’s make it fit four you!</span>
                    </div>
                    <ul class="nav-y gap-1 fs-7 xl:fs-6 dark:text-white">
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Unlimited transcription</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Limited AI Summariesn</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>800 mins storage</span>
                        </div>
                      </li>
                      <li class="row child-cols items-start g-1">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>Record zoom, Gmeet, MS Teams, more</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
            <div class="section-footer panel vstack gap-2 items-center text-center mt-4 sm:mt-6">
              <span class="fs-7 xl:fs-6 ft-script text-gray-500 dark:text-gray-200">Prices are subject to change at any
                time and under any circumstances, and discounts are only temporary.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section end -->

    <div class="py-6 sm:py-8 xl:py-9">
      <div class="container">
        <hr class="w-100 h-2px m-0">
      </div>
    </div>

    <!-- Section start -->
    <div id="clients_feedbacks" class="clients-feedbacks section panel overflow-hidden swiper-parent">
      <div class="section-outer panel overflow-hidden pb-6 sm:pb-8 xl:pb-10">
        <div class="container">
          <div class="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-6 max-w-700px mx-auto text-center">
              <h2 class="h4 lg:h3 m-0">See what clients says:</h2>
            </div>
            <div class="section-content panel">
              <Swiper class="swiper overflow-unset"
                data-uc-swiper="items: 1.05; gap: 8; center: true; active: 1; dots: .swiper-pagination;"
                data-uc-swiper-s="items: 1.2; gap: 16;" data-uc-swiper-m="items: 1.3; gap: 16;"
                data-uc-swiper-l="items: 1.5; gap: 32;" :modules="[Pagination]" :loop="true" :spaceBetween="10"
                :slidesPerView="1.05" :pagination="{ el: '.swiper-pagination', clickable: true }" :center="true"
                :breakpoints="{
                  0: { slidesPerView: 1, spaceBetween: 8 },
                  768: { slidesPerView: 1, spaceBetween: 16 },
                  1024: { slidesPerView: 1, spaceBetween: 16 },
                  1200: { slidesPerView: 1.05, spaceBetween: 32 }
                }">

                <SwiperSlide class="swiper-slide" style="width: 848px !important; margin-right: 32px !important;">
                  <div
                    class="clients-item panel overflow-hidden rounded-2 xl:rounded-3 border border-1 bg-white dark:bg-opacity-5 dark:text-white">
                    <div class="row child-cols-12 sm:child-cols-6 g-0 col-match">
                      <div>
                        <div class="clients-item-video panel">
                          <figure class="clients-item-video panel ratio ratio-1x1 overflow-hidden h-100">
                            <img class="image media-cover" src="/assets/images/portrait/home-13-03.jpg"
                              alt="client image">
                            <div class="position-cover" data-uc-lightbox="video-autoplay: true; animation: scale;">
                              <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }"
                                class="position-absolute top-50 start-50 translate-middle uc-link w-80px h-80px xl:w-100px xl:h-100px rounded-circle cstack bg-black bg-opacity-50 backdrop-2">
                                <img class="w-32px h-32px text-white" src="/assets/images/common/icons/play.svg"
                                  alt="icon" data-uc-svg>
                              </a>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div class="clients-item-content panel vstack justify-between gap-3 xl:gap-4 p-3 lg:p-4 xl:p-6">
                          <div>
                            <p class="desc fs-6 sm:fs-7 lg:fs-5 lh-xxl text-gray dark:text-gray-100">Lexend has
                              transformed how our team works. We've cut meeting time by 30% and improved project
                              delivery by 25%. <br> The automation features alone saved our accounting team 15 hours
                              per week. Best software investment we've made this year.</p>
                          </div>
                          <div>
                            <h4 class="title h6 lg:h5 mb-0 lg:mb-narrow text-inherit">Harry Peterson</h4>
                            <span class="fs-7 lg:fs-6 text-gray-300 dark:text-gray-200">Operations Director at
                              Goodwell</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide" style="width: 848px !important; margin-right: 32px !important;">
                  <div
                    class="clients-item panel overflow-hidden rounded-2 xl:rounded-3 border border-1 bg-white dark:bg-opacity-5 dark:text-white">
                    <div class="row child-cols-12 sm:child-cols-6 g-0 col-match">
                      <div>
                        <div class="clients-item-video panel">
                          <figure class="clients-item-video panel ratio ratio-1x1 overflow-hidden h-100">
                            <img class="image media-cover" src="/assets/images/portrait/home-13-01.jpg"
                              alt="client image">
                            <div class="position-cover" data-uc-lightbox="video-autoplay: true; animation: scale;">
                              <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }"
                                class="position-absolute top-50 start-50 translate-middle uc-link w-80px h-80px xl:w-100px xl:h-100px rounded-circle cstack bg-black bg-opacity-50 backdrop-2">
                                <img class="w-32px h-32px text-white" src="/assets/images/common/icons/play.svg"
                                  alt="icon" data-uc-svg>
                              </a>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div class="clients-item-content panel vstack justify-between gap-3 xl:gap-4 p-3 lg:p-4 xl:p-6">
                          <div>
                            <p class="desc fs-6 sm:fs-7 lg:fs-5 lh-xxl text-gray dark:text-gray-100">Lexend has
                              transformed how our team works. We've cut meeting time by 30% and improved project
                              delivery by 25%. <br> The automation features alone saved our accounting team 15 hours
                              per week. Best software investment we've made this year.</p>
                          </div>
                          <div>
                            <h4 class="title h6 lg:h5 mb-0 lg:mb-narrow text-inherit">Mark Rodriguez</h4>
                            <span class="fs-7 lg:fs-6 text-gray-300 dark:text-gray-200">Operations Director at
                              Goodwell</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide" style="width: 848px !important; margin-right: 32px !important;">
                  <div
                    class="clients-item panel overflow-hidden rounded-2 xl:rounded-3 border border-1 bg-white dark:bg-opacity-5 dark:text-white">
                    <div class="row child-cols-12 sm:child-cols-6 g-0 col-match">
                      <div>
                        <div class="clients-item-video panel">
                          <figure class="clients-item-video panel ratio ratio-1x1 overflow-hidden h-100">
                            <img class="image media-cover" src="/assets/images/portrait/home-13-02.jpg"
                              alt="client image">
                            <div class="position-cover" data-uc-lightbox="video-autoplay: true; animation: scale;">
                              <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }"
                                class="position-absolute top-50 start-50 translate-middle uc-link w-80px h-80px xl:w-100px xl:h-100px rounded-circle cstack bg-black bg-opacity-50 backdrop-2">
                                <img class="w-32px h-32px text-white" src="/assets/images/common/icons/play.svg"
                                  alt="icon" data-uc-svg>
                              </a>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div class="clients-item-content panel vstack justify-between gap-3 xl:gap-4 p-3 lg:p-4 xl:p-6">
                          <div>
                            <p class="desc fs-6 sm:fs-7 lg:fs-5 lh-xxl text-gray dark:text-gray-100">Lexend has
                              transformed how our team works. We've cut meeting time by 30% and improved project
                              delivery by 25%. <br> The automation features alone saved our accounting team 15 hours
                              per week. Best software investment we've made this year.</p>
                          </div>
                          <div>
                            <h4 class="title h6 lg:h5 mb-0 lg:mb-narrow text-inherit">Sané Hommels</h4>
                            <span class="fs-7 lg:fs-6 text-gray-300 dark:text-gray-200">Operations Director at
                              Goodwell</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> 

              </Swiper>
            </div>
            <div class="section-footer panel mt-6 sm:mt-6 h-8px">
              <div
                class="swiper-pagination position-absolute bottom-0 text-primary dark:text-quaternary m-0 justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section end -->
  </div>
  <CommonVideoModal />


</template>