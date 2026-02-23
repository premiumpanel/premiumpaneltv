<script setup>
import HeaderSix from '~/layouts/headers/HeaderSix.vue'
import FooterSix from '~/layouts/footers/FooterSix.vue'


useHead({
  title: "Pricing 2 - Lexend - Software, SaaS & Startup Nuxt js Template",
})

</script>



<template>
  <div
    class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderSix />
    <div id="wrapper" class="wrap">
      <PricingTwoPricingArea />
      <PricingTwoPricingTable />
      <HomesHome7TestimonialArea />
      <HomesHome7FaqArea :style_2="true" />
    </div>
    <FooterSix />
  </div>
</template>


<style scoped>
@import url('~/assets/css/theme/theme-three.purge.css');  

</style>