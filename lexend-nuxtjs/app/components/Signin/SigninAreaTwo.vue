<template>
  <div class="section py-6 sm:py-9">
    <div class="container max-w-xl">
      <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
        <h1 class="h3 sm:h1 m-0">Sign in</h1>
        <div class="panel w-100 sm:w-350px">
          <form class="vstack gap-2">
            <input
              class="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
              type="email" placeholder="Your email" required>
            <input
              class="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
              type="password" placeholder="Password" required>
            <div class="hstack justify-between text-start">
              <div class="form-check text-start rtl:text-end">
                <input id="uc_form_remember_me"
                  class="form-check-input rounded-0 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                  type="checkbox">
                <label for="uc_form_remember_me" class="hstack justify-between form-check-label fs-6">Remember
                  me?</label>
              </div>
              <NuxtLink to="/reset-password-2" class="uc-link">Forgot password</NuxtLink>
            </div>
            <button class="btn btn-primary btn-md text-white mt-2" type="submit">Log in</button>
          </form>
        </div>
        <p>Have no account yet? <NuxtLink class="uc-link" to="/sign-up-2">Sign up</NuxtLink></p>
      </div>
    </div>
  </div>
</template>