<template>
  <div class="section py-4 lg:py-6 xl:py-8">
    <div class="container max-w-xl">
      <div class="panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header class="shop-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div class="panel">
            <h1 class="h3 lg:h1 m-0">Toys</h1>
          </div>
          <div class="vstack sm:hstack justify-between items-center gap-2 sm:gap-4">
            <div class="panel text-center sm:text-start">
              <span class="fs-6 m-0 opacity-60">Showed 12 products out of 27 total under "Toys" category.</span>
            </div>
            <div>
              <div class="hstack gap-1 fs-6">
                <span>Filter by:</span>
                <select name="select" id="filter_by"
                  class="form-select form-control-xs fs-6 w-150px dark:bg-gray-900 dark:text-white dark:border-gray-700">
                  <option value="" selected>Latest</option>
                  <option value="">Relevance</option>
                  <option value="">Most popular</option>
                  <option value="">Trending</option>
                  <option value="">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </header>
        <div class="shop-lisiting row child-cols-6 lg:child-cols-3 col-match gy-4 lg:gy-8 gx-2 lg:gx-4">
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-01.jpg" alt="Elegant Watch">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Elegant Watch"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span
                    class="position-absolute top-0 start-0 m-1 md:m-2 ft-tertiary h-24px px-1 bg-yellow-400 text-dark">51%</span>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Elegant Watch</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price-old text-line-through opacity-40"> $99.00 </span> <span
                      class="price">$49.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-02.jpg" alt="Hemp Seed">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Hemp Seed"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Hemp Seed</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled "></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price">$49.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-03.jpg" alt="White Classic Watch">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="White Classic Watch">
                    </NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span
                    class="position-absolute top-0 start-0 m-1 md:m-2 ft-tertiary h-24px px-1 bg-yellow-400 text-dark">67%</span>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">White Classic Watch</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price-old text-line-through opacity-40"> $89.00 </span> <span
                      class="price">$29.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-04.jpg" alt="Stylish Starbucks">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Stylish Starbucks">
                    </NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Stylish Starbucks</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price">$20.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-05.jpg" alt="Black AirTag">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Black AirTag"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Black AirTag</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 3 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled "></i></li>
                    <li><i class="icon fs-6 unicon-star-filled "></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price">$74.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-06.jpg" alt="Modern Headsets">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Modern Headsets">
                    </NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Modern Headsets</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price">$24.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-07.jpg" alt="Laptop Cover">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Laptop Cover"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span
                    class="position-absolute top-0 start-0 m-1 md:m-2 ft-tertiary h-24px px-1 bg-yellow-400 text-dark">70%</span>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Laptop Cover</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price-old text-line-through opacity-40"> $80.00 </span> <span
                      class="price">$24.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-08.jpg" alt="Disney Toys">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Disney Toys"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span
                    class="position-absolute top-0 start-0 m-1 md:m-2 ft-tertiary h-24px px-1 bg-yellow-400 text-dark">75%</span>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Disney Toys</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled "></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price-old text-line-through opacity-40"> $20.00 </span> <span
                      class="price">$5.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-09.jpg" alt="Screen Axe">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Screen Axe"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span
                    class="position-absolute top-0 start-0 m-1 md:m-2 ft-tertiary h-24px px-1 bg-yellow-400 text-dark">50%</span>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Screen Axe</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled "></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price-old text-line-through opacity-40"> $38.00 </span> <span
                      class="price">$19.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-10.jpg" alt="Airpods Pro">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Airpods Pro"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span
                    class="position-absolute top-0 start-0 m-1 md:m-2 ft-tertiary h-24px px-1 bg-yellow-400 text-dark">30%</span>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Airpods Pro</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price-old text-line-through opacity-40"> $70.00 </span> <span
                      class="price">$49.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-11.jpg" alt="USB Cable">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="USB Cable"></NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span
                    class="position-absolute top-0 start-0 m-1 md:m-2 ft-tertiary h-24px px-1 bg-yellow-400 text-dark">80%</span>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">USB Cable</NuxtLink>
                  </h5>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price-old text-line-through opacity-40"> $5.00 </span> <span class="price">$1.00</span>
                  </div>
                  <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                    href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article class="product type-product panel">
              <div class="vstack gap-2">
                <div class="panel">
                  <figure
                    class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src="/assets/images/common/products/img-12.jpg" alt="Stylish Decoration">
                    <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Stylish Decoration">
                    </NuxtLink>
                  </figure>
                  <a href="#add_to_favorite"
                    class="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i class="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 class="h6 md:h5 m-0">
                    <NuxtLink class="text-none" to="/shop-product-detail">Stylish Decoration</NuxtLink>
                  </h5>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 unicon-star-filled "></i></li>
                  </ul>
                  <div class="hstack justify-center gap-narrow fs-7">
                    <span class="price">$120.00</span>
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