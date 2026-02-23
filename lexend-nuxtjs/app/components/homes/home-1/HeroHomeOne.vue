<script setup>
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay } from "swiper/modules";
  
// video popup 
import {useVideoModal} from "../../../composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/Q5PG0rMXgvw?si=uhzrlIvzSWwOe_F3';
 
</script>


<template>
  <div id="hero_header" class="hero-header section panel overflow-hidden">
    <div class="position-absolute top-0 start-0 end-0 h-500px xl:h-screen bg-gray-900"></div>
    <div class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block uc-dark"
      data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 250; delay: anime.stagger(50, {start: 500});">
      <div class="position-absolute top-0 start-0 rotate-45" style="top: 40% !important; left: 25% !important;">
        <img class="w-32px text-gray-900 dark image-filter:text-white" src="/assets/images/template/star-1.svg" alt="star-1"
          data-uc-svg>
      </div>
      <div class="position-absolute top-0 end-0 rotate-45" style="top: 25% !important; right: 12% !important;">
        <img class="w-24px text-gray-900 dark image-filter:text-white" src="/assets/images/template/star-2.svg" alt="star-2"
          data-uc-svg>
      </div>
      <div class="position-absolute top-0 start-0 translate-middle-y -rotate-12"
        style="top: 20% !important; left: 12% !important;">
        <img class="w-56px xl:w-64px d-block dark:d-none" src="/assets/images/template/icon-trophy.svg"
          alt="icon-trophy">
        <img class="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-trophy-dark.svg"
          alt="icon-trophy-dark">
      </div>
      <div class="position-absolute top-0 start-0 translate-middle-y rotate-45 ms-n3" style="top: 35% !important;">
        <img class="w-56px xl:w-64px d-block dark:d-none" src="/assets/images/template/icon-location.svg"
          alt="icon-location">
        <img class="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-location-dark.svg"
          alt="icon-location-dark">
      </div>
      <div class="position-absolute top-0 start-0 translate-middle-y" style="top: 80% !important; left: 4% !important;">
        <img class="w-56px xl:w-64px d-block dark:d-none" src="/assets/images/template/icon-globe.svg" alt="icon-globe">
        <img class="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-globe-dark.svg"
          alt="icon-globe-dark">
      </div>
      <div class="position-absolute top-0 end-0 translate-middle-y rotate-45"
        style="top: 53% !important; right: 18% !important;">
        <img class="w-56px xl:w-64px d-block dark:d-none" src="/assets/images/template/icon-crown.svg" alt="icon-crown">
        <img class="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-crown-dark.svg"
          alt="icon-crown-dark">
      </div>
      <div class="position-absolute top-0 end-0 translate-middle-y -rotate-45"
        style="top: 80% !important; right: 8% !important;">
        <img class="w-56px xl:w-64px d-block dark:d-none" src="/assets/images/template/icon-diamond.svg"
          alt="icon-diamond">
        <img class="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-diamond-dark.svg"
          alt="icon-diamond-dark">
      </div>
      <div class="position-absolute top-0 end-0 translate-middle-y -rotate-12 me-n3" style="top: 35% !important;">
        <img class="w-56px xl:w-64px d-block dark:d-none" src="/assets/images/template/icon-chat.svg" alt="icon-chat">
        <img class="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-chat-dark.svg"
          alt="icon-chat-dark">
      </div>
    </div>
    <div class="section-outer panel pb-6 sm:pb-9 pt-9 sm:pt-10">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="vstack gap-6 sm:gap-8 xl:gap-9">
            <div class="panel text-center max-w-850px mx-auto uc-dark">
              <div class="vstack items-center gap-2 text-white"
                data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                <h1 ref="headline" class="h2 sm:h1 lg:display-6 xl:display-4 mt-4 sm:mt-0">Easy project managment <br
                    class="d-none sm:d-block"> of any complexity</h1>
                <NuxtLink to="/page-pricing"
                  class="btn btn-md lg:btn-lg btn-primary text-white min-w-150px sm:mt-1 lg:mt-2">Try it out</NuxtLink>
                <div class="hstack justify-center gap-2 mt-1 sm:mt-2">
                  <div class="hstack justify-center gap-0">
                    <img class="w-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-gray-900 ms-n2"
                      src="/assets/images/avatars/03.png" alt="Avatar image">
                    <img class="w-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-gray-900 ms-n2"
                      src="/assets/images/avatars/02.png" alt="Avatar image">
                    <img class="w-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-gray-900 ms-n2"
                      src="/assets/images/avatars/08.png" alt="Avatar image">
                  </div>
                  <span class="fs-7 sm:fs-6 fw-medium opacity-60">4.6k Hardworking Members</span>
                </div>
              </div>
            </div>
            <div class="panel"
              data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              data-uc-lightbox="video-autoplay: true;">
              <figure class="featured-image m-0 rounded ratio ratio-16x9 lg:rounded-2 overflow-hidden ">
                <img ref="heroImage" class="media-cover image " src="/assets/images/template/home-01-hero-cover.webp" alt="Lexend">
              </figure>
              <a ref="playBtn" @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }" class="cstack text-none position-absolute top-50 start-50 translate-middle bg-white text-primary w-64px h-64px sm:w-80px sm:h-80px rounded-circle shadow-md"
                
              data-caption="Easy project managment of any complexity."
              data-attrs="width: 640; height: 480;"> 
                <i class="icon icon-2 sm:icon-3 unicon-play-filled-alt"></i>
              </a>
            </div>
          </div>
          <div class="brands panel overflow-hidden mt-4 sm:mt-6 xl:mt-8 opacity-50">
            <div class="block-panel panel" data-anime="onview: -100; opacity: [0, 1]; duration: 450; delay: 200;">
              <div class="element-brands text-gray-900 dark:text-white ">
                <Swiper 
                :slides-per-view="6" 
                :loop="true" 
                :spaceBetween="20" 
                :modules="[Autoplay]" 
                :autoplay="{
                  delay: 7000,
                }" 
                :breakpoints="{
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
                          }" class="swiper" data-uc-swiper="items: 2; center: true; center-bounds: true;"
                  data-uc-swiper-s="items: 4; center: false; center-bounds: false;"
                  data-uc-swiper-m="items: 6; gap: 80;">

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
                  <!-- repite -->
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

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />

</template>