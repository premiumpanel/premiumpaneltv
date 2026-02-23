<script setup>
import { ref } from 'vue';
import { featuresData } from '~/data/features-data';

const activeTab = ref(0);

const switchTab = (index) => {
  activeTab.value = index;
};


</script>

<template>
  <div id="main_features" class="main-features section panel overflow-hidden">
    <div class="section-outer panel py-4 md:py-6 xl:py-10">
      <div class="container sm:max-w-lg">
        <div class="section-inner panel">
          <div class="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 mx-auto text-center"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <span class="fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary">
              {{ featuresData.header.subtitle }}
            </span>
            <h2 class="h3 lg:h2 m-0">
              <span class="px-1 bg-tertiary text-primary">{{ featuresData.header.highlighted }}</span>
              {{ featuresData.header.title.replace(featuresData.header.highlighted, '') }}
            </h2>
            <p class="fs-6 xl:fs-3 xl:px-8">{{ featuresData.header.description }}</p>
          </div>

          <div class="panel vstack items-center gap-4 md:gap-6 lg:gap-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <ul
              class="uc-subnav uc-subnav-outline-pill gap-1 lg:gap-2 fs-5 fw-medium justify-start lg:justify-center mx-auto overflow-scroll hide-scrollbar flex-nowrap max-w-100">
              <li v-for="(category, index) in featuresData.categories" :key="`category-${index}`" :class="{ 'uc-active': activeTab === index }">
                <a style="cursor: pointer;"  @click.prevent="switchTab(index)">
                  {{ category }}
                </a>
              </li>
            </ul>

            <div class="products-lisiting flex-none w-100 uc-switcher">
              <div v-for="(integrations, index) in featuresData.integrations" :key="`panel-${index}`"
                :class="{ active: activeTab === index }">
                <div class="panel">
                  <div class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 gx-2 lg:gx-3 gy-4 lg:gy-6 col-match">
                    <div v-for="(integration, intIndex) in integrations" :key="`integration-${intIndex}`">
                      <div
                        class="panel overflow-hidden border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                        <figure
                          class="featured-image m-0 rounded ratio ratio-3x2 rounded-0 border-bottom border-dark border-opacity-20 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            :src="integration.image" :alt="integration.name" loading="lazy">
                        </figure>
                        <div class="content vstack items-start gap-4 p-2 lg:p-4">
                          <div class="vstack gap-1">
                            <h4 class="h5 m-0">{{ integration.name }}</h4>
                            <p class="fs-6 opacity-60">{{ integration.description }}</p>
                          </div>
                          <a href="#" class="uc-link border-bottom fw-bold dark:text-tertiary">
                            <span>Get started</span>
                            <i class="icon-narrow unicon-arrow-right fw-bold"></i>
                          </a>
                        </div>
                        <NuxtLink :to="integration.link" class="position-cover"></NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink :to="featuresData.browseAll.link"
              class="btn btn-md xl:btn-lg btn-primary text-tertiary dark:bg-tertiary dark:text-primary dark:hover:bg-tertiary-300 px-3 lg:px-5 fw-bold">
              {{ featuresData.browseAll.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uc-switcher>div {
  display: none;
}

.uc-switcher>div.active {
  display: block;
}

[data-uc-switcher] a.active {
  background-color: var(--primary);
  color: var(--tertiary);
}
 
.featured-image {
  transition: transform 0.3s ease;
}

.panel:hover .featured-image {
  transform: scale(1.05);
}

.uc-link {
  transition: all 0.2s ease;
}

.uc-link:hover {
  opacity: 0.8;
}
</style>