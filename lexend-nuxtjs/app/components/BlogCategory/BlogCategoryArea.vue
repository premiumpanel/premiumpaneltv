<script setup>
import blog_category_data from '~/data/blog-category-data';


defineProps({
  style_2: {
    type: Boolean,
    default: false,
  },
})

</script>


<template>
  <div class="section py-3 sm:py-6 lg:py-9">
    <div class="container max-w-xl">
      <div class="panel vstack gap-3 sm:gap-6 lg:gap-9">
         <header v-if="style_2" class="page-header panel vstack text-center">
            <h1 class="h3 lg:h1">Author: Amir Lawyer</h1>
            <span class="m-0 opacity-60">Showed 15 posts out of 20 total written by <br class="d-block lg:d-none"> "Amir Lawyer".</span>
        </header>
        <header v-if="!style_2" class="page-header panel vstack text-center">
          <h1 class="h3 lg:h1">Category: Strategy</h1>
          <span class="m-0 opacity-60">Showed 15 posts out of 20 total under <br class="d-block lg:d-none"> "Strategy"
            category.</span>
        </header>
        <div class="row g-4 xl:g-8">
          <div class="col">
            <div class="panel text-center">
              <div class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">

                <div v-for="(item, i) in blog_category_data" :key="i">
                  <article class="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                    <NuxtLink
                      class="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                      to="/blog" style="border-radius: 8px; left: 0px !important">{{ item.category }}</NuxtLink>
                    <figure
                      class="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque" :src="item.image"
                        :alt="item.title">
                      <NuxtLink :to="`/blog-details/${item.id}`" class="position-cover"
                        data-caption="How can marketing help your business?"></NuxtLink>
                    </figure>
                    <header class="panel vstack items-center gap-1 lg:gap-2 px-2">
                      <h3 class="h6 sm:h5 xl:h4 m-0 m-0">
                        <NuxtLink class="text-none" :to="`/blog-details/${item.id}`">{{ item.title }}</NuxtLink>
                      </h3>
                      <ul
                        class="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                        <li>
                          <div class="hstack gap-narrow ft-tertiary ">
                            <img :src="item.author.avatar" alt="Kevin" class="w-24px h-24px rounded-circle me-narrow">
                            <NuxtLink to="/page-author" class="text-none fw-bold text-dark dark:text-white">{{
                              item.author.name }}</NuxtLink>
                          </div>
                        </li>
                        <li class="opacity-50">•</li>
                        <li>
                          <div class="post-date hstack gap-narrow ">
                            <span>{{ item.date }}</span>
                          </div>
                        </li>
                      </ul>
                    </header>
                  </article>
                </div>


              </div>
              <div class="nav-pagination pt-3 mt-6 lg:mt-9 border-top border-gray-100 dark:border-gray-800">
                <ul class="nav-x uc-pagination hstack gap-1 justify-center ft-secondary" data-uc-margin="">
                  <li><a href="#"><span class="icon icon-1 unicon-chevron-left rtl:rotate-180"></span></a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#" class="uc-active">2</a></li>
                  <li><a href="#">3</a></li>
                  <li class="uc-disabled"><span>…</span></li>
                  <li><a href="#">8</a></li>
                  <li><a href="#">9</a></li>
                  <li><a href="#"><span class="icon icon-1 unicon-chevron-right rtl:rotate-180"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>