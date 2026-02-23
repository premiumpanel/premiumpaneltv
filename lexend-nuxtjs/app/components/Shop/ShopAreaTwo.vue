<script setup>
import shop_data_three from '~/data/shop-data-three';

</script>


<template>
  <div class="section py-4 lg:py-6 xl:py-8">
    <div class="container max-w-xl">
      <div class="panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header class="shop-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div class="panel">
            <h1 class="h3 lg:h1 m-0">Shop listing</h1>
          </div>
          <div class="vstack sm:hstack justify-between items-center gap-2 sm:gap-4">
            <div class="panel text-center sm:text-start">
              <span class="fs-6 m-0 opacity-60">Showed 16 products out of 100 total.</span>
            </div>
            <div>
              <div class="hstack gap-1 fs-6">
                <span>Filter by:</span>
                <select name="select" id="filter_by"
                  class="form-select form-control-xs fs-6 w-150px dark:bg-gray-900 dark:text-white dark:border-gray-700">
                  <option value="">Latest</option>
                  <option value="" selected>Relevance</option>
                  <option value="">Most popular</option>
                  <option value="">Trending</option>
                  <option value="">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </header>
        <div class="shop-lisiting row child-cols-6 col-match gy-4 lg:gy-8 gx-2 lg:gx-8">

          <div v-for="(item, i) in shop_data_three" :key="i">
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque" :src="item.image"
                      alt="Elegant Watch">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Elegant Watch"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span v-if="item.discount"
                    class="position-absolute top-0 start-0 m-1 md:m-2 ft-tertiary h-24px px-1 bg-yellow-400 text-dark">{{
                    item.discount }}%</span>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">{{ item.name }}</NuxtLink>
                  </h5>
                  <ul v-if="item.rating" class="nav-x gap-0 text-gray-100 dark:text-gray-700"
                    :title="`Average ${item.rating} out of 5`">
                    <li v-for="star in 5" :key="star">
                      <i :class="`icon fs-6 unicon-star-filled ${star <= item.rating ? 'text-yellow' : ''}`"></i>
                    </li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price-old text-line-through opacity-40"> ${{ item.oldPrice }} </span> <span
                      class="price">${{ item.price }}</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>




        </div>
        <div class="nav-pagination pt-3 border-top border-gray-100 dark:border-gray-800">
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
</template>