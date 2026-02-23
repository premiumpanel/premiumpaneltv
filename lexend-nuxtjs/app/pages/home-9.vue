<script setup>
import { onMounted, onUnmounted } from 'vue' 

import HeaderEight from '~/layouts/headers/HeaderEight.vue'
import FooterEight from '~/layouts/footers/FooterEight.vue'


useHead({
  title: "Home 9 - Lexend - Software, SaaS & Startup Nuxt js Template",
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
  const css = await import('~/assets/css/theme/theme-five.purge.css?inline')
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
  <div class="theme-5">
    <div class="bp-xs bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-tertiary-800 text-tertiary-200 overflow-x-hidden disable-cursor uc-dark">
      <HeaderEight />
      <div id="wrapper" class="wrap">
        <HomesHome9HeroArea />
        <HomesHome9HwoItWork />
        <HomesHome9PartnerArea />
        <HomesHome9FeaturesArea />
        <HomesHome9KeyFeatures />
        <HomesHome9PricingArea />
        <HomesHome9TestimonialArea />
        <HomesHome9FaqArea />  
      </div>
      <FooterEight />
    </div>
  </div>
</template>


<style scoped>
  @import '~/assets/css/theme/theme-five.purge.css';  
 

</style>
