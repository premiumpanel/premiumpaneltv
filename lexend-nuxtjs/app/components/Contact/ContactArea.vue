<template>
  <div id="hero_header" class="hero-header section panel overflow-hidden">
    <div class="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
      data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
      <div class="position-absolute top-0 start-0 rotate-45" style="top: 30% !important; left: 18% !important;">
        <img class="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" alt="star-1"
          data-uc-svg>
      </div>
      <div class="position-absolute top-0 end-0 rotate-45" style="top: 15% !important; right: 18% !important;">
        <img class="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" alt="star-2"
          data-uc-svg>
      </div>
    </div>
    <div class="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
      <div class="container max-w-xl">
        <div class="section-inner panel mt-2 sm:mt-4 lg:mt-0"
          data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div class="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
            <h1 class="h2 sm:h1 lg:display-6 xl:display-5 m-0">Let's get in touch.</h1>
            <p class="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">Feel free to reach out to us using the
              options below, and our dedicated team will respond to your inquiries promptly.</p>
          </div>
          <div class="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
            <div class="panel row child-cols-12 lg:child-cols-6 g-0">
              <div class="order-1 lg:order-0">
                <div class="panel overflow-hidden rounded-3 h-100 min-h-350px">
                  <figure class="panel h-100 m-0 rounded ">
                    <canvas class="h-100 w-100"></canvas>
                    <img class="media-cover image" src="/assets/images/template/hero-contact.jpg" alt="Hero image" fetchpriority="high">
                  </figure>
                  <div class="position-cover text-white vstack justify-end p-4 lg:p-6 xl:p-9">
                    <div class="position-cover bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <div class="panel z-1">
                      <div class="vstack gap-3">
                        <p class="fs-5 xl:fs-4 fw-medium">“This software simplifies the website building process, making
                          it a breeze to manage our online presence.”</p>
                        <div class="vstack gap-0">
                          <p class="fs-6 lg:fs-5 fw-medium">David Larry</p>
                          <span class="fs-7 opacity-80">Founder & CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-0 lg:order-1">
                <form class="vstack gap-2 p-3 sm:p-6 xl:p-8">
                  <p class="fs-6 text-dark dark:text-white text-opacity-70 mb-2">Have a question or feedback? Fill out
                    the form below, and we'll get back to you as soon as possible.</p>
                  <div class="row child-cols-12 sm:child-cols-6 g-2">
                    <div>
                      <input
                        class="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="text" placeholder="Full name" required>
                    </div>
                    <div>
                      <input
                        class="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="email" placeholder="Your email" required>
                    </div>
                  </div>
                  <input
                    class="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                    type="text" placeholder="Subject">
                  <textarea
                    class="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                    placeholder="Your message.." required></textarea>
                  <button class="btn btn-primary btn-md text-white mt-2" type="submit">Send message</button>
                  <p class="text-center">Or drop us a message via <a class="uc-link"
                      href="mailto:hello@lexend.co">email</a>.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>