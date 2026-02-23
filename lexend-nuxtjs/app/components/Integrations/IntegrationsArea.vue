
<template>
   <div id="hero_header" class="hero-header section panel overflow-hidden">
            <div class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block" data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
                <div class="position-absolute top-0 start-0 rotate-45" style="top: 30% !important; left: 18% !important;">
                    <img class="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1" data-uc-svg>
                </div>
                <div class="position-absolute top-0 end-0 rotate-45" style="top: 15% !important; right: 18% !important;">
                    <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" alt="star-2" data-uc-svg>
                </div>
            </div>
            <div class="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
                <div class="container max-w-lg">
                    <div class="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                        <div class="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center" data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                            <h1 class="h2 sm:h1 lg:display-6 xl:display-5 m-0">Integrations</h1>
                            <p class="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">Boost your efficiency with integrations that will simplify your workflow.</p>
                        </div>
                        <div class="panel">
                            <div class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between" data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">Slack</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">Productivity</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-slack.svg" alt="Slack">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Notify your teammates of the latest activities with instant Slack messages.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">Salesforce</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">CRM </span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-salesforce.svg" alt="Salesforce">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Leave a lasting impression all done inside Salesforce CPQ platform.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">Stripe</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">Payment</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-stripe.svg" alt="Stripe">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Collect credit card and ACH payments within your sales documents.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">PayPal</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">Payment</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-paypal.svg" alt="PayPal">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Provide a world-class checkout experience for your customers.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">HubSpot</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">CRM</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-hubspot.svg" alt="HubSpot">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Expand the ROI from your CRM and unlock easy generation and capabilities.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">Zapier</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">Integration platforms</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-zapier.svg" alt="Zapier">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Create custom, automated workflows using your favorite Zaps.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">Slack</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">Productivity</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-slack.svg" alt="Slack">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Notify your teammates of the latest activities with instant Slack messages.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">Salesforce</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">CRM </span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-salesforce.svg" alt="Salesforce">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Leave a lasting impression all done inside Salesforce CPQ platform.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">Stripe</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">Payment</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-stripe.svg" alt="Stripe">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Collect credit card and ACH payments within your sales documents.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">PayPal</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">Payment</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-paypal.svg" alt="PayPal">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Provide a world-class checkout experience for your customers.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">HubSpot</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">CRM</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-hubspot.svg" alt="HubSpot">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Expand the ROI from your CRM and unlock easy generation and capabilities.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <div class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                                        <div class="vstack gap-3">
                                            <div class="hstack justify-between items-center">
                                                <div class="vstack">
                                                    <h5 class="h5 m-0">Zapier</h5>
                                                    <span class="fs-7 opacity-70 dark:opacity-80">Integration platforms</span>
                                                </div>
                                                <img class="w-32px lg:w-40px" src="/assets/images/template/tool-zapier.svg" alt="Zapier">
                                            </div>
                                            <p class="fs-6 opacity-70 dark:opacity-80">Create custom, automated workflows using your favorite Zaps.</p>
                                        </div>
                                        <NuxtLink to="/page-integrations" class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                                            <span>Explore</span>
                                            <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

 