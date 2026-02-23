<script setup>
import { ref } from 'vue'

const formData = ref({
  fullName: '',
  email: '',
  subject: '',
  message: '',
})

const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = () => {
  if (!formData.value.fullName || !formData.value.email || !formData.value.message) {
    errorMessage.value = 'Please fill out all required fields.'
    successMessage.value = ''
    return
  }

  // Example: Send data to API
  console.log('Form submitted:', formData.value)

  successMessage.value = '✅ Your message has been sent successfully!'
  errorMessage.value = ''

  // Reset form
  formData.value = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  }
}
</script>

<template>
  <div id="hero_header" class="hero-header section panel overflow-hidden">
    <div class="position-absolute top-0 start-0 end-0 min-h-600px bg-secondary dark:bg-opacity-0 z-0"></div>
    <div
      class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
      data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
    >
      <div class="position-absolute top-0 start-0 rotate-45" style="top: 30% !important; left: 18% !important;">
        <img class="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1" data-uc-svg />
      </div>
      <div class="position-absolute top-0 end-0 rotate-45" style="top: 15% !important; right: 18% !important;">
        <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" alt="star-2" data-uc-svg />
      </div>
    </div>
    <div class="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
      <div class="container max-w-xl">
        <div
          class="section-inner panel mt-2 sm:mt-4 lg:mt-0"
          data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
        >
          <div class="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
            <h1 class="h2 sm:h1 lg:display-6 xl:display-5 m-0">Contact us</h1>
            <p class="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
              Feel free to reach out to us using the options below, and our dedicated team will respond promptly.
            </p>
          </div>
          <div class="panel max-w-750px mx-auto">
            <form
              @submit.prevent="handleSubmit"
              class="vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20"
            >
              <p class="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              <div class="row child-cols-12 md:child-cols-6 g-2">
                <div>
                  <input
                    v-model="formData.fullName"
                    class="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                    type="text"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <input
                    v-model="formData.email"
                    class="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <input
                v-model="formData.subject"
                class="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                type="text"
                placeholder="Subject"
              />
              <textarea
                v-model="formData.message"
                class="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                placeholder="Your message.."
                required
              ></textarea>

              <button class="btn btn-primary btn-md text-white mt-2" type="submit">Send message</button>

              <p v-if="successMessage" class="text-green-600 text-center mt-2">{{ successMessage }}</p>
              <p v-if="errorMessage" class="text-red-600 text-center mt-2">{{ errorMessage }}</p>

              <p class="text-center">
                Or drop us a message via
                <a class="uc-link" href="mailto:jamilrayhan100@gmail.com">email</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
