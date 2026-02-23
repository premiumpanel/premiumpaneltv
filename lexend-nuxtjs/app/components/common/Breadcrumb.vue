
<script setup>
defineProps({
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
    class="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
    :style="`margin-top: ${style_2 ? '80px' : '112px'}`"
  >
    <div class="container max-w-xl">
      <ul
        class="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold"
      >
        <li>
          <img
            alt="icon" 
            decoding="async"
            data-nimg="1"
            class="me-1"
            src="/assets/images/common/icons/home.svg"
            style="color: transparent"
          />
        </li>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li>
          <i
            class="unicon-chevron-right opacity-50 mx-narrow rtl:rotate-180"
          ></i>
        </li>
        <li><span class="opacity-50">{{ subtitle }}</span></li>
      </ul>
    </div>
  </div>
</template>