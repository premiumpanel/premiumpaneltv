 

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  formModal: {
    type: Boolean,
    required: true,
  },
  toggleFormModal: {
    type: Function,
    required: true,
  },
})

const modalRef = ref(null)

const handleClickOutside = (event) => {
  if (
    props.formModal && // only when modal is open
    modalRef.value && 
    !modalRef.value.contains(event.target)
  ) {
    props.toggleFormModal(false) // close the modal
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
    v-if="formModal"
    ref="modalRef"
    class="uc-navbar-dropdown p-3 w-300px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop uc-open"
    data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
  >
    <p class="fs-7">
      Lexend offers a comprehensive suite of tools that cover all aspects of your business.
    </p>
    
    <form class="vstack gap-1 my-2">
      <input
        class="form-control form-control-sm rounded-default fs-7 w-full bg-gray-25 dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
        type="text"
        placeholder="Full name"
        required
      />
      <input
        class="form-control form-control-sm rounded-default fs-7 w-full bg-gray-25 dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
        type="email"
        placeholder="Your email"
        required
      />
      <div class="hstack items-center justify-between mt-1">
        <div class="form-check m-0">
          <input
            id="header_request_demo_application"
            class="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
            type="checkbox"
            required
          />
          <label
            for="header_request_demo_application"
            class="hstack justify-between form-check-label fw-medium fs-7"
          >
            I read and agree to
            <NuxtLink class="uc-link text-underline ltr:ms-narrow rtl:me-narrow dark:text-secondary" to="/page-terms">
              terms
            </NuxtLink>.
          </label>
        </div>
      </div>
      <button class="btn btn-primary btn-sm rounded-default text-white mt-1" type="submit">
        Request a demo
      </button>
    </form>

    <p class="fs-7">
      We care about your data in our
      <NuxtLink class="uc-link text-underline dark:text-secondary" to="/page-privacy">privacy policy</NuxtLink>.
    </p>
  </div>
</template>
