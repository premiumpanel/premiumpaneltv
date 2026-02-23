
<script setup>
import blog_data from '~/data/blog-data';


</script>



<template>
  <div id="blog_posts" class="section panel overflow-hidden gap-3 bg-secondary dark:bg-gray-800">
    <div class="section-outer panel py-6 xl:py-9">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div class="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2 class="h3 lg:h2 xl:h1 max-w-400px lg:max-w-750px m-auto text-center">Gain valuable insights</h2>
            <div class="panel">
              <div class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">

                <div v-for="(item, i) in blog_data" :key="i">
                  <article class="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-white dark:bg-gray-800">
                    <NuxtLink class="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                      to="/blog" style="border-radius: 8px;">{{ item.category }}</NuxtLink>
                    <figure
                      class="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        :src="item.image" alt="Top 5 reasons to invest in marketing">
                      <NuxtLink to="/blog-details" class="position-cover"
                        data-caption="Top 5 reasons to invest in marketing"></NuxtLink>
                    </figure>
                    <header class="panel vstack items-center gap-1 lg:gap-2 px-2">
                      <h3 class="h5 xl:h4 m-0 text-center m-0">
                        <NuxtLink class="text-none" to="/blog-details">{{ item.title }}</NuxtLink>
                      </h3>
                      <ul
                        class="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                        <li>
                          <div class="hstack gap-narrow ft-tertiary ">
                            <img :src="item.author.avatar" alt="David"
                              class="w-24px h-24px rounded-circle me-narrow">
                            <NuxtLink to="/page-author" class="text-none fw-bold text-dark dark:text-white">{{ item.author.name }}</NuxtLink>
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
            </div>
            <NuxtLink to="/blog" class="uc-link fw-bold d-inline-flex items-center gap-narrow">
              <span>View more articles</span>
              <i class="icon icon-1 unicon-arrow-right rtl:rotate-180"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>