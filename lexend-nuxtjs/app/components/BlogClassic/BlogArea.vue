<script setup>

import blog_img_1 from "@/assets/images/blog/img-05.jpg";
import blog_img_2 from "@/assets/images/blog/img-06.jpg";
import blog_img_3 from "@/assets/images/blog/img-07.jpg";
import blog_img_4 from "@/assets/images/blog/img-08.jpg";
import blog_img_5 from "@/assets/images/blog/img-09.jpg";
import blog_img_6 from "@/assets/images/blog/img-10.jpg";
import blog_img_7 from "@/assets/images/blog/img-11.jpg";


import blog_avatar_1 from "@/assets/images/avatars/02.png";
import blog_avatar_2 from "@/assets/images/avatars/04.png";
import blog_avatar_3 from "@/assets/images/avatars/01.png";
import blog_avatar_4 from "@/assets/images/avatars/07.png";
import blog_avatar_5 from "@/assets/images/avatars/07.png";
import blog_avatar_6 from "@/assets/images/avatars/06.png";
import blog_avatar_7 from "@/assets/images/avatars/02.png";




// Blog data array
const blogData = [
  {
    id: 1,
    title: "Maximizing your reach with marketing strategies",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: blog_img_1,
    category: "Strategy",
    categoryLink: "/blog-category",
    author: {
      name: "David",
      avatar: blog_avatar_1,
      link: "#"
    },
    date: "Apr 15, 2025",
    link: "/blog-details"
  },
  {
    id: 2,
    title: "Top 5 reasons to invest in marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: blog_img_2,
    category: "Marketing",
    categoryLink: "/blog-category",
    author: {
      name: "Sarah",
      avatar: blog_avatar_2,
      link: "#"
    },
    date: "Apr 12, 2025",
    link: "/blog-details"
  },
  {
    id: 3,
    title: "How can marketing help your business?",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: blog_img_3,
    category: "Boost",
    categoryLink: "/blog-category",
    author: {
      name: "Kevin",
      avatar: blog_avatar_3,
      link: "#"
    },
    date: "Apr 12, 2025",
    link: "/blog-details"
  },
  {
    id: 4,
    title: "The ultimate guide to marketing success",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: blog_img_4,
    category: "Advertising",
    categoryLink: "/blog-category",
    author: {
      name: "Amir",
      avatar: blog_avatar_4,
      link: "#"
    },
    date: "Apr 10, 2025",
    link: "/blog-details"
  },
  {
    id: 5,
    title: "A comprehensive guide to marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: blog_img_5,
    category: "Strategy",
    categoryLink: "/blog-category",
    author: {
      name: "Amir",
      avatar: blog_avatar_5,
      link: "#"
    },
    date: "Apr 8, 2025",
    link: "/blog-details"
  },
  {
    id: 6,
    title: "Maximizing your reach with marketing strategies",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: blog_img_6,
    category: "Advertising",
    categoryLink: "/blog-category",
    author: {
      name: "Allen",
      avatar: blog_avatar_6,
      link: "#"
    },
    date: "Apr 4, 2025",
    link: "/blog-details"
  },
  {
    id: 7,
    title: "Top 5 reasons to invest in marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: blog_img_7,
    category: "Strategy",
    categoryLink: "/blog-category",
    author: {
      name: "David",
      avatar: blog_avatar_7,
      link: "#"
    },
    date: "Apr 3, 2025",
    link: "/blog-details"
  }
];
</script>

<template>
  <div class="section panel overflow-hidden">
    <div class="section-outer panel py-6 lg:py-9">
      <div class="container max-w-lg">
        <div class="section-inner panel vstack gap-3 sm:gap-6 lg:gap-9">
          <header class="page-header vstack justify-center items-center gap-2 md:gap-4 text-center max-w-650px mx-auto">
            <h1 class="h2 sm:h1 lg:display-6 xl:display-5 m-0">Blog — Classic</h1>
          </header>
          
          <div class="row child-cols-12 sm:child-cols-4 col-match gy-4 gx-2 xl:gx-4">
            <div v-for="post in blogData" :key="post.id" class="col-12">
              <article class="post type-post panel rounded-3 p-2 md:p-4 bg-secondary dark:bg-gray-800">
                <div class="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                  <div class="sm:col-4 md:col-6 lg:col-4">
                    <div class="panel">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1 rounded-2 uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" 
                             :src="post.image" 
                             :alt="post.title">
                        <NuxtLink :to="post.link" class="position-cover" :data-caption="post.title"></NuxtLink>
                      </figure>
                      <NuxtLink class="post-category text-primary fw-normal text-none fw-bold fs-7 py-narrow px-1 rounded bg-primary text-white position-absolute top-0 start-0 m-2" 
                         :to="post.categoryLink">
                        {{ post.category }}
                      </NuxtLink>
                    </div>
                  </div>
                  <div>
                    <div class="vstack items-start gap-2 md:gap-3">
                      <ul class="post-meta nav-x ft-tertiary justify-start gap-1 fs-7">
                        <li>
                          <div class="hstack gap-narrow ft-tertiary">
                            <img :src="post.author.avatar" :alt="post.author.name" class="w-24px h-24px rounded-circle me-narrow">
                            <NuxtLink :to="post.author.link" class="text-none fw-bold text-dark dark:text-white">
                              {{ post.author.name }}
                            </NuxtLink>
                          </div>
                        </li>
                        <li class="opacity-50">•</li>
                        <li>
                          <div class="post-date hstack gap-narrow">
                            <span>{{ post.date }}</span>
                          </div>
                        </li>
                      </ul>
                      <h3 class="h4 sm:h5 md:h4 lg:h3 m-0">
                        <NuxtLink class="text-none" :to="post.link">{{ post.title }}</NuxtLink>
                      </h3>
                      <p class="fs-6 md:fs-5 d-none md:d-block">{{ post.excerpt }}</p>
                      <NuxtLink class="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block" 
                         :to="post.link">
                        Continue reading
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          
          <div class="nav-pagination fw-medium">
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
</template>