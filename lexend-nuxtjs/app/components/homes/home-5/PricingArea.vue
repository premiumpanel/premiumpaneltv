<template>
  <div id="pricing_tiers" class="pricing-tiers section panel overflow-hidden">
    <div class="section-outer panel pt-4 md:pt-6 xl:pt-9">
      <div class="container sm:max-w-lg">
        <div class="section-inner panel">
          <div class="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
            <div class="heading vstack gap-2 panel max-w-550px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
              <span class="fw-bold text-primary dark:text-secondary">Pricing</span>
              <h2 class="title h3 lg:h2 xl:h1 m-0">Simple, scalable pricing.</h2>
              <p class="fs-6 xl:fs-5">No extra charges. No hidden fees.</p>
            </div>
            <div class="content panel w-100">
              <div class="row child-cols-12 sm:child-cols-6 col-match justify-center g-2"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});">
                <div>
                  <div
                    class="tier panel vstack justify-between p-3 md:p-4 lg:p-6 xl:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 text-dark dark:text-white text-center">
                    <header class="tier-header vstack gap-2 items-center">
                      <h5 class="h5 lg:h4 m-0 text-primary dark:text-white">Starter</h5>
                      <div class="d-flex gap-narrow items-end mt-1">
                        <h3 class="h1 lg:display-6 price m-0 text-dark dark:text-white">$49</h3>
                        <span class="h6 lg:h3 m-0 pb-narrow text-dark dark:text-white">/ mo</span>
                      </div>
                      <p class="desc lg:fs-5">For creating impressive tools that generate results.</p>
                      <NuxtLink class="btn btn-md lg:btn-lg btn-primary text-white rounded-default w-100 mt-2"
                        to="/sign-up">
                        <span>Get started</span>
                      </NuxtLink>
                      <p class="details">Billed annually.</p>
                    </header>
                    <hr class="my-2 md:my-3 lg:my-4">
                    <div class="tier-body">
                      <ul class="nav-y gap-2 text-start">
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Up to 10 individual users</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Basic reporting and analytics</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Project Management</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">20GB individual data each user</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Basic chat and email support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="tier panel vstack justify-between p-3 md:p-4 lg:p-6 xl:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 text-dark dark:text-white text-center">
                    <span
                      class="fs-7 position-absolute top-0 end-0 fw-bold text-uppercase text-primary dark:text-white my-2 mx-3">Popular</span>
                    <header class="tier-header vstack gap-2 items-center">
                      <h5 class="h5 lg:h4 m-0 text-primary dark:text-white">Pro</h5>
                      <div class="d-flex gap-narrow items-end mt-1">
                        <h3 class="h1 lg:display-6 price m-0 text-dark dark:text-white">$79</h3>
                        <span class="h6 lg:h3 m-0 pb-narrow text-dark dark:text-white">/ mo</span>
                      </div>
                      <p class="desc lg:fs-5">For seamless integrations and sending tools in bulk.</p>
                      <NuxtLink class="btn btn-md lg:btn-lg btn-primary text-white rounded-default w-100 mt-2"
                        to="/sign-up">
                        <span>Start a free trial</span>
                      </NuxtLink>
                      <p class="details">Billed annually.</p>
                    </header>
                    <hr class="my-2 md:my-3 lg:my-4">
                    <div class="tier-body">
                      <ul class="nav-y gap-2 text-start">
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Access to all <b>Starter</b> features</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">200+ integrations</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Unlimited team workspaces</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Approval workflows</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Salesforce integration*</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer panel text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;">
              <NuxtLink to="/page-pricing"
                class="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs mt-1">
                <span>Compare plans</span>
              </NuxtLink>
              <p class="mt-2">Prices exclude any applicable taxes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>