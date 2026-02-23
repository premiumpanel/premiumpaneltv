<script setup>
import { onMounted, onUnmounted } from 'vue' 
import HeaderFive from '~/layouts/headers/HeaderFive.vue'
import FooterFive from '~/layouts/footers/FooterFive.vue' 


useHead({
  title: "Home 6 - Lexend - Software, SaaS & Startup Nuxt js Template",
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
  const css = await import('~/assets/css/theme/theme-two.purge.css?inline')
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
  <div class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-x-hidden">
    <HeaderFive />
    <div id="wrapper" class="wrap">
      <HomesHome6HeroArea />
      <HomesHome6FeaturesArea />
      <HomesHome6BrandsArea />
      <HomesHome6VideoArea />
      <HomesHome6KeyFeatures />
      <HomesHome6ElementsArea />
      <HomesHome6PricingArea />
      <HomesHome6TestimonialArea />
      <HomesHome6FaqArea />
      <HomesHome6TeamArea />
      <HomesHome6BlogArea />
      <HomesHome6CtaArea />
    </div>
    <FooterFive />
  </div>
</template>

<style scoped>
  @import '~/assets/css/theme/theme-two.purge.css';
</style>
