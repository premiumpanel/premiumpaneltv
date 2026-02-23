<script setup lang="ts">
import { ref } from 'vue'

// FAQ data
const faq_data = ref([
  {
    question: "Do I need to know about how to code?",
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
    open: false,
  },
  {
    question: "Can I use it for commercial projects?",
    answer: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
    open: false,
  },
  {
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don’t limit it.",
    open: false,
  },
  {
    question: "Can I use this to create and sell a product?",
    answer: "Do not ever consider doing it.",
    open: false,
  },
  {
    question: "What is your refund policy?",
    answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
    open: false,
  },
])

// FAQ data and toggle state
const activeIndex = ref < number | null > (0)  

function toggleFaq(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}



</script>

<template>
  <div id="faq" class="section panel overflow-hidden">
    <div class="section-outer panel py-4 md:py-6 xl:py-9">
      <div class="container max-w-md">
        <div class="section-inner panel">
          <div class="panel vstack gap-4 md:gap-6 lg:gap-8">
            <h2 class="h4 sm:h3 lg:h2 m-0 text-center">Frequently asked questions:</h2>
            <div class="panel">
              <ul class="gap-1 uc-accordion">
                <li
                  v-for="(item, index) in faq_data"
                  :key="index"
                  :class="`panel p-3 lg:p-4 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 ${activeIndex === index ? 'uc-open' : ''}`"
                >
                  <a 
                    class="uc-accordion-title fs-5 sm:fs-4"
                    style="cursor: pointer;"
                    @click="toggleFaq(index)"
                  >
                    {{ item.question }} 
                  </a> 
                  <div class="uc-accordion-content mt-2" v-show="activeIndex === index">
                    <p>{{ item.answer }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <a
              href="#"
              class="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow mx-auto"
            >
              <span>Still have a question?</span>
              <i class="icon icon-1 unicon-arrow-right rtl:rotate-180"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
