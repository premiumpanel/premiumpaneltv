<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  contactModal: {
    type: Boolean,
    required: true,
  },
  toggleContactModal: {
    type: Function,
    required: true,
  },
})

const modalRef = ref(null)

const handleClickOutside = (event) => {
  if (
    props.contactModal && // only when modal is open
    modalRef.value &&
    !modalRef.value.contains(event.target)
  ) {
    props.toggleContactModal()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <div
    id="uc-contact-modal"
    :class="`uc-modal ${contactModal ? 'uc-open' : ''}`"
    data-uc-modal="overlay: true"
    :style="`display: ${contactModal ? 'block' : 'none'}`"
  >
    <div
      ref="modalRef"
      class="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
    >
      <button
        @click="toggleContactModal"
        class="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
        type="button"
      >
        <i class="unicon-close"></i>
      </button>

      <div class="panel vstack gap-2 md:gap-4 text-center">
        <div class="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
          <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
            <h4 class="h5 lg:h4 m-0">Schedule your 15-minute demo now</h4>
            <div class="panel w-100 sm:w-350px md:w-500px mx-auto">
              <form class="vstack gap-2">
                <div class="vstack lg:hstack gap-2">
                  <input class="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                    type="text" placeholder="Full name*" required>
                  <input class="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                    type="text" placeholder="Last name*" required>
                </div>
                <div class="vstack lg:hstack gap-2">
                  <input class="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                    type="email" placeholder="Your email*" required>
                  <input
                    class="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark"
                    type="tel" placeholder="Phone number*" required>
                </div>
                <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="text"
                  placeholder="Company name*" required>
                <textarea class="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark"
                  placeholder="Your message.."></textarea>
                <button class="btn btn-primary btn-md text-white mt-2" type="submit">Schedule my demo</button>
                <p class="fs-7 opacity-70 mt-2 text-center">
                  We’ll tailor your demo to your immediate needs and answer
                  all your questions. Get ready to see how it works!
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
