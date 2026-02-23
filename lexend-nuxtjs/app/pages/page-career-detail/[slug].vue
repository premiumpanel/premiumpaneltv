<script setup>
import HeaderTwo from '~/layouts/headers/HeaderTwo.vue'
import FooterTwo from '~/layouts/footers/FooterTwo.vue'

import { useRoute } from 'vue-router'
import job_list from '~/data/job-list'

 
const route = useRoute()


const job = job_list.find(j => j.slug === route.params.slug)

useHead({
  title: `${job?.job_title} - Lexend - Software, SaaS & Startup Nuxt js Template`,
})




</script>

<template>
  <div
    class="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor">
    <HeaderTwo />

    <div id="wrapper" class="wrap">

      <div id="hero_header" class="hero-header section panel overflow-hidden">
        <div class="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
          <div class="container max-w-lg">
            <div class="section-inner panel">
              <div class="vstack items-center text-center gap-2 lg:gap-4">
                <span class="fs-6 fw-bold text-uppercase text-primary">We are looking for a</span>
                <h1 class="h2 sm:h1 lg:display-6 xl:display-5 max-w-600px my-0 mx-auto">{{ job?.job_title }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CareerDetailsJobDetailsArea />
      <PageCareerOpening />
      <PageCareerTestimonialArea />
      <PageCareerBrandsArea />

    </div>
    <FooterTwo />

  </div>
</template>
