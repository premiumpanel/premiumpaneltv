<script setup >
// Import all images
import img01 from '@/assets/images/blog/img-01.jpg';
import img02 from '@/assets/images/blog/img-02.jpg';
import img03 from '@/assets/images/blog/img-03.jpg';
import img04 from '@/assets/images/blog/img-04.jpg';
import img05 from '@/assets/images/blog/img-05.jpg';
import img06 from '@/assets/images/blog/img-06.jpg';
import img07 from '@/assets/images/blog/img-07.jpg';
import img08 from '@/assets/images/blog/img-08.jpg';
import img09 from '@/assets/images/blog/img-09.jpg';
import img10 from '@/assets/images/blog/img-10.jpg';
import img11 from '@/assets/images/blog/img-11.jpg';
import img12 from '@/assets/images/blog/img-12.jpg';
import img13 from '@/assets/images/blog/img-13.jpg';
import img14 from '@/assets/images/blog/img-14.jpg';
import img15 from '@/assets/images/blog/img-15.jpg';
import img16 from '@/assets/images/blog/img-16.jpg';

import avatar01 from '@/assets/images/avatars/01.png';
import avatar02 from '@/assets/images/avatars/02.png';
import avatar04 from '@/assets/images/avatars/04.png';
import avatar06 from '@/assets/images/avatars/06.png';
import avatar07 from '@/assets/images/avatars/07.png';
 

const blogData  = [
  {
    id: 1,
    title: "Top 5 reasons to invest in marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img01,
    category: "Strategy",
    categoryLink: "/blog",
    author: {
      name: "David",
      avatar: avatar02,
      link: "#"
    },
    date: "Apr 26, 2025",
    link: "/blog-details"
  },
  {
    id: 2,
    title: "How can marketing help your business?",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img02,
    category: "Business",
    categoryLink: "/blog",
    author: {
      name: "Kevin",
      avatar: avatar01,
      link: "#"
    },
    date: "Apr 24, 2025",
    link: "/blog-details"
  },
  {
    id: 3,
    title: "The ultimate guide to marketing success",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img03,
    category: "Marketing",
    categoryLink: "/blog",
    author: {
      name: "Sarah",
      avatar: avatar04,
      link: "#"
    },
    date: "Apr 22, 2025",
    link: "/blog-details"
  },
  {
    id: 4,
    title: "A comprehensive guide to marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img04,
    category: "Strategy",
    categoryLink: "/blog",
    author: {
      name: "Amir",
      avatar: avatar07,
      link: "#"
    },
    date: "Apr 20, 2025",
    link: "/blog-details"
  },
  {
    id: 5,
    title: "Maximizing your reach with marketing strategies",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img05,
    category: "Strategy",
    categoryLink: "/blog",
    author: {
      name: "David",
      avatar: avatar02,
      link: "#"
    },
    date: "Apr 15, 2025",
    link: "/blog-details"
  },
  {
    id: 6,
    title: "Top 5 reasons to invest in marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img06,
    category: "Marketing",
    categoryLink: "/blog",
    author: {
      name: "Sarah",
      avatar: avatar04,
      link: "#"
    },
    date: "Apr 12, 2025",
    link: "/blog-details"
  },
  {
    id: 7,
    title: "How can marketing help your business?",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img07,
    category: "Boost",
    categoryLink: "/blog",
    author: {
      name: "Kevin",
      avatar: avatar01,
      link: "#"
    },
    date: "Apr 12, 2025",
    link: "/blog-details"
  },
  {
    id: 8,
    title: "The ultimate guide to marketing success",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img08,
    category: "Advertising",
    categoryLink: "/blog",
    author: {
      name: "Amir",
      avatar: avatar07,
      link: "#"
    },
    date: "Apr 10, 2025",
    link: "/blog-details"
  },
  {
    id: 9,
    title: "A comprehensive guide to marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img09,
    category: "Strategy",
    categoryLink: "/blog",
    author: {
      name: "Amir",
      avatar: avatar07,
      link: "#"
    },
    date: "Apr 8, 2025",
    link: "/blog-details"
  },
  {
    id: 10,
    title: "Maximizing your reach with marketing strategies",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img10,
    category: "Advertising",
    categoryLink: "/blog",
    author: {
      name: "Allen",
      avatar: avatar06,
      link: "#"
    },
    date: "Apr 4, 2025",
    link: "/blog-details"
  },
  {
    id: 11,
    title: "Top 5 reasons to invest in marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img11,
    category: "Strategy",
    categoryLink: "/blog",
    author: {
      name: "David",
      avatar: avatar02,
      link: "#"
    },
    date: "Apr 3, 2025",
    link: "/blog-details"
  },
  {
    id: 12,
    title: "How can marketing help your business?",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img12,
    category: "Marketing",
    categoryLink: "/blog",
    author: {
      name: "Allen",
      avatar: avatar06,
      link: "#"
    },
    date: "Apr 3, 2025",
    link: "/blog-details"
  },
  {
    id: 13,
    title: "The ultimate guide to marketing success",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img13,
    category: "Business",
    categoryLink: "/blog",
    author: {
      name: "Kevin",
      avatar: avatar01,
      link: "#"
    },
    date: "Apr 1, 2025",
    link: "/blog-details"
  },
  {
    id: 14,
    title: "A comprehensive guide to marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img14,
    category: "Strategy",
    categoryLink: "/blog",
    author: {
      name: "Sarah",
      avatar: avatar04,
      link: "#"
    },
    date: "Jan 1, 1970",
    link: "/blog-details"
  },
  {
    id: 15,
    title: "Maximizing your reach with marketing strategies",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img15,
    category: "Advertising",
    categoryLink: "/blog",
    author: {
      name: "Sarah",
      avatar: avatar04,
      link: "#"
    },
    date: "Jan 1, 1970",
    link: "/blog-details"
  },
  {
    id: 16,
    title: "Top 5 reasons to invest in marketing",
    excerpt: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
    image: img16,
    category: "Media",
    categoryLink: "/blog",
    author: {
      name: "David",
      avatar: avatar02,
      link: "#"
    },
    date: "Jan 1, 1970",
    link: "/blog-details"
  }
];



</script>

<template>
  <div class="section py-3 sm:py-6 lg:py-9">
    <div class="container max-w-xl">
      <div class="panel vstack gap-3 sm:gap-6 lg:gap-9">
        <header class="page-header vstack justify-center items-center text-center max-w-500px mx-auto">
          <h1 class="h4 lg:h1">Blog - Grid 2 Cols</h1>
          <p class="fs-6 lg:fs-5 opacity-60">Olympic mountain bikers, musicians, and award-winning chefs so special and
            fun.</p>
        </header>
        
        <div class="row g-4 xl:g-8">
          <div class="col">
            <div class="panel text-center">
              <div class="row child-cols-12 sm:child-cols-6 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                <div v-for="post in blogData" :key="post.id">
                  <article class="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                    <NuxtLink class="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                      :to="post.categoryLink" style="border-radius: 8px;">{{ post.category }}</NuxtLink>
                    <figure class="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        :src="post.image" 
                        :alt="post.title">
                      <a :href="post.link" class="position-cover" :data-caption="post.title"></a>
                    </figure>
                    <header class="panel vstack items-center gap-1 lg:gap-2 px-2">
                      <h3 class="h6 sm:h5 xl:h3 m-0">
                        <NuxtLink class="text-none" :to="post.link">{{ post.title }}</NuxtLink>
                      </h3>
                      <ul class="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                        <li>
                          <div class="hstack gap-narrow ft-tertiary">
                            <img :src="post.author.avatar" :alt="post.author.name"
                              class="w-24px h-24px rounded-circle me-narrow">
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