<template>
  <div id="faq" class="faq section panel">
    <div class="section-outer panel">
      <div class="container">
        <div
          class="section-inner panel"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
        >
          <div class="row child-cols-12 col-match gy-2 lg:gy-6">
            <div>
              <div class="vstack items-center text-center gap-2">
                <h2 class="h4 lg:h3 m-0">FAQ</h2>
              </div>
            </div>
            <div>
              <div class="panel">
                <ul class="uc-accordion gap-1 max-w-850px mx-auto">
                  <li
                    v-for="(item, index) in faq_data"
                    :key="index"
                    :class="`panel p-3 lg:p-4 rounded-1-5 bg-secondary dark:bg-gray-300 dark:bg-opacity-15 ${activeIndex === index ? 'uc-open' : ''}`"
                  >
                    <a
                      style="cursor: pointer;"
                      class="uc-accordion-title h6 md:h5 lg:h4 ls-0 fw-bold ltr:pe-4 rtl:ps-4"
                      @click.prevent="toggle(index)"
                    >
                      {{ item.question }}
                    </a>
                    <div
                      class="uc-accordion-content lg:fs-5 opacity-70"
                      v-show="activeIndex === index"
                    >
                      <p>{{ item.answer }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Your FAQ data
const faq_data = [
  {
    question: 'Do I need to know about how to code?',
    answer:
      'Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.'
  },
  {
    question: 'Can I use it for commercial projects?',
    answer:
      'Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).'
  },
  {
    question: 'Can I use it for multiple projects?',
    answer: 'Definitely! Please use it however you like; we don’t limit it.'
  },
  {
    question: 'Can I use it to create and sell a product?',
    answer: 'Do not ever consider doing it.'
  },
  {
    question: 'What is your refund policy?',
    answer:
      'We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.'
  }
]

// To track which FAQ is open, -1 means all closed
const activeIndex = ref(-1)

// Toggle function to open/close FAQ item
function toggle(index) {
  if (activeIndex.value === index) {
    activeIndex.value = -1 // close if already open
  } else {
    activeIndex.value = index
  }
}
</script>
