<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";


</script>


<template>
  <div id="clients_feedback" class="clients-feedback section panel overflow-hidden">
    <div class="section-outer panel">
      <div class="container max-w-lg">
        <div class="section-inner panel swiper-parent"
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <h2 class="h4 sm:h3 lg:h2 m-0 text-center">What clients said:</h2>
          <div class="panel p-3 lg:p-6 bg-secondary dark:bg-gray-800 rounded-3 mt-4 sm:mt-6">
            <div class="row child-cols-12 sm:child-cols-6 col-match g-3 lg:g-8">
              <div>
                <div class="panel rounded-2 overflow-hidden">
                  <Swiper class="swiper connect-image"
                    data-uc-swiper="items: 1; autoplay: 5000; dots: .swiper-pagination; effect: fade; fade: true; allowTouchMove: false; disableOnInteraction: true;"
                    :modules="[Autoplay]" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :spaceBetween="10" :slidesPerView="1" :watchSlidesProgress="true" :watchOverflow="false" :speed="1000" :pagination="{ el: '.swiper-pagination', clickable: true }"
                    :disableOnInteraction="true" :allowTouchMove="false"
                    >
                     
                      <SwiperSlide class="swiper-slide">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-3x4  uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/portrait/01.jpg" alt="Mark Zellers">
                        </figure>
                      </SwiperSlide>
                      <SwiperSlide class="swiper-slide">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-3x4  uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/portrait/02.jpg" alt="André Garcia">
                        </figure>
                      </SwiperSlide>
                      <SwiperSlide class="swiper-slide">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-3x4  uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/portrait/03.jpg" alt="Matt Henderson">
                        </figure>
                      </SwiperSlide>
                     
                  </Swiper>
                </div>
              </div>
              <div>
                <div class="panel">
                  <Swiper class="swiper h-100"
                    data-uc-swiper="connect: .connect-image; items: 1; autoplay: 5000; dots: .swiper-pagination; effect: fade; fade: true;"

                    :modules="[Autoplay, Pagination]" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :spaceBetween="10" :slidesPerView="1" :watchSlidesProgress="true" :watchOverflow="true" :speed="1000" 
                    :pagination="{ el: '.swiper-pagination', clickable: true }"
                    :data-allow-mismatch="true" :disableOnInteraction="true" :allowTouchMove="false"
                    :dots="true" :fadeEffect="{ crossFade: true }"  :navigation="false"
                    
                    >
                     
                      <SwiperSlide class="swiper-slide h-100">
                        <div class="panel vstack justify-between items-center gap-2 lg:gap-4 h-100 text-center">
                          <div class="panel">
                            <i class="icon icon-4 unicon-quotes text-primary"></i>
                            <p class="fs-6 sm:fs-5 lg:fs-4 fw-bold mt-1 sm:mt-4 dark:text-white">“Most of our time used
                              to be taken up by administrative work whereas now we can focus on building out programs to
                              help our employees. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                              nisi consectetur adipisci eaque. Porro, atque.”</p>
                          </div>
                          <div class="panel pt-3">
                            <div class="panel vstack items-center gap-narrow">
                              <h6 class="h5 m-0">Mark Zellers</h6>
                              <span class="fs-6 opacity-70">Director of Human Resources.</span>
                            </div>
                            <div class="panel mt-6">
                              <div class="swiper-pagination text-primary m-0 justify-center"></div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="swiper-slide h-100">
                        <div class="panel vstack justify-between items-center gap-2 lg:gap-4 h-100 text-center">
                          <div class="panel">
                            <i class="icon icon-4 unicon-quotes text-primary"></i>
                            <p class="fs-6 sm:fs-5 lg:fs-4 fw-bold mt-1 sm:mt-4 dark:text-white">“I can create a custom
                              proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes
                              and looks fantastic. <br> Dolor sit amet consectetur adipisicing elit. Quas nisi
                              consectetur adipisci eaque. Porro, atque.”</p>
                          </div>
                          <div class="panel pt-3">
                            <div class="panel vstack items-center gap-narrow">
                              <h6 class="h5 m-0">André Garcia</h6>
                              <span class="fs-6 opacity-70">Client Success Manager</span>
                            </div>
                            <div class="panel mt-6">
                              <div class="swiper-pagination text-primary m-0 justify-center"></div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="swiper-slide h-100">
                        <div class="panel vstack justify-between items-center gap-2 lg:gap-4 h-100 text-center">
                          <div class="panel">
                            <i class="icon icon-4 unicon-quotes text-primary"></i>
                            <p class="fs-6 sm:fs-5 lg:fs-4 fw-bold mt-1 sm:mt-4 dark:text-white">“This powerfull tool
                              eliminates the need to leave Salesforce to get things done, <br> quas libero placeat
                              voluptates sed sequi? Corporis, earum vitae. <br> Tempore pariatur dignissimos coming for
                              great tool of repellat quae a eaque culpa iusto fugit.”</p>
                          </div>
                          <div class="panel pt-3">
                            <div class="panel vstack items-center gap-narrow">
                              <h6 class="h5 m-0">Matt Henderson</h6>
                              <span class="fs-6 opacity-70">Director of Sales Operations</span>
                            </div>
                            <div class="panel mt-6">
                              <div class="swiper-pagination text-primary m-0 justify-center"></div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                     
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>