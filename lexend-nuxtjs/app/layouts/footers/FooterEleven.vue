


<template>
   <footer id="uc-footer" class="uc-footer panel overflow-hidden ft-tertiary ">
        <div class="footer-outer py-6 lg:py-8 xl:py-9 dark:text-white">
            <div class="uc-footer-content">
                <div class="container">
                    <div class="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
                        <div class="uc-footer-widgets panel">
                            <div class="row child-cols-6 sm:child-cols col-match g-4">
                                <div class="col-12 sm:col-6 lg:col-3 xl:col-auto">
                                    <div class="panel vstack items-start gap-3 xl:gap-4 xl:w-350px">
                                        <NuxtLink to="/" style="width: 140px">
                                            <img class="text-primary dark:text-white image-filter" src="/assets/images/common/logo-12-light.svg" alt="Lexend" data-uc-svg>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div>
                                    <ul class="nav-y gap-2 fs-6 xl:fs-5">
                                        <li><NuxtLink to="/page-integrations">Products</NuxtLink></li>
                                        <li><NuxtLink to="/page-features">Features</NuxtLink></li>
                                        <li><NuxtLink to="/page-pricing-2">Pricing</NuxtLink></li>
                                        <li><NuxtLink to="/page-about">About</NuxtLink></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="nav-y gap-2 fs-6 xl:fs-5">
                                        <li><aNuxtLink to="/blog-sidebar">Blog</aNuxtLink></li>
                                        <li><aNuxtLink to="/blog">Ressources</aNuxtLink></li>
                                        <li><aNuxtLink to="/page-contact">Support</aNuxtLink></li>
                                        <li><aNuxtLink to="/sign-in">Client Portal</aNuxtLink></li>
                                    </ul>
                                </div>
                                <div class="col-12 lg:col-5">
                                    <div class="panel">
                                        <p class="fs-6 xl:fs-5 mb-2 dark:text-white">Stay up to date</p>
                                        <form class="p-narrow xl:p-1 border rounded-2 sm:rounded-pill">
                                            <div class="row child-cols g-1">
                                                <div>
                                                    <div class="form-group inline-block">
                                                        <input type="email" class="form-control h-40px h-48px w-full xl:ps-3 border-0 rounded-pill shadow-none text-black dark:text-white bg-white dark:bg-gray-900" placeholder="Enter your email" required >
                                                    </div>
                                                </div>
                                                <div class="col-12 sm:col-auto">
                                                    <button class="btn btn-md btn-primary border-0 rounded-1-5 sm:rounded-pill w-full px-4 text-white">Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="uc-footer-bottom panel vstack sm:hstack gap-2 justify-between items-center text-center pt-4 border-top text-gray-400 dark:text-gray-200">
                            <p>Lexend © {{ new Date().getFullYear() }}, All rights reserved.</p>
                            <ul class="nav-x gap-1">
                                <li><NuxtLink to="/page-privacy">Privacy policy</NuxtLink></li>
                                <li class="mx-2 lg:mx-3"><NuxtLink to="/page-terms">Terms of use</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
 