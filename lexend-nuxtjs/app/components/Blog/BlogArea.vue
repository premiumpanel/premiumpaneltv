

<script setup>

import blog_img_1 from "~/assets/images/blog/img-06.jpg";
import blog_img_2 from "~/assets/images/blog/img-07.jpg";
import blog_img_3 from "~/assets/images/blog/img-08.jpg";
import blog_img_4 from "~/assets/images/blog/img-09.jpg";
import blog_img_5 from "~/assets/images/blog/img-10.jpg";
import blog_img_6 from "~/assets/images/blog/img-11.jpg";

import avatar_img_1 from "~/assets/images/avatars/04.png";
import avatar_img_2 from "~/assets/images/avatars/01.png";
import avatar_img_3 from "~/assets/images/avatars/07.png";
import avatar_img_4 from "~/assets/images/avatars/07.png";
import avatar_img_5 from "~/assets/images/avatars/06.png";
import avatar_img_6 from "~/assets/images/avatars/02.png";


const blog_data  = [
  {
    category: "Marketing",
    image: blog_img_1,
    title: "Top 5 reasons to invest in marketing",
    link: "/blog-details",
    author: { name: "Sarah", image: avatar_img_1, link: "#" },
    date: "Apr 12, 2025",
    layout: "small",
  },
  {
    category: "Boost",
    image: blog_img_2,
    title: "How can marketing help your business?",
    link: "/blog-details",
    author: { name: "Kevin", image: avatar_img_2, link: "#" },
    date: "Apr 12, 2025",
    layout: "small",
  },
  {
    category: "Advertising",
    image: blog_img_3,
    title: "The ultimate guide to marketing success",
    link: "/blog-details",
    author: { name: "Amir", image: avatar_img_3, link: "#" },
    date: "Apr 10, 2025",
    layout: "small",
  },
  {
    category: "Strategy",
    image: blog_img_4,
    title: "A comprehensive guide to marketing",
    link: "/blog-details",
    author: { name: "Amir", image: avatar_img_4, link: "#" },
    date: "Apr 8, 2025",
    layout: "small",
  },
  {
    category: "Advertising",
    image: blog_img_5,
    title: "Maximizing your reach with marketing strategies",
    link: "/blog-details",
    author: { name: "Allen", image: avatar_img_5, link: "#" },
    date: "Apr 4, 2025",
    layout: "small",
  },
  {
    category: "Strategy",
    image: blog_img_6,
    title: "Top 5 reasons to invest in marketing",
    link: "/blog-details",
    author: { name: "David", image: avatar_img_6, link: "#" },
    date: "Apr 3, 2025",
    layout: "small",
  },
];





</script>


<template>
  <div class="section panel overflow-hidden" style="padding-top: 6rem !important; padding-bottom: 6rem !important;">
    <div class="section-outer panel py-6 lg:py-9" >
      <div class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});">
        <div class="position-absolute top-0 start-0 rotate-45" style="top: 16% !important; left: 18% !important;">
          <img class="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1"
            data-uc-svg>
        </div>
        <div class="position-absolute top-0 end-0 rotate-45" style="top: 5% !important; right: 18% !important;">
          <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" alt="star-2"
            data-uc-svg>
        </div>
      </div>
      <div class="container max-w-xl">
        <div class="section-inner panel vstack gap-3 sm:gap-6 lg:gap-9"
          data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100);">
          <header class="page-header vstack justify-center items-center gap-2 md:gap-4 text-center max-w-650px mx-auto">
            <h1 class="h2 sm:h1 lg:display-6 xl:display-5 m-0">Insights</h1>
          </header>
          <div class="row child-cols-12 sm:child-cols-4 col-match gy-4 sm:gy-6 xl:gy-8 gx-2 xl:gx-4">
            <div class="col-12">
              <article class="post type-post panel rounded-3 p-3 bg-secondary dark:bg-gray-800">
                <div class="panel row child-cols-12 md:child-cols-6 items-center g-3">
                  <div>
                    <figure
                      class="featured-image m-0 rounded ratio ratio-4x3 rounded lg:rounded-2 uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src="/assets/images/blog/img-05.jpg" alt="Maximizing your reach with marketing strategies">
                      <NuxtLink to="/blog-details" class="position-cover"
                        data-caption="Maximizing your reach with marketing strategies">
                      </NuxtLink>
                    </figure>
                  </div>
                  <div>
                    <div class="vstack items-center gap-2 lg:gap-3">
                      <NuxtLink class="post-category text-primary fw-normal text-none fw-bold fs-7 bg-primary text-white py-narrow px-1 rounded"
                        to="/blog-category">Strategy</NuxtLink>
                      <h3 class="h4 xl:h2 m-0 text-center m-0 lg:w-500px lg:m-auto">
                        <NuxtLink class="text-none" to="/blog-details">Maximizing your reach
                          with marketing strategies</NuxtLink>
                      </h3>
                      <ul class="post-meta nav-x ft-tertiary justify-center fs-7 gap-1">
                        <li>
                          <div class="hstack gap-narrow ft-tertiary ">
                            <img src="/assets/images/avatars/02.png" alt="David"
                              class="w-24px h-24px rounded-circle me-narrow">
                            <NuxtLink to="/page-author" class="text-none fw-bold text-dark dark:text-white">David
                            </NuxtLink>
                          </div>
                        </li>
                        <li class="opacity-50">•</li>
                        <li>
                          <div class="post-date hstack gap-narrow ">
                            <span>Apr 15, 2025</span>
                          </div>
                        </li>
                      </ul>
                      <p class="fs-6 lg:fs-5 lg:w-500px lg:mx-auto text-center md:d-none lg:d-block">
                        Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur
                        adipiscing elit..</p>
                      <NuxtLink class="btn btn-text text-primary border-bottom d-inline-flex fs-7 lg:fs-6 sm:mt-2"
                        to="/blog-details">Continue reading</NuxtLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>


            <div v-for="(post, index) in blog_data" :key="index">
              <article class="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                <NuxtLink class="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1 "
                  to="/blog" style="border-radius: 8px; color: white !important;">{{ post.category }}</NuxtLink>
                <figure
                  class="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                    :src="post.image" alt="Top 5 reasons to invest in marketing">
                  <NuxtLink to="/blog-details" class="position-cover"
                    data-caption="Top 5 reasons to invest in marketing"></NuxtLink>
                </figure>
                <header class="panel vstack items-center gap-1 lg:gap-2 px-2">
                  <h3 class="h5 xl:h4 m-0 text-center m-0">
                    <NuxtLink class="text-none" to="/blog-details">{{ post.title }}</NuxtLink>
                  </h3>
                  <ul
                    class="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                    <li>
                      <div class="hstack gap-narrow ft-tertiary ">
                        <img :src="post.author.image" alt="Sarah"
                          class="w-24px h-24px rounded-circle me-narrow">
                        <NuxtLink to="/page-author" class="text-none fw-bold text-dark dark:text-white">{{ post.author.name }}</NuxtLink>
                      </div>
                    </li>
                    <li class="opacity-50">•</li>
                    <li>
                      <div class="post-date hstack gap-narrow ">
                        <span>{{ post.date }}</span>
                      </div>
                    </li>
                  </ul>
                </header>
              </article>
            </div>
 

          </div>
          <div class="nav-pagination fw-medium">
            <ul class="nav-x uc-pagination hstack gap-1 justify-center ft-secondary" data-uc-margin="">
              <li><a href="#"><span class="icon icon-1 unicon-chevron-left rtl:rotate-180"></span></a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#" class="uc-active">2</a></li>
              <li><a href="#">3</a></li>
              <li class="uc-disabled"><span>…</span></li>
              <li><a href="#">8</a></li>
              <li><a href="#">9</a></li>
              <li><a href="#"><span class="icon icon-1 unicon-chevron-right rtl:rotate-180"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>