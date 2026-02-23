<script setup>
import { ref } from "vue";

// Import image
import img_1 from "@/assets/images/features/home-15-solution-01.png";

// Solutions array
const solutions = [
  {
    title: 'AI-Powered Analytics',
    description: 'Our machine learning engine analyzes every customer interaction to identify patterns, predict emerging issues, and highlight opportunities.',
    points: [
      'Real-time analysis across all support channels.',
      'Automatic categorization of tickets.',
      'Predictive analytics to forecast support volume.'
    ],
    image: img_1,
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive processes to save time and increase efficiency.',
    points: [
      'Seamless task handoffs.',
      'Automatic categorization of tickets.',
      'Real-time status updates.'
    ],
    image: img_1,
  },
  {
    title: 'Team Collaboration',
    description: 'Boost productivity with better team coordination.',
    points: [
      'Shared workspaces.',
      'Role-based access.',
      'Live editing.'
    ],
    image: img_1,
  },
  {
    title: 'Customer Insights',
    description: 'Get deep insights into customer behavior and preferences.',
    points: [
      'Customer segmentation.',
      'Trend analysis.',
      'Behavior prediction.'
    ],
    image: img_1,
  }
];

// Track active tab index
const activeTab = ref(0);
</script>

<template>
  <section id="solutions" class="solutions section panel overflow-hidden">
    <div class="section-outer panel pb-6 sm:pb-8 xl:pb-10 pt-4 sm:pt-6 xl:pt-9">
      <div class="container xl:max-w-xl">
        <div class="section-inner panel">
          
          <!-- Heading -->
          <div class="section-heading panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 xl:mb-9 max-w-600px mx-auto text-center">
            <h2 class="h3 lg:h2 xl:h1 m-0">
              Automate the Repetitive,
              <span class="text-primary dark:text-primary-400">Focus on the Meaningful</span>
            </h2>
          </div>

          <!-- Tabs -->
          <div class="section-content panel vstack gap-3 sm:gap-6 xl:gap-8">
            <div class="panel p-1 lg:p-2 border rounded-2 xl:rounded-3">
              <ul class="main-solutions-nav hstack gap-2 text-center overflow-auto lg:overflow-hidden">
                <li
                  v-for="(solution, idx) in solutions"
                  :key="idx"
                  :class="['rounded-1-5 xl:rounded-2', activeTab === idx ? 'uc-active' : '']"
                  @click="activeTab = idx"
                >
                  <a class="h6 xl:h5 h-64px rounded-2 text-nowrap m-0 cursor-pointer">
                    {{ solution.title }}
                  </a>
                </li>
              </ul>
            </div>

            <!-- Tab Contents -->
            <ul class="main-solutions-switcher uk-switcher overflow-hidden">
              <li
                v-for="(solution, index) in solutions"
                :key="index"
                :class="[activeTab === index ? 'uc-active' : '']"
                v-show="activeTab === index"
              >
                <div class="solutions-item panel">
                  <div class="row child-cols-12 sm:child-cols-6 items-center justify-between g-4 lg:g-6 xl:g-9">
                    
                    <!-- Text -->
                    <div class="order-1 sm:order-0">
                      <div class="panel vstack gap-3 sm:gap-4 xl:gap-6">
                        <div class="vstack gap-2 xl:gap-3">
                          <h3 class="h3 lg:h2 xl:h1 m-0">{{ solution.title }}</h3>
                          <p class="fs-6 lg:fs-5 xl:fs-4 opacity-70 dark:text-white">
                            {{ solution.description }}
                          </p>
                        </div>
                        <div class="p-3 xl:p-4 rounded-2 bg-secondary dark:bg-gray-800">
                          <ul class="nav-y gap-2 fs-7 xl:fs-6 dark:text-white text-start">
                            <li
                              v-for="(point, i) in solution.points"
                              :key="i"
                              class="row child-cols items-start g-1"
                            >
                              <div class="col-auto">
                                <img src="/assets/images/vectors/check-02.svg" alt="icon" style="padding-top: 2px;">
                              </div>
                              <div>
                                <span>{{ point }}</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="uc-link fw-bold hstack gap-narrow mt-1 sm:mt-0 text-primary dark:text-primary-400">
                          <span>See analytics in action</span>
                          <i class="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px"></i>
                        </a>
                      </div>
                    </div>

                    <!-- Image -->
                    <div class="order-0 sm:order-1">
                      <figure class="panel ratio ratio-1x1 rounded-2 overflow-hidden m-0">
                        <img class="image media-cover" :src="solution.image" alt="solution image">
                      </figure>
                    </div>

                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
