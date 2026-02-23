 
  <script setup>
import HeaderTwo from '~/layouts/headers/HeaderTwo.vue'
import FooterTwo from '~/layouts/footers/FooterTwo.vue'
import shop_data from '~/data/shop-data' 

const route = useRoute()
 
const shop_item = computed(() => {
  return shop_data.find(post => post.id.toString() === route.params.id)
})
 
useHead({
  title: shop_item.value ? `${shop_item.value.name} - Lexend` : 'Blog Post - Lexend',
  meta: [
    {
      name: 'description',
      content: shop_item.value ? shop_item.value.name || shop_item.value.name : 'Blog post details'
    }
  ]
})
 
if (!shop_item.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })
}

// :innerPagelink="`blog/category/${shop_item.category.toLowerCase()}`" 

</script>

<template>
  <div class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderTwo />
    <div id="wrapper" class="wrap">
      <CommonBreadcrumbFour 
        :style_2="true" 
        title="Blog" 
        pagelink="blog" 
        subtitle="Disney Toys" 
        innerPagelink="blog-category"
        :description="shop_item.name || shop_item.name" 
      />       
       
      <ShopDetailsArea :shop_item="shop_item" />
      
      <!-- <BlogNewsletter /> -->
    </div>
    <FooterTwo />
  </div>  
</template>