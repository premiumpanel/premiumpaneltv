<script setup >
import team_data from '~/data/tetam-data';

</script>

 


<template>
  <div id="about-team" class="about-team section panel overflow-hidden border-top">
    <div class="section-outer panel py-4 md:py-6 xl:py-9">
      <div class="container max-w-lg">
        <div class="section-inner panel">
          <div
            class="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <!-- Heading -->
            <div
              class="heading vstack gap-2 panel max-w-700px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span class="fw-bold text-primary dark:text-secondary">We're hiring</span>
              <h2 class="title h3 lg:h2 xl:h1 m-0">Meet our team</h2>
              <p class="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
              </p>
            </div>

            <!-- Team Members -->
            <div class="content panel">
              <div
                class="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-6"
                data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div v-for="(member, index) in team_data" :key="index">
                  <div class="panel vstack items-center gap-2 text-center">
                    <img
                      class="w-72px lg:w-96px h-72px lg:h-96px rounded-circle border border-secondary-600"
                      :src="member.img"
                      :alt="member.name"
                    />
                    <div class="panel vstack items-center gap-0">
                      <h6 class="h6 lg:h5 m-0">{{ member.name }}</h6>
                      <span class="fs-7 lg:fs-6 opacity-70">{{ member.role }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Hiring CTA -->
            <NuxtLink
              to="/page-career"
              class="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow mx-auto"
            >
              <span>We’re hiring</span>
              <i class="icon icon-1 unicon-arrow-right rtl:rotate-180"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
