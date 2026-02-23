<template>
  <div class="section py-4 lg:py-6 xl:py-8">
    <div class="container max-w-lg">
      <div class="panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header class="shop-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div class="panel">
            <h1 class="h3 lg:h1 m-0">Cart</h1>
          </div>
        </header>
        <div class="panel cart-details">
          <form class="panel max-h-sm overflow-auto border border-gray-50 dark:border-gray-700" action="?">
            <table class="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
              <thead class="bg-gray-800 text-white sticky-top ft-tertiary bg-gray-50 dark:bg-gray-800 z-1">
                <tr>
                  <th class="w-100px"></th>
                  <th class="w-100px"></th>
                  <th class="w-1/3">Product</th>
                  <th class="w-1/6">Price</th>
                  <th class="w-1/6">QTY</th>
                  <th class="w-1/6">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#remove_from_cart" class="remove text-none"><i class="icon icon-1 unicon-close"></i></a>
                  </td>
                  <td>
                    <div class="image panel w-48px lg:w-72px">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-07.jpg" alt="Laptop Cover">
                        <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Laptop Cover"></NuxtLink>
                      </figure>
                    </div>
                  </td>
                  <td>
                    <h5 class="title h6 m-0"><NuxtLink to="/shop-product-detail" class="text-none">Laptop Cover</NuxtLink></h5>
                  </td>
                  <td>
                    <span class="price">$24.00</span>
                  </td>
                  <td>
                    <input type="number"
                      class="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      step="1" min="1" max="99" name="quantity" value="1" title="Qty" autocomplete="off">
                  </td>
                  <td>
                    <span class="subtotal">$24.00</span>
                  </td>
                </tr>
                <tr>
                  <td><a href="#remove_from_cart" class="remove text-none"><i class="icon icon-1 unicon-close"></i></a>
                  </td>
                  <td>
                    <div class="image panel w-48px lg:w-72px">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-08.jpg" alt="Disney Toys">
                        <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Disney Toys"></NuxtLink>
                      </figure>
                    </div>
                  </td>
                  <td>
                    <h5 class="title h6 m-0"><NuxtLink to="/shop-product-detail" class="text-none">Disney Toys</NuxtLink></h5>
                  </td>
                  <td>
                    <span class="price">$5.00</span>
                  </td>
                  <td>
                    <input type="number"
                      class="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      step="1" min="1" max="99" name="quantity" value="1" title="Qty" autocomplete="off">
                  </td>
                  <td>
                    <span class="subtotal">$5.00</span>
                  </td>
                </tr>
                <tr>
                  <td><a href="#remove_from_cart" class="remove text-none"><i class="icon icon-1 unicon-close"></i></a>
                  </td>
                  <td>
                    <div class="image panel w-48px lg:w-72px">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-09.jpg" alt="Screen Axe">
                        <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Screen Axe"></NuxtLink>
                      </figure>
                    </div>
                  </td>
                  <td>
                    <h5 class="title h6 m-0"><NuxtLink to="/shop-product-detail" class="text-none">Screen Axe</NuxtLink></h5>
                  </td>
                  <td>
                    <span class="price">$19.00</span>
                  </td>
                  <td>
                    <input type="number"
                      class="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      step="1" min="1" max="99" name="quantity" value="1" title="Qty" autocomplete="off">
                  </td>
                  <td>
                    <span class="subtotal">$19.00</span>
                  </td>
                </tr>
                <tr>
                  <td><a href="#remove_from_cart" class="remove text-none"><i class="icon icon-1 unicon-close"></i></a>
                  </td>
                  <td>
                    <div class="image panel w-48px lg:w-72px">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-10.jpg" alt="Airpods Pro">
                        <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Airpods Pro"></NuxtLink>
                      </figure>
                    </div>
                  </td>
                  <td>
                    <h5 class="title h6 m-0"><NuxtLink to="/shop-product-detail" class="text-none">Airpods Pro</NuxtLink></h5>
                  </td>
                  <td>
                    <span class="price">$49.00</span>
                  </td>
                  <td>
                    <input type="number"
                      class="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      step="1" min="1" max="99" name="quantity" value="1" title="Qty" autocomplete="off">
                  </td>
                  <td>
                    <span class="subtotal">$49.00</span>
                  </td>
                </tr>
              </tbody>
              <tfoot class="sticky-bottom ft-tertiary bg-gray-50 text-dark dark:bg-gray-800 dark:text-white z-1">
                <tr>
                  <td colspan="5">
                    <div class="coupon hstack gap-narrow lg:gap-1 max-w-250px lg:max-w-350px">
                      <input type="text" name="coupon_code"
                        class="form-control form-control-xs sm:form-control-sm lg:form-control-md dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-500"
                        id="coupon_code" value="" placeholder="Coupon code">
                      <button type="submit" class="btn btn-xs sm:btn-sm lg:btn-md btn-primary text-nowrap"
                        name="apply_coupon" value="Apply coupon">Apply coupon</button>
                    </div>
                  </td>
                  <td colspan="1">
                    <button type="submit"
                      class="btn btn-xs sm:btn-sm lg:btn-md btn-alt-dark text-nowrap w-100 dark:hover:bg-gray-500"
                      name="update_cart" value="Update cart">Update cart</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>
          <div class="panel mt-4 md:mt-6 lg:mt-8">
            <div class="row child-cols-12 lg:child-cols-6 gy-6 gx-4 xl:gx-8">
              <div class="lg:order-1">
                <div class="panel vstack gap-1 lg:gap-2">
                  <h5 class="h5 sm:h4 mx-0">Cart totals</h5>
                  <div class="max-h-sm overflow-auto border border-gray-50 dark:border-gray-700">
                    <table class="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                      <tbody>
                        <tr>
                          <th class="ft-tertiary bg-gray-800 text-white">Subtotal</th>
                          <td>$97.00</td>
                        </tr>
                        <tr>
                          <th class="ft-tertiary bg-gray-800 text-white">Shipping</th>
                          <td>
                            <div class="nav-y">
                              <span>Flat rate: $23.00</span>
                              <span>Shipping to Morocco</span>
                              <a class="text-primary" href="#">Edit address</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th class="ft-tertiary bg-gray-800 text-white">Total</th>
                          <td><span class="total fw-bold fs-6 lg:fs-5">$120.00</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <NuxtLink to="/shop-checkout"
                    class="btn btn-md xl:btn-lg btn-primary text-white text-nowrap w-100 mt-1">Proceed to checkout</NuxtLink>
                </div>
              </div>
              <div class="lg:order-0">
                <div class="panel vstack gap-1 lg:gap-2">
                  <h5 class="h5 sm:h4 mx-0">You may interested in:</h5>
                  <div class="row child-cols-6 gy-4 gx-2 ">
                    <div>
                      <article class="product type-product panel">
                        <div class="vstack gap-2">
                          <div class="panel">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/common/products/img-03.jpg" alt="White Classic Watch">
                              <NuxtLink to="/shop-product-detail" class="position-cover"
                                data-caption="White Classic Watch"></NuxtLink>
                            </figure>
                            <span
                              class="position-absolute top-0 start-0 m-1 fs-7 ft-tertiary lh-sm h-16px px-narrow bg-yellow-400 text-dark">67%</span>
                          </div>
                          <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                            <h5 class="h6 m-0"><NuxtLink class="text-none" to="/shop-product-detail">White Classic
                                Watch</NuxtLink></h5>
                            <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                            </ul>
                            <div class="hstack justify-center gap-narrow fs-7">
                              <span class="price-old text-line-through opacity-40"> $89.00 </span> <span
                                class="price">$29.00</span>
                            </div>
                            <a class="btn btn-text text-none text-primary border-bottom fs-7 mt-1 pb-narrow"
                              href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article class="product type-product panel">
                        <div class="vstack gap-2">
                          <div class="panel">
                            <figure
                              class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                              <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                src="/assets/images/common/products/img-04.jpg" alt="Stylish Starbucks">
                              <NuxtLink to="/shop-product-detail" class="position-cover"
                                data-caption="Stylish Starbucks"></NuxtLink>
                            </figure>
                          </div>
                          <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                            <h5 class="h6 m-0"><NuxtLink class="text-none" to="/shop-product-detail">Stylish
                                Starbucks</NuxtLink></h5>
                            <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                              <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                            </ul>
                            <div class="hstack justify-center gap-narrow fs-7">
                              <span class="price">$20.00</span>
                            </div>
                            <a class="btn btn-text text-none text-primary border-bottom fs-7 mt-1 pb-narrow"
                              href="#uc-cart-panel" data-uc-toggle="">Add to cart</a>
                          </div>
                        </div>
                      </article>
                    </div>
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