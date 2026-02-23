<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

 
 
</script>


<template>
  <div id="blog_posts" class="blog-posts section panel overflow-hidden swiper-parent">
    <div class="section-outer panel py-4 md:py-6 xl:py-10">
      <div class="container">
        <div class="section-inner panel">
          <div class="row child-cols-12 g-4 sm:g-6 xl:g-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div>
              <div class="heading vstack gap-2 justify-center items-center text-center panel"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                <h2 class="title h3 xl:h2 m-0">Latest from <span
                    class="px-1 bg-tertiary text-primary d-block lg:d-inline-block">our insights</span></h2>
              </div>
            </div>
            <div>
              <div class="content panel">
                <Swiper class="swiper p-2 swiper-match"
                  data-uc-swiper="items: 1.1; gap: 16; loop: true; next: .swiper-nav-next; prev: .swiper-nav-prev;"
                  data-uc-swiper-s="items: 2.3; gap: 24;" data-uc-swiper-m="items: 3.22; gap: 24;"
                  data-uc-swiper-l="items: 4; gap: 24;"

                  :modules="[Autoplay, Navigation]" :autoplay="{
                    delay: 7000,
                  }" 
                  :loop="true" 
                  :spaceBetween="10" 
                  :slidesPerView="4"  
                  :navigation="{
                    nextEl: '.swiper-nav-next',
                    prevEl: '.swiper-nav-prev',
                  }"
                  :breckpoints="{
                    0: {
                      slidesPerView: 2.3, 
                    },
                    768: {
                      slidesPerView: 2.3, 
                    },
                    992: {
                      slidesPerView: 3.22, 
                    },
                    1200: {
                      slidesPerView: 4, 
                    }
                  }"
                  > 

                    <SwiperSlide class="swiper-slide">
                      <article
                        class="post type-post panel overflow-hidden vstack border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-4.jpg" alt="Unlock productivity potential with AI">
                          <NuxtLink to="/blog-details" class="position-cover"
                            data-caption="Unlock productivity potential with AI"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4"><span>Unlock productivity potential with
                                AI</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">How do you create compelling presentations that wow
                              your colleagues and impress your managers?</p>
                            <NuxtLink to="/blog-details"
                              class="uc-link dark:text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
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
                        class="post type-post panel overflow-hidden vstack border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-5.jpg" alt="Automate as fast as you can type with AI">
                          <NuxtLink to="/blog-details-2" class="position-cover"
                            data-caption="Automate as fast as you can type with AI"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details-2">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4"><span>Automate as fast as you can type with
                                AI</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">Linear helps streamline software projects, sprints,
                              tasks, and bug tracking. Here’s how to get started.</p>
                            <NuxtLink to="/blog-details-2"
                              class="uc-link dark:text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
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
                        class="post type-post panel overflow-hidden vstack border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-6.jpg" alt="Intuitive & powerful AI automation app">
                          <NuxtLink to="/blog-details-3" class="position-cover"
                            data-caption="Intuitive & powerful AI automation app"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details-3">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4"><span>Intuitive & powerful AI automation
                                app</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">The rise of RESTful APIs has been met by a rise in
                              tools for creating, testing, and managing them.</p>
                            <NuxtLink to="/blog-details-3"
                              class="uc-link dark:text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
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
                        class="post type-post panel overflow-hidden vstack border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-01.jpg" alt="Team solve today’s biggest challenges">
                          <NuxtLink to="/blog-details" class="position-cover"
                            data-caption="Team solve today’s biggest challenges"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4"><span>Team solve today’s biggest
                                challenges</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">Join the thousands of satisfied users and take your
                              business to the next level today and the power.</p>
                            <NuxtLink to="/blog-details"
                              class="uc-link dark:text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
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
                        class="post type-post panel overflow-hidden vstack border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-02.jpg" alt="Leading work from tasks management">
                          <NuxtLink to="/blog-details-2" class="position-cover"
                            data-caption="Leading work from tasks management"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1 p-2">
                          <NuxtLink class="text-none" to="/blog-details-2">
                            <h3 class="post-title h5 m-0 ltr:pe-4 rtl:ps-4"><span>Leading work from tasks
                                management</span></h3>
                          </NuxtLink>
                          <div class="content vstack justify-between gap-narrow">
                            <p class="post-excrept fs-6 opacity-70">Help you keep track of leads, contacts, and deals,
                              making it easier to nurture and convert.</p>
                            <NuxtLink to="/blog-details-2"
                              class="uc-link dark:text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                              <span>Read post</span>
                              <i
                                class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                            </NuxtLink>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  
                </Swiper>
              </div>
            </div>
            <div>
              <div class="panel hstack justify-center items-centerborder contrast- gap-2">
                <div class="panel hstack items-end gap-narrow xl:gap-1 rtl:flex-row-reverse">
                  <a style="cursor: pointer;"
                    class="swiper-nav swiper-nav-prev btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle btn btn-md btn-alt-primary border dark:bg-black dark:text-white order-1">
                    <span class="icon-1 xl:icon-2 unicon-arrow-left"></span>
                  </a>
                  <a style="cursor: pointer;"
                    class="swiper-nav swiper-nav-next btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle btn btn-md btn-alt-primary border dark:bg-black dark:text-white order-2 rtl:order-0">
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