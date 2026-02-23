
<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";


</script>



<template>
  <div id="clients_brands" class="clients-brands section panel overflow-hidden">
    <div class="section-outer panel pb-6 xl:pb-9">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="block-panel panel"
            data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;">
            <div class="element-brands max-w-950px m-auto text-gray-900 dark:text-white ">
              <Swiper class="swiper" data-uc-swiper="items: 2; center: true; center-bounds: true;"
                data-uc-swiper-s="items: 4; center: false; center-bounds: false;" data-uc-swiper-m="items: 5; gap: 80;"
                :modules="[Autoplay, Pagination]" 
                :autoplay="{ delay: 5000, disableOnInteraction: false }" 
                :loop="true" :spaceBetween="10" 
                :slidesPerView="5" 
                :watchSlidesProgress="true" 
                :watchOverflow="true" :speed="1000"
                :breakpoints="{ 0: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1280: { slidesPerView: 5 } }"
                :pagination="{ el: '.swiper-pagination', clickable: true }"
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
                <!-- </div> -->
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>