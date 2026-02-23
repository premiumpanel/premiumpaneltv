 

  <template>
  <div class="panel overflow-hidden m-1 lg:m-2 rounded-2 xl:rounded-3">
    <!-- Background gradients -->
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-secondary to-transparent dark:d-none"></div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-gray-800 to-transparent d-none dark:d-block"></div>
    
    <!-- Pricing Section -->
    <div id="pricing" class="pricing section panel overflow-hidden">
      <div class="section-outer panel pt-6 sm:pt-8 xl:pt-10">
        <div class="container">
          <div class="section-inner panel">
            <div class="section-heading panel vstack items-center gap-3 xl:gap-4 mb-6 sm:mb-8 xl:mb-9 xl:max-w-900px mx-auto text-center">
              <h2 class="h3 lg:h2 xl:h1 m-0">Predictable pricing, <span class="text-primary dark:text-primary-400">exceptional results.</span></h2>
              <div class="rounded-2 p-1 mx-auto bg-white dark:bg-opacity-5 shadow-sm">
                <ul class="uc-subnav uc-subnav-pill hstack gap-1">
                  <li :class="{ 'uc-active': activeTab === 'monthly' }">
                    <a class="btn btn-sm xl:btn-md px-4 border-0 fw-bold rounded-1-5 text-dark dark:text-white duration-0" 
                       @click="switchTab('monthly')">Pay monthly</a>
                  </li>
                  <li :class="{ 'uc-active': activeTab === 'yearly' }">
                    <a class="btn btn-sm xl:btn-md px-4 border-0 fw-bold rounded-1-5 text-dark dark:text-white duration-0" 
                       @click="switchTab('yearly')">Pay yearly</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Pricing Swiper -->
            <div class="section-content panel">
              <!-- Yearly Plans -->
              <swiper 
                v-if="activeTab === 'yearly'"
                :key="'yearly-swiper'"
                :modules="modules"
                :slides-per-view="slidesPerView"
                :space-between="24"
                class="swiper overflow-unset lg:overflow-hidden pb-narrow"
              >
                <swiper-slide v-for="(plan, index) in yearlyPlans" :key="'yearly-'+index">
                  <div class="pricing-box panel overflow-hidden px-3 py-5 sm:px-3 sm:py-6 xl:px-5 xl:py-8 vstack items-center rounded-1-5 lg:rounded-2 bg-white dark:bg-opacity-5 text-dark shadow-xs border text-center">
                    <h4 class="pricing-box-title h4 lg:h3 mb-narrow dark:text-white">{{ plan.title }}</h4>
                    <p class="pricing-box-desc fs-7 dark:text-white opacity-70">{{ plan.description }}</p>
                    <div class="pricing-box-price hstack gap-narrow justify-center items-end mt-3">
                      <h4 class="price h1 lg:display-6 xl:display-5 m-0 dark:text-white">${{ plan.price }}</h4>
                      <span class="duration fs-7 dark:text-white opacity-70 mb-1">/mo</span>
                    </div>
                    <div class="pricing-box-cta vstack gap-1 justify-center my-4">
                      <NuxtLink to="/sign-up" class="btn btn-md xl:btn-lg" :class="plan.buttonClass">
                        Start a free trial
                      </NuxtLink>
                      <span class="fs-7 dark:text-white opacity-70">No credit card required!</span>
                    </div>
                    <ul class="nav-y gap-1 fs-7 xl:fs-6 dark:text-white text-start">
                      <li class="row child-cols items-start g-1" v-for="(feature, i) in plan.features" :key="i">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check-02.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>{{ feature }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </swiper-slide>
              </swiper>
              
              <!-- Monthly Plans -->
              <swiper 
                v-if="activeTab === 'monthly'"
                :key="'monthly-swiper'"
                :modules="modules"
                :slides-per-view="slidesPerView"
                :space-between="24"
                class="swiper overflow-unset lg:overflow-hidden pb-narrow"
              >
                <swiper-slide v-for="(plan, index) in monthlyPlans" :key="'monthly-'+index">
                  <div class="pricing-box panel overflow-hidden px-3 py-5 sm:px-3 sm:py-6 xl:px-5 xl:py-8 vstack items-center rounded-1-5 lg:rounded-2 bg-white dark:bg-opacity-5 text-dark shadow-xs border text-center">
                    <h4 class="pricing-box-title h4 lg:h3 mb-narrow dark:text-white">{{ plan.title }}</h4>
                    <p class="pricing-box-desc fs-7 dark:text-white opacity-70">{{ plan.description }}</p>
                    <div class="pricing-box-price hstack gap-narrow justify-center items-end mt-3">
                      <h4 class="price h1 lg:display-6 xl:display-5 m-0 dark:text-white">${{ plan.price }}</h4>
                      <span class="duration fs-7 dark:text-white opacity-70 mb-1">/mo</span>
                    </div>
                    <div class="pricing-box-cta vstack gap-1 justify-center my-4">
                      <NuxtLink to="/sign-up" class="btn btn-md xl:btn-lg" :class="plan.buttonClass">
                        Start a free trial
                      </NuxtLink>
                      <span class="fs-7 dark:text-white opacity-70">No credit card required!</span>
                    </div>
                    <ul class="nav-y gap-1 fs-7 xl:fs-6 dark:text-white text-start">
                      <li class="row child-cols items-start g-1" v-for="(feature, i) in plan.features" :key="i">
                        <div class="col-auto">
                          <img src="/assets/images/vectors/check-02.svg" alt="icon" style="padding-top: 2px;">
                        </div>
                        <div>
                          <span>{{ feature }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            
            <div class="section-footer panel vstack gap-2 items-center text-center mt-4 sm:mt-6">
              <span class="fs-7 xl:fs-6 ft-script text-gray-500 dark:text-gray-200">Prices are subject to change at any time and under any circumstances, and discounts are only temporary.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="py-6 sm:py-8 xl:py-9">
      <div class="container">
        <hr class="w-100 h-2px m-0">
      </div>
    </div>
    
    <!-- Testimonials Section -->
 
     <div id="clients_feedbacks" class="clients-feedbacks section panel overflow-hidden swiper-parent">
      <div class="section-outer panel overflow-hidden pb-6 sm:pb-8 xl:pb-10">
        <div class="container">
          <div class="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div
              class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 max-w-700px mx-auto text-center">
              <h2 class="h4 lg:h3 m-0">See what clients says:</h2>
            </div>
            <div class="section-content panel max-w-lg mx-auto">
              <Swiper class="swiper overflow-unset sm:overflow-hidden" 
                :modules="[ Pagination]" :loop="true" :spaceBetween="10" :slidesPerView="1" 
                :pagination="{ el: '.swiper-pagination', clickable: true }"                 
                > 

                  <SwiperSlide
                  v-for="(item, index) in testimonials" :key="index"
                   class="swiper-slide">
                    <div
                      class="clients-item panel overflow-hidden rounded-2 xl:rounded-3 border border-1 bg-white dark:bg-gray-900 dark:text-white">
                      <div class="row child-cols-12 sm:child-cols g-0 col-match">
                        <div class="sm:col-auto">
                          <div class="clients-item-video panel">
                            <figure
                              class="panel ratio ratio-1x1 overflow-hidden sm:w-300px lg:w-350px xl:w-500px h-100">
                              <img class="image media-cover" :src="item.image"
                                alt="client image">
                              <div class="position-cover" data-uc-lightbox="video-autoplay: true; animation: scale;">
                                <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }"
                                  class="position-absolute top-50 start-50 translate-middle uc-link w-80px h-80px rounded-circle cstack bg-white">
                                  <img class="w-32px h-32px text-primary" src="/assets/images/common/icons/play.svg"
                                    alt="icon" data-uc-svg>
                                </a>
                              </div>
                            </figure>
                          </div>
                        </div>
                        <div>
                          <div
                            class="clients-item-content panel vstack justify-between gap-3 xl:gap-6 p-3 lg:p-4 xl:p-6">
                            <div>
                              <p class="desc fs-3 sm:fs-4 lg:fs-3 fw-medium -ls-xs dark:text-white">Lexend has
                                transformed how our team works. We've cut meeting time by 30% and improved project
                                delivery by 25%. <br> The automation features alone saved our accounting team 15 hours
                                per week. Best software investment we've made this year.</p>
                            </div>
                            <div>
                              <h4 class="title h6 lg:h5 mb-0 lg:mb-narrow text-inherit">Harry Peterson</h4>
                              <span class="fs-7 lg:fs-6 text-gray-300 dark:text-gray-200">Operations Director at
                                Goodwell</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> 
                
              </Swiper>
            </div>
            <div class="section-footer panel mt-6 sm:mt-6 h-8px">
              <div class="swiper-pagination position-absolute bottom-0 text-primary m-0 justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

    <CommonVideoModal />

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]
const activeTab = ref('monthly')

// Responsive slides calculation
const slidesPerView = computed(() => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
  }
  return 3
})

const switchTab = (tab) => {
  activeTab.value = tab
}

// Pricing plans data
const features = [
  "Unlimited transcription",
  "Limited AI Summaries",
  "800 mins storage",
  "Record zoom, Gmeet, MS Teams, more"
]

const yearlyPlans = [
  {
    title: "Basic",
    description: "Basic features and reporting.",
    price: "24",
    buttonClass: "btn-outline-dark dark:text-white dark:hover:text-dark dark:hover:bg-white border rounded-2",
    features: features
  },
  {
    title: "Business",
    description: "Manage your fast growing team or business",
    price: "32",
    buttonClass: "btn-primary rounded-2",
    features: features,
    isBestDeal: true
  },
  {
    title: "Agency",
    description: "For advanced security, control & support",
    price: "74",
    buttonClass: "text-white dark:text-dark bg-dark dark:bg-white hover:bg-opacity-90 dark:hover:bg-opacity-80 rounded-2",
    features: features
  }
]

const monthlyPlans = [
  {
    title: "Basic",
    description: "Basic features and reporting.",
    price: "16",
    buttonClass: "btn-outline-dark dark:text-white dark:hover:text-dark dark:hover:bg-white border rounded-2",
    features: features
  },
  {
    title: "Business",
    description: "Manage your fast growing team or business",
    price: "24",
    buttonClass: "btn-primary rounded-2",
    features: features,
    isBestDeal: true
  },
  {
    title: "Agency",
    description: "For advanced security, control & support",
    price: "40",
    buttonClass: "text-white dark:text-dark bg-dark dark:bg-white hover:bg-opacity-90 dark:hover:bg-opacity-80 rounded-2",
    features: features
  }
]



import testimonial_img_1 from "@/assets/images/portrait/home-13-03.jpg";
import testimonial_img_2 from "@/assets/images/portrait/home-15-01.jpg";
import testimonial_img_3 from "@/assets/images/portrait/home-13-01.jpg";
import testimonial_img_4 from "@/assets/images/portrait/home-13-02.jpg";

const testimonials = [
  {
    name: "Harry Peterson",
    position: "Operations Director at Goodwell",
    quote: "Lexend has transformed how our team works. We've cut meeting time by 30% and improved project delivery by 25%. The automation features alone saved our accounting team 15 hours per week. Best software investment we've made this year.",
    image: testimonial_img_1,
  },
  {
    name: "Sarah Johnson",
    position: "Operations Director at Goodwell",
    quote: "Lexend has transformed how our team works. We've cut meeting time by 30% and improved project delivery by 25%. The automation features alone saved our accounting team 15 hours per week.",
    image: testimonial_img_2,
  },
  {
    name: "Mark Rodriguez",
    position: "Operations Director at Goodwell",
    quote: "Lexend has transformed how our team works. We've cut meeting time by 30% and improved project delivery by 25%. The automation features alone saved our accounting team 15 hours per week.",
    image: testimonial_img_3,
  },
  {
    name: "Sané Hommels",
    position: "Operations Director at Goodwell",
    quote: "Lexend has transformed how our team works. We've cut meeting time by 30% and improved project delivery by 25%. The automation features alone saved our accounting team 15 hours per week.",
    image: testimonial_img_4,
  }
]
 

 // video popup  
import {useVideoModal} from "../../../composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/Q5PG0rMXgvw?si=uhzrlIvzSWwOe_F3';




</script>
 