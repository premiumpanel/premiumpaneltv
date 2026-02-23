<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay } from "swiper/modules";



</script>



<template>
  <!-- Section start -->
  <div class="section panel overflow-hidden mx-2 lg:mx-0 lg:mt-n6">
    <div class="container max-w-lg">
      <div data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;">
        <img class="w-full rounded-2" src="/assets/images/template/hero-page-services.jpg" alt="hero-page-services">
      </div>
    </div>
  </div>

  <!-- Section end -->

  <!-- Section start -->
  <div id="companies_sponsores" class="companies-sponsores section panel overflow-hidden swiper-parent">
    <div class="section-outer panel py-6">
      <div class="container max-w-lg">
        <div class="section-inner panel">
          <div class="brands panel overflow-hidden"
            data-anime="onview: true; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;">
            <div class="block-panel panel">
              <div class="element-brands text-muted dark:text-white mask-x">
                <Swiper class="swiper"
                  data-uc-swiper="items: 2.25; center: true; center-bounds: true; autoplay: 7000; loop: true; speed: 7000; autoplay-delay: -1; allowTouchMove: false; disableOnInteraction: true;"
                  data-uc-swiper-s="items: 4; center: false; center-bounds: false;"
                  data-uc-swiper-m="items: 5; gap: 64;"
                  :modules="[Autoplay]" :autoplay="{
                    delay: 7000,
                  }" :loop="true" :spaceBetween="20" :slidesPerView="6" :watchSlidesProgress="true" :watchOverflow="false" :speed="7000"
                  :allowTouchMove="false" :disableOnInteraction="true"
                  :breakpoints="{
                    0: { slidesPerView: 2, spaceBetween: 10 },
                    576: { slidesPerView: 4, spaceBetween: 20 },
                    768: { slidesPerView: 5, spaceBetween: 30 },
                    992: { slidesPerView: 5, spaceBetween: 40 },
                    1200: { slidesPerView: 5, spaceBetween: 50 }
                  }"
                  > 
                    <SwiperSlide class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px image-filter" src="/assets/images/brands/brand-01.svg" alt="Proline"
                        data-uc-svg>
                    </SwiperSlide>
                    <SwiperSlide class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px image-filter" src="/assets/images/brands/brand-02.svg" alt="Iceberg"
                        data-uc-svg>
                    </SwiperSlide>
                    <SwiperSlide class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px image-filter" src="/assets/images/brands/brand-03.svg" alt="PinPoint"
                        data-uc-svg>
                    </SwiperSlide>
                    <SwiperSlide class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px image-filter" src="/assets/images/brands/brand-04.svg" alt="Clues"
                        data-uc-svg>
                    </SwiperSlide>
                    <SwiperSlide class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px image-filter" src="/assets/images/brands/brand-05.svg" alt="Snowflake"
                        data-uc-svg>
                    </SwiperSlide>
                    <SwiperSlide class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px image-filter" src="/assets/images/brands/brand-06.svg" alt="Proline"
                        data-uc-svg>
                    </SwiperSlide>
                    <SwiperSlide class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px image-filter" src="/assets/images/brands/brand-07.svg" alt="Iceberg"
                        data-uc-svg>
                    </SwiperSlide>
                    <SwiperSlide class="brand-item swiper-slide text-center">
                      <img class="brand-item-image h-40px image-filter" src="/assets/images/brands/brand-08.svg" alt="PinPoint"
                        data-uc-svg>
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