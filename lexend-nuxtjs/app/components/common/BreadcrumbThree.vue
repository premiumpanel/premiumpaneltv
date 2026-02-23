<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  }, 
  subtitle: {
    type: String,
    required: true,
  },
  style_2: {
    type: Boolean,
    default: false,
  }
});
</script>


<template>
  <div
    class="page-header panel vstack justify-center items-center gap-2 py-6 xl:py-9 mx-2 text-center rounded-2 bg-primary-25 dark:bg-gray-800" :style="`margin-top: ${style_2 ? '6rem' : ''} margin-bottom: ${style_2 ? '6rem' : ''}`">
    <ul class="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold dark:text-white">
      <li>
        <img class="text-primary dark:text-secondary icon-1" src="/assets/images/common/icons/homepage.svg" alt="home-icon" data-uc-svg></li>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><i class="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180"></i></li>
      <li><span class="opacity-50">{{ subtitle }}</span></li>
    </ul>
    <h1 class="h4 md:h3 xl:h1 m-0">{{ title }}</h1>
  </div>
</template>