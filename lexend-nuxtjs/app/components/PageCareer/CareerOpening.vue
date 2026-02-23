 
<script setup>
import job_list from '~/data/job-list';
 

</script>

<template>
  <div id="career_openings" class="career-openings section panel overflow-hidden pb-6 xl:pb-9">
    <div class="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
      <div class="container max-w-lg">
        <div class="section-inner panel">
          <div class="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto">
            <h2
              class="h4 sm:h2 m-0 text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
            >
              Current openings
            </h2>
            <div class="panel">
              <div
                class="row child-cols-12 sm:child-cols-6 col-match g-2 sm:g-3"
                data-uc-grid
                data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div v-for="job in job_list" :key="job.id">
                  <div class="panel vstack justify-end items-end gap-1 p-3 rounded lg:rounded-2 bg-white dark:bg-gray-800">
                    <div class="vstack gap-narrow">
                      <h5 class="h6 lg:h5 m-0">{{ job.job_title }}</h5>
                      <span class="fs-6 text-dark dark:text-white text-opacity-70">{{ job.category }}</span>
                    </div>
                    <NuxtLink
                      :to="`/page-career-detail/${job.slug}`"
                      class="uc-link fs-7 fw-bold d-inline-flex items-center gap-narrow border-bottom pb-narrow"
                    >
                      <span>Apply now</span>
                      <i class="icon icon-narrow unicon-arrow-up-right fw-bold rtl:-rotate-90"></i>
                    </NuxtLink>
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


 