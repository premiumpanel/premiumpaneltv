<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";




</script>


<template>
  <div id="companies_sponsores"
    class="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50">
    <div class="section-outer panel pb-4 sm:pb-8 xl:pb-9">
      <div class="container sm:max-w-lg xl:max-w-xl">
        <div class="section-inner panel">
          <div class="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
            data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;">
            <p class="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">14,000+ customers large and small rely on us for trust
              transformation</p>
            <div class="block-panel panel">
              <div class="element-brands text-black dark:text-white mask-x">
                <Swiper 

                   :modules="[Autoplay, FreeMode]"
    :slides-per-view="2.25"
    :loop="true"
    :speed="7000"
    :autoplay="{ delay:  0, disableOnInteraction: false }"
    :free-mode="true"
    :centered-slides="true"
    :allow-touch-move="false"

                  :breakpoints="{
                    1200: {
                      slidesPerView: 4,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  }" class="swiper"
                  data-uc-swiper="items: 2.25; center: true; center-bounds: true; autoplay: 7000; loop: true; speed: 7000; autoplay-delay: -1; allowTouchMove: false; disableOnInteraction: true;"
                  data-uc-swiper-s="items: 4; center: false; center-bounds: false;"
                  data-uc-swiper-m="items: 5; gap: 80;">
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px xl:h-48px image-filter" src="/assets/images/brands/brand-01.svg"
                      alt="Proline" data-uc-svg>
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px xl:h-48px image-filter" src="/assets/images/brands/brand-02.svg"
                      alt="Iceberg" data-uc-svg>
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px xl:h-48px image-filter" src="/assets/images/brands/brand-03.svg"
                      alt="PinPoint" data-uc-svg>
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px xl:h-48px image-filter" src="/assets/images/brands/brand-04.svg"
                      alt="Clues" data-uc-svg>
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px xl:h-48px image-filter" src="/assets/images/brands/brand-05.svg"
                      alt="Snowflake" data-uc-svg>
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px xl:h-48px image-filter" src="/assets/images/brands/brand-06.svg"
                      alt="Proline" data-uc-svg>
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px xl:h-48px image-filter" src="/assets/images/brands/brand-07.svg"
                      alt="Iceberg" data-uc-svg>
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px xl:h-48px image-filter" src="/assets/images/brands/brand-08.svg"
                      alt="PinPoint" data-uc-svg>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>