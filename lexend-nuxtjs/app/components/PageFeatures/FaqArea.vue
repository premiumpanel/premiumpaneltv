<script setup lang="ts">
import { ref } from 'vue';
interface FaqItem {
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
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
    question: "Can I use this to create and sell a product?",
    answer: "Do not ever consider doing it.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
  },
];


// FAQ data and toggle state
const activeIndex = ref < number | null > (0)  
function toggleFaq(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}

defineProps({
  style_2: {
    type: Boolean,
    default: false,
  },
  style_3: {
    type: Boolean,
    default: false,
  },
});


</script>


<template>

  <div id="faq" class="section panel overflow-hidden">
    <div :class="`section-outer panel ${style_2 ? 'pb-7 sm:pb-8' : 'py-6 xl:py-9'} ${style_3 ? 'pb-6 xl:pb-9' : ''} `"> 
      <div class="container max-w-lg">
        <div class="section-inner panel"
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div class="panel">
            <h2 class="h4 sm:h3 lg:h2 m-0 text-center">Frequenlty asked questions:</h2>
            <div
              class="panel mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 xl:p-6 lg:max-w-750px xl:w-auto m-auto rounded-2 bg-secondary dark:bg-gray-800">
              <ul class="gap-4 uc-accordion" data-uc-accordion="targets: > li;">
 
                <li
                  v-for="(faq, index) in faq_data"
                  :key="index"
                  :class="{ 'uc-open': activeIndex === index }"
                >
                  <a
                    class="uc-accordion-title fs-5 sm:fs-4"
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



</template>

 