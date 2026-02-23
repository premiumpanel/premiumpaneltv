 
  <script setup>
import HeaderTwo from '~/layouts/headers/HeaderTwo.vue'
import FooterTwo from '~/layouts/footers/FooterTwo.vue'
import blog_category_data from '~/data/blog-category-data';

const route = useRoute()
 
const blog_post = computed(() => {
  return blog_category_data.find(post => post.id.toString() === route.params.id)
})
 
useHead({
  title: blog_post.value ? `${blog_post.value.title} - Lexend` : 'Blog Post - Lexend',
  meta: [
    {
      name: 'description',
      content: blog_post.value ? blog_post.value.description || blog_post.value.title : 'Blog post details'
    }
  ]
})
 
if (!blog_post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })
}

// :innerPagelink="`blog/category/${blog_post.category.toLowerCase()}`" 

</script>

<template>
  <div class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderTwo />
    <div id="wrapper" class="wrap">
      <CommonBreadcrumbFour 
        :style_2="true" 
        :description="blog_post.description || blog_post.title" 
        title="Blog" 
        pagelink="blog" 
        innerPagelink="blog-category"
        :subtitle="blog_post.category" 
      />       
       
      <BlogDetailsArea :blog_post="blog_post" />
      
      <BlogNewsletter />
    </div>
    <FooterTwo />
  </div>  
</template>