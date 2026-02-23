
<script setup>
 
// Sticky header
const isSticky = ref(false)
let lastScrollTop = 0

const handleScroll = () => {
  const currentScroll = window.scrollY

  if (currentScroll === 0) {
    isSticky.value = false
  } else if (currentScroll < lastScrollTop) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


// Mobile Menu
const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}

  

</script>

<template>
  <header :class="`uc-header header-eight uc-navbar-sticky-wrap z-999 uc-dark uc-sticky ${isSticky ? 'uc-sticky-below uc-sticky-fixed headerFixed' : ''}`"
    data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
    <nav :class="`uc-navbar-container uc-navbar-float ft-tertiary z-1  ${isSticky ? 'uc-navbar-transparent' : 'uc-navbar-transparent'}`"
      data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      style="transform: translateY(0px); opacity: 1;">
      <div class="uc-navbar-main" style="--uc-nav-height: 80px">
        <div class="container">
          <div
            class="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white px-1 lg:px-2 bg-white dark:bg-tertiary-600 bg-opacity-90 rounded-2 mt-2 shadow-xs"
            data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
            <div class="uc-navbar-left">
              <div class="uc-logo ltr:ms-1 rtl:me-1">
                <NuxtLink class="panel text-none" to="/" style="width: 140px;">
                  <img class="dark:d-none" src="/assets/images/common/logo-8-light.svg" alt="Lexend">
                  <img class="d-none dark:d-block" src="/assets/images/common/logo-8-dark.svg" alt="Lexend">
                </NuxtLink>
              </div>
            </div>
            <div class="uc-navbar-center">
              <ul class="uc-navbar-nav fs-5 gap-3 lg:gap-4 d-none lg:d-flex">
                <li class="has-dd-menu">
                  <a href="#" role="button" aria-haspopup="true">Products <span data-uc-navbar-parent-icon=""
                      class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12" viewBox="0 0 12 12">
                        <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                      </svg></span></a> 
                  <div
                    class="uc-dropbar uc-navbar-dropdown uc-dropbar-top ft-primary text-unset fs-6 fw-normal hide-scrollbar p-0 rounded-2 overflow-hidden shadow-xl bg-white dark:bg-tertiary-600 dark:text-white uc-drop "
                    style="overflow-x: auto; top: 88px !important; left: -403.648px !important; width: 1288px; max-width: 1905px;"
                    data-uc-drop=" offset: 8; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;">
                    <div class="uc-dropbar-content p-3 lg:p-6">
                      <div class="container container-full">
                        <div class="row child-cols-4 gx-6">
                          <div class="vstack gap-3">
                            <h6 class="h6 m-0"><i class="fs-7 unicon-cube ltr:me-narrow rtl:ms-narrow"></i> Builder
                              Tools</h6>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-01.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow text-inherit">Email Template Builder</span>
                                  <p class="fs-7 opacity-60">Design personalized emails that convert</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-02.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">Landing Page Builder</span>
                                  <p class="fs-7 opacity-60">Deliver the right message to the right user</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-03.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">Reporting &amp; analytics</span>
                                  <p class="fs-7 opacity-60">Track sales &amp; campaign performance</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-07.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">Chatbots, Free forever</span>
                                  <p class="fs-7 opacity-60">Track sales &amp; campaign performance</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="border-bottom hover:border-primary duration-150">View all products</span>
                                <i class="fs-8 unicon-arrow-up-right"></i>
                              </NuxtLink>
                            </div>
                          </div>
                          <div class="vstack gap-3">
                            <h6 class="h6 m-0"><i class="fs-7 unicon-gamification ltr:me-narrow rtl:ms-narrow"></i> AI
                              Solutions</h6>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-04.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">AI-Powered Tools</span>
                                  <p class="fs-7 opacity-60">Say hello to your AI growth assistant</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-05.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">E-commerce and retail</span>
                                  <p class="fs-7 opacity-60">Amplify the conversation across channels</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-06.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">Large Community</span>
                                  <p class="fs-7 opacity-60">Our services offerings</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-08.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">AI-Powered Automation</span>
                                  <p class="fs-7 opacity-60">Our services offerings</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="border-bottom hover:border-primary duration-150">View all solutions</span>
                                <i class="fs-8 unicon-arrow-up-right"></i>
                              </NuxtLink>
                            </div>
                          </div>
                          <div class="vstack gap-3">
                            <h6 class="h6 m-0"><i class="fs-7 unicon-cube ltr:me-narrow rtl:ms-narrow"></i> More
                              Products</h6>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-01.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow text-inherit">Email Template Builder</span>
                                  <p class="fs-7 opacity-60">Design personalized emails that convert</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-02.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">Landing Page Builder</span>
                                  <p class="fs-7 opacity-60">Deliver the right message to the right user</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-03.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">Reporting &amp; analytics</span>
                                  <p class="fs-7 opacity-60">Track sales &amp; campaign performance</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="icon rounded dark:bg-white">
                                  <img class="w-32px" src="/assets/images/custom-icons/home-8-icon-07.svg" alt="icon">
                                </span>
                                <div class="panel">
                                  <span class="fs-7 mb-narrow">Chatbots, Free forever</span>
                                  <p class="fs-7 opacity-60">Track sales &amp; campaign performance</p>
                                </div>
                              </NuxtLink>
                            </div>
                            <div>
                              <NuxtLink class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
                                to="/page-features">
                                <span class="border-bottom hover:border-primary duration-150">View all products</span>
                                <i class="fs-8 unicon-arrow-up-right"></i>
                              </NuxtLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="uc-dropbar-footer p-2 xl:p-4 xl:px-6 bg-gray-25 dark:bg-opacity-10 dark:text-white">
                      <ul class="nav-x gap-4 fs-8">
                        <li>
                          <a href="#"><i class="fs-8 unicon-api"></i><span
                              class="border-bottom hover:border-primary duration-150">Explore Apps</span></a>
                        </li>
                        <li>
                          <a href="#"><i class="fs-8 unicon-airplay"></i><span
                              class="border-bottom hover:border-primary duration-150">AI Solutions</span></a>
                        </li>
                        <li>
                          <a href="#"><i class="fs-8 unicon-cloud-lightning"></i><span
                              class="border-bottom hover:border-primary duration-150">Join Lexend Early
                              Access</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="has-dd-menu">
                  <a href="#" role="button" aria-haspopup="true">Solutions <span data-uc-navbar-parent-icon=""
                      class="uc-icon uc-navbar-parent-icon"><svg width="12" height="12" viewBox="0 0 12 12">
                        <polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline>
                      </svg></span></a>
                  <div
                    class="uc-dropbar uc-navbar-dropdown uc-dropbar-top ft-primary text-unset fs-6 fw-normal hide-scrollbar p-0 rounded-2 overflow-hidden shadow-xl bg-white dark:bg-tertiary-600 dark:text-white uc-drop"
                    style="width: 1288px; overflow-x: auto; max-width: 1905px; top: 88px !important; left: -403.648px !important;"

                    data-uc-drop=" offset: 8; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;">
                    <div class="uc-dropbar-content">
                      <div class="container container-full">
                        <div class="uc-dropbar-inner p-2">
                          <div class="row col-match justify-between">
                            <div class="col-8">
                              <div class="panel vstack gap-4 p-4">
                                <div class="vstack gap-narrow flex-none">
                                  <h5 class="h5 xl:h4 m-0">Workflow quick-start automation guide</h5>
                                  <p class="fs-7 opacity-60">How Lexend can help you automate your work</p>
                                </div>
                                <div class="row child-cols-4 gx-4 col-match justify-between">
                                  <div>
                                    <h6 class="h6 mb-3"><i
                                        class="fs-7 unicon-glyph-square-fill ltr:me-narrow rtl:ms-narrow"></i>
                                      Automation</h6>
                                    <ul class="uc-nav uc-navbar-dropdown-nav vstack flex-auto gap-2">
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-checkmark text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">To-Do List</b>
                                            <span class="fs-7">Managing multiple software and tools for different
                                              tasks.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-chart-pie text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Reports</b>
                                            <span class="fs-7">The latest industry reports, updates and info.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-increase-level text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Spreadsheets</b>
                                            <span class="fs-7">Suite of tools that cover all aspects of your
                                              business.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 class="h6 mb-3"><i
                                        class="fs-7 unicon-glyph-circle-fill ltr:me-narrow rtl:ms-narrow"></i> Teaming
                                    </h6>
                                    <ul class="uc-nav uc-navbar-dropdown-nav vstack flex-auto gap-2">
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-chart-venn-diagram text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Collaboration</b>
                                            <span class="fs-7">Assign tasks, share files with your team.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-chat text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Chatbots</b>
                                            <span class="fs-7">Assign tasks, share files with your team.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-checkmark text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">To-Do List</b>
                                            <span class="fs-7">Managing multiple software and tools for different
                                              tasks.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 class="h6 mb-3"><i
                                        class="fs-7 unicon-glyph-caution ltr:me-narrow rtl:ms-narrow"></i> Use Case</h6>
                                    <ul class="uc-nav uc-navbar-dropdown-nav vstack flex-auto gap-2">
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-chart-pie text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Reports</b>
                                            <span class="fs-7">The latest industry reports, updates and info.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-increase-level text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Spreadsheets</b>
                                            <span class="fs-7">Suite of tools that cover all aspects of your
                                              business.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                      <li>
                                        <NuxtLink class="hstack items-start gap-2" to="/page-features">
                                          <div class="cstack min-w-32px h-32px rounded bg-primary"><i
                                              class="icon-1 unicon-chart-venn-diagram text-dark"></i></div>
                                          <span class="vstack gap-narrow mt-nnarrow">
                                            <b class="fw-medium dark:text-white">Collaboration</b>
                                            <span class="fs-7">Assign tasks, share files with your team.</span>
                                          </span>
                                        </NuxtLink>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="panel vstack gap-4 p-4 bg-gray-25 dark:bg-opacity-10 rounded-default">
                                <div class="panel category-section">
                                  <h5 class="h6">Get started is Easy!</h5>
                                  <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                    <li>
                                      <NuxtLink to="/page-contact">Hire an Expert</NuxtLink>
                                    </li>
                                    <li>
                                      <a href="#">Customer stories</a>
                                    </li>
                                    <li>
                                      <a href="#">Resources</a>
                                    </li>
                                    <li>
                                      <NuxtLink to="/blog-sidebar">Blog</NuxtLink>
                                    </li>
                                    <li>
                                      <NuxtLink to="/page-career">Career</NuxtLink>
                                    </li>
                                    <li>
                                      <NuxtLink to="/page-contact">Help Center</NuxtLink>
                                    </li>
                                  </ul>
                                </div>
                                <div class="panel category-section">
                                  <h5 class="h6">Terms and privacy</h5>
                                  <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                    <li>
                                      <NuxtLink to="/page-terms">Terms of service</NuxtLink>
                                    </li>
                                    <li>
                                      <NuxtLink to="/page-privacy">Privacy Policy</NuxtLink>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <NuxtLink to="/blog-sidebar">Insights</NuxtLink>
                </li>
                <li><NuxtLink to="/page-pricing-2">Pricing</NuxtLink></li>
                <!-- <li><NuxtLink to="/components">About</NuxtLink></li> -->
                <li><NuxtLink to="/page-about">About</NuxtLink></li>
              </ul>
            </div>
            <div class="uc-navbar-right">
              <NuxtLink class="uc-link fs-5 text-dark dark:text-white" to="/sign-in">Log in</NuxtLink>
              <NuxtLink class="btn btn-md btn-tertiary dark:bg-white dark:text-dark border fs-5 lg:px-3 d-none lg:d-inline-flex shadow-xs"
                to="/sign-up">Sign up</NuxtLink>
              <a class="btn btn-md btn-tertiary w-48px h-48px d-inline-flex lg:d-none" @click="toggleMenu" style="cursor: pointer;"
                data-uc-toggle="" role="button">
                <i class="icon icon-2 unicon-menu"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <CommonOffcanvus :toggleMenu="toggleMenu" :openMenu="openMenu" />


</template>