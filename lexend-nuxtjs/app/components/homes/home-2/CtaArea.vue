
<template>
   <div id="cta" class="cta section panel overflow-hidden">
            <div class="section-outer panel">
                <div class="d-none lg:d-block" data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
                    <div class="position-absolute top-0 start-0 rotate-45" style="top: 40% !important; left: 20% !important;">
                        <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1" data-uc-svg>
                    </div>
                    <div class="position-absolute bottom-0 ltr:end-0 rtl:start-0 rotate-45" style="bottom: 40% !important; right: 20% !important;">
                        <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" alt="star-2" data-uc-svg>
                    </div>
                </div>
                <div class="d-none lg:d-block" data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;">
                    <div class="position-absolute top-50 start-0 translate-middle-y ms-n6">
                        <img class="w-200px xl:w-250px d-block dark:d-none" src="/assets/images/template/talking.svg" alt="talking">
                        <img class="w-200px xl:w-250px d-none dark:d-block" src="/assets/images/template/talking-dark.svg" alt="talking-dark">
                    </div>
                    <div class="position-absolute top-50 end-0 translate-middle-y me-n6">
                        <img class="w-200px xl:w-250px d-block dark:d-none" src="/assets/images/template/chatting.svg" alt="chatting">
                        <img class="w-200px xl:w-250px d-none dark:d-block" src="/assets/images/template/chatting-dark.svg" alt="chatting-dark">
                    </div>
                </div>
                <div class="container max-w-xl">
                    <div class="section-inner panel rounded xl:rounded-2 py-4 sm:py-6 xl:py-9">
                        <div class="vstack items-center gap-2 max-w-400px lg:max-w-600px mx-auto text-center" data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                            <h2 class="h3 sm:h1 xl:display-6 m-0">Get started with <br> Lexend today</h2>
                            <p class="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">With native CRM integrations that streamline your entire Tool workflow.</p>
                            <form class="row child-cols g-1 w-100 lg:w-5/6 mt-1 lg:mt-2">
                                <div>
                                    <input class="form-control h-48px lg:h-56px bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white" type="text" placeholder="Your email address" required >
                                </div>
                                <div class="col-12 sm:col-auto">
                                    <NuxtLink to="/page-pricing" class="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white">Start free trial</NuxtLink>
                                </div>
                            </form>
                            <p class="fs-7 text-dark dark:text-white text-opacity-70">14-day trial, no credit card required.</p>
                        </div>
                    </div>
                    <hr class="w-100 m-0">
                </div>
            </div>
        </div>
</template>

 