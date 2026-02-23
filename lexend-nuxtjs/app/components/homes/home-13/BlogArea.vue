<script setup>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

</script>

<template>
  <div id="blog_posts" class="blog-posts section panel overflow-hidden swiper-parent">
    <div
      class="section-outer panel overflow-hidden py-6 sm:py-8 xl:py-10 lg:mx-2 rounded-2 xl:rounded-3 bg-secondary dark:bg-gray-800">
      <div class="container">
        <div class="section-inner panel"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div
            class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 xl:mb-8 max-w-700px mx-auto text-center">
            <h2 class="h3 sm:h2 xl:h1 m-0">Latest from <span class="text-primary dark:text-quaternary">our
                insights</span></h2>
          </div>
          <div class="section-content panel">
            <Swiper class="swiper overflow-unset lg:overflow-hidden pt-2"
              data-uc-swiper="items: 1.1; gap: 8; center: true; dots: .swiper-pagination;"
              data-uc-swiper-s="items: 2.3; gap: 8; active: 1; center: true;"
              data-uc-swiper-m="items: 3; gap: 8; center: false;" data-uc-swiper-l="items: 3; gap: 16; center: false;"

              :modules="[ Pagination]" 
              :loop="true"               
              :spaceBetween="10" 
              :slidesPerView="3"    
              :pagination="{ el: '.swiper-pagination', clickable: true }" 
              
              :breakpoints="{
                0: { slidesPerView: 1, spaceBetween: 8 },
                768: { slidesPerView: 2, spaceBetween: 8 },
                1024: { slidesPerView: 3, spaceBetween: 8 },
                1200: { slidesPerView: 3, spaceBetween: 16 }
              }"
              >
               
                <SwiperSlide class="swiper-slide">
                  <article
                    class="post type-post panel overflow-hidden vstack p-2 border bg-white dark:bg-opacity-5 duration-150 hover:-translate-y-1 rounded-1-5">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src="/assets/images/blog/post-7.jpg" alt="Why Traditional Agency Models Are Failing">
                      <NuxtLink to="/blog-details" class="position-cover"
                        data-caption="Why Traditional Agency Models Are Failing"></NuxtLink>
                    </figure>
                    <div class="panel vstack justify-between gap-2 p-1 pt-2 xl:p-2">
                      <div class="content vstack gap-1 xl:gap-2">
                        <NuxtLink to="/blog-category"
                          class="post-excrept fs-7 text-uppercase text-none text-gray-300 dark:text-gray-200">Marketing
                        </NuxtLink>
                        <NuxtLink class="text-none" to="/blog-details">
                          <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4 dark:text-white"><span>Why Traditional
                              Agency Models Are Failing</span></h3>
                        </NuxtLink>
                      </div>
                      <NuxtLink to="/blog-details"
                        class="uc-link text-primary dark:text-quaternary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                        <span>Read this article</span>
                        <i class="position-relative icon unicon-arrow-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                      </NuxtLink>
                    </div>
                  </article>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <article
                    class="post type-post panel overflow-hidden vstack p-2 border bg-white dark:bg-opacity-5 duration-150 hover:-translate-y-1 rounded-1-5">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src="/assets/images/blog/post-8.jpg" alt="How to Budget for Based Predictable Growth">
                      <NuxtLink to="/blog-details-2" class="position-cover"
                        data-caption="How to Budget for Based Predictable Growth"></NuxtLink>
                    </figure>
                    <div class="panel vstack justify-between gap-2 p-1 pt-2 xl:p-2">
                      <div class="content vstack gap-1 xl:gap-2">
                        <NuxtLink to="/blog-category"
                          class="post-excrept fs-7 text-uppercase text-none text-gray-300 dark:text-gray-200">Planing
                        </NuxtLink>
                        <NuxtLink class="text-none" to="/blog-details-2">
                          <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4 dark:text-white"><span>How to Budget for
                              Based Predictable Growth</span></h3>
                        </NuxtLink>
                      </div>
                      <NuxtLink to="/blog-details-2"
                        class="uc-link text-primary dark:text-quaternary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                        <span>Read this article</span>
                        <i class="position-relative icon unicon-arrow-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                      </NuxtLink>
                    </div>
                  </article>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <article
                    class="post type-post panel overflow-hidden vstack p-2 border bg-white dark:bg-opacity-5 duration-150 hover:-translate-y-1 rounded-1-5">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src="/assets/images/blog/post-9.jpg" alt="Maximize Value from your Marketing Subscription">
                      <NuxtLink to="/blog-details-3" class="position-cover"
                        data-caption="Maximize Value from your Marketing Subscription"></NuxtLink>
                    </figure>
                    <div class="panel vstack justify-between gap-2 p-1 pt-2 xl:p-2">
                      <div class="content vstack gap-1 xl:gap-2">
                        <NuxtLink to="/blog-category"
                          class="post-excrept fs-7 text-uppercase text-none text-gray-300 dark:text-gray-200">Digital
                        </NuxtLink>
                        <NuxtLink class="text-none" to="/blog-details-3">
                          <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4 dark:text-white"><span>Maximize Value
                              from your Marketing Subscription</span></h3>
                        </NuxtLink>
                      </div>
                      <NuxtLink to="/blog-details-3"
                        class="uc-link text-primary dark:text-quaternary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                        <span>Read this article</span>
                        <i class="position-relative icon unicon-arrow-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                      </NuxtLink>
                    </div>
                  </article>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <article
                    class="post type-post panel overflow-hidden vstack p-2 border bg-white dark:bg-opacity-5 duration-150 hover:-translate-y-1 rounded-1-5">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src="/assets/images/blog/post-5.jpg" alt="Leading work from tasks management">
                      <NuxtLink to="/blog-details-2" class="position-cover"
                        data-caption="Leading work from tasks management"></NuxtLink>
                    </figure>
                    <div class="panel vstack justify-between gap-2 p-1 pt-2 xl:p-2">
                      <div class="content vstack gap-1 xl:gap-2">
                        <NuxtLink to="/blog-category"
                          class="post-excrept fs-7 text-uppercase text-none text-gray-300 dark:text-gray-200">Business
                        </NuxtLink>
                        <NuxtLink class="text-none" to="/blog-details-2">
                          <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4 dark:text-white"><span>Leading work from
                              tasks management</span></h3>
                        </NuxtLink>
                      </div>
                      <NuxtLink to="/blog-details-2"
                        class="uc-link text-primary dark:text-quaternary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                        <span>Read this article</span>
                        <i class="position-relative icon unicon-arrow-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                      </NuxtLink>
                    </div>
                  </article>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <article
                    class="post type-post panel overflow-hidden vstack p-2 border bg-white dark:bg-opacity-5 duration-150 hover:-translate-y-1 rounded-1-5">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src="/assets/images/blog/post-4.jpg" alt="Team solve today’s biggest challenges">
                      <NuxtLink to="/blog-details" class="position-cover"
                        data-caption="Team solve today’s biggest challenges"></NuxtLink>
                    </figure>
                    <div class="panel vstack justify-between gap-2 p-1 pt-2 xl:p-2">
                      <div class="content vstack gap-1 xl:gap-2">
                        <NuxtLink to="/blog-category"
                          class="post-excrept fs-7 text-uppercase text-none text-gray-300 dark:text-gray-200">Design
                        </NuxtLink>
                        <NuxtLink class="text-none" to="/blog-details">
                          <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4 dark:text-white"><span>Team solve today’s
                              biggest challenges</span></h3>
                        </NuxtLink>
                      </div>
                      <NuxtLink to="/blog-details"
                        class="uc-link text-primary dark:text-quaternary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                        <span>Read this article</span>
                        <i class="position-relative icon unicon-arrow-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                      </NuxtLink>
                    </div>
                  </article>
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
</template>