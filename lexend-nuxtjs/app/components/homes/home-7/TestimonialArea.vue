<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay } from "swiper/modules";

 
 
</script>



<template>
  <div id="clients_feedbacks" class="clients-feedbacks section panel overflow-hidden">
    <div class="section-outer panel pb-6 xl:pb-9">
      <div class="container">
        <div class="section-inner panel">
          <div class="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -200; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2 class="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">See what our <span
                class="px-1 bg-tertiary text-primary">happy users</span> are sharing about us!</h2>
            <div class="panel w-100">
              <div class="brands panel vstack gap-3 sm:gap-4 xl:gap-5 mb-4 lg:mb-6 xl:mb-8 text-center"
                data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;">
                <p class="h6">Trusted by over 1.7 million companies worldwide</p>
                <div class="panel">
                  <div class="element-brands text-gray-900 dark:text-white mask-x">
                    <Swiper class="swiper"
                      data-uc-swiper="items: 2.25; center: true; center-bounds: true; autoplay: 7000; loop: true; speed: 7000; autoplay-delay: -1; allowTouchMove: false; disableOnInteraction: true;"
                      data-uc-swiper-s="items: 4; center: false; center-bounds: false;"
                      data-uc-swiper-m="items: 6; gap: 100;"
                      :modules="[Autoplay]" :autoplay="{
                        delay: 7000,
                      }" :loop="true" :spaceBetween="10" :slidesPerView="6" :watchSlidesProgress="true" :watchOverflow="false" :speed="7000"
                      :allowTouchMove="false" :disableOnInteraction="true"
                      > 
                        <SwiperSlide class="brand-item swiper-slide text-center image-filter">
                          <img class="brand-item-image h-40px xl:h-48px" src="/assets/images/brands/brand-01.svg"
                            alt="Proline" data-uc-svg>
                        </SwiperSlide>
                        <SwiperSlide class="brand-item swiper-slide text-center image-filter">
                          <img class="brand-item-image h-40px xl:h-48px" src="/assets/images/brands/brand-02.svg"
                            alt="Iceberg" data-uc-svg>
                        </SwiperSlide>
                        <SwiperSlide class="brand-item swiper-slide text-center image-filter">
                          <img class="brand-item-image h-40px xl:h-48px" src="/assets/images/brands/brand-03.svg"
                            alt="PinPoint" data-uc-svg>
                        </SwiperSlide>
                        <SwiperSlide class="brand-item swiper-slide text-center image-filter">
                          <img class="brand-item-image h-40px xl:h-48px" src="/assets/images/brands/brand-04.svg"
                            alt="Clues" data-uc-svg>
                        </SwiperSlide>
                        <SwiperSlide class="brand-item swiper-slide text-center image-filter">
                          <img class="brand-item-image h-40px xl:h-48px" src="/assets/images/brands/brand-05.svg"
                            alt="Snowflake" data-uc-svg>
                        </SwiperSlide>
                        <SwiperSlide class="brand-item swiper-slide text-center image-filter">
                          <img class="brand-item-image h-40px xl:h-48px" src="/assets/images/brands/brand-06.svg"
                            alt="Proline" data-uc-svg>
                        </SwiperSlide>
                        <SwiperSlide class="brand-item swiper-slide text-center image-filter">
                          <img class="brand-item-image h-40px xl:h-48px" src="/assets/images/brands/brand-07.svg"
                            alt="Iceberg" data-uc-svg>
                        </SwiperSlide>
                        <SwiperSlide class="brand-item swiper-slide text-center image-filter">
                          <img class="brand-item-image h-40px xl:h-48px" src="/assets/images/brands/brand-08.svg"
                            alt="PinPoint" data-uc-svg>
                        </SwiperSlide> 
                    </Swiper>
                  </div>
                </div>
              </div>
              <Swiper class="swiper overflow-unset"
                data-uc-swiper="items: 1.25; active: 1; gap: 16; center: true; center-bounds: true;"
                data-uc-swiper-l="items: 4; gap: 24; center: false; center-bounds: false;"
                data-uc-swiper-s="items: 4; gap: 24; center: false; center-bounds: false;"
                data-uc-swiper-m="items: 4; gap: 24; center: false; center-bounds: false;"
                :modules="[Autoplay]" :autoplay="{
                  delay: 7000,
                }" :loop="true" :spaceBetween="10" :slidesPerView="4" :watchSlidesProgress="true" :watchOverflow="false" :speed="7000"
                :allowTouchMove="false" :disableOnInteraction="true" 
                > 
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We’re looking for people who
                          share our vision! most of our time used to be taken up by most of alternate administrative
                          work whereas now we can focus on building out to help our employees.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/01.png" alt="Mark Zellers">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Mark Zellers</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“This powerfull tool
                          eliminates the need to leave Salesforce to get things done as I can create a custom proposal
                          with dynamic pricing tables, and get approval from my boss all within 36 minutes.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/04.png" alt="Natalia Larsson">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Natalia Larsson</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We are based in Europe and
                          the latest Data Protection Regulation forces us to look for service suppliers than comply with
                          this regulation and as we look to create our website and this builder just outstanding!”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/03.png" alt="Sarah Edrissi">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Sarah Edrissi</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We’re looking for people who
                          share our vision! most of our time used to be taken up by most of alternate administrative
                          work whereas now we can focus on building out to help our employees.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/08.png" alt="Anna Yon">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Anna Yon</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We’re looking for people who
                          share our vision! most of our time used to be taken up by most of alternate administrative
                          work whereas now we can focus on building out to help our employees.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/01.png" alt="Mark Zellers">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Mark Zellers</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“This powerfull tool
                          eliminates the need to leave Salesforce to get things done as I can create a custom proposal
                          with dynamic pricing tables, and get approval from my boss all within 36 minutes.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/04.png" alt="Natalia Larsson">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Natalia Larsson</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We are based in Europe and
                          the latest Data Protection Regulation forces us to look for service suppliers than comply with
                          this regulation and as we look to create our website and this builder just outstanding!”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/03.png" alt="Sarah Edrissi">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Sarah Edrissi</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We’re looking for people who
                          share our vision! most of our time used to be taken up by most of alternate administrative
                          work whereas now we can focus on building out to help our employees.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/08.png" alt="Anna Yon">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Anna Yon</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> 

                   <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We’re looking for people who
                          share our vision! most of our time used to be taken up by most of alternate administrative
                          work whereas now we can focus on building out to help our employees.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/01.png" alt="Mark Zellers">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Mark Zellers</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“This powerfull tool
                          eliminates the need to leave Salesforce to get things done as I can create a custom proposal
                          with dynamic pricing tables, and get approval from my boss all within 36 minutes.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/04.png" alt="Natalia Larsson">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Natalia Larsson</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We are based in Europe and
                          the latest Data Protection Regulation forces us to look for service suppliers than comply with
                          this regulation and as we look to create our website and this builder just outstanding!”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/03.png" alt="Sarah Edrissi">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Sarah Edrissi</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
                      <div class="panel vstack items-start gap-2">
                        <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">“We’re looking for people who
                          share our vision! most of our time used to be taken up by most of alternate administrative
                          work whereas now we can focus on building out to help our employees.”</p>
                      </div>
                      <div class="panel hstack gap-2 mt-2">
                        <img class="w-40px rounded-circle" src="/assets/images/avatars/08.png" alt="Anna Yon">
                        <div class="panel vstack justify-center gap-narrow">
                          <ul class="nav-x gap-0 text-warning">
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                            <li><i class="icon icon-narrow unicon-star-filled"></i></li>
                          </ul>
                          <span class="fw-bold ft-secondary m-0">Anna Yon</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  
              </Swiper>
            </div>
            <a href="#" class="uc-link dark:text-tertiary fw-bold d-inline-flex items-center gap-narrow">
              <span>See all feedbacks</span>
              <i class="icon icon-1 unicon-arrow-right rtl:rotate-180"></i>
            </a>
            <img class="w-500px text-primary dark:text-gray-200 image-filter" src="/assets/images/vectors/producthunt-badges.svg"
              alt="producthunt-badges" data-uc-svg="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>