<script setup>
import {ref} from 'vue';
import testimonial_data from '~/data/testimonial-data';


const visibleCount = ref(6)  

// const loadMore = () => {
//   if (visibleCount.value < testimonial_data.length) {
//     visibleCount.value += 3  
//   }
// }



const loadMore = () => {
  if (visibleCount.value > 6) {
    visibleCount.value = 6 
  } else {
    visibleCount.value = testimonial_data.length // expand
  }
}



</script>


 


<template>



  <div id="clients_feedbacks" class="clients-feedbacks section panel overflow-hidden">
    <div class="section-outer panel py-6 xl:py-9">
      <div class="container">
        <div class="section-inner panel">
          <div class="panel vstack gap-4 "
            data-anime="onview: -200; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});">
            <div class="section-header vstack items-center gap-2 lg:gap-3"
              style="transform: translateX(0px) translateY(0px); opacity: 1;"><span
                class="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">Clients
                feedback</span>
              <h2 class="h4 sm:h3 lg:h1 m-0 text-center max-w-650px mx-auto">What our  <span
                  class="text-tertiary dark:text-primary">satisfied clients</span>  said about us!</h2>
            </div> 
            <div id="clients_feedback_area" :class="`panel w-100 max-w-lg mx-auto overflow-hidden ${visibleCount >  6 ? 'uc-active h-auto' : 'h-700px'} `"
              style="transform: translateX(0px) translateY(0px); opacity: 1;">
              <div class="row child-cols-4 md-child-cols-6 sm-child-cols-12 gx-4 gy-0" data-uc-grid="masonry: true;"
                style="position: relative; height: 1113px;">


                <div v-for="(item, index) in testimonial_data.slice(0, visibleCount)" :key="index" class="isotop-element mt-4" :style="`position: absolute; left: ${item.left}px; top: ${item.top}px;`">
                  <div
                    class="px-3 sm:px-4 py-4 panel  vstack justify-between gap-3 dark:bg-gradient-45 to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-1-5 lg:rounded-2">
                    <div class="panel vstack items-start gap-2">
                      <p class="fs-6 lg:fs-5">{{ item.text }}</p>
                    </div>
                    <div class="panel hstack gap-2 mt-2">
                      <img alt="Mark Zellers"  class="w-40px rounded-circle" style="color:transparent"
                        :src="item.image">
                      <div class="panel vstack justify-center gap-narrow">
                        <ul class="nav-x gap-0 text-warning">
                          <li v-for="i in item.rating" :key="i"><i class="icon icon-narrow unicon-star-filled"></i></li>
 
                        </ul><span class="fw-bold ft-secondary dark:text-white m-0">{{ item.name }}</span>
                      </div>
                    </div>
                  </div>
                </div> 

              </div>
              <div id="clients-feedback-toggle-area" 
                class="position-absolute bottom-0 start-0 end-0 h-300px vstack items-center justify-end bg-gradient-to-t  to-transparent z-1">              
                <a  @click="loadMore"
                class="btn btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill px-3"
                  data-uc-toggle="target: #clients_feedback_area; cls: uc-active" style="cursor: pointer;" > 
                     {{ visibleCount > 6 ? 'Collapse Feedbacks' : 'View All Feedbacks' }}
                  </a>
              </div>
            </div>
            <div class="panel max-w-700px mx-auto" style="transform: translateX(0px) translateY(0px); opacity: 1;">
              <div class="panel vstack gap-3 sm:gap-4 text-center"
                data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;">
                <p class="fs-6 m-0">Trusted by over most popular companies worldwide</p>
                <div class="panel">
                  <div class="row child-cols g-6 items-center text-center">
                    <div>
                      <div class="panel"><img alt="brand" decoding="async" data-nimg="1"
                          class="max-w-80px lg:max-w-128px image-filter" style="color:transparent"
                          src="/assets/images/brands/brand-01.svg"></div>
                    </div>
                    <div>
                      <div class="panel"><img alt="brand" decoding="async" data-nimg="1"
                          class="max-w-80px lg:max-w-128px image-filter" style="color:transparent"
                          src="/assets/images/brands/brand-05.svg"></div>
                    </div>
                    <div>
                      <div class="panel"><img alt="brand" decoding="async" data-nimg="1"
                          class="max-w-80px lg:max-w-128px image-filter" style="color:transparent"
                          src="/assets/images/brands/brand-03.svg"></div>
                    </div>
                    <div>
                      <div class="panel"><img alt="brand" decoding="async" data-nimg="1"
                          class="max-w-80px lg:max-w-128px image-filter" style="color:transparent"
                          src="/assets/images/brands/brand-07.svg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>