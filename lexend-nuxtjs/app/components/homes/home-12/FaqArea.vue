<script setup lang="ts">
import { ref } from 'vue'
 

const faq_data = [
  {
    question: "Do I need to know about how to code?",
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
    isOpen: true
  },
  {
    question: "Can I use it for commercial projects?",
    answer: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won't breathe a word).",
    isOpen: false
  },
  {
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don't limit it.",
    isOpen: false
  },
  {
    question: "Can I use it to create and sell a product?",
    answer: "Do not ever consider doing it.",
    isOpen: false
  },
  {
    question: "What is your refund policy?",
    answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
    isOpen: false
  }
]




// FAQ data and toggle state
const activeIndex = ref<number | null>(0)

function toggleFaq(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}




</script>



<template>
  <div id="faq" class="faq section panel">
    <div
      class="section-outer panel py-6 sm:py-8 xl:py-10 mx-1 lg:mx-2 rounded-2 xl:rounded-3 bg-secondary dark:bg-gray-800">
      <div class="container lg:max-w-lg">
        <div class="section-inner panel"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div
            class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 xl:mb-9 max-w-700px mx-auto text-center">
            <h2 class="h3 lg:h2 xl:h1 m-0">FAQ</h2>
          </div>
          <div class="section-content panel">
            <ul class="uc-accordion gap-1 xl:gap-2 max-w-md xl:max-w-lg mx-auto"
              data-uc-accordion="targets: > li; multiple: false;">


              <li v-for="(item, index) in faq_data" :key="index"
                :class="`panel p-2 md:p-3 lg:p-4 bg-white dark:bg-opacity-5 rounded-1-5 sm:rounded-2 shadow-xs ${activeIndex === index ? 'uc-open' : ''}`">
                <a class="uc-accordion-title h6 md:h5 lg:h5 fw-bold ltr:pe-4 rtl:ps-4" style="cursor: pointer;"
                  @click="toggleFaq(index)">
                  {{ item.question }}
                </a>
                <div class="uc-accordion-content lg:fs-5 opacity-70" v-show="activeIndex === index">
                  <p>{{ item.answer }}</p>
                </div>
              </li>
 

            </ul>
          </div>
          <div class="section-footer panel d-flex justify-center mt-6 sm:mt-8 xl:mt-9">
            <div class="panel rounded-2 xl:rounded-3 d-inline-flex shadow-sm bg-white dark:bg-opacity-5"
              style="padding: 12px;">
              <div class="row items-center justify-center gy-2">
                <div class="col-12 sm:col-auto">
                  <NuxtLink to="/page-contact"
                    class="btn btn-md xl:btn-lg rounded-1-5 xl:rounded-2 w-100 text-white dark:text-dark bg-dark dark:bg-white hover:bg-opacity-90 dark:hover:bg-opacity-80">
                    <span>Have a question?</span>
                  </NuxtLink>
                </div>
                <div class="col-auto">
                  <div class="panel hstack justify-center gap-0">
                    <img src="/assets/images/avatars/02.jpg" alt="Avatar-image"
                      class="w-32px h-32px rounded-circle border border-3 border-white dark:border-gray-800">
                    <img src="/assets/images/avatars/05.png" alt="Avatar-image"
                      class="w-32px h-32px rounded-circle border border-3 border-white dark:border-gray-800 ms-n2">
                    <div class="position-absolute rounded-circle border border-white dark:border-gray-800 bg-primary"
                      style="bottom: 6%; right: 2%; width: 12px; height: 12px;"></div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="me-1">
                    <span class="fs-7 sm:fs-6 text-dark dark:text-white">24/7 available support</span>
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