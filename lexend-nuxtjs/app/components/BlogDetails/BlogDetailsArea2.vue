<script setup>

import { ref } from "vue";
import img_1 from "@/assets/images/blog/post-1.jpg";
import img_2 from "@/assets/images/blog/post-2.jpg";
import img_3 from "@/assets/images/blog/post-3.jpg";

const image_data = [
  { id: 1, img: img_1 }
]
const image_data2 = [
  { id: 1, img: img_2 }
]

const image_data3 = [
  { id: 1, img: img_3 }
]

import ImagePopup from "~/components/common/ImagePopup.vue";
import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";




const image_popup = ref(null);

function handleImagePopup(index) {
  image_popup.value.showImg(index);
}


</script>


<template>
  <article class="post type-post single-post pb-4 lg:pb-6 xl:pb-9">
    <div class="container-full">
      <figure class="featured-image m-0">
        <figure class="featured-image m-0 rounded ratio ratio-2x1 rounded-0 uc-transition-toggle overflow-hidden">
          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
            src="/assets/images/blog/post-full.jpg" alt="Maximizing your reach with marketing strategies">
        </figure>
      </figure>
      <div class="post-content-wrap panel">
        <aside class="post-share-float d-none lg:d-block" data-uc-sticky="bottom: .post-author;">
          <div class="vstack justify-center items-center gap-2 position-absolute top-0 end-0 m-4 xl:m-9">
            <span class="ft-secondary">Share</span>
            <ul class="social-icons nav-y justify-center gap-2 text-gray-900 dark:text-white">
              <li>
                <a class="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://dribbble.com/unistudioinc"><i class="unicon-logo-x-filled icon-1 xl:icon-2"></i></a>
              </li>
              <li>
                <a class="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110 text-white bg-primary border-primary"
                  href="https://ui8.net/users/unistudio"><i class="unicon-logo-linkedin icon-1 xl:icon-2"></i></a>
              </li>
              <li>
                <a class="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://themeforest.net/user/unistudioco"><i
                    class="unicon-logo-facebook icon-1 xl:icon-2"></i></a>
              </li>
              <li>
                <a class="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://unistudio.co/unicore/"><i class="unicon-logo-pinterest icon-1 xl:icon-2"></i></a>
              </li>
              <li>
                <a class="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://unistudio.co/unicore/"><i class="unicon-email icon-1 xl:icon-2"></i></a>
              </li>
              <li>
                <a class="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://unistudio.co/unicore/"><i class="unicon-link icon-1 xl:icon-2"></i></a>
              </li>
            </ul>
          </div>
        </aside>
        <div class="container max-w-900px">
          <div class="post-header mt-4 lg:mt-6 xl:mt-8">
            <div
              class="panel vstack items-center gap-2 md:gap-3 text-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto">
              <h1 class="h4 sm:h3 xl:h1 m-0">Maximizing your reach with marketing strategies</h1>
            </div>
          </div>
          <hr class="w-100 my-4 lg:my-6 xl:my-8 opacity-100 border-gray-100 dark:border-gray-700">

          <div class="post-content panel fs-6 md:fs-5" data-uc-lightbox="animation: scale">
            <p>She started her blog exactly six months before I launched Camels & Chocolate, and she really set the bar
              high for my own blog birthday, Y’all this summer! I’ve already been brainstorming party ideas … who wants
              to come? It’s no coincidence that Buster Keaton and Charlot’s movies of the and award-winning chefs about
              what exactly makes their hometowns In fact, not being able to rely on spoken word made them better
              storytellers. They fully understood and used the power of showing without words. A range of amenities
              provides many things to do in Bellevue. About 40 percent of the city’s population are minorities, which
              contributes to an overall diverse range of lifestyles and ideas.</p>
            <p class="mt-3">I talked to climbers, Olympic mountain bikers, musicians, and award-winning chefs about what
              exactly makes their hometowns so special and fun.</p>
            <div class="panel mt-3">
              <figure  v-for="(item, i) in image_data" :key="i" class="float-end ms-3 mb-1">
                <figure
                  class="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px  uc-transition-toggle overflow-hidden">
                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque" :src="item.img"
                    alt="Holding flower, by Anthony Tran">
                  <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="position-cover"
                    data-caption="Holding flower, by Anthony Tran"></a>
                </figure>
                <figcaption class="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">Holding flower, by Anthony
                  Tran</figcaption>
              </figure>
              <p>Bike paths and sidewalks make getting to and from the city’s many festivals, museums, restaurants and
                music venues easy. A range of amenities provides many things to do in Bellevue. About 40 percent of the
                city’s population are minorities, which contributes to an overall diverse range of lifestyles and ideas.
              </p>
              <p class="mt-3">While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town
                since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local
                expert explained. Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes
                their hometowns so special and fun.</p>
              <p class="mt-3">In fact, not being able to rely on spoken word made them better storytellers. They fully
                understood and used the power of showing without words. They fully understood and used the power of
                showing without words. They fully understood and used the power of showing without words.</p>
            </div>
            <h4 class="h4 xl:h3 mt-4 mb-2 xl:mb-3">Capital of Texas</h4>
            <p>Visual storytelling is simply the way most brands will decide to go in 2016 & beyond, as they try to tell
              their story to their customers the oldest and most important unwritten rule in film industry says that you
              shouldn’t rely much on words to tell your story. In fact, you should rely on them as less as possible.
              It’s no coincidence that Buster Keaton and Charlot’s movies remain among the biggest classic movies of all
              time. In fact, not being able to rely on spoken word made them better storytellers. They fully understood
              and used the power of showing without words.</p>
            <p class="mt-3">While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town
              since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert
              explained sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes at
              least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained.</p>
            <figure v-for="(item, i) in image_data2" :key="i" class="my-3 sm:my-4">
              <figure 
                class="featured-image m-0 rounded ratio ratio-3x2  uc-transition-toggle overflow-hidden">
                <img class="media-cover image uc-transition-scale-up uc-transition-opaque" :src="item.img"
                  alt="Pink Marketing, by Mak">
                <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="position-cover"
                  data-caption="Pink Marketing, by Mak"></a>
              </figure>
              <figcaption class="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">Pink Marketing, by Mak
              </figcaption>
            </figure>
            <p>While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes
              at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained.
              Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so
              special and fun. <br> In fact, not being able to rely on spoken word made them better storytellers. They
              fully understood and used the power of showing without words.</p>
            <p class="mt-3">Probably the oldest and most important unwritten rule in film industry says that you
              shouldn’t rely much on words to tell your story. In fact, you should rely on them as less as possible is
              simply the way most brands will decide to go in 2016 & beyond, as they try to tell their story to their
              customers.</p>
            <h4 class="h4 xl:h3 mt-4 mb-2 xl:mb-3">Great Schools and Entertainment</h4>
            <p>Education is a high point when it comes to analyzing the quality of life factors that make Ann Arbor one
              of the best places to live. The University of Michigan, which has 43,000 students, makes Ann Arbor a
              perennial candidate for our annual ranking of the best college towns and plays a big role in the city’s
              economy and culture.</p>
            <p class="mt-3">While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town
              since it takes considered at least an hour to get to the Rockies for snowboarding and ski activities, a
              local expert explained sits at the base of the Rocky Mountains, it’s not considered a mountain town since
              it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert
              explained.</p>
            <div class="panel my-3">
              <figure v-for="(item, i) in image_data3" :key="i" class="float-start me-3 mb-0">
                <figure 
                  class="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px  uc-transition-toggle overflow-hidden">
                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque" :src="item.img"
                    alt="Great Schools and Entertainment">
                  <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="position-cover"
                    data-caption="Great Schools and Entertainment"></a>
                </figure>
                <figcaption class="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">Great Schools and
                  Entertainment</figcaption>
              </figure>
              <p>Bike paths and sidewalks make getting to and from the city’s many festivals, museums, restaurants and
                music venues easy. A range of amenities provides many things to do in Bellevue. About 40 percent of the
                city’s population are minorities, which contributes to an overall diverse range of lifestyles and ideas.
              </p>
              <p>While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town since it
                takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert
                explained. Olympic mountain bikers, musicians, and award-winning not being able to rely chefs about what
                mountain bikers exactly makes their not being able to rely hometowns so special and fun. In fact, not
                being able to rely on spoken word made them better storytellers. They fully understood and used the
                power of showing without words. They fully understood and used the power of showing without words.</p>
            </div>
            <p>Probably the oldest and most important unwritten rule in film industry says that you shouldn’t rely much
              on words to tell your story. In fact, you should rely on them as less as possible is simply the way most
              brands will decide to go in 2016 & beyond, as they try to tell their story to their customers.</p>
            <p class="mt-3">I talked to climbers, Olympic mountain bikers, musicians, and award-winning chefs about what
              exactly makes their hometowns so special and fun.</p>
          </div>
          <div
            class="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
            <ul class="nav-x gap-narrow text-primary">
              <li><span class="text-black dark:text-white me-narrow">Tags:</span></li>
              <li><a href="#" class="gap-0">Marketing <span class="text-black dark:text-white">,</span></a></li>
              <li><a href="#" class="gap-0">Strategies <span class="text-black dark:text-white">,</span></a></li>
              <li><a href="#" class="gap-0">Boost <span class="text-black dark:text-white">,</span></a></li>
              <li><a href="#" class="gap-0">Business</a></li>
            </ul>
            <ul class="post-share-icons nav-x gap-narrow">
              <li class="me-1"><span class="text-black dark:text-white">Share:</span></li>
              <li>
                <a class="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"><i class="unicon-logo-facebook icon-1"></i></a>
              </li>
              <li>
                <a class="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"><i class="unicon-logo-x-filled icon-1"></i></a>
              </li>
              <li>
                <a class="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"><i class="unicon-email icon-1"></i></a>
              </li>
              <li>
                <a class="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"><i class="unicon-link icon-1"></i></a>
              </li>
            </ul>
          </div>
          <div class="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
            <div class="row g-4 items-center">
              <div class="col-12 sm:col-5 xl:col-3">
                <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                    src="/assets/images/blog/post-author.jpg" alt="Amir Nisi">
                </figure>
              </div>
              <div class="col">
                <div class="panel vstack items-start gap-2 md:gap-3">
                  <h4 class="h5 m-0">Amir Nisi</h4>
                  <p class="fs-6">Creative and experienced content writer with 6+ years of experience eager to create
                    unique content strategy for Lexend to turn website visitors into customers.</p>
                  <ul class="nav-x gap-1 text-gray-400 dark:text-white">
                    <li><a href="#medium"><i class="icon-2 unicon-logo-medium"></i></a></li>
                    <li><a href="#x"><i class="icon-2 unicon-logo-x-filled"></i></a></li>
                    <li><a href="#instagram"><i class="icon-2 unicon-logo-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9">
            <div class="new-post panel hstack w-100 sm:w-1/2">
              <div class="panel hstack justify-center w-100px h-100px">
                <figure class="featured-image m-0 rounded ratio ratio-1x1   uc-transition-toggle overflow-hidden">
                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                    src="/assets/images/blog/img-02.jpg" alt="How can marketing help your business?">
                  <NuxtLink to="/blog-details" class="position-cover"
                    data-caption="How can marketing help your business?"></NuxtLink>
                </figure>
              </div>
              <div class="panel vstack justify-center px-2 gap-1 w-1/3">
                <span class="fs-7 opacity-60">Prev Article</span>
                <h6 class="h6 lg:h5 m-0">How can marketing help your business?</h6>
              </div>
              <NuxtLink to="/blog-details" class="position-cover"></NuxtLink>
            </div>
            <div class="new-post panel hstack w-100 sm:w-1/2">
              <div class="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                <span class="fs-7 opacity-60">Next Article</span>
                <h6 class="h6 lg:h5 m-0">Top 5 reasons to invest in marketing</h6>
              </div>
              <div class="panel hstack justify-center w-100px h-100px">
                <figure class="featured-image m-0 rounded ratio ratio-1x1   uc-transition-toggle overflow-hidden">
                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                    src="/assets/images/blog/img-01.jpg" alt="Top 5 reasons to invest in marketing">
                  <NuxtLink to="/blog-details" class="position-cover"
                    data-caption="Top 5 reasons to invest in marketing"></NuxtLink>
                </figure>
              </div>
              <NuxtLink to="/blog-details" class="position-cover"></NuxtLink>
            </div>
          </div>
          <div class="post-related panel border-top pt-2 mt-8 xl:mt-9">
            <h4 class="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h4>
            <div class="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
              <div>
                <article class="post type-post panel vstack gap-2">
                  <figure class="featured-image m-0 rounded ratio ratio-4x3  uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/blog/img-07.jpg" alt="How can marketing help your business?">
                    <NuxtLink to="/blog-details" class="position-cover"
                      data-caption="How can marketing help your business?"></NuxtLink>
                  </figure>
                  <header class="panel vstack gap-1">
                    <h5 class="h6 sm:h5 md:h4 m-0">
                      <NuxtLink class="text-none" to="/blog-details">How can marketing help your business?</NuxtLink>
                    </h5>
                    <div class="post-date hstack gap-narrow fs-7 opacity-60">
                      <span>Apr 12, 2025</span>
                    </div>
                  </header>
                </article>
              </div>
              <div>
                <article class="post type-post panel vstack gap-2">
                  <figure class="featured-image m-0 rounded ratio ratio-4x3  uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/blog/img-08.jpg" alt="The ultimate guide to marketing success">
                    <NuxtLink to="/blog-details" class="position-cover"
                      data-caption="The ultimate guide to marketing success"></NuxtLink>
                  </figure>
                  <header class="panel vstack gap-1">
                    <h5 class="h6 sm:h5 md:h4 m-0">
                      <NuxtLink class="text-none" to="/blog-details">The ultimate guide to marketing success</NuxtLink>
                    </h5>
                    <div class="post-date hstack gap-narrow fs-7 opacity-60">
                      <span>Apr 10, 2025</span>
                    </div>
                  </header>
                </article>
              </div>
              <div>
                <article class="post type-post panel vstack gap-2">
                  <figure class="featured-image m-0 rounded ratio ratio-4x3  uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/blog/img-09.jpg" alt="A comprehensive guide to marketing">
                    <NuxtLink to="/blog-details" class="position-cover"
                      data-caption="A comprehensive guide to marketing"></NuxtLink>
                  </figure>
                  <header class="panel vstack gap-1">
                    <h5 class="h6 sm:h5 md:h4 m-0">
                      <NuxtLink class="text-none" to="/blog-details">A comprehensive guide to marketing</NuxtLink>
                    </h5>
                    <div class="post-date hstack gap-narrow fs-7 opacity-60">
                      <span>Apr 8, 2025</span>
                    </div>
                  </header>
                </article>
              </div>
            </div>
          </div>
          <a href="#commont"
            class="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800">
            <span>Be the first to write a comment.</span>
          </a>
        </div>
      </div>
    </div>
  </article>

  <ImagePopup ref="image_popup" :images="image_data.map((item) => item.img)" />
  <ImagePopup ref="image_popup" :images="image_data2.map((item) => item.img)" />
  <ImagePopup ref="image_popup" :images="image_data3.map((item) => item.img)" />


</template>