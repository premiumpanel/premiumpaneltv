<script setup>
import HeaderTwo from '~/layouts/headers/HeaderTwo.vue'
import FooterTwo from '~/layouts/footers/FooterTwo.vue' 

useHead({
  title: "Career - Lexend - Software, SaaS & Startup Nuxt js Template",
})

</script>


<template>
  <div
    class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderTwo />
    <div id="wrapper" class="wrap">
       <PageCareerHeroArea />
       <PageCareerBenefits />
       <PageCareerOpening />
       <PageCareerTestimonialArea />
       <PageCareerBrandsArea />
      <PagePricingBlogArea />
    </div>
    <FooterTwo />
  </div>
</template>