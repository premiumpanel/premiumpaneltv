<script setup>

import blog_img_1 from "@/assets/images/blog/img-01.jpg";
import blog_img_2 from "@/assets/images/blog/img-02.jpg";
import blog_img_3 from "@/assets/images/blog/img-03.jpg";


import blog_avatar_1 from "@/assets/images/avatars/02.png";
import blog_avatar_2 from "@/assets/images/avatars/01.png";
import blog_avatar_3 from "@/assets/images/avatars/04.png";


const blog_data = [
  {
    image: blog_img_1,
    title: "UX review presentations",
    category: "Design",
    categoryLink: "/blog-category",
    detailsLink: "/blog-details",
    excerpt:
      "Join the thousands of satisfied users and take your business to the next level today and the power of streamlined business operations.",
    author: {
      name: "David",
      avatar: blog_avatar_1,
      link: "#",
    },
    date: "Apr 26, 2025",
  },
  {
    image: blog_img_2,
    title: "Migrating to Linear 101",
    category: "Business",
    categoryLink: "/blog-category",
    detailsLink: "/blog-details",
    excerpt:
      "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert prospects into loyal customers.",
    author: {
      name: "Kevin",
      avatar: blog_avatar_2,
      link: "#",
    },
    date: "Apr 24, 2025",
  },
  {
    image: blog_img_3,
    title: "Building your API stack",
    category: "Product",
    categoryLink: "/blog-category",
    detailsLink: "/blog-details",
    excerpt:
      "You can personalize it to display the most relevant information and metrics for your business, giving you performance.",
    author: {
      name: "Sarah",
      avatar: blog_avatar_3,
      link: "#",
    },
    date: "Apr 22, 2025",
  },
];
</script>


<template>
  <div id="blog_posts" class="section panel overflow-hidden gap-3 bg-secondary dark:bg-gray-800 rounded-1-5 lg:rounded-2">
    <div class="section-outer panel py-4 md:py-6 xl:py-9">
      <div class="container max-w-xl">
        <div class="section-inner panel">
          <div
            class="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <!-- Heading -->
            <div
              class="heading vstack sm:hstack gap-4 justify-between md:items-end panel"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div class="vstack gap-2">
                <span class="fw-bold text-primary dark:text-secondary">Our insights</span>
                <h2 class="title h3 lg:h2 xl:h1 m-0">Latest posts and updates</h2>
              </div>
              <div>
                <NuxtLink to="/blog" class="btn btn-sm lg:btn-md btn-primary rounded-default">View all posts</NuxtLink>
              </div>
            </div>

            <!-- Blog Posts -->
            <div class="content panel">
              <div class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">
                <div v-for="(post, index) in blog_data" :key="index">
                  <article class="post type-post panel overflow-hidden vstack rounded-1-5 bg-white dark:bg-gray-800">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden"
                    >
                      <img
                        class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        :src="post.image"
                        :alt="post.title"
                      />
                      <NUxtLink :to="post.detailsLink" class="position-cover" :data-caption="post.title"></NUxtLink>
                    </figure>
                    <div class="panel vstack gap-1 p-2 lg:p-3 lg:pt-2">
                      <a
                        class="post-category text-primary fw-normal text-none fw-bold fs-7 text-primary dark:text-secondary"
                        :href="post.categoryLink"
                      >
                        {{ post.category }}
                      </a>
                      <NUxtLink class="text-none" :to="post.detailsLink">
                        <h3 class="post-title panel h5 lg:h4 m-0 ltr:pe-4 rtl:ps-4">
                          <span>{{ post.title }}</span>
                          <i
                            class="position-absolute top-0 ltr:end-0 rtl:start-0 mt-narrow icon-1 unicon-arrow-up-right fw-bold rtl:-rotate-90"
                          ></i>
                        </h3>
                      </NUxtLink>
                      <p class="post-excrept fs-6 opacity-70">{{ post.excerpt }}</p>
                      <div class="post-meta hstack gap-1 panel overflow-hidden mt-2">
                        <NUxtLink :to="post.author.link">
                          <img
                            :src="post.author.avatar"
                            :alt="post.author.name"
                            class="w-40px h-40px rounded-circle"
                          />
                        </NUxtLink>
                        <div class="vstack gap-0">
                          <NUxtLink :to="post.author.link" class="text-none fw-bold text-dark dark:text-white">
                            {{ post.author.name }}
                          </NUxtLink>
                          <div class="post-date hstack gap-narrow fs-7 opacity-70">
                            <span>{{ post.date }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
