<script setup>
import { ref } from 'vue'

import icon_1 from "@/assets/images/common/icons/zap.svg";
import icon_2 from "@/assets/images/common/icons/target.svg";
import icon_3 from "@/assets/images/common/icons/settings.svg";

const faqItems = ref([
  {
    id: 23,
    title: 'Manage tasks',
    icon: icon_1,
    content: 'Offers a unified platform that fosters innovation while providing end-to-end data management.',
    open: false
  },
  {
    id: 25,
    title: 'Set priorities',
    icon: icon_2,
    content: 'Providing end-to-end data management. See how we help your team solve today’s biggest challenges.',
    open: false
  },
  {
    id: 27,
    title: 'Collaborate with your team',
    icon: icon_3,
    content: 'Our shared team inboxes keep everyone on the same page and in the loop.',
    open: true
  }
])

// Toggle accordion
const toggleFAQ = (index) => {
  faqItems.value = faqItems.value.map((item, i) => ({
    ...item,
    open: i === index ? !item.open : false
  }))
}
</script>




<template>
  <div id="how_it_works"
    class="how-it-works section panel overflow-hidden rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white">
    <div class="section-outer panel">
      <div class="container container-full">
        <div class="section-inner panel">
          <div class="row child-cols-12 col-match g-0">
            <div>
              <div class="panel">
                <div class="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                  <div
                    data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                    style="transform: translateX(0px); opacity: 1;">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0 ">
                      <img class="media-cover image " src="/assets/images/template/feature-image-03.jpg"
                        alt="image title">
                    </figure>
                  </div>
                  <div
                    data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
                    style="transform: translateX(0px); opacity: 1;">
                    <div class="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                      data-anime="onview: -100; targets: &gt;*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});">
                      <h3 class="h3 lg:h2 m-0" style="transform: translateY(0px); opacity: 1;">End-to-End Data Shared
                        Management</h3>
                      <p class="fs-6 lg:fs-5" style="transform: translateY(0px); opacity: 1;">Whether you have a team of
                        2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                      <div class="panel w-100 mt-2 lg:mt-4" style="transform: translateY(0px); opacity: 1;">
                        <ul class="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                          data-uc-accordion="collapsible: false" style="--divider-gap: 40px"> 


                          <li v-for="(item, index) in faqItems" :key="item.id" :class="{ 'uc-open': item.open }">
                            <a class="uc-accordion-title h5 lg:h4 m-0" :id="`uc-accordion-${item.id}`" role="button"
                              :aria-controls="`uc-accordion-${item.id + 1}`" :aria-expanded="item.open"
                              :aria-disabled="item.open" @click="toggleFAQ(index)">
                              <span class="hstack gap-1 lg:gap-2">
                                <span class="cstack w-36px h-36px bg-primary rounded-circle">
                                  <img class="icon icon-1 text-white image-filter-white" :src="item.icon" alt="feature-icon" />
                                </span>
                                <span>{{ item.title }}</span>
                              </span>
                            </a>
                            <div class="uc-accordion-content mt-1 lg:mt-2" :id="`uc-accordion-${item.id + 1}`"
                              role="region" :aria-labelledby="`uc-accordion-${item.id}`" v-show="item.open">
                              {{ item.content }}
                            </div>
                          </li>



                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="panel">
                <div class="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                  <div class="lg:order-2"
                    data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                    style="transform: translateX(0px); opacity: 1;">
                    <figure
                      class="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-start-0 ">
                      <img class="media-cover image " src="/assets/images/template/feature-image-01.jpg"
                        alt="image title">
                    </figure>
                  </div>
                  <div class="order-1"
                    data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 400;"
                    style="transform: translateX(0px); opacity: 1;">
                    <div class="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                      data-anime="onview: -100; targets: &gt;*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});">
                      <h3 class="h3 lg:h2 m-0" style="transform: translateY(0px); opacity: 1;">Unlock your Productivity
                        Potential Now or Never</h3>
                      <p class="fs-6 lg:fs-5" style="transform: translateY(0px); opacity: 1;">Unlock your productivity
                        potential with our
                        intuitive and powerful to-do app. Manage tasks, set priorities, collaborate with your team, and
                        track progress effortlessly.</p>
                      <div class="panel mt-2 lg:mt-4" style="transform: translateY(0px); opacity: 1;">
                        <div class="row child-cols-12 lg:child-cols-6 g-4">
                          <div>
                            <div class="panel vstack items-start gap-2">
                              <div class="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                <img class="icon icon-1 text-white" src="/assets/images/common/icons/database.svg"
                                  alt="feature-icon" data-uc-svg="" hidden=""><svg width="24" height="24"
                                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-1 text-white uc-svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4 5C4.00001 5.00124 4.00018 5.00585 4.00305 5.01529C4.00645 5.02644 4.01483 5.04845 4.03507 5.08143C4.07752 5.15057 4.16408 5.25453 4.32624 5.38232C4.65642 5.64253 5.19616 5.9206 5.95227 6.17264C7.45402 6.67322 9.59229 7 12 7C14.4077 7 16.546 6.67322 18.0477 6.17264C18.8038 5.9206 19.3436 5.64253 19.6738 5.38232C19.8359 5.25453 19.9225 5.15057 19.9649 5.08143C19.9852 5.04845 19.9935 5.02644 19.9969 5.01529C19.9999 5.00571 20 5.00139 20 5.00022C20 5.00016 20 5.00027 20 5.00022C20 4.99949 20.0001 4.99506 19.9969 4.98471C19.9935 4.97356 19.9852 4.95155 19.9649 4.91857C19.9225 4.84943 19.8359 4.74547 19.6738 4.61768C19.3436 4.35747 18.8038 4.0794 18.0477 3.82736C16.546 3.32678 14.4077 3 12 3C9.59229 3 7.45402 3.32678 5.95227 3.82736C5.19616 4.0794 4.65642 4.35747 4.32624 4.61768C4.16408 4.74547 4.07752 4.84943 4.03507 4.91857C4.01483 4.95155 4.00645 4.97356 4.00305 4.98471C3.99998 4.99479 4 4.99911 4 5ZM20 7.5266C19.5988 7.73177 19.1533 7.91229 18.6802 8.07C16.9246 8.6552 14.5629 9 12 9C9.43715 9 7.07541 8.6552 5.31981 8.07C4.84666 7.91229 4.40123 7.73177 4 7.5266V12C4 12.0019 4.00008 12.007 4.0034 12.018C4.00695 12.0298 4.01544 12.0521 4.03558 12.0851C4.07772 12.1543 4.16348 12.258 4.32419 12.3853C4.65159 12.6447 5.18788 12.9223 5.94167 13.174C7.43891 13.6738 9.57676 14 12 14C14.4232 14 16.5611 13.6738 18.0583 13.174C18.8121 12.9223 19.3484 12.6447 19.6758 12.3853C19.8365 12.258 19.9223 12.1543 19.9644 12.0851C19.9846 12.0521 19.993 12.0298 19.9966 12.018C19.9999 12.007 20 12.0019 20 12V7.5266ZM22 5C22 4.14805 21.4811 3.49559 20.9117 3.04685C20.331 2.58923 19.5528 2.22085 18.6802 1.93C16.9246 1.3448 14.5629 1 12 1C9.43715 1 7.07541 1.3448 5.31981 1.93C4.44724 2.22085 3.66896 2.58923 3.08829 3.04685C2.51889 3.49559 2 4.14805 2 5V19C2 19.8494 2.51319 20.502 3.08206 20.9528C3.66091 21.4115 4.43712 21.7802 5.30833 22.071C7.06109 22.6562 9.42324 23 12 23C14.5768 23 16.9389 22.6562 18.6917 22.071C19.5629 21.7802 20.3391 21.4115 20.9179 20.9528C21.4868 20.502 22 19.8494 22 19V5ZM20 14.5318C19.6021 14.7354 19.1606 14.9145 18.6917 15.071C16.9389 15.6562 14.5768 16 12 16C9.42324 16 7.06109 15.6562 5.30833 15.071C4.83938 14.9145 4.39794 14.7354 4 14.5318V19C4 19.0019 4.00008 19.007 4.0034 19.018C4.00695 19.0298 4.01544 19.0521 4.03558 19.0851C4.07772 19.1543 4.16348 19.258 4.32419 19.3853C4.65159 19.6447 5.18788 19.9223 5.94167 20.174C7.43891 20.6738 9.57676 21 12 21C14.4232 21 16.5611 20.6738 18.0583 20.174C18.8121 19.9223 19.3484 19.6447 19.6758 19.3853C19.8365 19.258 19.9223 19.1543 19.9644 19.0851C19.9846 19.0521 19.993 19.0298 19.9966 19.018C19.9999 19.007 20 19.0019 20 19V14.5318Z"
                                    fill="black"></path>
                                </svg>
                              </div>
                              <div class="vstack gap-1 lg:gap-2">
                                <h5 class="h5 lg:h4 m-0">Use Data &amp; AI responsibly</h5>
                                <p class="fs-6">Offers a unified platform that fosters innovation.</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="panel vstack items-start gap-2">
                              <div class="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                <img class="icon icon-1 text-white" src="/assets/images/common/icons/line-chart.svg"
                                  alt="feature-icon" data-uc-svg="" hidden=""><svg width="24" height="24"
                                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-1 text-white uc-svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L10 12.5858L12.7272 9.85858C12.7326 9.8532 12.738 9.84774 12.7436 9.84221C12.8278 9.75795 12.9283 9.65732 13.0242 9.57595C13.1352 9.48166 13.3038 9.35611 13.5365 9.28052C13.8377 9.18264 14.1623 9.18264 14.4635 9.28052C14.6962 9.35611 14.8648 9.48165 14.9758 9.57595C15.0717 9.65732 15.1722 9.75795 15.2564 9.8422C15.262 9.84774 15.2674 9.8532 15.2728 9.85858L18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071L14 11.4142L11.2728 14.1414C11.2674 14.1468 11.262 14.1523 11.2564 14.1578C11.1722 14.2421 11.0717 14.3427 10.9758 14.4241C10.8648 14.5183 10.6962 14.6439 10.4635 14.7195C10.1623 14.8174 9.83774 14.8174 9.53647 14.7195C9.30384 14.6439 9.13524 14.5183 9.02417 14.4241C8.92831 14.3427 8.82775 14.242 8.74355 14.1578C8.73803 14.1523 8.73258 14.1468 8.72721 14.1414L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                                    fill="black"></path>
                                </svg>
                              </div>
                              <div class="vstack gap-1 lg:gap-2">
                                <h5 class="h5 lg:h4 m-0">Track progress effortlessly</h5>
                                <p class="fs-6">Providing end-to-end data management today’s challenges.</p>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>