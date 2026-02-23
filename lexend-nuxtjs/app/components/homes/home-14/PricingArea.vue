<script setup>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

</script>


<template>
    <div class="panel overflow-hidden mx-1 lg:mx-2 rounded-2 xl:rounded-3 bg-tertiary dark:bg-gray-800">
            <div class="d-none sm:d-block">
                <img src="/assets/images/vectors/tapes.svg" alt="victor" class="position-absolute h-300px xl:h-400px text-tertiary-100 dark:text-white dark:text-opacity-10" style="top: -12%; left: 6%;" data-uc-svg>
            </div>
            <div class="d-none sm:d-block">
                <img src="/assets/images/vectors/tapes.svg" alt="victor" class="position-absolute h-300px xl:h-400px text-tertiary-100 dark:text-white dark:text-opacity-10" style="bottom: -12%; right: 6%;" data-uc-svg>
            </div>

            <!-- Section start -->
            <div id="pricing" class="pricing section panel overflow-hidden">
                <div class="section-outer panel pt-6 sm:pt-8 xl:pt-10">
                    <div class="container xl:max-w-lg">
                        <div class="section-inner panel" data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                            <div class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 xl:mb-9 max-w-700px mx-auto text-center">
                                <h2 class="h3 sm:h2 xl:h1 m-0">Let’s get started?</h2>
                            </div>
                            <div class="section-content panel">
                                <div class="p-1 lg:p-2 border rounded-2 xl:rounded-3">
                                    <div class="row child-cols-12 sm:child-cols-6 g-0 lg:g-4">
                                        <div class="order-1 sm:order-0">
                                            <div class="pricing-box panel px-3 py-6 xl:px-5 xl:py-8 vstack items-center rounded-1-5 lg:rounded-2 text-center">
                                                <span class="pricing-box-title h3 lg:h2 xl:h1 ft-secondary mb-1 dark:text-white">Basic</span>
                                                <p class="pricing-box-desc fs-7 dark:text-white opacity-60">Basic features and reporting.</p>
                                                <div class="pricing-box-price hstack items-end justify-center gap-narrow my-3 sm:my-4">
                                                    <h4 class="price h1 sm:display-6 xl:display-5 m-0 dark:text-white">$5</h4>
                                                    <span class="duration fs-7 dark:text-white mb-1">/mo</span>
                                                </div>
                                                <div class="pricing-box-cta vstack gap-1 justify-center text-center">
                                                    <NuxtLink to="/sign-up" class="btn btn-md xl:btn-lg text-white dark:text-dark bg-dark dark:bg-white hover:bg-opacity-90 dark:hover:bg-opacity-80 rounded-pill">Sign up now</NuxtLink>
                                                    <span class="fs-7 dark:text-white opacity-60">Per 1 user per month!</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="order-0 sm:order-1">
                                            <div class="pricing-box panel px-3 py-6 xl:px-5 xl:py-8 vstack items-center rounded-1-5 lg:rounded-2 bg-white dark:bg-opacity-5 text-center">
                                                <span class="pricing-box-label position-absolute top-0 end-0 m-1 lg:m-2 fs-7 py-narrow px-2 rounded-pill bg-primary text-white">Most Popular</span>
                                                <span class="pricing-box-title h3 lg:h2 xl:h1 ft-secondary mb-1 dark:text-white">Pro</span>
                                                <p class="pricing-box-desc fs-7 dark:text-white opacity-60">Manage your fast growing team or business</p>
                                                <div class="pricing-box-price hstack items-end justify-center gap-narrow my-3 sm:my-4">
                                                    <h4 class="price h1 sm:display-6 xl:display-5 m-0 dark:text-white">$24</h4>
                                                    <span class="duration fs-7 dark:text-white mb-1">/mo</span>
                                                </div>
                                                <div class="pricing-box-cta vstack gap-1 justify-center text-center">
                                                    <NuxtLink to="/sign-up" class="btn btn-md xl:btn-lg btn-secondary hover:bg-opacity-10 rounded-pill">Sign up now</NuxtLink>
                                                    <span class="fs-7 dark:text-white opacity-60">For team of 5 members per month!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="fs-7 xl:fs-6 ft-script mt-4 sm:mt-6 text-gray-500 dark:text-gray-200 text-center">Prices are subject to change at any time and under any circumstances, and discounts are only temporary.</p>
                            </div>
                            <div class="section-footer panel vstack gap-2 items-center mt-6 sm:mt-8 xl:mt-9">
                                <NuxtLink to="/page-pricing-2" class="btn btn-md lg:btn-lg fs-6 px-4 hover:text-white dark:text-white dark:hover:text-dark bg-white dark:bg-gray-900 hover:bg-dark dark:hover:bg-white border rounded-pill">
                                    <span>See pricing details</span>
                                </NuxtLink>
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
                <div class="section-outer panel pb-6 sm:pb-8 xl:pb-10">
                    <div class="container">
                        <div class="section-inner panel xl:mx-2" data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                            <div class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 max-w-700px mx-auto text-center">
                                <h2 class="h4 lg:h3 m-0">See what clients says:</h2>
                            </div>
                            <div class="section-content panel">
                                <Swiper class="swiper overflow-unset lg:overflow-hidden"  
                                 :modules="[ Pagination]" :loop="true" :spaceBetween="10" :slidesPerView="3"  :watchOverflow="false" :speed="7000" 
                                 :pagination="{ el: '.swiper-pagination', clickable: true }" 
                                 :breakpoints="{
                                     0: { slidesPerView: 1.1, spaceBetween: 8 },
                                     768: { slidesPerView: 2.3, spaceBetween: 8 },
                                     1024: { slidesPerView: 3, spaceBetween: 8 },
                                     1200: { slidesPerView: 3, spaceBetween: 16 }
                                 }"
                                 >
                                   
                                        <SwiperSlide class="swiper-slide">
                                            <div class="clients-item panel vstack justify-between gap-3 xl:gap-5 p-3 lg:p-4 xl:p-5 border bg-white dark:bg-opacity-5 rounded-2 h-100">
                                                <div class="rating d-flex gap-0">
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                </div>
                                                <p class="desc fs-5 xl:fs-4 text-gray dark:text-gray-100">"Has transformed how our team works. We've cut meeting time by 30% and improved project delivery by 25%."</p>
                                                <div class="author panel hstack gap-2">
                                                    <img class="w-48px rounded-circle" src="/assets/images/avatars/15.png" alt="Harry Peterson">
                                                    <div class="panel vstack justify-center gap-0">
                                                        <h6 class="h6 m-0">Harry Peterson</h6>
                                                        <span class="fs-7 opacity-70">Project Manager at Elevate</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide class="swiper-slide">
                                            <div class="clients-item panel vstack justify-between gap-3 xl:gap-5 p-3 lg:p-4 xl:p-5 border bg-white dark:bg-opacity-5 rounded-2 h-100">
                                                <div class="rating d-flex gap-0">
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                </div>
                                                <p class="desc fs-5 xl:fs-4 text-gray dark:text-gray-100">"The automation features alone saved our accounting team per week best software investment we've made this year."</p>
                                                <div class="author panel hstack gap-2">
                                                    <img class="w-48px rounded-circle" src="/assets/images/avatars/16.png" alt="Mark Rodriguez">
                                                    <div class="panel vstack justify-center gap-0">
                                                        <h6 class="h6 m-0">Mark Rodriguez</h6>
                                                        <span class="fs-7 opacity-70">CTO at NexusCorps</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide class="swiper-slide">
                                            <div class="clients-item panel vstack justify-between gap-3 xl:gap-5 p-3 lg:p-4 xl:p-5 border bg-white dark:bg-opacity-5 rounded-2 h-100">
                                                <div class="rating d-flex gap-0">
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                </div>
                                                <p class="desc fs-5 xl:fs-4 text-gray dark:text-gray-100">"Implementation took less than a week, and the ROI was immediate. Our team adopted it faster than any other tool."</p>
                                                <div class="author panel hstack gap-2">
                                                    <img class="w-48px rounded-circle" src="/assets/images/avatars/17.png" alt="Sané Hommels">
                                                    <div class="panel vstack justify-center gap-0">
                                                        <h6 class="h6 m-0">Sané Hommels</h6>
                                                        <span class="fs-7 opacity-70">Operations Director at Goodwell</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide class="swiper-slide">
                                            <div class="clients-item panel vstack justify-between gap-3 xl:gap-5 p-3 lg:p-4 xl:p-5 border bg-white dark:bg-opacity-5 rounded-2 h-100">
                                                <div class="rating d-flex gap-0">
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                </div>
                                                <p class="desc fs-5 xl:fs-4 text-gray dark:text-gray-100">“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply!”</p>
                                                <div class="author panel hstack gap-2">
                                                    <img class="w-48px rounded-circle" src="/assets/images/avatars/06.png" alt="Mark Zellers">
                                                    <div class="panel vstack justify-center gap-0">
                                                        <h6 class="h6 m-0">Mark Zellers</h6>
                                                        <span class="fs-7 opacity-70">Director of Sales at Goodwell</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide class="swiper-slide">
                                            <div class="clients-item panel vstack justify-between gap-3 xl:gap-5 p-3 lg:p-4 xl:p-5 border bg-white dark:bg-opacity-5 rounded-2 h-100">
                                                <div class="rating d-flex gap-0">
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                    <img class="icon icon-1 w-20px text-yellow" src="/assets/images/star.svg" alt="star" data-uc-svg>
                                                </div>
                                                <p class="desc fs-5 xl:fs-4 text-gray dark:text-gray-100">“This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic.”</p>
                                                <div class="author panel hstack gap-2">
                                                    <img class="w-48px rounded-circle" src="/assets/images/avatars/02.jpg" alt="Natalia Larsson">
                                                    <div class="panel vstack justify-center gap-0">
                                                        <h6 class="h6 m-0">Natalia Larsson</h6>
                                                        <span class="fs-7 opacity-70">Lead Marketing at NexusCorps</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                  
                                </Swiper>
                            </div>
                            <div class="section-footer panel mt-6 sm:mt-6 h-8px">
                                <div class="swiper-pagination position-absolute bottom-0 text-primary dark:text-secondary m-0 justify-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section end -->
        </div>
</template>

 