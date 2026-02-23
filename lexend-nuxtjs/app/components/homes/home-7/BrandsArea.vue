<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay } from "swiper/modules";
 
 
 const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 5,
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 1, // autoplay-delay: -1 -> continuous
    disableOnInteraction: true,
  },
  allowTouchMove: false,
  breakpoints: {
    0: {
      slidesPerView: 2,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
    640: {
      slidesPerView: 4,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 100,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
  },
}


</script>



<template>
  <div id="companies_sponsores" class="companies-sponsores section panel overflow-hidden">
    <div class="section-outer panel">
      <div class="container sm:max-w-lg xl:max-w-xl">
        <div class="section-inner panel">
          <div class="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
            data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;">
            <p class="fs-6">Trusted by over 1.7 million companies worldwide</p>
            <div class="panel">
              <div class="element-brands text-gray-900 dark:text-white mask-x">
                <Swiper class="swiper"
                  data-uc-swiper="items: 2.25; center: true; center-bounds: true; autoplay: 7000; loop: true; speed: 7000; autoplay-delay: -1; allowTouchMove: false; disableOnInteraction: true;"
                  data-uc-swiper-s="items: 4; center: false; center-bounds: false;"
                  data-uc-swiper-m="items: 6; gap: 100;"
                  v-bind="swiperOptions"
                  > 
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