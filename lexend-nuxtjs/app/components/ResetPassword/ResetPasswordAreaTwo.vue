<template>

  <div class="section py-6 sm:py-9">
    <div class="container max-w-xl">
      <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
        <h1 class="h3 sm:h1 m-0">Reset password</h1>
        <div class="panel w-100 sm:w-350px">
          <form class="vstack gap-2">
            <input
              class="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
              type="email" placeholder="Your email" required>
            <div class="form-check text-start rtl:text-end">
              <input id="uc_form_not_robot"
                class="form-check-input rounded-0 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                type="checkbox" required>
              <label for="uc_form_not_robot" class="form-check-label fs-6">
                <span>I'm not a robot</span>.
              </label>
            </div>
            <button class="btn btn-primary btn-md text-white mt-2" type="submit">Reset a password</button>
          </form>
        </div>
        <p class="mt-2 sm:m-0">Remember your password? <NuxtLink class="uc-link" to="/sign-in-2">Sign in</NuxtLink></p>
      </div>
    </div>
  </div>

</template>