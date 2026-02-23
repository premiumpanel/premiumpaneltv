<script setup>

import { ref } from 'vue'; 

const contactModal = ref(false);

const toggleContactModal = () => {
  contactModal.value = !contactModal.value;
};

</script>




<template>
 
 
  <div id="hero_header" class="hero-header section panel overflow-hidden">
    <div class="position-absolute top-0 start-0 end-0 h-600px lg:h-screen bg-secondary dark:bg-gray-800 z-0"></div>
    <div class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
      data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;">
      <div class="position-absolute top-0 start-0 rotate-45" style="top: 45% !important; left: 18% !important;">
        <img class="w-32px text-gray-900 dark:text-white image-filter" src="/assets/images/template/star-1.svg" alt="star-1"
          data-uc-svg>
      </div>
      <div class="position-absolute top-0 end-0 rotate-45" style="top: 20% !important; right: 18% !important;">
        <img class="w-24px text-gray-900 dark:text-white image-filter" src="/assets/images/template/star-2.svg" alt="star-2"
          data-uc-svg>
      </div>
      <div class="position-absolute top-0 start-0 translate-middle-y -rotate-12"
        style="top: 20% !important; left: 15% !important;">
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
      <div class="position-absolute top-0 start-0 translate-middle-y" style="top: 80% !important; left: 8% !important;">
        <img class="w-56px xl:w-64px d-block dark:d-none" src="/assets/images/template/icon-globe.svg" alt="icon-globe">
        <img class="w-56px xl:w-64px d-none dark:d-block" src="/assets/images/template/icon-globe-dark.svg"
          alt="icon-globe-dark">
      </div>
      <div class="position-absolute top-0 end-0 translate-middle-y rotate-45"
        style="top: 50% !important; right: 18% !important;">
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
    <div class="section-outer panel pb-10 pt-9 lg:py-10">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div
            class="vstack items-center gap-2 lg:gap-4 mt-2 sm:mt-4 lg:mt-0 mb-6 lg:mb-8 max-w-750px mx-auto text-center"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h1 class="h2 sm:h1 lg:display-6 xl:display-4 m-0">Streamlines all your <br class="d-none lg:d-block">
              project workflows</h1>
            <p class="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">Drag-and-drop editing helps you build them
              fast, <br class="d-none sm:d-block"> with your choice of 750+ ready-to-use, free templates.</p>
            <div class="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 sm:mt-2">
              <NuxtLink to="/page-pricing" class="btn btn-md lg:btn-lg btn-primary text-white">Start free 14-day
                trial</NuxtLink>
              <a style="cursor: pointer;"
                @click="toggleContactModal"
                class="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                data-uc-toggle>Request a demo</a>
            </div>
            <p class="text-dark dark:text-white text-opacity-70 sm:mt-1 lg:mt-0">No credit card required.</p>
          </div>
          <div class="hero-scene panel max-w-950px mx-auto"
            data-anime="targets: > *; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
            <div
              class="panel text-center overflow-hidden rounded-3 border border-5 border-dark dark:border-white dark:border-opacity-20">
              <img src="/assets/images/template/dashboard.jpg" alt="Main hero image">
            </div>
            <div class="position-absolute bottom-0 ltr:end-0 rtl:start-0 ltr:me-n8 rtl:ms-n8 mb-n8 end-0" style="margin-right: -4rem;">
              <img class="w-200px d-block dark:d-none" src="/assets/images/template/sitting.svg" alt="sitting">
              <img class="w-200px d-none dark:d-block" src="/assets/images/template/sitting-dark.svg"
                alt="sitting-dark">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ClientOnly>
     <CommonContactModal :contactModal="contactModal" :toggleContactModal="toggleContactModal" />
    </ClientOnly>

 

</template>