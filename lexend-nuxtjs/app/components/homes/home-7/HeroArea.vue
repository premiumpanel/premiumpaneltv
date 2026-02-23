<script setup>

import { VueWriter } from 'vue-writer'




</script>


<template>
  <div id="hero_header" class="hero-header hero-seven-scene section panel overflow-hidden">
    <div class="position-absolute top-0 start-0 end-0 h-screen bg-tertiary-300 dark:bg-primary-700"></div>
    <div
      class="position-absolute top-0 start-0 end-0 h-screen bg-gradient-to-b from-transparent via-transparent to-white dark:to-black">
    </div>
    <div class="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
      <div class="d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: anime.stagger(150, {start: 500});">
        <img src="/assets/images/vectors/marketing.svg" alt="Icon"
          class="d-inline-block position-absolute w-72px dark:d-none" style="top: 15%; left: 10%;">
        <img src="/assets/images/vectors/charts-pc.svg" alt="Icon"
          class="d-inline-block position-absolute w-72px dark:d-none" style="top: 15%; right: 10%;">
        <img src="/assets/images/vectors/group.svg" alt="Icon"
          class="d-inline-block position-absolute w-64px dark:d-none"
          style="top: 35%; right: -1%; transform: rotate(45deg);">
        <img src="/assets/images/vectors/idea.svg" alt="Icon"
          class="d-inline-block position-absolute w-48px dark:d-none" style="top: 40%; left: 15%;">
        <img src="/assets/images/vectors/group.svg" alt="Icon"
          class="d-inline-block position-absolute w-64px dark:d-none" style="top: 30%; left: -1%;">
        <img src="/assets/images/vectors/marketing-dark.svg" alt="Icon"
          class="d-inline-block position-absolute w-72px d-none dark:d-block" style="top: 15%; left: 10%;">
        <img src="/assets/images/vectors/charts-pc-dark.svg" alt="Icon"
          class="d-inline-block position-absolute w-72px d-none dark:d-block" style="top: 15%; right: 10%;">
        <img src="/assets/images/vectors/group-dark.svg" alt="Icon"
          class="d-inline-block position-absolute w-64px d-none dark:d-block"
          style="top: 35%; right: -1%; transform: rotate(45deg);">
        <img src="/assets/images/vectors/idea-dark.svg" alt="Icon"
          class="d-inline-block position-absolute w-48px d-none dark:d-block" style="top: 40%; left: 15%;">
        <img src="/assets/images/vectors/group-dark.svg" alt="Icon"
          class="d-inline-block position-absolute w-64px d-none dark:d-block" style="top: 30%; left: -1%;">
      </div>
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="row child-cols-12 justify-center items-center g-8">
            <div class="lg:col-8">
              <div class="panel vstack items-center gap-2 px-2 text-center"
                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                <span class="fs-7 fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-tertiary">Automate
                  your workflow</span>
                <h1 class="h3 sm:h2 md:h1 lg:display-6 lh-lg mb-1 xl:mb-2 mt-2">
                  Get more done in less time with
                  <span class="px-1 bg-primary text-tertiary dark:bg-tertiary dark:text-primary"
                    data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;">
                    <vue-writer :array="['Automation', 'Chatbots', 'ClaudeAI']" :iterations="'1'"></vue-writer>
                  </span>
                </h1>
                <p class="fs-6 xl:fs-3 xl:px-6">Unlock your <b class="dark:text-white">productivity</b> potential and
                  automate as fast as you can type with our intuitive and powerful <b class="dark:text-white">AI
                    automation</b> app.</p>
                <div class="vstack md:hstack justify-center gap-2 mt-3">
                  <a href="#"
                    class="btn btn-md xl:btn-lg btn-alt-dark border-dark px-3 lg:px-5 fw-bold contrast-shadow-sm hover:contrast-shadow">
                    <img src="/assets/images/template/google-icon.svg" alt="Google Icon">
                    <span>Start free trial</span>
                  </a>
                </div>
                <div class="panel mt-3 lg:mt-4 min-w-700px text-center">
                  <div class="row child-cols-12 lg:child-cols-4 justify-center gx-0">
                    <div>
                      <div class="hstack justify-center gap-1">
                        <span class="icon mb-narrow">
                          <img class="w-24px dark:d-none" src="/assets/images/custom-icons/icon-08.svg" alt="icon">
                          <img class="w-24px d-none dark:d-block" src="/assets/images/custom-icons/dark-icon-08.svg"
                            alt="icon">
                        </span>
                        <span class="fs-7 fw-medium mb-narrow text-inherit">AI-Powered Automation</span>
                      </div>
                    </div>
                    <div>
                      <div class="hstack justify-center gap-1">
                        <span class="icon mb-narrow">
                          <img class="w-24px dark:d-none" src="/assets/images/custom-icons/icon-07.svg" alt="icon">
                          <img class="w-24px d-none dark:d-block" src="/assets/images/custom-icons/dark-icon-07.svg"
                            alt="icon">
                        </span>
                        <span class="fs-7 fw-medium mb-narrow text-inherit">Chatbots, Free forever</span>
                      </div>
                    </div>
                    <div>
                      <div class="hstack justify-center gap-1">
                        <span class="icon mb-narrow">
                          <img class="w-24px dark:d-none" src="/assets/images/custom-icons/icon-04.svg" alt="icon">
                          <img class="w-24px d-none dark:d-block" src="/assets/images/custom-icons/dark-icon-04.svg"
                            alt="icon">
                        </span>
                        <span class="fs-7 fw-medium mb-narrow text-inherit">Cutting-edge AI features</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="uc-video-scene"
              data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;">
              <div
                class="panel max-w-1000px mx-auto mt-2 rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg overflow-hidden"
                data-anime="onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;">

                <video src="/assets/images/media/lexend-home-7.webm" preload="none" loop muted playsinline autoplay
                  poster="/assets/images/media/lexend-home-7.png" class="w-full h-full object-cover"></video>

              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  </div>

</template>