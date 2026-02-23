
<script setup>
// Import blog images
import blog_img_02 from "@/assets/images/blog/img-02.jpg";
import blog_img_03 from "@/assets/images/blog/img-03.jpg";
import blog_img_04 from "@/assets/images/blog/img-04.jpg";
import blog_img_05 from "@/assets/images/blog/img-05.jpg";
import blog_img_06 from "@/assets/images/blog/img-06.jpg";
import blog_img_07 from "@/assets/images/blog/img-07.jpg";
import blog_img_08 from "@/assets/images/blog/img-08.jpg";
import blog_img_09 from "@/assets/images/blog/img-09.jpg";
import blog_img_10 from "@/assets/images/blog/img-10.jpg";
import blog_img_11 from "@/assets/images/blog/img-11.jpg";
import blog_img_12 from "@/assets/images/blog/img-12.jpg";
import blog_img_13 from "@/assets/images/blog/img-13.jpg";
import blog_img_14 from "@/assets/images/blog/img-14.jpg";
import blog_img_15 from "@/assets/images/blog/img-15.jpg";
import blog_img_16 from "@/assets/images/blog/img-16.jpg";

// Import avatar images
import avatar_01 from "@/assets/images/avatars/01.png";
import avatar_02 from "@/assets/images/avatars/02.png";
import avatar_04 from "@/assets/images/avatars/04.png";
import avatar_06 from "@/assets/images/avatars/06.png";
import avatar_07 from "@/assets/images/avatars/07.png";

 
 

// Blog data
const blogPosts  = [
  {
    id: 1,
    category: "Business",
    title: "How can marketing help your business?",
    image: blog_img_02,
    author: {
      name: "Kevin",
      avatar: avatar_01
    },
    date: "Apr 24, 2025",
    url: "/blog-details"
  },
  {
    id: 2,
    category: "Marketing",
    title: "The ultimate guide to marketing success",
    image: blog_img_03,
    author: {
      name: "Sarah",
      avatar: avatar_04
    },
    date: "Apr 22, 2025",
    url: "/blog-details"
  },
  {
    id: 3,
    category: "Strategy",
    title: "A comprehensive guide to marketing",
    image: blog_img_04,
    author: {
      name: "Amir",
      avatar: avatar_04
    },
    date: "Apr 20, 2025",
    url: "/blog-details"
  },
  {
    id: 4,
    category: "Strategy",
    title: "Maximizing your reach with marketing strategies",
    image: blog_img_05,
    author: {
      name: "David",
      avatar: avatar_02
    },
    date: "Apr 15, 2025",
    url: "/blog-details"
  },
  {
    id: 5,
    category: "Marketing",
    title: "Top 5 reasons to invest in marketing",
    image: blog_img_06,
    author: {
      name: "Sarah",
      avatar: avatar_04
    },
    date: "Apr 12, 2025",
    url: "/blog-details"
  },
  {
    id: 6,
    category: "Boost",
    title: "How can marketing help your business?",
    image: blog_img_07,
    author: {
      name: "Kevin",
      avatar: avatar_01
    },
    date: "Apr 12, 2025",
    url: "/blog-details"
  },
  {
    id: 7,
    category: "Advertising",
    title: "The ultimate guide to marketing success",
    image: blog_img_08,
    author: {
      name: "Amir",
      avatar: avatar_07
    },
    date: "Apr 10, 2025",
    url: "/blog-details"
  },
  {
    id: 8,
    category: "Strategy",
    title: "A comprehensive guide to marketing",
    image: blog_img_09,
    author: {
      name: "Amir",
      avatar: avatar_07
    },
    date: "Apr 8, 2025",
    url: "/blog-details"
  },
  {
    id: 9,
    category: "Advertising",
    title: "Maximizing your reach with marketing strategies",
    image: blog_img_10,
    author: {
      name: "Allen",
      avatar: avatar_06
    },
    date: "Apr 4, 2025",
    url: "/blog-details"
  },
  {
    id: 10,
    category: "Strategy",
    title: "Top 5 reasons to invest in marketing",
    image: blog_img_11,
    author: {
      name: "David",
      avatar: avatar_02
    },
    date: "Apr 3, 2025",
    url: "/blog-details"
  },
  {
    id: 11,
    category: "Marketing",
    title: "How can marketing help your business?",
    image: blog_img_12,
    author: {
      name: "Allen",
      avatar: avatar_06
    },
    date: "Apr 3, 2025",
    url: "/blog-details"
  },
  {
    id: 12,
    category: "Business",
    title: "The ultimate guide to marketing success",
    image: blog_img_13,
    author: {
      name: "Kevin",
      avatar: avatar_01
    },
    date: "Apr 1, 2025",
    url: "/blog-details"
  },
  {
    id: 13,
    category: "Strategy",
    title: "A comprehensive guide to marketing",
    image: blog_img_14,
    author: {
      name: "Sarah",
      avatar: avatar_04
    },
    date: "Jan 1, 1970",
    url: "/blog-details"
  },
  {
    id: 14,
    category: "Advertising",
    title: "Maximizing your reach with marketing strategies",
    image: blog_img_15,
    author: {
      name: "Sarah",
      avatar: avatar_04
    },
    date: "Jan 1, 1970",
    url: "/blog-details"
  },
  {
    id: 15,
    category: "Media",
    title: "Top 5 reasons to invest in marketing",
    image: blog_img_16,
    author: {
      name: "David",
      avatar: avatar_02
    },
    date: "Jan 1, 1970",
    url: "/blog-details"
  }
];

// Pagination data
const pagination = {
  currentPage: 2,
  totalPages: 9,
  pages: [1, 2, 3, 8, 9],
  hasPrevious: true,
  hasNext: true
};
</script>


<template>
  <div class="section py-3 sm:py-6 lg:py-9">
    <div class="container max-w-xl">
      <div class="panel vstack gap-3 sm:gap-6 lg:gap-9">
        <header class="page-header vstack justify-center items-center text-center max-w-500px mx-auto">
          <h1 class="h4 lg:h1">Blog - Grid 3 Cols</h1>
          <p class="fs-6 lg:fs-5 opacity-60">Olympic mountain bikers, musicians, and award-winning chefs so special and fun.</p>
        </header>
        <div class="row g-4 xl:g-8">
          <div class="col">
            <div class="panel text-center">
              <div class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                <div v-for="post in blogPosts" :key="post.id">
                  <article class="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                    <NuxtLink class="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1" 
                       :to="post.url" style="border-radius: 8px;">
                      {{ post.category }}
                    </NuxtLink>
                    <figure class="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque" 
                           :src="post.image" :alt="post.title">
                      <NuxtLink :to="post.url" class="position-cover" :data-caption="post.title"></NuxtLink>
                    </figure>
                    <header class="panel vstack items-center gap-1 lg:gap-2 px-2">
                      <h3 class="h6 sm:h5 xl:h4 m-0 m-0">
                        <NuxtLink class="text-none" :to="post.url">{{ post.title }}</NuxtLink>
                      </h3>
                      <ul class="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                        <li>
                          <div class="hstack gap-narrow ft-tertiary">
                            <img :src="post.author.avatar" :alt="post.author.name" class="w-24px h-24px rounded-circle me-narrow">
                            <NuxtLink to="/page-author" class="text-none fw-bold text-dark dark:text-white">{{ post.author.name }}</NuxtLink>
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
                  <li v-for="page in pagination.pages" :key="page">
                    <a style="cursor: pointer;" :class="{ 'uc-active': page === pagination.currentPage }">{{ page }}</a>
                  </li>
                  <li v-if="pagination.pages.length < pagination.totalPages" class="uc-disabled"><span>…</span></li>
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



 