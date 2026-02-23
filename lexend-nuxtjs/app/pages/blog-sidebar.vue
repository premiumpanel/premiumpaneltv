

<script setup>
import HeaderSix from '~/layouts/headers/HeaderSix.vue'
import FooterTwo from '~/layouts/footers/FooterTwo.vue'

useHead({
  title: "Blog Sidebar - Lexend - Software, SaaS & Startup Nuxt js Template",
})

</script>



<template>
  <div class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderSix />
    <div id="wrapper" class="wrap">
      <CommonBreadcrumbThree :style_2="true" title="Blog Sidebar" subtitle="Blog Sidebar" />
      <BlogSidebarArea />      
      <BlogNewsletter />
    </div>
    <FooterTwo />
  </div>  
</template>

 