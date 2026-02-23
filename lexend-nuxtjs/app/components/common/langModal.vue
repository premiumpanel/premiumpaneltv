<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  lengModal: {
    type: Boolean,
    required: true,
  },
  togglelengModal: {
    type: Function,
    required: true,
  },
})

const modalRef = ref(null)

const handleClickOutside = (event) => {
  if (
    props.lengModal && 
    modalRef.value && 
    !modalRef.value.contains(event.target) 
  ) {
    props.togglelengModal(false)
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
    ref="modalRef"
    :class="`py-1 bg-white dark:bg-gray-800 shadow-xs w-200px uc-drop ${lengModal ? 'uc-open' : ''}`"
    data-uc-drop="mode: click; offset: 0; pos: top-right; boundary: !.uc-navbar-container; animation: uc-animation-slide-top-small; duration: 150;"
  >
    <ul class="nav-y gap-0 fs-7">
      <li @click="props.togglelengModal(false)">
        <a href="#en" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150">
          <img class="w-20px me-1" src="/assets/images/common/en.svg" alt="English" />English
        </a>
      </li>
      <li @click="props.togglelengModal(false)">
        <a href="#fr" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150">
          <img class="w-20px me-1" src="/assets/images/common/fr.svg" alt="French" />French
        </a>
      </li>
      <li @click="props.togglelengModal(false)">
        <a href="#ge" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150">
          <img class="w-20px me-1" src="/assets/images/common/ge.svg" alt="Germany" />Germany
        </a>
      </li>
      <li @click="props.togglelengModal(false)">
        <a href="#sp" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150">
          <img class="w-20px me-1" src="/assets/images/common/sp.svg" alt="Spain" />Spain
        </a>
      </li>
      <li @click="props.togglelengModal(false)">
        <a href="#ar" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150">
          <img class="w-20px me-1" src="/assets/images/common/ar.svg" alt="العربية" />Arabic (العربية)
        </a>
      </li>
      <li @click="props.togglelengModal(false)">
        <a href="#ch" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150">
          <img class="w-20px me-1" src="/assets/images/common/ch.svg" alt="中文" />Chinese (中文)
        </a>
      </li>
    </ul>
  </div>
</template>
