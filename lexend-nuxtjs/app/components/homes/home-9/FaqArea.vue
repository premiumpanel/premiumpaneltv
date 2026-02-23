

<script setup lang="ts">
import { ref } from 'vue';

interface FaqItemType {
    question: string;
    answer: string;
}[]


const faq_data:FaqItemType[] = [
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
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don’t limit it.",
  },
  {
    question: "Can I use it to create and sell a product?",
    answer: "Do not ever consider doing it.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
  },
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
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don’t limit it.",
  },
];

// FAQ data and toggle state
const activeIndex = ref < number | null > (0)  
function toggleFaq(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}

</script>

<template>
  <div id="faq" class="faq section panel">
    <div class="section-outer panel">
      <div class="container">
        <div class="section-inner panel lg:max-w-lg mx-auto border-top py-6 lg:py-9 xl:pb-10"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div class="row child-cols-12 lg:child-cols col-match g-4 lg:g-8">
            <div>
              <div class="vstack gap-2">
                <h2 class="h4 sm:h3 xl:h2 m-0">Frequently asked questions!</h2>
              </div>
            </div>
            <div class="lg:col-7">
              <div class="panel">
                <ul class="uc-accordion uc-accordion-divider gap-6 max-w-md mx-auto" style="--divider-gap: 48px;"
                  data-uc-accordion="targets: > li; multiple: false;">


 

                  <li
                  v-for="(faq, index) in faq_data"
                  :key="index" class="panel"
                  :class="{ 'uc-open': activeIndex === index }"
                >
                  <a
                    class="uc-accordion-title h6 md:h5 lg:h5 fw-medium ltr:pe-4 rtl:ps-4"
                    style="cursor: pointer;"
                    @click="toggleFaq(index)"
                  >
                    {{ faq.question }}
                  </a>
                  <div class="uc-accordion-content lg:fs-5 opacity-70" v-show="activeIndex === index">
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