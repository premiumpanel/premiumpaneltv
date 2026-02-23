<template>
  <div id="blog_newsletter" class="blog-newsletter section panel overflow-hidden">
    <div class="section-outer panel pb-4 lg:pb-6 xl:pb-9">
      <div class="container max-w-xl">
        <div class="section-inner panel p-3 py-6 lg:p-6 xl:p-8 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
          <div class="row child-cols-12 md:child-cols g-6 justify-between items-center" data-uc-grid>
            <div>
              <div class="vstack gap-2 max-w-500px xl:max-w-600px">
                <h2 class="h4 md:h3 lg:h2 m-0">Get the latest updates</h2>
                <p class="fs-6 lg:fs-5">Subscribe to get our most-popular proposal eBook and more top revenue content to
                  help you send docs faster.</p>
                <form class="row child-cols g-1 mt-1 xl:mt-2">
                  <div>
                    <input
                      class="form-control h-48px xl:h-56px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      type="text" placeholder="Your email address" required>
                  </div>
                  <div class="col-12 sm:col-auto">
                    <button
                      class="btn btn-md h-48px xl:h-56px w-100 lg:min-w-150px xl:min-w-200px btn-primary text-white">Subscribe</button>
                  </div>
                </form>
                <p class="fs-7 text-dark dark:text-white text-opacity-70">Don't worry we don't spam.</p>
              </div>
            </div>
            <div class="md:col-auto d-none md:d-block">
              <img class="w-250px lg:w-300px xl:w-400px d-block dark:d-none"
                src="/assets/images/template/newsletter.svg" alt="newsletter">
              <img class="w-250px lg:w-300px xl:w-400px d-none dark:d-block"
                src="/assets/images/template/newsletter-dark.svg" alt="newsletter-dark">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>