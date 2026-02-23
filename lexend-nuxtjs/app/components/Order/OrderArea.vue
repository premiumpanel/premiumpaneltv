<template>
  <div class="section py-4 lg:py-6 xl:py-8">
    <div class="container max-w-lg">
      <div class="panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header class="shop-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div class="panel">
            <h1 class="h3 lg:h1">Thank you for your order!</h1>
            <p class="fs-6 sm:fs-5 opacity-60">Your order has been placed successfully.</p>
          </div>
        </header>
        <div>
          <div class="panel vstack gap-8">
            <div class="panel vstack gap-4">
              <form class="panel max-h-sm overflow-auto border border-gray-50 dark:text-white dark:border-gray-700"
                action="?">
                <table class="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                  <thead class="sticky-top ft-tertiary bg-gray-800 text-white z-1">
                    <tr>
                      <th class="lg:w-1/3">Product</th>
                      <th class="lg:w-1/6">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h5 class="title h6 m-0">
                          <NuxtLink to="/shop-product-detail" class="text-none">Laptop Cover</NuxtLink> x 1
                        </h5>
                      </td>
                      <td>
                        <span class="subtotal">$24.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 class="title h6 m-0">
                          <NuxtLink to="/shop-product-detail" class="text-none">Disney Toys</NuxtLink> x 1
                        </h5>
                      </td>
                      <td>
                        <span class="subtotal">$5.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 class="title h6 m-0">
                          <NuxtLink to="/shop-product-detail" class="text-none">Screen Axe</NuxtLink> x 1
                        </h5>
                      </td>
                      <td>
                        <span class="subtotal">$19.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 class="title h6 m-0">
                          <NuxtLink to="/shop-product-detail" class="text-none">Airpods Pro</NuxtLink> x 1
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
              <div class="vstack gap-2">
                <p class="text-center">Paid via <span class="bg-warning-100 text-dark px-narrow">Credit Card
                    (450XXXXXX230)</span> at <span class="bg-warning-100 text-dark px-narrow">24 December, 2025</span> —
                  <a href="#" class="text-primary">Download invoice</a></p>
                <hr>
                <p class="text-center opacity-60">Your order has been shipped to your shipping address via DHL. <br>
                  Estimated arrival time is 15 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>