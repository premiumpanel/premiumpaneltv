<script setup>
import { ref } from 'vue'

const faqItems = ref([
  {
    question: 'Do I need to know about how to code?',
    answer: 'Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.',
    open: true
  },
  {
    question: 'Can I use it for commercial projects?',
    answer: 'Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).',
    open: false
  },
  {
    question: 'Can I use it for multiple projects?',
    answer: 'Definitely! Please use it however you like; we don’t limit it.',
    open: false
  },
  {
    question: 'Can I use this to create and sell a product?',
    answer: 'Do not ever consider doing it.',
    open: false
  },
  {
    question: 'What is your refund policy?',
    answer: 'We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.',
    open: false
  }
])

// Toggle function
const toggleFAQ = (index) => {
  faqItems.value = faqItems.value.map((item, i) => ({
    ...item,
    open: i === index ? !item.open : false
  }))
}
</script>


<template>
  

  <div id="faq" class="faq section panel overflow-hidden">
    <div class="section-outer panel">
      <div class="container max-w-md">
        <div class="section-inner panel" 
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div class="panel vstack gap-6 xl:gap-8">
            <div class="vstack gap-2 text-center">
              <span class="fw-bold text-primary dark:text-secondary">FAQ</span>
              <h2 class="h4 sm:h3 xl:h2 m-0 text-center">Frequently asked questions:</h2>
              <p class="fs-6 xl:fs-5">Everything you need to know about the product and billing.</p>
            </div>
            <div class="panel">
              <ul class="uc-accordion-divider gap-5 uc-accordion" style="--divider-gap: 40px">
                <li 
                  v-for="(item, index) in faqItems" 
                  :key="index" 
                  class="panel"
                  :class="{ 'uc-open': item.open }"
                >
                  <a 
                    style="cursor: pointer;"
                    class="uc-accordion-title fs-5 sm:fs-4"
                    @click.prevent="toggleFAQ(index)"
                  >
                    {{ item.question }}
                  </a>
                  <div class="uc-accordion-content" v-show="item.open">
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
</template>
