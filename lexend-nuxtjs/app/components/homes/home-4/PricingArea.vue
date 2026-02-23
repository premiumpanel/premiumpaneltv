<template>
  <div id="pricing_tiers" class="pricing-tiers section panel overflow-hidden">
    <div
      class="section-outer panel py-4 md:py-6 xl:py-9 rounded-1-5 lg:rounded-2 bg-primary-600 dark:bg-primary text-white">
      <div class="container sm:max-w-lg xl:max-w-xl">
        <div class="section-inner panel">
          <div class="panel vstack gap-4 sm:gap-6 xl:gap-8">
            <div class="heading vstack gap-2 panel max-w-550px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
              <span class="fw-bold text-secondary">Pricing</span>
              <h2 class="title h3 lg:h2 xl:h1 text-white m-0">Simple, scalable pricing.</h2>
              <p class="fs-6 xl:fs-5 text-white text-opacity-70">No extra charges. No hidden fees.</p>
            </div>
            <div class="content panel">
              <div class="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});">
                <div>
                  <div
                    class="tier panel vstack justify-between rounded-1-5 lg:rounded-2 bg-secondary text-dark text-center">
                    <header class="tier-header vstack gap-2 items-center p-3 md:p-4 pb-0 md:pb-0 pt-4 md:pt-6">
                      <span class="icon-box cstack w-48px h-48px rounded-circle bg-white text-primary shadow-xs">
                        <i class="icon-1 unicon-sub-volume fw-bold"></i>
                      </span>
                      <h5 class="h5 lg:h4 m-0 text-primary">Basic plan</h5>
                      <div class="d-flex gap-narrow items-end mt-1">
                        <h3 class="h1 lg:display-6 price m-0 text-dark">$49</h3>
                        <span class="h6 lg:h3 m-0 pb-narrow text-dark">/ mo</span>
                      </div>
                      <p class="desc">Billed annually.</p>
                    </header>
                    <div class="tier-body p-3 md:p-4">
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
                    <footer class="tier-footer p-3 md:p-4 border-top">
                      <NuxtLink class="btn btn-md btn-primary text-white rounded-default w-100" to="/sign-up">
                        <span>Get started</span>
                      </NuxtLink>
                    </footer>
                  </div>
                </div>
                <div>
                  <div
                    class="tier panel vstack justify-between rounded-1-5 lg:rounded-2 bg-secondary text-dark text-center">
                    <span
                      class="fs-7 position-absolute top-0 end-0 fw-bold text-uppercase text-primary my-2 mx-3">Popular</span>
                    <header class="tier-header vstack gap-2 items-center p-3 md:p-4 pb-0 md:pb-0 pt-4 md:pt-6">
                      <span class="icon-box cstack w-48px h-48px rounded-circle bg-white text-primary shadow-xs">
                        <i class="icon-1 unicon-course fw-bold"></i>
                      </span>
                      <h5 class="h5 lg:h4 m-0 text-primary">Business plan</h5>
                      <div class="d-flex gap-narrow items-end mt-1">
                        <h3 class="h1 lg:display-6 price m-0 text-dark">$79</h3>
                        <span class="h6 lg:h3 m-0 pb-narrow text-dark">/ mo</span>
                      </div>
                      <p class="desc">Billed annually.</p>
                    </header>
                    <div class="tier-body p-3 md:p-4">
                      <ul class="nav-y gap-2 text-start">
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Access to all <b>Basic</b> features</span>
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
                    <footer class="tier-footer p-3 md:p-4 border-top">
                      <NuxtLink class="btn btn-md btn-primary text-white rounded-default w-100" to="/sign-up">
                        <span>Start a free trial</span>
                      </NuxtLink>
                    </footer>
                  </div>
                </div>
                <div>
                  <div
                    class="tier panel vstack justify-between rounded-1-5 lg:rounded-2 bg-secondary text-dark text-center">
                    <header class="tier-header vstack gap-2 items-center p-3 md:p-4 pb-0 md:pb-0 pt-4 md:pt-6">
                      <span class="icon-box cstack w-48px h-48px rounded-circle bg-white text-primary shadow-xs">
                        <i class="icon-1 unicon-building fw-bold"></i>
                      </span>
                      <h5 class="h5 lg:h4 m-0 text-primary">Enterprise plan</h5>
                      <div class="d-flex gap-narrow items-end mt-1">
                        <h3 class="h1 lg:display-6 price m-0 text-dark">$199</h3>
                        <span class="h6 lg:h3 m-0 pb-narrow text-dark">/ mo</span>
                      </div>
                      <p class="desc">Billed annually.</p>
                    </header>
                    <div class="tier-body p-3 md:p-4">
                      <ul class="nav-y gap-2 text-start">
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Access to all <b>Business</b> features</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Unlimited files uploads</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Real-time team collaboration</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">SSO support and custom user roles</span>
                        </li>
                        <li class="hstack items-start gap-1">
                          <i
                            class="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold"></i>
                          <span class="d-inline">Bulk send & Forms</span>
                        </li>
                      </ul>
                    </div>
                    <footer class="tier-footer p-3 md:p-4 border-top">
                      <NuxtLink class="btn btn-md btn-primary text-white rounded-default w-100" to="/sign-up">
                        <span>Book a demo</span>
                      </NuxtLink>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center text-white text-opacity-70"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
              Prices exclude any applicable taxes.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>