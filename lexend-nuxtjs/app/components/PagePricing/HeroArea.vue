<script setup>
import { ref } from "vue";

const isYearly = ref(false);


const pricing_data = [
  {
    title: "Essentials",
    desc: "For creating impressive tools that generate results.",
    key_feature: 'Key features:',
    price: {
      monthly: "$19 USD",
      yearly: "$199 USD",
    },
    note: {
      monthly: "Seat per month, 2 seats max",
      yearly: "Seat per year, 2 seats max",
    },
    buttonText: "Start a free trial",
    buttonLink: "/sign-up",
    features: [
      "Real-time tracking and notifications",
      "Real-time analytics",
      "Drag and drop templates",
      "Project Management",
      "24/7 email and chat support",
    ],
  },
  {
    title: "Business",
    desc: "For seamless integrations and sending tools in bulk.",
    key_feature: 'Everything in Essentials, plus:',
    price: {
      monthly: "$49 USD",
      yearly: "$499 USD",
    },
    note: {
      monthly: "Seat cost per month",
      yearly: "Seat cost per year",
    },
    buttonText: "Start a free trial",
    buttonLink: "/sign-up",
    badge: "Popular",
    features: [
      "CRM and Zapier integrations",
      "Content reporting",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    image: {
      light: "/assets/images/template/money.svg",
      dark: "/assets/images/template/money-dark.svg",
    },
  },
  {
    title: "Enterprise",
    desc: "For large companies with complex Tool workflows.",
    key_feature: 'Everything in Essentials, plus:',
    price: {
      monthly: "Let’s talk",
      yearly: "Let’s talk",
    },
    note: {
      monthly: "Per‑seat or per‑tool pricing",
      yearly: "Per‑seat or per‑tool pricing",
    },
    buttonText: "Contact sales",
    buttonLink: "/page-contact",
    features: [
      "Unlimited files uploads",
      "Real-time tracking and notifications",
      "User performance",
      "SSO support and custom user roles",
      "Bulk send & Forms*",
    ],
  },
];



const togglePricing = (yearly) => {
  isYearly.value = yearly;
};


 


</script>




<template>


  <div id="hero_header" class="hero-header section panel overflow-hidden">
    <div class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
      data-anime="targets: &gt;*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
      <div class="position-absolute top-0 start-0 rotate-45"
        style="top: 30% !important; left: 18% !important; transform: scale(1); opacity: 1;">
        <img class="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1"
          data-uc-svg="" hidden=""><svg width="193" height="216" viewBox="0 0 193 216" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="w-32px text-gray-900 dark:text-white uc-svg">
          <g clip-path="url(#clip0_26_34468)">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M55.3 109.9C54.2 109.7 53.3 109.6 52.6 109.3C47.1 106.4 41.7 103.4 36.2 100.7C29.4667 97.4333 22.4333 95.1333 15.1 93.8C10.3 92.9 5.49999 91.9 0.899992 91C-0.200008 89.5 1.69999 88.3 0.699992 87C1.99999 86.1 3.19999 86.3 4.49999 86.5C6.69999 87 8.99999 87.5 11.2 88C15 88.8 18.8 89 22.6 88.7C28.9 88.2 35.2 87.7 41.5 86.9C46.1 86.3 50.6 85.2 54.8 83C56.8 82 58.9 81.4 60.9 80.4C62.3 79.6 63.6 78.6 65 77.8C70.6 74.7 75.8 71.1 80.4 66.5C86 61 90.3 54.4999 95 48.2999C100.3 41.1999 102.7 32.9 104.7 24.5C106.3 17.5 108.3 10.6 109 3.39995C109.1 2.49995 109.5 1.69995 109.8 0.799951C110.333 0.799951 110.867 0.766618 111.4 0.699951C111.5 0.999951 111.7 1.29995 111.7 1.49995C111.5 4.09995 111.2 6.69995 111.2 9.29995C111.2 14.9 111.3 20.5 111.3 26.1C111.3 32.5 111.4 38.9 111.4 45.4C111.3 51.5 112.4 57.3 114.8 62.9C115.3 64.1 115.7 65.4 115.9 66.7C116.5 70.5 118.3 73.7 120.9 76.5C123.1 78.8 125 81.2 127.2 83.5C129.9 86.5 133.3 88.6 136.8 90.4C139.8 91.9333 142.7 93.5666 145.5 95.3C149.3 97.6 153.5 98.9 157.8 100C161.7 100.9 165.7 101.8 169.6 102.9C173.7 104 177.8 104.3 181.9 104.7C185.2 105.1 188.5 105.5 192.3 105.9C191.7 106.5 191.4 107 191.2 107C183.4 107.2 175.5 107.3 167.8 107.7C163.5 108 159.3 108.6 155.2 109.4C150.3 110.3 145.4 111.4 140.7 112.7C135.5 114.1 130.4 115.9 125.4 117.7C120.5 119.4 116.5 122.5 112.5 125.9C109.2 128.9 107.6 133 105 136.4C101.4 141 99.7 146.6 98.2 152.2C95.7 161.7 93.2 171.3 91.1 180.9C89 190.7 87.4 200.6 86.7 210.6C86.6 211.8 86.1 212.9 85.7 214.1C85.5 214.4 85 214.7 84.7 214.9C83.8 214.2 83 213.5 82.3 212.8C81.3 212 81.1 210.9 81.2 209.7C81.4 202.8 81.8 195.9 82 189C82.1 183.9 82.4 178.7 82.1 173.6C81.7 167.5 80.9 161.4 79.9 155.4C79.3 151.7 78 148 76.9 144.4C75.6 139.8 73.4 135.6 71.7 131.3C70.7 128.7 68.9 126.5 68.1 123.9C67.9 123.5 67.4 123.3 67.1 123C66.8 122.7 66.4 122.5 66.2 122.2C64.7 118.2 60.9 116.2 58.6 112.8C58.4 112.5 57.8 112.4 57.4 112.2C56.4 111.6 55.2 111.2 55.3 109.9ZM63.9 80.5C64.8 80.8 65.6 80.9 65.8 79.3C65 79.8 64.5 80.1 63.9 80.5Z"
              fill="#100F12"></path>
          </g>
          <defs>
            <clipPath id="clip0_26_34468">
              <rect width="193" height="215" fill="white" transform="translate(0 0.5)"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="position-absolute top-0 end-0 rotate-45"
        style="top: 15% !important; right: 18% !important; transform: scale(0.999797); opacity: 0.999797;">
        <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" alt="star-2"
          data-uc-svg="" hidden=""><svg width="69" height="95" viewBox="0 0 69 95" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="w-24px text-gray-900 dark:text-white uc-svg">
          <g clip-path="url(#clip0_26_34474)">
            <path
              d="M5.19997 0.699951C7.69997 1.59995 8.99997 3.49995 10.5 5.29995C15.3 10.9 19.9 16.6 24.7 22.1C26.7 24.5 28.9 26.5999 31.1 28.7999C32.1 29.6999 32.9 30.6 33.2 31.9C33.7 34.1 35.4 35.3 36.9 36.5C39.5 36.1 41.9 35.4999 44.4 35.2999C50.8 34.5999 56.2 31.9 61.5 28.4C63.1 27.3333 64.7 26.2666 66.3 25.2C67.1 26.4 67.8 27.3 68.4 28.2C69.4 29.7 69.2 30.9 68 32.1C62.5 37.2 58 43 54.3 49.4C54 50 53.8 50.6 53.6 51.2C53 52.9 52.6 54.5 51.5 56C50.3 57.7 50.3 59.9999 50.6 62.0999C51.2 67.7999 54.2 72.5 57 77.3C59.1 80.9 61.2 84.6 63.3 88.3C64.2 90 64.6 91.7 63.7 93.7C60.7 90.7 57.7 87.8 54.8 84.8C51.9 81.8 49.2 78.6 46.2 75.7C44 73.5 41.6 71.6 39.3 69.5C38.7 68.9 37.9 68.4 37.4 67.7C36.3 66.2 35 65.4 33 66C31.9 66.3 30.7 66.3 29.5 66.3C25.4 66.3 21.9 68.1 18.3 69.6C13.2 71.8 8.19997 74.2 3.19997 76.5C1.49997 77.3 0.399972 76.7 0.299972 74.8C0.199972 73.5 0.699972 72.6 1.59997 71.8C4.29997 69.3 6.89997 66.7 9.59997 64.2C13.2 60.8 16 56.8999 18 52.2999C18.6 50.7999 19.8 49.4 20.3 47.9C22.3 42.7 21.8 37.4 20.5 32.2C20 30.3 19.4 28.3 18.7 26.4C17.9 23.8 16.9 21.2 16 18.5C14.8 14.9 12.4 12 10.4 8.89995C8.99997 6.49995 7.29997 4.29995 5.79997 1.99995C5.49997 1.59995 5.39997 1.09995 5.19997 0.699951Z"
              fill="#100F12"></path>
          </g>
          <defs>
            <clipPath id="clip0_26_34474">
              <rect width="69" height="94" fill="white" transform="translate(0 0.5)"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
      <div class="container max-w-xl">
        <div class="section-inner panel mt-2 sm:mt-4 lg:mt-0">
          <div  class="vstack items-center gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
            data-anime="targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h1 class="h2 sm:h1 lg:display-6 xl:display-5 m-0" style="transform: translateY(0px); opacity: 1;">Simple,
              scalable pricing.</h1> 
            <p class="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70"
              style="transform: translateY(0px); opacity: 1;">No extra charges. No hidden fees.</p>
            <ul class="uc-switcher-nav nav-x gap-0 p-narrow border rounded-2 fs-7 fw-medium"
              data-uc-switcher="connect: .pricing-switcher;" role="tablist"
              style="transform: translateY(0.0097341px); opacity: 0.999797;">
              <li :class="{ 'uc-active': !isYearly }" role="presentation">
                <a @click="togglePricing(false)" style="cursor: pointer" class="text-none w-128px cstack p-1"
                  aria-selected="true" role="tab" id="uc-switcher-23" aria-controls="uc-switcher-24">Monthly</a>
              </li>
              <li :class="{ 'uc-active': isYearly }" role="presentation">
                <a @click="togglePricing(true)" style="cursor: pointer" class="text-none w-128px cstack p-1"
                  aria-selected="false" tabindex="-1" role="tab" id="uc-switcher-25"
                  aria-controls="uc-switcher-26">Yearly</a>
              </li>
            </ul>
          </div>
          <div class="uc-switcher pricing-switcher mt-4" role="presentation" style="touch-action: pan-y pinch-zoom;">
            <div class="uc-active" id="uc-switcher-24" role="tabpanel" aria-labelledby="uc-switcher-23">
              <div class="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                data-anime="onview: -100; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">

                <div v-for="(item, i) in pricing_data" :key="i" style="transform: translateY(0px); opacity: 1;">
                  <div
                    class="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                    <span v-if="i == 1"
                      class="end-0 position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">Popular</span>
                    <div class="panel">
                      <h3 class="title h5 sm:h4 dark:text-white">{{ item.title }}</h3>
                      <p class="desc dark:text-whiteopacity-70 dark:opacity-80">{{ item.desc }}</p>
                    </div>
                    <div class="panel">
                      <div class="panel vstack gap-narrow">
                        <h5 class="title h3 sm:h2 m-0 dark:text-white"> {{ isYearly ? item.price.yearly :
                          item.price.monthly }}</h5>
                        <span class="fs-7 opacity-70">{{ isYearly ? item.note.yearly : item.note.monthly }}</span>
                        <div class="vstack gap-1 justify-center text-center mt-3">
                          <NuxtLink
                            :class="`btn btn-md sm:btn-sm lg:btn-md  text-white ${i === 2 ? 'btn-dark dark:bg-white dark:text-dark dark:hover:bg-secondary' : 'btn-primary'}`"
                            to="/sign-up">{{ item.buttonText }}</NuxtLink>
                          <span class="fs-7 opacity-70 min-h-24px">No credit card required</span>
                        </div>
                      </div>
                    </div>
                    <div class="panel">
                      <div class="panel vstack gap-2">
                        <span class="fs-6 fw-bold dark:text-white">{{ item.key_feature }}</span>

                        <div v-for="(feature, index) in item.features" :key="index" class="hstack gap-1 fs-7">
                          <i
                            class="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold"></i>
                          <span>{{ feature }}</span>
                        </div>

                      </div>
                    </div>

                    <div v-if="i == 1" class="end-0 position-absolute bottom-0 ltr:end-0 rtl:start-0 m-2 d-none md:d-block">
                      <img class="w-100px lg:w-128px d-block dark:d-none" src="/assets/images/template/money.svg"
                        alt="money">
                      <img class="w-100px lg:w-128px d-none dark:d-block" src="/assets/images/template/money-dark.svg"
                        alt="money-dark">
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>

          <p class="text-center text-gray-900 dark:text-white text-opacity-70 mt-4 sm:mt-6 xl:mt-8"
            data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 0;"
            style="transform: translateY(48px); opacity: 1;">Prices exclude any applicable taxes.</p>
        </div>
      </div>
    </div>
  </div>


</template>