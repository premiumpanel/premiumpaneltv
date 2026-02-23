<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  newsLetterModal: {
    type: Boolean,
    required: true,
  },
  togglerNewsLetterModal: {
    type: Function,
    required: true,
  },
})

const dialogRef = ref(null)

const handleClickOutside = (event) => {
  if (
    props.newsLetterModal &&
    dialogRef.value &&
    !dialogRef.value.contains(event.target)
  ) {
    props.togglerNewsLetterModal(false)
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
    v-if="newsLetterModal"
    id="uc-newsletter-modal"
    :class="`${newsLetterModal ? 'uc-modal uc-open' : ''}`"
    style="display: block"
    data-uc-modal="overlay: true"
  > 
    <div
      ref="dialogRef"
      class="uc-modal-dialog w-800px bg-white text-dark dark:bg-gray-900 dark:text-white rounded-3 p-1 overflow-hidden"
    >
      <button
        @click="togglerNewsLetterModal(false)"
        class="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
        type="button"
      >
        <i class="unicon-close"></i>
      </button>
      <div class="row md:child-cols-6 col-match g-0">
        <div class="d-none md:d-flex">
          <div class="position-relative w-100 ratio-1x1 rounded-2 overflow-hidden">
            <img
              class="media-cover"
              src="/assets/images/common/newsletter.jpg"
              alt="Newsletter image"
            />
          </div>
        </div>
        <div>
          <div class="panel vstack self-center p-4 md:py-8 text-center">
            <h3 class="h3 md:h2">Subscribe to our Newsletter</h3>
            <p class="ft-tertiary">
              Join 10k+ people to get notified about new posts, news and updates.
            </p>
            <div class="panel mt-2 lg:mt-4">
              <form class="vstack gap-1">
                <input
                  type="email"
                  class="form-control form-control-sm w-full fs-6 bg-white dark:border-white dark:border-gray-700"
                  placeholder="Your email address.."
                />
                <button type="submit" class="btn btn-sm btn-primary">Sign up</button>
              </form>
              <p class="fs-7 mt-2">Do not worry we don't spam!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
