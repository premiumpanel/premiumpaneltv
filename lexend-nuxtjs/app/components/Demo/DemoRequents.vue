<template>
  <div class="section py-6 sm:py-9">
    <div class="container max-w-xl">
      <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
        <h1 class="h3 sm:h1">Schedule your <br class="d-none lg:d-block"> 15-minute demo now</h1>
        <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center max-w-600px mx-auto">
          <form class="vstack gap-2">
            <div class="vstack lg:hstack gap-2">
              <input
                class="form-control h-48px w-100 md:w-1/2 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                type="text" placeholder="Full name*" required>
              <input
                class="form-control h-48px w-100 md:w-1/2 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                type="text" placeholder="Last name*" required>
            </div>
            <div class="vstack lg:hstack gap-2">
              <input
                class="form-control h-48px w-100 md:w-1/2 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                type="email" placeholder="Your email*" required>
              <input
                class="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                type="tel" placeholder="Phone number*" required>
            </div>
            <input
              class="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
              type="text" placeholder="Company name*" required>
            <textarea
              class="form-control min-h-150px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
              placeholder="Your message.."></textarea>
            <button class="btn btn-primary btn-md text-white mt-2" type="submit">Schedule my demo</button>
            <p class="fs-7 opacity-70 mt-2 text-center">We’ll tailor your demo to your immediate needs and answer all
              your questions. Get ready to see how it works!</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>