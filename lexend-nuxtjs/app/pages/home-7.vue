<script setup>
import { onMounted, onUnmounted } from 'vue' 
import HeaderSix from '~/layouts/headers/HeaderSix.vue'
import FooterSix from '~/layouts/footers/FooterSix.vue' 


useHead({
  title: "Home 7 - Lexend - Software, SaaS & Startup Nuxt js Template",
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
  const css = await import('~/assets/css/theme/theme-three.purge.css?inline')
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
  <div class="theme-3">
    <div class="uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
      <HeaderSix />
      <div id="wrapper" class="wrap">
        <HomesHome7HeroArea />
        <HomesHome7BrandsArea />
        <HomesHome7FeatureArea />
        <HomesHome7KeyFeatures />
        <HomesHome7PricingArea />
        <HomesHome7TestimonialArea />
        <HomesHome7FaqArea />
        <HomesHome7BlogArea />
        <HomesHome7CtaArea />         
      </div>
      <FooterSix />
    </div>
  </div>
</template>

<style scoped>
  @import '~/assets/css/theme/theme-three.purge.css';
</style>
