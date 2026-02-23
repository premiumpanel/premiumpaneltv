
<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Navigation } from "swiper/modules";



</script>




<template>
    <div id="case_studies" class="case-studies section panel overflow-hidden gap-3 bg-secondary dark:bg-white dark:bg-opacity-5 mx-2 rounded-1-5 lg:rounded-2 swiper-parent">
            <div class="section-outer panel py-4 md:py-6 xl:py-9">
                <div class="container max-w-xl">
                    <div class="section-inner panel">
                        <div class="row child-cols-12 g-4 sm:g-6 xl:g-8" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                            <div>
                                <div class="panel vstack items-center gap-2 xl:gap-3 max-w-650px mx-auto text-center" data-anime="onview: -100; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                                    <h2 class="h3 lg:h2 xl:h1 m-0">Featured Projects</h2>
                                </div>
                            </div>
                            <div>
                                <div class="content panel">
                                    <Swiper class="swiper" data-uc-swiper="items: 1; gap: 16; next: .swiper-nav-next; prev: .swiper-nav-prev;" data-uc-swiper-s="items: 2; gap: 20;" data-uc-swiper-l="items: 3; gap: 24;"
                                     
                                    :loop="true" 
                                    :spaceBetween="10" 
                                    :slidesPerView="3"  
                                    :modules="[Navigation]"
                                    :navigation="{
                                        nextEl: '.swiper-nav-next',
                                        prevEl: '.swiper-nav-prev',
                                    }"
                                    :breakpoints="{
                                        0: {
                                            slidesPerView: 1, 
                                        },
                                        768: {
                                            slidesPerView: 2, 
                                        },
                                        1200: {
                                            slidesPerView: 3, 
                                        }
                                    }"
                                    >
                                     
                                            <SwiperSlide class="swiper-slide">
                                                <article class="post type-post panel overflow-hidden vstack gap-3 p-2 rounded-3 bg-white dark:bg-opacity-5">
                                                    <figure class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/projects/project-01.webp" alt="EcoShop Platform">
                                                        <a href="#" class="position-cover" data-caption="EcoShop Platform"></a>
                                                    </figure>
                                                    <div class="panel vstack gap-1 p-1">
                                                        <div class="post-meta hstack gap-1 panel overflow-hidden fs-7">
                                                            <a href="#" class="text-none fw-bold text-dark dark:text-white">E-commerce Website</a>
                                                            <span>•</span>
                                                            <span class="text-muted">4 months</span>
                                                        </div>
                                                        <a class="text-none" href="#">
                                                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>EcoShop Platform</span></h3>
                                                        </a>
                                                        <a href="#" class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                                                            <span>Read case study</span>
                                                            <i class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                                                        </a>
                                                    </div>
                                                </article>
                                            </SwiperSlide>
                                            <SwiperSlide class="swiper-slide">
                                                <article class="post type-post panel overflow-hidden vstack gap-3 p-2 rounded-3 bg-white dark:bg-opacity-5">
                                                    <figure class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/projects/project-02.webp" alt="StyleHub Boutique">
                                                        <a href="#" class="position-cover" data-caption="StyleHub Boutique"></a>
                                                    </figure>
                                                    <div class="panel vstack gap-1 p-1">
                                                        <div class="post-meta hstack gap-1 panel overflow-hidden fs-7">
                                                            <a href="#" class="text-none fw-bold text-dark dark:text-white">Web Application</a>
                                                            <span>•</span>
                                                            <span class="text-muted">2 weeks</span>
                                                        </div>
                                                        <a class="text-none" href="#">
                                                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>StyleHub Boutique</span></h3>
                                                        </a>
                                                        <a href="#" class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                                                            <span>Read case study</span>
                                                            <i class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                                                        </a>
                                                    </div>
                                                </article>
                                            </SwiperSlide>
                                            <SwiperSlide class="swiper-slide">
                                                <article class="post type-post panel overflow-hidden vstack gap-3 p-2 rounded-3 bg-white dark:bg-opacity-5">
                                                    <figure class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/projects/project-03.webp" alt="HealthTrack App">
                                                        <a href="#" class="position-cover" data-caption="HealthTrack App"></a>
                                                    </figure>
                                                    <div class="panel vstack gap-1 p-1">
                                                        <div class="post-meta hstack gap-1 panel overflow-hidden fs-7">
                                                            <a href="#" class="text-none fw-bold text-dark dark:text-white">Mobile App</a>
                                                            <span>•</span>
                                                            <span class="text-muted">1 month</span>
                                                        </div>
                                                        <a class="text-none" href="#">
                                                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>HealthTrack App</span></h3>
                                                        </a>
                                                        <a href="#" class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                                                            <span>Read case study</span>
                                                            <i class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                                                        </a>
                                                    </div>
                                                </article>
                                            </SwiperSlide>
                                            <SwiperSlide class="swiper-slide">
                                                <article class="post type-post panel overflow-hidden vstack gap-3 p-2 rounded-3 bg-white dark:bg-opacity-5">
                                                    <figure class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/projects/project-04.webp" alt="Corp Industries">
                                                        <a href="#" class="position-cover" data-caption="Corp Industries"></a>
                                                    </figure>
                                                    <div class="panel vstack gap-1 p-1">
                                                        <div class="post-meta hstack gap-1 panel overflow-hidden fs-7">
                                                            <a href="#" class="text-none fw-bold text-dark dark:text-white">Marketing Strategy</a>
                                                            <span>•</span>
                                                            <span class="text-muted">2 months</span>
                                                        </div>
                                                        <a class="text-none" href="#">
                                                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>Corp Industries</span></h3>
                                                        </a>
                                                        <a href="#" class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                                                            <span>Read case study</span>
                                                            <i class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                                                        </a>
                                                    </div>
                                                </article>
                                            </SwiperSlide>
                                            <SwiperSlide class="swiper-slide">
                                                <article class="post type-post panel overflow-hidden vstack gap-3 p-2 rounded-3 bg-white dark:bg-opacity-5">
                                                    <figure class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/projects/project-05.webp" alt="Thompson Industries">
                                                        <a href="#" class="position-cover" data-caption="Thompson Industries"></a>
                                                    </figure>
                                                    <div class="panel vstack gap-1 p-1">
                                                        <div class="post-meta hstack gap-1 panel overflow-hidden fs-7">
                                                            <a href="#" class="text-none fw-bold text-dark dark:text-white">UI/UX Design</a>
                                                            <span>•</span>
                                                            <span class="text-muted">2 weeks</span>
                                                        </div>
                                                        <a class="text-none" href="#">
                                                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>Thompson Industries</span></h3>
                                                        </a>
                                                        <a href="#" class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                                                            <span>Read case study</span>
                                                            <i class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                                                        </a>
                                                    </div>
                                                </article>
                                            </SwiperSlide>
                                            <SwiperSlide class="swiper-slide">
                                                <article class="post type-post panel overflow-hidden vstack gap-3 p-2 rounded-3 bg-white dark:bg-opacity-5">
                                                    <figure class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/projects/project-06.webp" alt="GreenTech Solutions">
                                                        <a href="#" class="position-cover" data-caption="GreenTech Solutions"></a>
                                                    </figure>
                                                    <div class="panel vstack gap-1 p-1">
                                                        <div class="post-meta hstack gap-1 panel overflow-hidden fs-7">
                                                            <a href="#" class="text-none fw-bold text-dark dark:text-white">Web Application</a>
                                                            <span>•</span>
                                                            <span class="text-muted">1 month</span>
                                                        </div>
                                                        <a class="text-none" href="#">
                                                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>GreenTech Solutions</span></h3>
                                                        </a>
                                                        <a href="#" class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                                                            <span>Read case study</span>
                                                            <i class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                                                        </a>
                                                    </div>
                                                </article>
                                            </SwiperSlide>
                                         
                                    </Swiper>
                                </div>
                            </div>
                            <div>
                                <div class="panel hstack justify-center gap-2">
                                    <div class="panel hstack items-center gap-narrow xl:gap-1 rtl:flex-row-reverse">
                                        <a href="#" class="swiper-nav swiper-nav-prev btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle text-primary dark:text-white hover:text-white bg-white dark:bg-gray-700 hover:bg-primary shadow-xs order-1">
                                            <span class="icon-1 xl:icon-2 unicon-arrow-left"></span>
                                        </a>
                                        <a href="#" class="swiper-nav swiper-nav-next btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle text-primary dark:text-white hover:text-white bg-white dark:bg-gray-700 hover:bg-primary shadow-xs order-2 rtl:order-0">
                                            <span class="icon-1 xl:icon-2 unicon-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

 