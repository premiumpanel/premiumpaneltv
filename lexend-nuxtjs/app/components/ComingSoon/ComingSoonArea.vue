<template>
  <div id="wrapper" class="wrap overflow-x-hidden">
    <div class="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div class="container max-w-xl">
        <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center h-screen">
          <h2 class="h1 lg:display-6 xl:display-3 text-primary dark:text-tertiary" data-uc-splitext="types: 'chars'"
            data-anime="targets: &gt; *; keyframes: [ {translateY: -10}, {rotateX: 180}, {translateY: 0}, {rotateX: 0}, ]; easing: easeOutElastic(1, .8); duration: 500; delay: anime.stagger(50); direction: alternate; loop: true;">
            Coming soon!</h2>
          <div class="row child-cols-3 items-center justify-center g-1 sm:g-2"
            data-uc-countdown="date: 2026-12-07T23:00:00+00:00">
            <div>
              <div>
                <div
                  class="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-days">
                  {{ timeLeft.days }}
                </div>
                <div class="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">Days</div>
              </div>
            </div>
            <div>
              <div>
                <div
                  class="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-hours">
                  {{ timeLeft.hours }}
                </div>
                <div class="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">Hours</div>
              </div>
            </div>
            <div>
              <div>
                <div
                  class="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-minutes">
                  {{ timeLeft.minutes }}
                </div>
                <div class="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">Minutes</div>
              </div>
            </div>
            <div>
              <div>
                <div
                  class="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-seconds">
                  {{ timeLeft.seconds }}
                </div>
                <div class="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">Seconds</div>
              </div>
            </div>
          </div>
          <p class="fs-6 xl:fs-5 mt-8">Comeback again when we’re live! <br> Thank you for understanding and patience!
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

 

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
 
const targetDate = new Date('2025-12-31T23:59:59').getTime()

// const currentYear = new Date().getFullYear()
// const targetDate = new Date(`${currentYear}-12-31T23:59:59`).getTime()



const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let timer: number | undefined

const calculateTimeLeft = () => {
  const now = new Date().getTime()
  const difference = targetDate - now

  if (difference <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    clearInterval(timer)
    return
  }

  timeLeft.value = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

onMounted(() => {
  calculateTimeLeft()
  timer = window.setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

 
