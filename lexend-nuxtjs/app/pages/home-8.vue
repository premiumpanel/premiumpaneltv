
<script setup>
import { onMounted, onUnmounted } from 'vue' 

import HeaderSeven from '~/layouts/headers/HeaderSeven.vue'
import FooterSeven from '~/layouts/footers/FooterSeven.vue' 


useHead({
  title: "Home 8 - Lexend - Software, SaaS & Startup Nuxt js Template",
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


let styleEl

onMounted(async () => {
  const css = await import('~/assets/css/theme/theme-four.purge.css?inline')
  styleEl = document.createElement('style')
  styleEl.textContent = css.default
  document.head.appendChild(styleEl)
})

onUnmounted(() => {
  if (styleEl && styleEl.parentNode) {
    styleEl.parentNode.removeChild(styleEl)
  }
})


</script>


<template>
  <div class="theme-4">
    <div class="uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
      <HeaderSeven />
      <div id="wrapper" class="wrap">
        <HomesHome8HeroArea />
        <HomesHome8BrandsArea />
        <HomesHome8FeaturesArea />
        <HomesHome8IntegrationsArea />
        <HomesHome8KeyFeatures />
        <HomesHome8PricingArea />
        <HomesHome8TestimonialArea />
        <HomesHome8FaqArea />
        <HomesHome8BlogArea />
        <HomesHome8CtaArea />  
      </div>
      <FooterSeven />
    </div>  
  </div>
</template>

 

<style scoped>
  @import '~/assets/css/theme/theme-four.purge.css';
</style>

