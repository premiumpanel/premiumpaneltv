<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

  // Import Swiper styles
  import 'swiper/css'; 



 
 
</script>


<template>
  <div id="blog_posts"
    class="blog-posts section panel overflow-hidden gap-3 bg-secondary dark:bg-white dark:bg-opacity-5 rounded-1-5 lg:rounded-2 swiper-parent">
    <div class="section-outer panel py-4 md:py-6 xl:py-9">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="row child-cols-12 g-4 sm:g-6 xl:g-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div>
              <div class="heading vstack sm:hstack gap-4 justify-between md:items-end panel"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                <div class="vstack gap-2">
                  <span class="fw-bold text-primary dark:text-secondary">Latest posts</span>
                  <h2 class="title h3 xl:h2 m-0">Latest from insights</h2>
                  <p class="desc fs-6 sm:fs-5 xl:fs-4 opacity-70">Interviews, tips, guides, industry best practices, and
                    news.</p>
                </div>
                <div class="d-none sm:d-block">
                  <NuxtLink to="/blog" class="btn btn-sm lg:btn-md btn-primary rounded-default">View all posts</NuxtLink>
                </div>
              </div>
            </div>
            <div>
              <div class="content panel expand-container ltr:ms-0 rtl:me-0">
                <Swiper class="swiper"
                  data-uc-swiper="items: 1.1; gap: 16; loop: true; next: .swiper-nav-next; prev: .swiper-nav-prev;"
                  data-uc-swiper-s="items: 2.3; gap: 24;" data-uc-swiper-m="items: 3.22; gap: 24;"
                  data-uc-swiper-l="items: 3.22; gap: 32;"

                  :slides-per-view="4.1"
                  :spaceBetween="16"
                  :loop="true"
                  :modules="[Navigation]"
                  :autoplay="{
                    delay: 7000,
                  }"
                  :navigation="{
                    nextEl: '.swiper-nav-next',
                    prevEl: '.swiper-nav-prev',
                  }"
                  :breakpoints="{
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
                      slidesPerView: 3.5, 
                    }
                  }"  
                  > 

                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-4.jpg" alt="UX review presentations">
                          <NuxtLink to="/blog-details" class="position-cover" data-caption="UX review presentations"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>UX review presentations</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">How do you create compelling presentations
                            that wow your colleagues and impress your managers?</p>
                          <NuxtLink to="/blog-details"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-5.jpg" alt="Migrating to Linear 101">
                          <NuxtLink to="/blog-details-2" class="position-cover"
                            data-caption="Migrating to Linear 101"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details-2">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>Migrating to Linear 101</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">Linear helps streamline software projects,
                            sprints, tasks, and bug tracking. Here’s how to get started.</p>
                          <NuxtLink to="/blog-details-2"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-6.jpg" alt="Building your API stack">
                          <NuxtLink to="/blog-details-3" class="position-cover"
                            data-caption="Building your API stack"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details-3">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>Building your API stack</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">The rise of RESTful APIs has been met by a
                            rise in tools for creating, testing, and managing them.</p>
                          <NuxtLink to="/blog-details-3"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-01.jpg" alt="UX review presentations">
                          <NuxtLink to="/blog-details" class="position-cover" data-caption="UX review presentations"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>UX review presentations</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">Join the thousands of satisfied users and take
                            your business to the next level today and the power.</p>
                          <NuxtLink to="/blog-details"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-02.jpg" alt="Migrating to Linear 101">
                          <NuxtLink to="/blog-details-2" class="position-cover"
                            data-caption="Migrating to Linear 101"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details-2">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>Migrating to Linear 101</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">Help you keep track of leads, contacts, and
                            deals, making it easier to nurture and convert.</p>
                          <NuxtLink to="/blog-details-2"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide> 

                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-4.jpg" alt="UX review presentations">
                          <NuxtLink to="/blog-details" class="position-cover" data-caption="UX review presentations"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>UX review presentations</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">How do you create compelling presentations
                            that wow your colleagues and impress your managers?</p>
                          <NuxtLink to="/blog-details"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-5.jpg" alt="Migrating to Linear 101">
                          <NuxtLink to="/blog-details-2" class="position-cover"
                            data-caption="Migrating to Linear 101"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details-2">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>Migrating to Linear 101</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">Linear helps streamline software projects,
                            sprints, tasks, and bug tracking. Here’s how to get started.</p>
                          <NuxtLink to="/blog-details-2"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/post-6.jpg" alt="Building your API stack">
                          <NuxtLink to="/blog-details-3" class="position-cover"
                            data-caption="Building your API stack"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details-3">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>Building your API stack</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">The rise of RESTful APIs has been met by a
                            rise in tools for creating, testing, and managing them.</p>
                          <NuxtLink to="/blog-details-3"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-01.jpg" alt="UX review presentations">
                          <NuxtLink to="/blog-details" class="position-cover" data-caption="UX review presentations"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>UX review presentations</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">Join the thousands of satisfied users and take
                            your business to the next level today and the power.</p>
                          <NuxtLink to="/blog-details"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide class="swiper-slide">
                      <article class="post type-post panel overflow-hidden vstack gap-3">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-02.jpg" alt="Migrating to Linear 101">
                          <NuxtLink to="/blog-details-2" class="position-cover"
                            data-caption="Migrating to Linear 101"></NuxtLink>
                        </figure>
                        <div class="panel vstack gap-1">
                          <NuxtLink class="text-none" to="/blog-details-2">
                            <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4"><span>Migrating to Linear 101</span>
                            </h3>
                          </NuxtLink>
                          <p class="post-excrept fs-7 xl:fs-6 opacity-70">Help you keep track of leads, contacts, and
                            deals, making it easier to nurture and convert.</p>
                          <NuxtLink to="/blog-details-2"
                            class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                            <span>Read post</span>
                            <i
                              class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                          </NuxtLink>
                        </div>
                      </article>
                    </SwiperSlide> 

                </Swiper>
              </div>
            </div>
            <div>
              <div class="panel hstack justify-between gap-2">
                <div class="panel hstack items-end gap-narrow xl:gap-1 rtl:flex-row-reverse">
                  <a style="cursor: pointer;"
                    class="swiper-nav swiper-nav-prev btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle text-primary dark:text-white hover:text-white bg-white dark:bg-gray-700 hover:bg-primary shadow-xs order-1">
                    <span class="icon-1 xl:icon-2 unicon-arrow-left"></span>
                  </a>
                  <a style="cursor: pointer;"
                    class="swiper-nav swiper-nav-next btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle text-primary dark:text-white hover:text-white bg-white dark:bg-gray-700 hover:bg-primary shadow-xs order-2 rtl:order-0">
                    <span class="icon-1 xl:icon-2 unicon-arrow-right"></span>
                  </a>
                </div>
                <div class="sm:d-none">
                  <NuxtLink to="/blog" class="btn btn-sm lg:btn-md btn-primary rounded-default">View all posts</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>