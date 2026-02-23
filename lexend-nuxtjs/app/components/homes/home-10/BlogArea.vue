<script setup>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

</script>


<template>
   <div id="blog_posts" class="blog-posts section panel overflow-hidden swiper-parent">
            <div class="section-outer panel py-6 lg:py-8 xl:py-10 mx-2 bg-secondary dark:bg-gray-300 dark:bg-opacity-15 rounded-1-5 lg:rounded-2 xl:rounded-3" data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                <div class="container">
                    <div class="section-inner panel vstack gap-4 lg:gap-8">
                        <div class="section-header vstack items-center gap-2 lg:gap-3">
                            <h2 class="h3 sm:h1 lg:display-5 m-0 text-center max-w-650px mx-auto">From the insights</h2>
                        </div>
                        <div class="section-content panel w-100">
                            <Swiper class="swiper swiper-match overflow-unset lg:overflow-hidden py-2" data-uc-swiper="items: 1.1; gap: 16; dots: .swiper-pagination; center: true; center-bounds: true;" data-uc-swiper-s="items: 2; gap: 24;" data-uc-swiper-m="items: 3; gap: 24;" data-uc-swiper-l="items: 3; gap: 24; center: false; center-bounds: false;"
                                :modules="[ Pagination]" :loop="true" :spaceBetween="10" :slidesPerView="3"  :watchOverflow="false" :speed="7000" 
                                :pagination="{ el: '.swiper-pagination', clickable: true }"
                                :allowTouchMove="false" :disableOnInteraction="true"
                                :breakpoints="{
                                    0: { slidesPerView: 1.1, spaceBetween: 16 },
                                    768: { slidesPerView: 2, spaceBetween: 24 },
                                    1024: { slidesPerView: 3, spaceBetween: 24 },
                                    1200: { slidesPerView: 3, spaceBetween: 24 }
                                }"
                            
                            >
                                
                                    <SwiperSlide class="swiper-slide">
                                        <article class="post type-post panel overflow-hidden vstack duration-150 hover:-translate-y-1">
                                            <figure class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                                                <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/blog/post-4.jpg" alt="Unlock productivity potential with AI">
                                                <NuxtLink to="/blog-details" class="position-cover" data-caption="Unlock productivity potential with AI"></NuxtLink>
                                            </figure>
                                            <div class="panel vstack items-center text-center gap-2 p-2">
                                                <NuxtLink class="text-none" to="/blog-details">
                                                    <h3 class="post-title h4 xl:h3 m-0"><span>Unlock productivity potential with AI</span></h3>
                                                </NuxtLink>
                                                <NuxtLink to="/blog-details" class="uc-link text-primary dark:text-tertiary fs-7 xl:fs-6 fw-bold">
                                                    <span>Read more</span>
                                                </NuxtLink>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    <SwiperSlide class="swiper-slide">
                                        <article class="post type-post panel overflow-hidden vstack duration-150 hover:-translate-y-1">
                                            <figure class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                                                <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/blog/post-5.jpg" alt="Automate as fast as you can type with AI">
                                                <NuxtLink to="/blog-details-2" class="position-cover" data-caption="Automate as fast as you can type with AI"></NuxtLink>
                                            </figure>
                                            <div class="panel vstack items-center text-center gap-2 p-2">
                                                <NuxtLink class="text-none" to="/blog-details-2">
                                                    <h3 class="post-title h4 xl:h3 m-0"><span>Automate as fast as you can type with AI</span></h3>
                                                </NuxtLink>
                                                <NuxtLink to="/blog-details-2" class="uc-link text-primary dark:text-tertiary fs-7 xl:fs-6 fw-bold">
                                                    <span>Read more</span>
                                                </NuxtLink>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    <SwiperSlide class="swiper-slide">
                                        <article class="post type-post panel overflow-hidden vstack duration-150 hover:-translate-y-1">
                                            <figure class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                                                <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/blog/post-6.jpg" alt="Intuitive & powerful AI automation app">
                                                <NuxtLink to="/blog-details-3" class="position-cover" data-caption="Intuitive & powerful AI automation app"></NuxtLink>
                                            </figure>
                                            <div class="panel vstack items-center text-center gap-2 p-2">
                                                <NuxtLink class="text-none" to="/blog-details-3">
                                                    <h3 class="post-title h4 xl:h3 m-0"><span>Intuitive & powerful AI automation app</span></h3>
                                                </NuxtLink>
                                                <NuxtLink to="/blog-details-3" class="uc-link text-primary dark:text-tertiary fs-7 xl:fs-6 fw-bold">
                                                    <span>Read more</span>
                                                </NuxtLink>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    <SwiperSlide class="swiper-slide">
                                        <article class="post type-post panel overflow-hidden vstack duration-150 hover:-translate-y-1">
                                            <figure class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                                                <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/blog/img-01.jpg" alt="Team solve today’s biggest challenges">
                                                <NuxtLink to="/blog-details" class="position-cover" data-caption="Team solve today’s biggest challenges"></NuxtLink>
                                            </figure>
                                            <div class="panel vstack items-center text-center gap-2 p-2">
                                                <NuxtLink class="text-none" to="/blog-details">
                                                    <h3 class="post-title h4 xl:h3 m-0"><span>Team solve today’s biggest challenges</span></h3>
                                                </NuxtLink>
                                                <NuxtLink to="/blog-details" class="uc-link text-primary dark:text-tertiary fs-7 xl:fs-6 fw-bold">
                                                    <span>Read more</span>
                                                </NuxtLink>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    <SwiperSlide class="swiper-slide">
                                        <article class="post type-post panel overflow-hidden vstack duration-150 hover:-translate-y-1">
                                            <figure class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                                                <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/blog/img-02.jpg" alt="Leading work from tasks management">
                                                <NuxtLink to="/blog-details-2" class="position-cover" data-caption="Leading work from tasks management"></NuxtLink>
                                            </figure>
                                            <div class="panel vstack items-center text-center gap-2 p-2">
                                                <NuxtLink class="text-none" to="/blog-details-2">
                                                    <h3 class="post-title h4 xl:h3 m-0"><span>Leading work from tasks management</span></h3>
                                                </NuxtLink>
                                                <NuxtLink to="/blog-details-2" class="uc-link text-primary dark:text-tertiary fs-7 xl:fs-6 fw-bold">
                                                    <span>Read more</span>
                                                </NuxtLink>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                               
                                <div class="swiper-pagination position-relative mt-4 text-primary dark:text-tertiary"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

 