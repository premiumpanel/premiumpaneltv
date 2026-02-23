<script setup>

import team_img_1 from "@/assets/images/team/01.jpg";
import team_img_2 from "@/assets/images/team/02.jpg";
import team_img_3 from "@/assets/images/team/03.jpg";
import team_img_4 from "@/assets/images/team/04.jpg";
import team_img_5 from "@/assets/images/team/05.jpg";
import team_img_6 from "@/assets/images/team/06.jpg";
import team_img_7 from "@/assets/images/team/07.jpg";
import team_img_8 from "@/assets/images/team/08.jpg";

const teamData = [
  {
    name: "Nilson Laurent",
    role: "Founder & CEO",
    image: team_img_1,
  },
  {
    name: "José Gibbons",
    role: "Engineering Manager",
    image: team_img_2,
  },
  {
    name: "John Hewitt",
    role: "Product Manager",
    image: team_img_3,
  },
  {
    name: "Jason Chedjou",
    role: "Frontend Developer",
    image: team_img_4,
  },
  {
    name: "Zouhir Christensen",
    role: "Backend Developer",
    image: team_img_5,
  },
  {
    name: "Zaid Schwartz",
    role: "Product Designer",
    image: team_img_6,
  },
  {
    name: "Sarah Mandella",
    role: "UX Researcher",
    image: team_img_7,
  },
  {
    name: "Marco Kelly",
    role: "Customer Success",
    image: team_img_8,
  },
]
</script>


<template>
  <div id="team_members" class="team-members section panel overflow-hidden">
    <div class="section-outer panel pb-4 md:pb-6 xl:pb-9">
      <div class="container sm:max-w-lg xl:max-w-xl">
        <div class="section-inner panel">
          <div class="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
            
            <!-- Heading -->
            <div 
              class="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center" 
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span class="fw-bold text-primary dark:text-secondary">Our team</span>
              <h2 class="title h3 lg:h2 xl:h1 m-0 dark:text-white">People you’ll be working with</h2>
              <p class="fs-6 xl:fs-5 dark:text-white text-opacity-70">
                We’re a 100% remote team spread all across the world.
              </p>
            </div>

            <!-- Team Members -->
            <div class="content panel">
              <div 
                class="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-4 xl:gx-4 xl:gy-6"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
              >
                <div v-for="(member, index) in teamData" :key="index">
                  <div class="panel vstack gap-2 xl:gap-3">
                    <img 
                      class="w-100 rounded-1 sm:rounded-1-5" 
                      :src="member.image" 
                      :alt="member.name" 
                    />
                    <div class="panel vstack items-start gap-narrow">
                      <h6 class="h6 xl:h5 m-0 dark:text-white">{{ member.name }}</h6>
                      <span class="fs-6 xl:fs-5 opacity-70">{{ member.role }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Hiring Section -->
            <div 
              class="vstack items-center gap-2 lg:gap-3 max-w-450px mx-auto text-center lg:mt-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 class="h4 sm:h3 m-0">We’re hiring</h2>
              <p class="fs-6 sm:fs-5 lg:fs-4 text-dark dark:text-white text-opacity-70">
                We are looking for people that share our vision. Are you adaptable, driven, and friendly?
              </p>
              <NuxtLink 
                class="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs mt-1" 
                to="/page-career"
              >
                <span>Submit application</span>
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
