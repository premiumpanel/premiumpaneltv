

<script setup>
import { onMounted, onUnmounted } from 'vue'
import HeaderSix from '~/layouts/headers/HeaderSix.vue'
import FooterTwo from '~/layouts/footers/FooterTwo.vue'

useHead({
  title: "Blog Sidebar - Lexend - Software, SaaS & Startup Nuxt js Template",
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
  <div class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderSix />
    <div id="wrapper" class="wrap">
      <CommonBreadcrumbThree :style_2="true" title="Blog Sidebar" subtitle="Blog Sidebar" />
      <BlogSidebarLeftArea />      
      <BlogNewsletter />
    </div>
    <FooterTwo />
  </div>  
</template>

 