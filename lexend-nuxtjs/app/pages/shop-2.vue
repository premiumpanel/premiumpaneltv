
<script setup>
import HeaderTwo from '~/layouts/headers/HeaderTwo.vue'
import FooterTwo from '~/layouts/footers/FooterTwo.vue' 

useHead({
  title: "Shop 2 - Lexend - Software, SaaS & Startup Nuxt js Template",
})

</script>


<template>
  <div
    class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderTwo />
    <div id="wrapper" class="wrap">
      <CommonBreadcrumbTwo :style_2="true" title="Shop" pagelink="shop" subtitle="Shop with 2 columns" />
      <ShopAreaTwo />        
    </div>
    <FooterTwo />
  </div>
</template>