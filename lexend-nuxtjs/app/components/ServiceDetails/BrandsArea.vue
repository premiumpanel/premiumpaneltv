<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
 
import reactIcon from "@/assets/images/technologies/react.svg";
import nextjsIcon from "@/assets/images/technologies/nextjs.svg";
import vueIcon from "@/assets/images/technologies/vue.svg";
import angularIcon from "@/assets/images/technologies/angular.svg";
import typescriptIcon from "@/assets/images/technologies/typescript-img.svg";
import adonisjsIcon from "@/assets/images/technologies/adonisjs.svg";
import sassIcon from "@/assets/images/technologies/sass.svg";
import nodejsIcon from "@/assets/images/technologies/nodejs.svg";

import phpIcon from "@/assets/images/technologies/php.svg";
import pythonIcon from "@/assets/images/technologies/python.svg";
import djangoIcon from "@/assets/images/technologies/django.svg";
import wordpressIcon from "@/assets/images/technologies/wordpress.svg";
import rubyrailsIcon from "@/assets/images/technologies/rubyrails.svg";
import laragonIcon from "@/assets/images/technologies/laragon.svg";
import javaIcon from "@/assets/images/technologies/java.svg";
import kotlinIcon from "@/assets/images/technologies/kotlin.svg";

import flutterIcon from "@/assets/images/technologies/flutter.svg";
import swiftIcon from "@/assets/images/technologies/swift.svg";
import xamarinIcon from "@/assets/images/technologies/xamarin.svg";
import mysqlIcon from "@/assets/images/technologies/mysql.svg";
import mongodbIcon from "@/assets/images/technologies/mongodb.svg";
import postgresqlIcon from "@/assets/images/technologies/postgresql.svg";
import googlecloudIcon from "@/assets/images/technologies/googlecloud.svg";
import awsIcon from "@/assets/images/technologies/aws.svg";

const swiperGroups = [
  [
    { icon: reactIcon, alt: "React", label: "React" },
    { icon: nextjsIcon, alt: "Next.js", label: "Next.js" },
    { icon: vueIcon, alt: "Vue", label: "Vue" },
    { icon: angularIcon, alt: "Angular", label: "Angular" },
    { icon: typescriptIcon, alt: "TypeScript", label: "TypeScript" },
    { icon: adonisjsIcon, alt: "Adonis.js", label: "Adonis.js" },
    { icon: sassIcon, alt: "Sass", label: "Sass" },
    { icon: nodejsIcon, alt: "Node.js", label: "Node.js" }
  ],
  [
    { icon: phpIcon, alt: "PHP", label: "PHP" },
    { icon: pythonIcon, alt: "Python", label: "Python" },
    { icon: djangoIcon, alt: "Django", label: "Django" },
    { icon: wordpressIcon, alt: "WordPress", label: "WordPress" },
    { icon: rubyrailsIcon, alt: "Ruby on Rails", label: "Ruby on Rails" },
    { icon: laragonIcon, alt: "Laragon", label: "Laragon" },
    { icon: javaIcon, alt: "Java", label: "Java" },
    { icon: kotlinIcon, alt: "Kotlin", label: "Kotlin" }
  ],
  [
    { icon: flutterIcon, alt: "Flutter", label: "Flutter" },
    { icon: swiftIcon, alt: "Swift", label: "Swift" },
    { icon: xamarinIcon, alt: "Xamarin", label: "Xamarin" },
    { icon: mysqlIcon, alt: "MySQL", label: "MySQL" },
    { icon: mongodbIcon, alt: "MongoDB", label: "MongoDB" },
    { icon: postgresqlIcon, alt: "PostgreSQL", label: "PostgreSQL" },
    { icon: googlecloudIcon, alt: "Google Cloud", label: "Google Cloud" },
    { icon: awsIcon, alt: "AWS", label: "AWS" }
  ]
];
</script>

<template>
  <div id="our_technologies" class="technologies section panel">
    <div class="section-outer panel py-4 md:py-6 xl:py-9">
      <div class="container xl:max-w-xl">
        <div class="section-inner panel vstack items-center gap-3 xl:gap-4 text-center max-w-100"
          data-anime="onview: -100; targets: > *; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);">
          
          <h2 class="h4 m-0">Technologies We Use</h2>
          
          <div class="panel w-100"> 
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
                <SwiperSlide v-for="(tech, index) in group" :key="index">
                  <div class="cstack gap-1 md:gap-2 p-1 md:p-2 border rounded-pill">
                    <img 
                      class="icon icon-1 md:icon-2 lg:icon-3 text-primary dark:text-secondary image-filter"
                      :src="tech.icon"
                      :alt="tech.alt"
                    >
                    <span class="fs-7 md:fs-6 lg:fs-5 fw-medium">{{ tech.label }}</span>
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
 