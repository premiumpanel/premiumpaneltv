
<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import {  Pagination } from "swiper/modules";
 
 
</script>


<template>
  <div id="blog_posts" class="blog-posts section panel overflow-hidden swiper-parent">
    <div class="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
      <div class="container">
        <div class="section-inner panel">
          <div class="row child-cols-12 g-4 sm:g-6 xl:g-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div>
              <div class="heading vstack gap-2 justify-center items-center text-center panel">
                <h2 class="title h3 xl:h2 m-0">Latest from <span class="text-tertiary dark:text-primary">our blog</span>
                </h2>
              </div>
            </div>
            <div>
              <div class="content panel">
                <Swiper class="swiper swiper-match overflow-unset lg:overflow-hidden py-2"
                  data-uc-swiper="items: 1.1; gap: 16; dots: .swiper-pagination; center: true; center-bounds: true;"
                  data-uc-swiper-s="items: 2.3; gap: 24;"
                  data-uc-swiper-m="items: 3.22; gap: 24; center: false; center-bounds: false;"
                  data-uc-swiper-l="items: 3; gap: 24;"
                  :modules="[ Pagination]" :loop="true" :spaceBetween="10" :slidesPerView="3" :watchSlidesProgress="true" :watchOverflow="false" :speed="7000"
                  :allowTouchMove="false" :disableOnInteraction="true"
                  :pagination="{ el: '.swiper-pagination', clickable: true }"
                  :breakpoints="{
                    0: { slidesPerView: 1.1, spaceBetween: 16 },
                    768: { slidesPerView: 2.3, spaceBetween: 24 },
                    1024: { slidesPerView: 3.22, spaceBetween: 24 },
                    1200: { slidesPerView: 3, spaceBetween: 24 }
                  }"
                  >

                  

                    <SwiperSlide class="swiper-slide">
                      <article
                        class="post type-post panel overflow-hidden vstack p-1 bg-white text-dark duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-4.jpg" alt="Unlock productivity potential with AI">
                          <NuxtLink to="/blog-details" class="position-cover"
                            data-caption="Unlock productivity potential with AI"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4 text-dark"><span>Unlock productivity
                                potential with AI</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">How do you create compelling presentations that wow
                              your colleagues and impress your managers?</p>
                            <NuxtLink to="/blog-details"
                              class="uc-link text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                              <span>Read post</span>
                              <i
                                class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                            </NuxtLink>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article
                        class="post type-post panel overflow-hidden vstack p-1 bg-white text-dark duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-5.jpg" alt="Automate as fast as you can type with AI">
                          <NuxtLink to="/blog-details-2" class="position-cover"
                            data-caption="Automate as fast as you can type with AI"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details-2">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4 text-dark"><span>Automate as fast as you can
                                type</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">Linear helps streamline software projects, sprints,
                              tasks, and bug tracking. Here's how to get started.</p>
                            <NuxtLink to="/blog-details-2"
                              class="uc-link text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                              <span>Read post</span>
                              <i
                                class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                            </NuxtLink>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article
                        class="post type-post panel overflow-hidden vstack p-1 bg-white text-dark duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-6.jpg" alt="Intuitive & powerful AI automation app">
                          <NuxtLink to="/blog-details-3" class="position-cover"
                            data-caption="Intuitive & powerful AI automation app"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details-3">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4 text-dark"><span>Intuitive & powerful AI
                                automation app</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">The rise of RESTful APIs has been met by a rise in
                              tools for creating, testing, and managing them all across the web.</p>
                            <NuxtLink to="/blog-details-3"
                              class="uc-link text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                              <span>Read post</span>
                              <i
                                class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                            </NuxtLink>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article
                        class="post type-post panel overflow-hidden vstack p-1 bg-white text-dark duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-01.jpg" alt="Team solve today’s biggest challenges">
                          <NuxtLink to="/blog-details" class="position-cover"
                            data-caption="Team solve today’s biggest challenges"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4 text-dark"><span>Team solve today’s biggest
                                challenges</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">Join the thousands of satisfied users and take your
                              business to the next level today with our app.</p>
                            <NuxtLink to="/blog-details"
                              class="uc-link text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                              <span>Read post</span>
                              <i
                                class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                            </NuxtLink>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article
                        class="post type-post panel overflow-hidden vstack p-1 bg-white text-dark duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-02.jpg" alt="Leading work from tasks management">
                          <NuxtLink to="/blog-details-2" class="position-cover"
                            data-caption="Leading work from tasks management"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details-2">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4 text-dark"><span>Leading work from tasks
                                management</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">Help you keep track of leads, contacts, and deals,
                              making it easier to nurture and convert your leads.</p>
                            <NuxtLink to="/blog-details-2"
                              class="uc-link text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                              <span>Read post</span>
                              <i
                                class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                            </NuxtLink>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  

                  <div class="swiper-pagination position-relative mt-4 text-tertiary dark:text-primary"></div>
                </Swiper>
              </div>
            </div>
            <div class="text-center">
              <NuxtLink to="/blog" class="btn btn-md btn-primary border mx-auto">More articles</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>