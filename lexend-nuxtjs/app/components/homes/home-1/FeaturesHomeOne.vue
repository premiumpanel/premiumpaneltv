

<script setup>
import { ref } from 'vue'

const activeTab = ref(1)
import tab_thumb_1 from "@/assets/images/template/feature-image-02.jpg";
import tab_thumb_2 from "@/assets/images/template/feature-image-03.jpg";
import tab_thumb_3 from "@/assets/images/template/feature-image-01.jpg";
import tab_thumb_4 from "@/assets/images/template/feature-image-04.jpg";

const tabs = [
  {
    title: 'Audit Trial',
    image: tab_thumb_1,
    alt: 'Share tools quickly and confidently in minutes',
    heading: 'Share tools quickly and confidently in minutes',
    text: 'This powerful tool eliminates the need to leave Salesforce to get things done. You can create custom proposals with dynamic pricing tables.',
    linkText: "Let's find out"
  },
  {
    title: 'Tool Workflow',
    image: tab_thumb_2,
    alt: 'Connect every part of your entire business',
    heading: 'Connect every part of your entire business',
    text: 'Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.',
    linkText: 'See all integrations'
  },
  {
    title: 'Control your Apps',
    image: tab_thumb_3,
    alt: 'Maintain compliance and control your apps',
    heading: 'Maintain compliance and control your apps',
    text: 'Improve security and trust with built-in e-Signatures. Use pre-approved templates and lock legal info to avoid mistakes.',
    linkText: "Let's find out"
  },
  {
    title: 'Approvals',
    image: tab_thumb_4,
    alt: 'Review quickly and confidently',
    heading: 'Review quickly and confidently',
    text: 'Get real-time access to approvals, comments and version tracking. Eliminate Tool errors with smart variables and logic.',
    linkText: "Let's find out"
  }
]
</script>



<template>
  <div id="main_features" class="main-features section panel overflow-hidden">
    <div class="section-outer panel pb-6 xl:pb-9">
      <div class="container max-w-xl lg:max-w-lg">
        <div class="section-inner panel">
          <!-- Title Area -->
          <div
            class="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
            <h2 class="h3 lg:h2 xl:h1 m-0">Smart features for your business</h2>
            <p class="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
              We focus on helping you to make useful content more accessible with an ultimate goal for a good sharing profit as a content creator.
            </p>
          </div>

          <!-- Nav Tabs -->
          <div class="panel vstack gap-4 xl:gap-6">
            <div class="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
              <ul class="main-features-nav hstack text-center overflow-auto">
                <li v-for="(tab, index) in tabs" :key="index" :class="index === activeTab ? 'uc-active' : ''">
                  <a
                    style="cursor: pointer;"
                    class="h6 lg:h5 text-nowrap m-0" 
                    @click.prevent="activeTab = index"
                  >{{ tab.title }}</a>
                </li>
              </ul>
            </div>

            <!-- Switcher Panels -->
            <div class="main-features-switcher uc-switcher overflow-hidden">
              <div v-for="(tab, index) in tabs" :key="index" :class="{ 'uc-active': activeTab === index }">
                <div class="feature-item panel">
                  <div class="row child-cols col-match justify-between g-4">
                    <div class="col-12 sm:col-6">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                        <img
                          class="media-cover image"
                          :src="tab.image"
                          :alt="tab.alt"
                        />
                      </figure>
                    </div>
                    <div class="col-12 sm:col-6">
                      <div class="panel">
                        <div class="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div class="panel vstack gap-2">
                              <h3 class="h4 sm:h3 lg:h2 m-0">{{ tab.heading }}</h3>
                              <p class="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                {{ tab.text }}
                              </p>
                              <a href="#" class="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2">
                                <span>{{ tab.linkText }}</span>
                                <i class="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> <!-- End Switcher -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uc-active {
  display: block !important;
}
.main-features-switcher > div:not(.uc-active) {
  display: none;
}
.main-features-nav a.uc-active {
  color: var(--bs-primary); /* Bootstrap primary color or your own */
  font-weight: bold;
}
</style>
