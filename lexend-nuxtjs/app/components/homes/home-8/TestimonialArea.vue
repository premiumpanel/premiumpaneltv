
<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
 
 
</script>



<template>
  <div id="clients_feedbacks" class="clients-feedbacks section panel overflow-hidden">
    <div class="section-outer panel py-6 xl:py-9">
      <div class="container">
        <div class="section-inner panel">
          <div class="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -200; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});">
            <div class="section-header vstack items-center gap-2 lg:gap-3">
              <span class="fs-7 fw-medium py-narrow px-2 border rounded-pill">Testimonials</span>
              <h2 class="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">See what our <span
                  class="text-tertiary dark:text-primary">happy users</span> are sharing about us!</h2>
            </div>
            <div class="panel w-100">
              <Swiper class="swiper overflow-unset"
                data-uc-swiper="items: 1.25; active: 1; gap: 16; center: true; center-bounds: true;"
                data-uc-swiper-l="items: 4; gap: 24; center: false; center-bounds: false;"
                :modules="[Autoplay, Navigation]" :autoplay="{
                  delay: 2000,
                }"
                :loop="true" :spaceBetween="10" :slidesPerView="4" :watchSlidesProgress="true" :watchOverflow="false" :speed="7000"
                :allowTouchMove="false" :disableOnInteraction="true"
                
                :breckpoints="{
                  0: {
                    slidesPerView: 1.25,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 24
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 32
                  }
                }" 
                
                >
                

                  <SwiperSlide class="swiper-slide">
                    <div
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
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
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
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
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
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
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
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
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
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
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
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
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
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
                      class="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>