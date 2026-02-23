<script setup>
import { SwiperSlide, Swiper } from "swiper/vue"; 



</script>

<template>
  <div id="about-timeline" class="about-timeline section panel overflow-hidden bg-secondary dark:bg-gray-800">
    <div class="section-outer panel py-6 xl:py-9">
      <div class="container max-w-lg">
        <div class="section-inner panel">
          <div class="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8">
            <h2 class="h4 sm:h3 lg:h2 m-0 text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;">
              How we got here</h2>
            <div class="panel w-100 swiper-parent">
              <Swiper class="swiper-timeline swiper swiper-container overflow-unset" 
              :slides-per-view="3" 
              :loop="true"
                :spaceBetween="10"  
                :autoplay="{
                  delay: 7000,
                }" :breakpoints="{
                  1200: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  0: {
                    slidesPerView: 1,
                  }
                }">

                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-01.png"
                        alt="Where the idea come up of Lexend :)">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">2014</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Where the idea come up of Lexend :)</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-02.png"
                        alt="Launched our first business that can be created in minutes, build meaningful relationships.">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">2015</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Launched our first business that can be
                        created in minutes, build meaningful relationships.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-03.png"
                        alt="Opened our new office in Toronto, CA">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">2016</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Opened our new office in Toronto, CA</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-04.png"
                        alt="Moved to Silicon Valley whereas now we can focus on building out to help our employees.">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">2019</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Moved to Silicon Valley whereas now we
                        can focus on building out to help our employees.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-05.png"
                        alt="Opened a new office in London, UK.">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">2020</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Opened a new office in London, UK.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-06.png"
                        alt="Top-rated software solution for service suppliers.">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">Today</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Top-rated software solution for service
                        suppliers.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <!-- repite  -->
                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-04.png"
                        alt="Moved to Silicon Valley whereas now we can focus on building out to help our employees.">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">2019</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Moved to Silicon Valley whereas now we
                        can focus on building out to help our employees.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-05.png"
                        alt="Opened a new office in London, UK.">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">2020</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Opened a new office in London, UK.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide panel">
                  <div class="timeline-box panel vstack items-center gap-9 text-center">
                    <div class="image-wrap panel overflow-hidden w-200px">
                      <img class="image w-100 origin-bottom" src="/assets/images/template/timeline-06.png"
                        alt="Top-rated software solution for service suppliers.">
                    </div>
                    <div class="content panel vstack items-center px-3 xl:px-6">
                      <h3 class="title h4 sm:h3 dark:text-white">Today</h3>
                      <p class="desc fs-6 xl:fs-5 opacity-70 dark:text-white">Top-rated software solution for service
                        suppliers.</p>
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