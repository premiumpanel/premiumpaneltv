
<script setup lang="ts">
import { ref } from 'vue';

const faq_data = [
  {
    question: "Do I need to know about how to code?",
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
  },
  {
    question: "Can I use it for commercial projects?",
    answer: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won't breathe a word)."
  },
  {
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don't limit it."
  },
  {
    question: "Can I use it to create and sell a product?",
    answer: "Do not ever consider doing it."
  },
  {
    question: "What is your refund policy?",
    answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made."
  },
  {
    question: "Do I need to know about how to code?",
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
  },
  {
    question: "Can I use it for commercial projects?",
    answer: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won't breathe a word)."
  },
  {
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don't limit it."
  }
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
      <div class="container lg:max-w-lg pb-6 lg:pb-8 xl:pb-10">
        <div class="section-inner panel"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div class="row child-cols-12 col-match g-4">
            <div>
              <div class="vstack items-center text-center gap-2">
                <h2 class="h4 sm:h3 xl:h2 m-0">Frequently asked questions!</h2>
              </div>
            </div>
            <div>
              <div class="panel">
                <ul class="uc-accordion gap-1 max-w-md mx-auto" data-uc-accordion="targets: > li; multiple: false;">
                   <li 
                   v-for="(faq, index) in faq_data" :key="index"
                   :class="`panel p-2 md:p-3 lg:p-4 bg-secondary dark:bg-tertiary-700 rounded-1-5 ${activeIndex === index ? 'uc-open' : ''}`">
                    <a @click="toggleFaq(index)" class="uc-accordion-title h6 md:h5 lg:h5 fw-medium ltr:pe-4 rtl:ps-4" style="cursor: pointer;">
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

