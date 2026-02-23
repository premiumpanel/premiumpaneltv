<script setup>

import { ref } from 'vue';

const contactModal = ref(false);

const toggleContactModal = () => {
  contactModal.value = !contactModal.value;
};

</script>






<template>
  <div id="pre_cta" class="pre-cta section panel overflow-hidden">
    <div class="section-outer panel pb-4 sm:pb-6 xl:pb-9">
      <div class="container max-w-xl">
        <div
          class="section-inner panel p-4 md:p-6 lg:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
          data-anime="onview: -200; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;">
          <div class="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <h2 class="h3 lg:h2 m-0">Start your 30-day free trial.</h2>
            <p class="fs-6 md:fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">Join over 2,500+ startups already
              growing with Lexend.</p>
            <div class="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2">
              <a style="cursor: pointer;" @click="toggleContactModal"
                class="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs"
                data-uc-toggle>
                <i class="icon-1 unicon-play-outline fw-medium"></i>
                <span>View demo</span>
              </a>
              <NuxtLink to="/page-pricing" class="btn btn-md btn-primary rounded-default text-white shadow-xs">Start
                free trial</NuxtLink>
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