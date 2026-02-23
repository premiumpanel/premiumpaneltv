<script setup>
import HeaderFour from '~/layouts/headers/HeaderFour.vue'
import FooterFour from '~/layouts/footers/FooterFour.vue' 

useHead({
  title: "Team - Lexend - Software, SaaS & Startup Nuxt js Template",
})

</script>


<template>
  <div
    class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderFour />
    <div id="wrapper" class="wrap">
      <CommonBreadcrumb subtitle="Our Team" />
      <TeamArea />
      <TeamFaqArea />
      <TeamCtaArea />     
    </div>
    <FooterFour />
  </div>
</template>