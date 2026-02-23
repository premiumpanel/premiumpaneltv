<script setup>
import CountUp from 'vue-countup-v3'

const counter_data = [
  { id: 1, value: 220, suffix: '+', label: "Projects Completed" },
  { id: 2, value: 95, suffix: '%', label: "Satisfaction Rate" },
  { id: 3, value: 50, suffix: '+', label: "Team members" },
]

defineProps({
  style_2: {
    type: Boolean,
    default: false,
  },
});


</script>

<template>
  <div id="facts_numbers" class="facts-numbers section panel overflow-hidden">
    <div class="section-outer panel">
      <div class="container max-w-lg">
        <div class="section-inner panel">
          <div v-if="!style_2" class="panel vstack items-center gap-2 mb-4 lg:mb-8 max-w-800px mx-auto text-center"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <h2 class="h4 lg:h3 fw-bolder m-0">Everything you need is right <br> at your fingertips</h2>
          </div>
          <div class="panel my-4 lg:my-6"
            data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;">
            <div class="row child-cols col-match items-center justify-center text-center gy-4 lg:gy-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});">
              
              <div v-for="(counter, index) in counter_data" :key="index">
                <div class="fact-item panel vstack gap-1">
                  <h5 class="h3 md:h2 lg:h1 xl:display-3 m-0 text-primary dark:text-secondary">
                    <count-up :end-val="counter.value" class="d-inline"></count-up>{{ counter.suffix }}

                  </h5>
                  <p class="fw-medium">{{ counter.label }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <NuxtLink to="/page-contact" class="btn btn-md btn-primary rounded-default text-white shadow-xs">Get Free
              Consultation</NuxtLink>
            <p class="fs-6 text-muted">Book a 30-min call with our team.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>