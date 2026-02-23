<script setup>
import { integrations_data } from '~/data/integrations';

</script>

 
<template>
  <div id="integrations" class="integrations section panel overflow-hidden">
    <div class="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-primary dark:text-white">
      <div class="container max-w-lg">
        <div class="section-inner panel">
          <div
            class="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            <div class="panel vstack items-center gap-2 xl:gap-3 text-center">
              <h2 class="h3 lg:h2 xl:h1 m-0">Boost your efficiency with integrations</h2>
              <p class="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Connect every part of your business with integrations that will simplify your workflow.
              </p>
            </div>

            <div
              class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between"
              data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div v-for="(tool, index) in integrations_data" :key="index">
                <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark">
                  <div class="vstack gap-3">
                    <div class="hstack justify-between items-center">
                      <div class="vstack">
                        <h5 class="h5 m-0 text-dark">{{ tool.name }}</h5>
                        <span class="fs-7 opacity-70 dark:opacity-80">{{ tool.category }}</span>
                      </div>
                      <img :src="tool.image" :alt="tool.name" class="w-32px lg:w-40px" />
                    </div>
                    <p class="fs-6 opacity-70 dark:opacity-80">{{ tool.description }}</p>
                  </div>
                  <NuxtLink :to="tool.link" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                    <span>Explore</span>
                    <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <NuxtLink to="/page-integrations" class="uc-link fw-bold d-inline-flex items-center gap-narrow dark:text-white">
              <span>Explore all integrations</span>
              <i class="icon icon-1 unicon-arrow-right rtl:rotate-180"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 