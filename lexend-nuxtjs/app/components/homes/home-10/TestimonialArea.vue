<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import testimonial_img_1 from "@/assets/images/avatars/01.png";
import testimonial_img_2 from "@/assets/images/avatars/04.png";
import testimonial_img_3 from "@/assets/images/avatars/03.png";
import testimonial_img_4 from "@/assets/images/avatars/08.png";
import testimonial_img_5 from "@/assets/images/avatars/01.png";
import testimonial_img_6 from "@/assets/images/avatars/04.png";

const testimonials = [
  {
    avatar: testimonial_img_1,
    alt: 'Mark Zellers — CEO, Co-Founder.',
    text: '“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”',
    name: 'Mark Zellers',
    title: 'CEO, Co-Founder.',
  },
  {
    avatar: testimonial_img_2,
    alt: 'Natalia Larsson — Director of Sales',
    text: '“This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”',
    name: 'Natalia Larsson',
    title: 'Director of Sales',
  },
  {
    avatar: testimonial_img_3,
    alt: 'Sarah Edrissi — Lead Marketing',
    text: '“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation and as we look to create our website and this builder just outstanding!”',
    name: 'Sarah Edrissi',
    title: 'Lead Marketing',
  },
  {
    avatar: testimonial_img_4,
    alt: 'Anna Yon — Senior UI/UX Designer',
    text: '“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”',
    name: 'Anna Yon',
    title: 'Senior UI/UX Designer',
  },
  {
    avatar: testimonial_img_5,
    alt: 'Mark Zellers — CEO, Co-Founder.',
    text: '“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”',
    name: 'Mark Zellers',
    title: 'CEO, Co-Founder.',
  },
  {
    avatar: testimonial_img_6,
    alt: 'Natalia Larsson — Director of Sales',
    text: '“This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”',
    name: 'Natalia Larsson',
    title: 'Director of Sales',
  },
]
</script>


<template>
  <div id="testimonials" class="testimonials section panel overflow-hidden">
    <div class="section-outer panel py-6 lg:py-8 xl:py-10">
      <div class="container">
        <div class="section-inner panel">
          <div class="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto"
            data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100);">
            <div class="section-header vstack items-center gap-2 lg:gap-3">
              <h2 class="h3 sm:h1 lg:display-5 m-0 text-center max-w-650px mx-auto">What our clients sharing about us!
              </h2>
            </div>
            <div class="panel w-100 swiper-parent">
              <Swiper class="swiper"
                data-uc-swiper="items: 1; gap: 16; center: true; dots: .swiper-pagination; center-bounds: true; effect: fade; fade: true;"
                
                :modules="[Pagination]" :pagination="{ el: '.swiper-pagination', clickable: true }"
                :spaceBetween="16" :slidesPerView="1" :speed="1000"
                
                >                 

                  <SwiperSlide v-for="(item, index) in testimonials" :key="index" class="swiper-slide">
                    <div class="panel vstack items-center gap-4 text-center">
                      <div class="panel vstack items-center gap-2 lg:gap-4">
                        <div class="panel">
                          <img class="w-48px lg:w-64px h-48px lg:h-64px rounded-circle"
                            :src="item.avatar" :alt="item.alt">
                        </div>
                        <p class="fs-5 lg:fs-4 xl:fs-3 ft-secondary fw-bold text-dark dark:text-white">{{ item.text }}</p>
                      </div>
                      <div class="panel vstack gap-2">
                        <div class="panel vstack gap-narrow">
                          <h6 class="h6 lg:h5 m-0">{{ item.name }}</h6>
                          <span class="opacity-70">{{ item.title }}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> 
            

                <div class="swiper-pagination position-relative mt-4 lg:mt-6 text-primary dark:text-tertiary"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
