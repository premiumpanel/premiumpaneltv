<script setup>
import HeaderFour from '~/layouts/headers/HeaderFour.vue'
import FooterFour from '~/layouts/footers/FooterFour.vue' 




useHead({
  title: "Home 5 - Lexend - Software, SaaS & Startup Nuxt js Template",
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
  <div
    class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderFour />
    <div id="wrapper" class="wrap">
      <HomesHome5HeroArea />
      <HomesHome5BrandsArea />
      <HomesHome5FeaturesArea />
      <HomesHome5CtaArea />
      <HomesHome5HowItWork />
      <HomesHome5PricingArea />
      <HomesHome5TestimonialArea />
      <HomesHome5FaqArea />
      <HomesHome5CtaAreaTwo />
      <HomesHome5TeamArea />
      <HomesHome5BlogArea />
    </div>
    <FooterFour />
  </div>
</template>