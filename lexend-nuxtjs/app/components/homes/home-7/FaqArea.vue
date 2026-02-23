<script setup>
import { ref } from 'vue'

const faqData = ref([
  { 
    question: "Do I need to know about how to code?", 
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend." },
  { 
    question: "Can I use it for commercial projects?", 
    answer: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word)." },
  { 
    question: "Can I use it for multiple projects?", 
    answer: "Definitely! Please use it however you like; we don’t limit it." },
  { 
    question: "Can I use this to create and sell a product?", 
    answer: "Do not ever consider doing it." },
  { 
    question: "What is your refund policy?", 
    answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made." },
  { 
    question: "Do I need to know about how to code?", 
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend." },
  { 
    question: "Can I use it for commercial projects?", 
    answer: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word)." },
  { 
    question: "Can I use it for multiple projects?", 
    answer: "Definitely! Please use it however you like; we don’t limit it." },
])

const openIndex = ref(0)  

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

defineProps({
  style_2: Boolean
})

 
</script>



<template>
  <div id="faq" class="faq section panel">
    <div :class="`section-outer panel ${style_2 ? 'pb-4 lg:pb-6 xl:pb-10' : ''}`">
      <div class="container lg:max-w-lg">
        <div class="section-inner panel"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div class="row child-cols-12 col-match g-4">
            <div>
              <div class="vstack items-center text-center gap-2">
                <h2 class="h4 sm:h3 xl:h2 m-0">Frequently asked questions!</h2>
              </div>
            </div>
            <div>
              <div class="panel rounded-2 p-3 lg:p-8 border">

                <ul class="uc-accordion uc-accordion-divider gap-7 max-w-md mx-auto" style="--divider-gap: 56px">
                  <li v-for="(faq, index) in faqData" :key="index" class="panel"
                    :class="{ 'uc-open': openIndex === index }">
                    <a href="#" class="uc-accordion-title h6 md:h5" @click.prevent="toggleFaq(index)">
                      {{ faq.question }}
                    </a>
                    <div class="uc-accordion-content lg:fs-4 opacity-70" v-show="openIndex === index">
                      <p>{{ faq.answer }}</p>
                    </div>
                  </li>
                </ul>



              </div>
            </div>
            <div>
              <div
                class="panel vstack items-center justify-between gap-2 text-center rounded-2 p-3 lg:py-8 bg-primary text-white uc-dark">
                <div class="panel">
                  <div class="vstack items-center gap-2">
                    <h2 class="h6 lg:h5 m-0">Still have questions?</h2>
                    <p class="lg:fs-5 text-dark dark:text-white text-opacity-70">Can’t find the answer you’re looking
                      for? <br> Please chat to our friendly team.</p>
                    <div class="hstack justify-center gap-0">
                      <img src="/assets/images/avatars/02.jpg" alt="Avatar-image"
                        class="w-48px h-48px rounded-circle border border-2 border-white dark:border-primary">
                      <img src="/assets/images/avatars/01.jpg" alt="Avatar-image"
                        class="w-48px h-48px rounded-circle border border-2 border-white dark:border-primary ms-n2">
                    </div>
                  </div>
                </div>
                <NuxtLink to="/page-contact"
                  class="btn btn-md btn-primary text-tertiary dark:bg-tertiary dark:text-primary fw-bold rounded-pill px-3 lg:px-5 mt-1 lg:mt-2">Get
                  in touch</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>