<template>
  <div class="section py-4 lg:py-6 xl:py-8">
    <div class="container max-w-xl">
      <div class="panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header class="shop-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div class="panel">
            <h1 class="h3 lg:h1 m-0">Checkout — v2</h1>
          </div>
        </header>
        <div>
          <div class="row gy-4 gx-4 xl:gx-8">
            <div class="col">
              <div class="panel vstack gap-4" data-uc-sticky="bottom: true; offset: 32;">
                <h3 class="h5 lg:h4 m-0">Billing details:</h3>
                <form class="panel vstack gap-2 lg:gap-3" action="?">
                  <div class="row g-2 child-cols-12 lg:child-cols-6">
                    <div class="form-group">
                      <label class="form-label ft-tertiary" for="checkout_firstname">Firstname <sup
                          class="text-danger">*</sup></label>
                      <input type="text" id="checkout_firstname"
                        class="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="John" required>
                    </div>
                    <div class="form-group">
                      <label class="form-label ft-tertiary" for="checkout_lastname">Lastname <sup
                          class="text-danger">*</sup></label>
                      <input type="text" id="checkout_lastname"
                        class="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="Doe" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label ft-tertiary" for="checkout_email">Email <sup
                        class="text-danger">*</sup></label>
                    <input type="email" id="checkout_email"
                      class="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      placeholder="contact@johndeo.co" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label ft-tertiary" for="checkout_country">Country <sup
                        class="text-danger">*</sup></label>
                    <select
                      class="form-select form-control-lg rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      id="checkout_country" aria-label="checkout_country" required>
                      <option value="" selected>Morocco</option>
                      <option value="australia">Australia</option>
                      <option value="usa">USA</option>
                      <option value="kingdom">United Kingdom</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label ft-tertiary" for="checkout_street_address">Street address <sup
                        class="text-danger">*</sup></label>
                    <input type="text" id="checkout_street_address"
                      class="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      placeholder="House number and street name" required>
                    <input type="text" id="checkout_street_address_2"
                      class="form-control mt-1 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      placeholder="Apartment, suite, unit, etc.">
                  </div>
                  <div class="row g-2 child-cols-12 lg:child-cols-4">
                    <div class="form-group">
                      <label class="form-label ft-tertiary" for="checkout_town_city">Town / City <sup
                          class="text-danger">*</sup></label>
                      <input type="text" id="checkout_town_city"
                        class="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="Salé" required>
                    </div>
                    <div class="form-group">
                      <label class="form-label ft-tertiary" for="checkout_state_county">State / County <sup
                          class="text-danger">*</sup></label>
                      <input type="text" id="checkout_state_county"
                        class="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="Rabat / Salé / Zemmour-Zair" required>
                    </div>
                    <div class="form-group">
                      <label class="form-label ft-tertiary" for="checkout_postcode_zip">Postcode / ZIP <sup
                          class="text-danger">*</sup></label>
                      <input type="text" id="checkout_postcode_zip"
                        class="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="11000" required>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-12 lg:col-5">
              <div class="panel vstack gap-4" data-uc-sticky="bottom: true; offset: 32;">
                <div class="panel vstack gap-4">
                  <h3 class="h5 lg:h4 m-0">Your order:</h3>
                  <form class="panel max-h-sm overflow-auto border border-gray-50 dark:text-white dark:border-gray-700"
                    action="?">
                    <table class="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                      <thead class="sticky-top ft-tertiary bg-gray-800 text-white z-1">
                        <tr>
                          <th class="lg:w-1/2">Product</th>
                          <th class="lg:w-1/2">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h5 class="title h6 m-0">
                              <NuxtLink to="/shop-product-detail" class="text-none">Laptop
                                Cover</NuxtLink> x 1
                            </h5>
                          </td>
                          <td>
                            <span class="subtotal">$24.00</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 class="title h6 m-0">
                              <NuxtLink to="/shop-product-detail" class="text-none">Disney
                                Toys</NuxtLink> x 1
                            </h5>
                          </td>
                          <td>
                            <span class="subtotal">$5.00</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 class="title h6 m-0">
                              <NuxtLink to="/shop-product-detail" class="text-none">Screen Axe</NuxtLink>
                              x 1
                            </h5>
                          </td>
                          <td>
                            <span class="subtotal">$19.00</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 class="title h6 m-0">
                              <NuxtLink to="/shop-product-detail" class="text-none">Airpods
                                Pro</NuxtLink> x 1
                            </h5>
                          </td>
                          <td>
                            <span class="subtotal">$49.00</span>
                          </td>
                        </tr>
                        <tr class="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                          <td><span class="fw-bold">Subtotal</span></td>
                          <td>
                            <span class="checkout-subtotal">$97.00</span>
                          </td>
                        </tr>
                        <tr class="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                          <td><span class="fw-bold">Shipping</span></td>
                          <td>
                            <span class="checkout-shipping">Flat rate: $23.00</span>
                          </td>
                        </tr>
                        <tr class="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                          <td><span class="fw-bold">Total</span></td>
                          <td>
                            <span class="checkout-total fw-bold">$120.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div class="panel vstack gap-4">
                  <h3 class="h5 lg:h4 m-0">Select payment method:</h3>
                  <div
                    class="panel vstack gap-2 lg:gap-4 p-2 lg:p-4 bg-gray-50 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800 rounded">
                    <div class="vstack gap-1 lg:gap-2 fs-6">
                      <div class="w-100">
                        <div
                          class="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                          <div class="form-check">
                            <input
                              class="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600"
                              type="radio" name="payment_method" id="payment_method_bacs" checked>
                            <label class="form-check-label fw-bold" for="payment_method_bacs">Direct bank
                              transfer</label>
                          </div>
                        </div>
                      </div>
                      <div class="w-100">
                        <div
                          class="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                          <div class="form-check">
                            <input
                              class="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600"
                              type="radio" name="payment_method" id="payment_method_cod">
                            <label class="form-check-label fw-bold" for="payment_method_cod">Cash on delivery</label>
                          </div>
                        </div>
                      </div>
                      <div class="w-100">
                        <div
                          class="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                          <div class="form-check">
                            <input
                              class="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600"
                              type="radio" name="payment_method" id="payment_method_paypal">
                            <label class="form-check-label fw-bold" for="payment_method_paypal">PayPal</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-dark dark:text-white text-opacity-60">Your personal data will be used to process your
                      order, support your experience throughout this website, and for other purposes described in our
                      privacy policy.</p>
                    <NuxtLink to="/shop-order" class="btn btn-md xl:btn-lg btn-primary text-white">Place order
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>