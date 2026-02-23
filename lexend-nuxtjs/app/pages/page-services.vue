<script setup>
import HeaderThree from '~/layouts/headers/HeaderThree.vue'
import FooterFive from '~/layouts/footers/FooterFive.vue'

useHead({
  title: "Service - Lexend - Software, SaaS & Startup Nuxt js Template",
})

</script>


<template>
  <div
    class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderThree />
    <div id="wrapper" class="wrap">
      <ServiceHeroArea />
      <ServiceBrandsArea />
      <ServiceOurService />
      <ServiceCounterArea />
      <ServiceTestimonialArea />
      <ServiceProjectArea />
      <HomesHome4FaqArea />
      <ServiceTeamArea />
      <HomesHome4BlogArea />
      <ServiceCtaArea />
    </div>
    <FooterFive />
  </div>
</template>