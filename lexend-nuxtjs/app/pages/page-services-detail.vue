
<script setup>
import HeaderThree from '~/layouts/headers/HeaderThree.vue'
import FooterFive from '~/layouts/footers/FooterFive.vue'

useHead({
  title: "Service Detail - Lexend - Software, SaaS & Startup Nuxt js Template",
})

</script>


<template>
  <div
    class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderThree />
    <div id="wrapper" class="wrap">
      <ServiceDetailsHeroArea />
      <ServiceDetailsWhatWeOffer />
      <ServiceDetailsBrandsArea /> 
      <ServiceCounterArea :style_2="true" />
      <ServiceTestimonialArea />
      <ServiceProjectArea />
      <HomesHome4FaqArea />
      <ServiceDetailsCtaArea />       
    </div>
    <FooterFive />
  </div>
</template>