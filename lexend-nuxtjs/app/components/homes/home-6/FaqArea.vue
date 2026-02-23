 

<script setup lang="ts">
import { ref } from 'vue' 

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

const faqs = ref<FAQItem[]>([
    {
    question: "Do I need to know about how to code?",
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
    isOpen: false
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
    question: "Can I use this to create and sell a product?",
    answer: "Do not ever consider doing it.",
    isOpen: false
  },
  {
    question: "What is your refund policy?",
    answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
    isOpen: false
  },
  {
    question: "Do I need to know about how to code?",
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
    isOpen: false
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
  }
])


 
// FAQ data and toggle state
const activeIndex = ref < number | null > (0)  

function toggleFaq(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}
 
 


</script>

<template>
  <div id="faq" class="faq section panel">
    <div class="section-outer panel py-6 xl:py-10">
      <div class="container xl:max-w-xl">
        <div class="section-inner panel"
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div class="faq-inner panel row child-cols-12 lg:child-cols justify-between g-4">
            <div class="lg:col-5">
              <div class="panel vstack items-start gap-2"
                data-uc-sticky="end: .faq-inner; offset: 50vh - 50%; media: @l;">
                <div class="cstack gap-1 py-1 px-3 border rounded-pill">
                  <span class="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary"></span>
                  <span class="fs-8 fw-bold text-uppercase">FAQs</span>
                </div>
                <h2 class="h3 lg:h2 m-0">Frequently Asked Questions</h2>
                <p class="fs-6 lg:fs-5">We're looking for people who share our vision! Most of our time
                  used to be taken up by most of who created new websites for their businesses.</p>
                <NuxtLink to="/page-contact" class="btn btn-sm lg:btn-md btn-primary px-3 mt-2">
                  <span>Still have a question?</span>
                  <i class="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180"></i>
                </NuxtLink>
              </div>
            </div>

            <div class="lg:col-6">
              <div class="panel">
                <ul class="gap-2 uc-accordion">                  
                  
                <li
                  v-for="(faq, index) in faqs"
                  :key="index"
                  class="panel p-2 md:p-4 border rounded-1-5"
                  :class="{ 'uc-open': activeIndex === index }"
                >
                  <a
                    class="uc-accordion-title fs-5 sm:fs-4 ltr:pe-4 rtl:ps-4"
                    style="cursor: pointer;"
                    @click="toggleFaq(index)"
                  >
                    {{ faq.question }}
                  </a>
                  <div class="uc-accordion-content" v-show="activeIndex === index">
                    <p>{{ faq.answer }}</p>
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

 