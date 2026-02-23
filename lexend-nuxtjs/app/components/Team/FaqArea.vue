

<script setup lang="ts"> 
 import { ref } from 'vue'

const faq_data = ref([
  {
    question: "Do I need to know about how to code?",
    answer:
      "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",

  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
    
  },
  {
    question: "What is your refund policy?",
    answer:
      "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
    
  },
  {
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don’t limit it.",
    
  },
  {
    question: "Can I use this to create and sell a product?",
    answer: "Do not ever consider doing it.",
    
  },
  {
    question: "How do I change my account email?",
    answer:
      "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
    
  }
])

// FAQ data and toggle state
const activeIndex = ref < number | null > (0)  

function toggleFaq(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}



</script>

<template>
  <div id="faq" class="section panel overflow-hidden">
            <div class="section-outer panel py-6 xl:py-9">
                <div class="container sm:max-w-lg xl:max-w-xl">
                    <div class="section-inner panel" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
                        <div class="row child-cols-12 lg:child-cols-6 g-6 xl:g-8">
                            <div>
                                <div class="panel vstack gap-2">
                                    <span class="fw-bold text-primary dark:text-secondary">Support</span>
                                    <h2 class="title h3 xl:h2 m-0">FAQs</h2>
                                    <p class="desc fs-6 xl:fs-5">Everything you need to know about the product and billing. Can’t find the answer you’re looking for? <br class="d-none lg:d-block xl:d-none"> Please <NuxtLink class="uc-link border-bottom border-gray-300 dark:text-white text-none" to="/page-contact" style="padding-bottom: 2px;">Chat to our friendly team.</NuxtLink></p>
                                </div>
                            </div>
                            <div>
                                <div class="panel">
                                    <ul class="gap-0" data-uc-accordion="targets: > li;">

                                      <li
                                        v-for="(item, index) in faq_data"
                                        :key="index"
                                        style="padding-top: 1rem !important; padding-bottom: 1rem !important;"
                                        :class="`panel py-2 pt-0 ${index === 5 ? 'pb-0' : ''} ${activeIndex === index ? 'uc-open' : ''}`"
                                      >
                                        <a 
                                          class="uc-accordion-title fs-5 sm:fs-4"
                                          style="cursor: pointer;"
                                          @click="toggleFaq(index)"
                                        >
                                          {{ item.question }} 
                                        </a> 
                                        <div class="uc-accordion-content opacity-70" v-show="activeIndex === index">
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
 