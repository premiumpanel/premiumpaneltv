 

<script setup>
import { ref } from "vue";

const showVideo = ref(false);

const openVideo = () => {
  showVideo.value = true;
};

const closeVideo = () => {
  showVideo.value = false;
};
</script>

<template>
  <div id="how_it_works" class="how-it-works section panel">
    <div
      class="section-outer panel"
      data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
    >
      <div class="container xl:max-w-xl">
        <div
          class="relative panel overflow-hidden ratio ratio-16x9 rounded-2 lg:rounded-3 border border-2 border-white dark:border-gray-700"
        >
     
          <video
            src="/assets/images/media/lexend_vid_home-6.webm"
            preload="none"
            loop
            muted
            playsinline
            autoplay
            poster="/assets/images/media/lexend_vid_home-6.jpg"
            class="w-full h-full object-cover"
          ></video>
 
            <div class="position-cover bg-black bg-opacity-40" data-uc-lightbox="video-autoplay: true; animation: scale;">
            <a @click="openVideo" style="cursor: pointer;" data-attrs="width: 720; height: 640;"
              class="position-absolute top-50 start-50 translate-middle uc-link w-64px lg:w-100px h-64px lg:h-100px rounded-circle cstack bg-white bg-opacity-70 backdrop-2 text-primary">
              <i class="icon-3 unicon-play fw-bold"></i>
            </a>
          </div>
 
          <div
            v-if="showVideo"
            class="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 rounded-2 lg:rounded-3"
          >
            <div class="relative w-[90%] lg:w-[80%]">
       
              <button
                @click="closeVideo"
                class="absolute text-white bg-black text-2xl z-10"
                style="top: 10px !important; right: 10px !important; " 
              >
                ✕
              </button>
 
              <video
                src="/assets/images/media/lexend_vid_home-6.webm"
                controls
                autoplay
                playsinline
                class="w-full h-auto rounded-lg"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


 