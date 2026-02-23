 
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import icon_1 from "@/assets/images/common/icons/section.svg";
import icon_2 from "@/assets/images/common/icons/column.svg";
import icon_3 from "@/assets/images/common/icons/div.svg";
import icon_4 from "@/assets/images/common/icons/heading.svg";
import icon_5 from "@/assets/images/common/icons/form.svg";
import icon_6 from "@/assets/images/common/icons/button.svg";
import icon_7 from "@/assets/images/common/icons/divider.svg";
import icon_8 from "@/assets/images/common/icons/spacer.svg";

import icon_9 from "@/assets/images/common/icons/divider.svg";
import icon_10 from "@/assets/images/common/icons/spacer.svg";
import icon_11 from "@/assets/images/common/icons/image.svg";
import icon_12 from "@/assets/images/common/icons/video.svg";
import icon_13 from "@/assets/images/common/icons/map.svg";
import icon_14 from "@/assets/images/common/icons/charts.svg";
import icon_15 from "@/assets/images/common/icons/blog.svg";
import icon_16 from "@/assets/images/common/icons/portfolio.svg";

import icon_17 from "@/assets/images/common/icons/video.svg";
import icon_18 from "@/assets/images/common/icons/map.svg";
import icon_19 from "@/assets/images/common/icons/charts.svg";
import icon_20 from "@/assets/images/common/icons/blog.svg";
import icon_21 from "@/assets/images/common/icons/portfolio.svg";
import icon_22 from "@/assets/images/common/icons/ecommerce.svg";
import icon_23 from "@/assets/images/common/icons/content.svg";
import icon_24 from "@/assets/images/common/icons/homepage.svg";


const swiperGroups = [
  [
    { icon: icon_1, alt: "Element : Section", label: "Section" },
    { icon: icon_2, alt: "Element : Column", label: "Column" },
    { icon: icon_3, alt: "Element : Div", label: "Div" },
    { icon: icon_4, alt: "Element : Heading", label: "Heading" },
    { icon: icon_5, alt: "Element : Form", label: "Form" },
    { icon: icon_6, alt: "Element : Button", label: "Button" },
    { icon: icon_7, alt: "Element : Divider", label: "Divider" },
    { icon: icon_8, alt: "Element : Spacer", label: "Spacer" },
  ],
  [
    { icon: icon_9, alt: "Element : Divider", label: "Divider" },
    { icon: icon_10, alt: "Element : Spacer", label: "Spacer" },
    { icon: icon_11, alt: "Element : Image", label: "Image" },
    { icon: icon_12, alt: "Element : Video", label: "Video" },
    { icon: icon_13, alt: "Element : Map", label: "Map" },
    { icon: icon_14, alt: "Element : Charts", label: "Charts" },
    { icon: icon_15, alt: "Element : Blog Posts", label: "Blog Posts" },
    { icon: icon_16, alt: "Element : Portfolio", label: "Portfolio" },
  ],
  [
    { icon: icon_17, alt: "Element : Video", label: "Video" },
    { icon: icon_18, alt: "Element : Map", label: "Map" },
    { icon: icon_19, alt: "Element : Charts", label: "Charts" },
    { icon: icon_20, alt: "Element : Blog Posts", label: "Blog Posts" },
    { icon: icon_21, alt: "Element : Portfolio", label: "Portfolio" },
    { icon: icon_22, alt: "Element : Ecommerce", label: "Ecommerce" },
    { icon: icon_23, alt: "Element : Text Content", label: "Text Content" },
    { icon: icon_24, alt: "Element : Popups", label: "Popups" },
  ],
];
</script>

<template>
  <div id="builder_elements" class="builder-elements section panel">
    <div class="section-outer panel pb-6 lg:pb-8 xl:pb-10">
      <div class="container xl:max-w-xl">
        <div class="section-inner panel vstack items-center gap-3 xl:gap-4 text-center max-w-100"
          data-anime="onview: -100; targets: > *; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);">
          
          <h4 class="h4 m-0">100+ Pro Elements and Widgets</h4>
          
          <div class="panel w-100">
            <!-- ✅ Loop 3 Swipers -->
            <div v-for="(group, groupIndex) in swiperGroups" :key="groupIndex" class="my-2 md:my-3">
              <Swiper
                :modules="[Autoplay]"
                :slides-per-view="2.5"
                :centered-slides="true"
                :space-between="16"
                :loop="true"
                :speed="7000"
                :allow-touch-move="false"
                :autoplay="{
                  delay: 0,
                  reverseDirection: groupIndex === 1,
                  disableOnInteraction: false
                }"
                :breakpoints="{
                  0: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1200: { slidesPerView: 5, spaceBetween: 24 }
                }"
                class="ease-linear"
              >
                <SwiperSlide v-for="(item, index) in group" :key="index">
                  <div class="cstack gap-1 md:gap-2 p-1 md:p-2 border rounded-pill">
                    <img 
                      class="icon icon-1 md:icon-2 lg:icon-3 text-primary dark:text-secondary image-filter"
                      :src="item.icon"
                      :alt="item.alt"
                    >
                    <span class="fs-7 md:fs-6 lg:fs-5 fw-medium">{{ item.label }}</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <a href="#" class="btn btn-sm lg:btn-md btn-primary px-3 md:mt-2 lg:mt-4">
            <span>View all elements</span>
            <i class="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
