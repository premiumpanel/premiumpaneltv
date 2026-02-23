<script setup>
import HeaderThree from '~/layouts/headers/HeaderThree.vue'
import FooterThree from '~/layouts/footers/FooterThree.vue' 
 
 


useHead({
  title: "Home 4 - Lexend - Software, SaaS & Startup Nuxt js Template",
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
    <HeaderThree />
     <div id="wrapper" class="wrap">
      <HomesHome4HeroArea />
      <HomesHome4BrandsArea />
      <HomesHome4CounterArea />
      <HomesHome4FeaturesArea />
      <HomesHome4CtaArea />
      <HomesHome4PricingArea />
      <HomesHome4TestimonialArea />
      <HomesHome4FaqArea />
      <HomesHome4TeamArea />
      <HomesHome4BlogArea />
      <HomesHome4CtaAreaTwo />
    </div>
    <FooterThree />
  </div>
</template>