<script setup lang="ts">
import { ref } from 'vue'
 
const faq_data = [
  {
    question: "Do I need to know about how to code?",
    answer:
      "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word)."
  },
  {
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don’t limit it."
  },
  {
    question: "Can I use it to create and sell a product?",
    answer: "Do not ever consider doing it."
  },
  {
    question: "What is your refund policy?",
    answer:
      "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made."
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
    <div class="section-outer panel py-6 sm:py-8 xl:py-10">
      <div class="container lg:max-w-lg">
        <div class="section-inner panel"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div
            class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 xl:mb-9 max-w-700px mx-auto text-center">
            <h2 class="h3 sm:h2 xl:h1 m-0">Frequently asked questions!</h2>
          </div>
          <div class="section-content panel">
            <ul class="uc-accordion gap-1 max-w-md xl:max-w-lg mx-auto"
              data-uc-accordion="targets: > li; multiple: false;">


              <li v-for="(item, index) in faq_data" :key="index"
                :class="`panel p-2 md:p-3 lg:p-4 bg-secondary dark:bg-gray-800 rounded-2 ${activeIndex === index ? 'uc-open' : ''}`">
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
          <div class="section-footer panel vstack gap-2 items-center mt-6 sm:mt-8 xl:mt-9">
            <NuxtLink to="/page-contact"
              class="btn btn-md lg:btn-lg btn-outline-dark fs-6 px-4 dark:text-white dark:hover:text-dark dark:hover:bg-white border rounded-pill">
              <span>Still have a question?</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>