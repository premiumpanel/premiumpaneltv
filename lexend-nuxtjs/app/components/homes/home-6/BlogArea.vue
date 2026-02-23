<template>
  <div id="insights" class="insights section panel overflow-hidden">
    <div class="section-outer panel py-6 xl:py-10">
      <div class="container xl:max-w-xl">
        <div class="section-inner panel">
          <div class="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div class="heading vstack sm:hstack gap-4 justify-between items-center md:items-end panel"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
              <div class="vstack items-center lg:items-start gap-2 text-center lg:text-start">
                <div class="cstack gap-1 py-1 px-3 border rounded-pill">
                  <span class="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary"></span>
                  <span class="fs-8 fw-bold text-uppercase">Insights</span>
                </div>
                <h2 class="title h3 lg:h2 xl:h1 m-0 px-2">Latest posts, tutorials <span
                    class="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">and
                    updates</span></h2>
              </div>
              <div>
                <NuxtLink to="/blog" class="btn btn-sm lg:btn-md btn-primary px-3">
                  <span>View all posts</span>
                  <i class="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180"></i>
                </NuxtLink>
              </div>
            </div>
            <div class="content panel">
              <div class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2">
                <div>
                  <article class="post type-post panel overflow-hidden vstack gap-2 p-2 border rounded-1-5">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-16x9 rounded-1 uc-transition-toggle overflow-hidden">
                      <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src="/assets/images/blog/img-01.jpg" alt="UX review presentations">
                      <NuxtLink to="/blog-details" class="position-cover" data-caption="UX review presentations"></NuxtLink>
                    </figure>
                    <div class="panel vstack gap-1">
                      <h3 class="post-title panel h4 m-0">
                        <NuxtLink class="text-none" to="/blog-details">UX review presentations</NuxtLink>
                      </h3>
                      <p class="post-excrept fs-6 opacity-70">Join the thousands of satisfied users and take your
                        business to the next level today and the power of streamlined business operations.</p>
                      <div class="post-meta hstack gap-1 panel overflow-hidden mt-2">
                        <NuxtLink to="/page-author"><img src="/assets/images/avatars/02.png" alt="David"
                            class="w-40px h-40px rounded-circle"></NuxtLink>
                        <div class="vstack gap-0">
                          <NuxtLink to="/page-author" class="text-none fw-bold text-black dark:text-white">David</NuxtLink>
                          <div class="post-date hstack gap-narrow fs-7 opacity-70">
                            <span>Apr 26, 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div>
                  <div class="row child-cols-12 g-2">
                    <div>
                      <article class="post type-post panel overflow-hidden p-2 border rounded-1-5">
                        <div class="panel hstack gap-2">
                          <div class="w-80px lg:w-100px">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-1x1 rounded-1 uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/blog/img-02.jpg" alt="Migrating to Linear 101">
                              <NuxtLink to="/blog-details" class="position-cover"
                                data-caption="Migrating to Linear 101"></NuxtLink>
                            </figure>
                          </div>
                          <div class="panel vstack gap-narrow">
                            <div class="post-date hstack gap-narrow fs-7 opacity-70">
                              <span>Apr 24, 2025</span>
                            </div>
                            <h3 class="post-title panel h5 m-0">
                              <NuxtLink class="text-none" to="/blog-details">Migrating to Linear 101</NuxtLink>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article class="post type-post panel overflow-hidden p-2 border rounded-1-5">
                        <div class="panel hstack gap-2">
                          <div class="w-80px lg:w-100px">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-1x1 rounded-1 uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/blog/img-03.jpg" alt="Building your API stack">
                              <NuxtLink to="/blog-details" class="position-cover"
                                data-caption="Building your API stack"></NuxtLink>
                            </figure>
                          </div>
                          <div class="panel vstack gap-narrow">
                            <div class="post-date hstack gap-narrow fs-7 opacity-70">
                              <span>Apr 22, 2025</span>
                            </div>
                            <h3 class="post-title panel h5 m-0">
                              <NuxtLink class="text-none" to="/blog-details">Building your API stack</NuxtLink>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article class="post type-post panel overflow-hidden p-2 border rounded-1-5">
                        <div class="panel hstack gap-2">
                          <div class="w-80px lg:w-100px">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-1x1 rounded-1 uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/blog/img-04.jpg" alt="UX review presentations">
                              <NuxtLink to="/blog-details" class="position-cover"
                                data-caption="UX review presentations"></NuxtLink>
                            </figure>
                          </div>
                          <div class="panel vstack gap-narrow">
                            <div class="post-date hstack gap-narrow fs-7 opacity-70">
                              <span>Apr 26, 2025</span>
                            </div>
                            <h3 class="post-title panel h5 m-0">
                              <NuxtLink class="text-none" to="/blog-details">UX review presentations</NuxtLink>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row child-cols-12 g-2">
                    <div>
                      <article class="post type-post panel overflow-hidden p-2 border rounded-1-5">
                        <div class="panel hstack gap-2">
                          <div class="w-80px lg:w-100px">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-1x1 rounded-1 uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/blog/img-05.jpg" alt="Migrating to Linear 101">
                              <NuxtLink to="/blog-details" class="position-cover"
                                data-caption="Migrating to Linear 101"></NuxtLink>
                            </figure>
                          </div>
                          <div class="panel vstack gap-narrow">
                            <div class="post-date hstack gap-narrow fs-7 opacity-70">
                              <span>Apr 24, 2025</span>
                            </div>
                            <h3 class="post-title panel h5 m-0">
                              <NuxtLink class="text-none" to="/blog-details">Migrating to Linear 101</NuxtLink>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article class="post type-post panel overflow-hidden p-2 border rounded-1-5">
                        <div class="panel hstack gap-2">
                          <div class="w-80px lg:w-100px">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-1x1 rounded-1 uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/blog/img-06.jpg" alt="Building your API stack">
                              <NuxtLink to="/blog-details" class="position-cover"
                                data-caption="Building your API stack"></NuxtLink>
                            </figure>
                          </div>
                          <div class="panel vstack gap-narrow">
                            <div class="post-date hstack gap-narrow fs-7 opacity-70">
                              <span>Apr 22, 2025</span>
                            </div>
                            <h3 class="post-title panel h5 m-0">
                              <NuxtLink class="text-none" to="/blog-details">Building your API stack</NuxtLink>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article class="post type-post panel overflow-hidden p-2 border rounded-1-5">
                        <div class="panel hstack gap-2">
                          <div class="w-80px lg:w-100px">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-1x1 rounded-1 uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/blog/img-07.jpg" alt="UX review presentations">
                              <NuxtLink to="/blog-details" class="position-cover"
                                data-caption="UX review presentations"></NuxtLink>
                            </figure>
                          </div>
                          <div class="panel vstack gap-narrow">
                            <div class="post-date hstack gap-narrow fs-7 opacity-70">
                              <span>Apr 26, 2025</span>
                            </div>
                            <h3 class="post-title panel h5 m-0">
                              <NuxtLink class="text-none" to="/blog-details">UX review presentations</NuxtLink>
                            </h3>
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
    </div>
  </div>
</template>