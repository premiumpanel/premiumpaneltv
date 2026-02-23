<script setup>
import CountUp from 'vue-countup-v3'


const counter_data = [
  {
    value: 2014,
    suffix: "",
    label: "Lexend founded.",
    animation: {
      from: 0,
      to: 2014,
      round: 1,
      easing: "linear",
      duration: 1200
    }
  },
  {
    value: 50,
    suffix: "",
    label: "Hardworking group.",
    animation: {
      from: 0,
      to: 50,
      round: 1,
      easing: "linear",
      duration: 1200
    }
  },
  {
    value: 100,
    suffix: "k",
    label: "Document workflows.",
    animation: {
      from: 0,
      to: 100,
      round: 1,
      easing: "linear",
      duration: 1200
    }
  }
];


</script>

<template>
  <div id="about_us" class="about-us section panel overflow-hidden"
    data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;">
    <div class="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
      <div class="d-none lg:d-block"
        data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;">
        <div class="position-absolute bottom-0 start-0 ms-n8 mb-6">
          <img class="w-150px xl:w-250px d-block dark:d-none" src="/assets/images/template/walking.svg" alt="walking">
          <img class="w-150px xl:w-250px d-none dark:d-block" src="/assets/images/template/walking-dark.svg"
            alt="walking-dark">
        </div>
      </div>
      <div class="container max-w-lg">
        <div class="section-inner panel">
          <div class="panel vstack text-center"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2 class="h3 lg:h2 mb-4">How Lexend helps</h2>
            <p class="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">Teams use Lexend to improve document
              workflows, insights, and speed while delivering an amazing experience for their customers. Businesses
              trust Lexend’s all-in-one document automation software to streamline the process to create, approve, and
              eSign proposals, quotes, contracts, and more. With powerful document creation and workflow capabilities,
              teams can provide their customers with a more professional, timely, and engaging experience.</p>
            <p class="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">In 2014, Steven Smith have gotten so much
              of our time back that we're now able to put towards things that are actually helping our company as
              opposed to just throwing content out there. and the idea of Lexend was born. Today, Lexend empowers teams
              to easily communicate with customers through personalized documents that can be created in minutes, build
              meaningful relationships..</p>
            <div class="panel mt-6">
              <div class="row child-cols-6 lg:child-cols-4 justify-center g-3 col-match">

                <div v-for="(counter, index) in counter_data" :key="index">
                  <div class="panel vstack gap-1">
                    <h4 class="h2 xl:h1 m-0"><span
                        data-anime="onview: -100; textContent: 2014; round: 1; easing: linear; duration: 1200;">
                      <count-up :end-val="counter.value" class="d-inline"></count-up> {{ counter.suffix }}
                      </span>
                    </h4>
                    <p class="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">{{ counter.label }}</p>
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