
<script setup>

  
// video popup 
import {useVideoModal} from "../../../composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/Q5PG0rMXgvw?si=uhzrlIvzSWwOe_F3';


 


</script>

<template>
  <div id="clients_feedbacks" class="clients-feedbacks section panel overflow-hidden">
    <div class="section-outer panel pt-4 md:pt-6 xl:pt-9">
      <div class="container max-w-lg">
        <div class="section-inner panel">
          <div class="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div class="row child-cols-12 justify-center col-match g-2 lg:g-3" data-uc-grid>
              <div>
                <div class="panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
                  <div class="row child-cols-12 col-match g-0" data-uc-grid>
                    <div class="sm:col-6 lg:col-8">
                      <div class="panel vstack justify-between gap-3 px-3 py-4 lg:px-5 lg:py-6">
                        <div class="panel vstack items-start gap-2">
                          <div class="panel">
                            <div class="hstack h-48px">
                              <img class="w-128px dark:d-none" src="/assets/images/brands/brand-08.svg" alt="Brand">
                              <img class="w-128px d-none dark:d-inline-flex"
                                src="/assets/images/brands/brand-08-dark.svg" alt="Brand">
                            </div>
                          </div>
                          <p class="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark dark:text-white">“We are based in Europe
                            and the latest Data Protection Regulation forces us to look for service suppliers than
                            comply with this regulation and as we look to create our website and this builder just
                            outstanding!”</p>
                        </div>
                        <div class="panel mt-2 lg:mt-4">
                          <div class="panel vstack items-start gap-0 lg:gap-1">
                            <h6 class="h6 lg:h5 m-0">Sarah Edrissi</h6>
                            <span class="fs-7 lg:h6 opacity-70">Lead Marketing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sm:col-6 lg:col-4">
                      <div class="panel overflow-hidden h-100" data-uc-lightbox="video-autoplay: true;">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-1x1 h-100 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/template/login.webp" alt="image">
                        </figure>
                        <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }"
                          class="position-absolute top-50 start-50 translate-middle cstack w-48px lg:w-64px h-48px lg:h-64px rounded-circle shadow-xs text-none bg-white bg-opacity-80 text-primary"
                          data-caption="Sarah Edrissi' said:" data-attrs="width: 640; height: 480;"
                          style="backdrop-filter: blur(2px);">
                          <i class="icon-1 unicon-play fw-bold"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow">
              <span>See all feedbacks</span>
              <i class="icon icon-1 unicon-arrow-right rtl:rotate-180"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />
</template>