<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay } from "swiper/modules";


</script>

<template>
  <div id="companies_sponsores" class="companies-sponsores section panel overflow-hidden">
    <div class="section-outer panel py-6">
      <div class="container sm:max-w-lg xl:max-w-xl">
        <div class="section-inner panel">
          <div class="brands panel overflow-hidden"
            data-anime="onview: true; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;">
            <div class="block-panel panel">
              <div class="element-brands text-primary dark:text-white mask-x">
                <Swiper class="swiper"
                  data-uc-swiper="items: 2.25; center: true; center-bounds: true; autoplay: 7000; loop: true; speed: 7000; autoplay-delay: -1; allowTouchMove: false; disableOnInteraction: true;"
                  data-uc-swiper-s="items: 4; center: false; center-bounds: false;"
                  data-uc-swiper-m="items: 5; gap: 64;" 
                  :slides-per-view="6" :loop="true" :spaceBetween="20"
                  :modules="[Autoplay]" :autoplay="{
                    delay: 7000,
                  }" :breakpoints="{
                  1200: {
                    slidesPerView: 6,
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
                }"> 
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px dark:d-none" src="/assets/images/brands/brand-01.svg"
                      alt="Proline">
                    <img class="brand-item-image h-40px d-none dark:d-inline-flex"
                      src="/assets/images/brands/brand-01-dark.svg" alt="Proline">
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px dark:d-none" src="/assets/images/brands/brand-02.svg"
                      alt="Iceberg">
                    <img class="brand-item-image h-40px d-none dark:d-inline-flex"
                      src="/assets/images/brands/brand-02-dark.svg" alt="Iceberg">
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px dark:d-none" src="/assets/images/brands/brand-03.svg"
                      alt="PinPoint">
                    <img class="brand-item-image h-40px d-none dark:d-inline-flex"
                      src="/assets/images/brands/brand-03-dark.svg" alt="PinPoint">
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px dark:d-none" src="/assets/images/brands/brand-04.svg"
                      alt="Clues">
                    <img class="brand-item-image h-40px d-none dark:d-inline-flex"
                      src="/assets/images/brands/brand-04-dark.svg" alt="Clues">
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px dark:d-none" src="/assets/images/brands/brand-05.svg"
                      alt="Snowflake">
                    <img class="brand-item-image h-40px d-none dark:d-inline-flex"
                      src="/assets/images/brands/brand-05-dark.svg" alt="Snowflake">
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px dark:d-none" src="/assets/images/brands/brand-06.svg"
                      alt="Proline">
                    <img class="brand-item-image h-40px d-none dark:d-inline-flex"
                      src="/assets/images/brands/brand-06-dark.svg" alt="Proline">
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px dark:d-none" src="/assets/images/brands/brand-07.svg"
                      alt="Iceberg">
                    <img class="brand-item-image h-40px d-none dark:d-inline-flex"
                      src="/assets/images/brands/brand-07-dark.svg" alt="Iceberg">
                  </SwiperSlide>
                  <SwiperSlide class="brand-item swiper-slide text-center">
                    <img class="brand-item-image h-40px dark:d-none" src="/assets/images/brands/brand-08.svg"
                      alt="PinPoint">
                    <img class="brand-item-image h-40px d-none dark:d-inline-flex"
                      src="/assets/images/brands/brand-08-dark.svg" alt="PinPoint">
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