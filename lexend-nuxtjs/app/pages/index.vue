<script setup>
 
import HeaderOne from '~/layouts/headers/HeaderOne.vue'
import FooterOne from '~/layouts/footers/FooterOne.vue'


useHead({
  title: "Lexend - Software, SaaS & Startup Nuxt js Template",
  meta: [
    { name: "description", content: "Lexend is a modern Nuxt.js template for SaaS, Software, and Startup websites. Build fast and SEO-friendly pages." },
    { name: "keywords", content: "SaaS, Startup, Software, Nuxt.js Template, SaaS Template, Startup Template" },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Lexend" },
  ],
  link: [
    { rel: "canonical", href: "https://lexend-nuxtjs.vercel.app/" },
  ],
  metaOG: [
    { property: "og:title", content: "Lexend - Software, SaaS & Startup Nuxt js Template" },
    { property: "og:description", content: "Lexend is a modern Nuxt.js template for SaaS, Software, and Startup websites." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://lexend-nuxtjs.vercel.app/" },
    { property: "og:image", content: "https://lexend-nuxtjs.vercel.app/og-image.jpg" } 
  ],
  metaTwitter: [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Lexend - Software, SaaS & Startup Nuxt js Template" },
    { name: "twitter:description", content: "Lexend is a modern Nuxt.js template for SaaS, Software, and Startup websites." },
    { name: "twitter:image", content: "https://lexend-nuxtjs.vercel.app/og-image.jpg" }
  ],
})



</script>



<template>
  <div class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">

    <HeaderOne /> 
    <div id="wrapper" class="wrap">  
      <HomesHome1HeroHomeOne />
      <HomesHome1FeaturesHomeOne />
      <HomesHome1IntegrationsHomeOne />
      <HomesHome1AboutHomeOne />
      <HomesHome1PricingHomeOne />
      <HomesHome1ClientsFeedbackHomeOne />
      <HomesHome1TestimonialHomeOne />
      <HomesHome1TeamHomeOne />
      <HomesHome1CtaHomeOne />
    </div> 
    <FooterOne />
  </div>
</template>
