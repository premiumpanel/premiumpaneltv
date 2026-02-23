 

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

interface Testimonial {
  rating: number
  quote: string
  name: string
  position: string
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote: "We're looking for people who share our vision! Most of our time used to be taken up by administrative work whereas now we can focus on building out to help our employees.",
    name: "Mark Zellers",
    position: "CEO, Co-Founder."
  },
  {
    rating: 5,
    quote: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Natalia Larsson",
    position: "Director of Sales"
  },
  {
    rating: 5,
    quote: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website, this builder is just outstanding!",
    name: "Sarah Edrissi",
    position: "Lead Marketing"
  },
  {
    rating: 5,
    quote: "We're looking for people who share our vision! Most of our time used to be taken up by administrative work whereas now we can focus on building out to help our employees.",
    name: "Anna Yon",
    position: "Senior UI/UX Designer"
  }
]

// Duplicate testimonials for infinite loop effect
const duplicatedTestimonials = [...testimonials, ...testimonials]

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: true,
  centerInsufficientSlides: true,
  loop: true,
  speed: 10000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    pauseOnMouseEnter: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 24
    }
  }
}
</script>

<template>
  <div id="clients_feedback" class="clients-feedback section panel">
    <div class="section-outer panel py-6 lg:py-8 xl:py-10 bg-secondary text-black rounded-2 lg:rounded-3 m-2">
      <div class="container xl:max-w-xl">
        <div class="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100"
          data-anime="onview: -100; targets: > *; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);">
          
          <div class="panel vstack items-center gap-2 xl:gap-3 text-center"
            data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div class="cstack gap-1 py-1 px-3 border rounded-pill">
              <span class="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
              <span class="fs-8 fw-bold text-uppercase">Clients feedback</span>
            </div>
            <p class="h3 lg:h2 xl:h1 m-0 px-2 text-black">Don't <span
                class="d-inline-flex px-1 bg-primary text-secondary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">just
                take our words</span> for it!</p>
          </div>
          
          <div class="panel w-100 mask-x">
            <!-- First Swiper -->
            <Swiper
              :modules="[Autoplay]"
              v-bind="swiperConfig"
              class="feedback-swiper"
            >
              <SwiperSlide v-for="(testimonial, index) in duplicatedTestimonials" :key="`first-${index}`">
                <div class="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100">
                  <div class="panel vstack items-start gap-2 lg:gap-4">
                    <div class="rating d-flex gap-0">
                      <img 
                        v-for="star in testimonial.rating" 
                        :key="star" 
                        class="icon icon-1" 
                        src="/assets/images/star.svg" 
                        alt="star"
                        loading="lazy"
                      >
                    </div>
                    <p class="fs-5 lg:fs-4">"{{ testimonial.quote }}"</p>
                  </div>
                  <div class="panel mt-2 lg:mt-4">
                    <div class="panel vstack items-start gap-narrow">
                      <h6 class="h5 m-0 text-black">{{ testimonial.name }}</h6>
                      <span class="fs-7 lg:h6 opacity-70">{{ testimonial.position }}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            
            <!-- Second Swiper (reversed) -->
            <Swiper
              :modules="[Autoplay]"
              v-bind="{
                ...swiperConfig,
                autoplay: {
                  ...swiperConfig.autoplay,
                  reverseDirection: true
                }
              }"
              class="feedback-swiper mt-2 lg:mt-3"
            >
              <SwiperSlide v-for="(testimonial, index) in duplicatedTestimonials" :key="`second-${index}`">
                <div class="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100">
                  <div class="panel vstack items-start gap-2 lg:gap-4">
                    <div class="rating d-flex gap-0">
                      <img 
                        v-for="star in testimonial.rating" 
                        :key="star" 
                        class="icon icon-1" 
                        src="/assets/images/star.svg" 
                        alt="star"
                        loading="lazy"
                      >
                    </div>
                    <p class="fs-5 lg:fs-4">"{{ testimonial.quote }}"</p>
                  </div>
                  <div class="panel mt-2 lg:mt-4">
                    <div class="panel vstack items-start gap-narrow">
                      <h6 class="h5 m-0 text-black">{{ testimonial.name }}</h6>
                      <span class="fs-7 lg:h6 opacity-70">{{ testimonial.position }}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mask-x {
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent) !important;
  -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
}

.feedback-swiper {
  overflow: hidden;
}

.cstack {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rating {
  display: flex;
  gap: 0;
}
 

</style>