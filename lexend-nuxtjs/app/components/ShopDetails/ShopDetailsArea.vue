<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// Import all images
import img08 from '@/assets/images/common/products/img-08.jpg';
import img17 from '@/assets/images/common/products/img-17.jpg';
import img18 from '@/assets/images/common/products/img-18.jpg';
import img19 from '@/assets/images/common/products/img-19.jpg';
import img20 from '@/assets/images/common/products/img-20.jpg';
import img21 from '@/assets/images/common/products/img-21.jpg';
import img22 from '@/assets/images/common/products/img-22.jpg';

const productSliderData = [
  { id: 1, src: img08, alt: "Disney Toys", caption: "Disney Toys" },
  { id: 2, src: img17, alt: "Disney Toys", caption: "Disney Toys" },
  { id: 3, src: img18, alt: "Disney Toys", caption: "Disney Toys" },
  { id: 4, src: img19, alt: "Disney Toys", caption: "Disney Toys" },
  { id: 5, src: img20, alt: "Disney Toys", caption: "Disney Toys" },
  { id: 6, src: img21, alt: "Disney Toys", caption: "Disney Toys" },
  { id: 7, src: img22, alt: "Disney Toys", caption: "Disney Toys" }
];


// Thumbs slider
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};



// image popup function
import ImagePopup from "~/components/common/ImagePopup.vue";
import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";

const image_popup = ref(null);
function handleImagePopup(index) {
  image_popup.value.showImg(index);
}


// Tab toggle function
const activeTab = ref('description')
const setActiveTab = (tab) => {
  activeTab.value = tab
}


// Props receive
 
defineProps({
  shop_item: {
    type: Object,
    default: () => ({}),
  } 

})

</script>


<template>


  <ImagePopup ref="image_popup" :images="productSliderData.map((item) => item.src)" />

  <article class="product type-product single product-single py-2 lg:py-6 xl:py-8">
    <div class="container max-w-xl">
      <header class="product-header panel">
        <div class="row child-cols-12 lg:child-cols-6 gy-4 gx-4 md:gx-6 xl:gx-8">
          <div>


            <div class="product-slider panel swiper-parent">
              <div class="vstack gap-1">
                <div class="panel">
                  <Swiper class="swiper swiper-main h-100" :modules="[Thumbs, Navigation]"
                    :thumbs="{ swiper: thumbsSwiper }" :navigation="{
                      nextEl: '.swiper-next',
                      prevEl: '.swiper-prev',
                    }" :slides-per-view="1" :loop="false" :space-between="10" :watch-overflow="true" :speed="1000">
                    <SwiperSlide v-for="(item, i) in productSliderData" :key="i" class="swiper-slide">
                      <div class="product type-product">
                        <figure class="featured-image m-0 rounded ratio ratio-3x4 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque" :src="item.src"
                            :alt="item.alt">
                          <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="position-cover"
                            :data-caption="item.caption"></a>
                        </figure>
                      </div>
                    </SwiperSlide>

                    <div
                      class="swiper-nav swiper-next btn btn-xs md:btn-md w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white text-dark rounded-circle shadow-xs position-absolute top-50 end-0 translate-middle-y me-narrow md:me-2 z-1">
                      <i class="unicon-chevron-right icon-1 md:icon-2"></i>
                    </div>
                    <div
                      class="swiper-nav swiper-prev btn btn-xs md:btn-md w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white text-dark rounded-circle shadow-xs position-absolute top-50 start-0 translate-middle-y ms-narrow md:ms-2 z-1">
                      <i class="unicon-chevron-left icon-1 md:icon-2"></i>
                    </div>
                  </Swiper>
                </div>

                <div class="panel">
                  <Swiper class="swiper swiper-thumbs" :modules="[Thumbs]" @swiper="setThumbsSwiper"
                    :watch-slides-progress="true" :slides-per-view="5" :loop="false" :space-between="10"
                    :watch-overflow="true" :speed="1000">
                    <SwiperSlide v-for="(item, i) in productSliderData" :key="i" class="swiper-slide">
                      <div class="product type-product h-100">
                        <figure class="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                          <img class="media-cover image uc-transition-scale-up uc-transition-opaque" :src="item.src"
                            :alt="item.alt">
                        </figure>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>



          </div>
          <div>
            <div class="product-details panel vstack gap-1 xl:gap-2 max-w-500px mx-auto"
              data-uc-sticky="bottom: true; offset: 40;">
              <h1 v-if="shop_item.name" class="product-title h3 xl:h1 m-0">{{ shop_item.name }}</h1>
              <h1 v-if="!shop_item.name" class="product-title h3 xl:h1 m-0">Disney Toys</h1>
              <div class="hstack justify-between items-center gap-2">
                <div class="product-price hstack gap-1 fs-5 xl:fs-4">
                  <span v-if="shop_item.old_price" class="price-old text-line-through opacity-40">${{ shop_item.old_price.toFixed(2) }}</span>
                  <span v-if="!shop_item.old_price" class="price-old text-line-through opacity-40">$89.00</span>
                  <span v-if="shop_item.price" class="price">${{ shop_item.price.toFixed(2) }}</span>
                  <span v-if="!shop_item.price" class="price">$24.00</span>
                </div> 
                <div class="product-rating hstack gap-1">
                  <span class="hstack gap-narrow fs-7 opacity-60">5<span class="d-none sm:d-inline-block">
                      reviews</span></span>
                  <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li><i class="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"></i></li>
                    <li><i class="icon fs-6 lg:fs-5 unicon-star-filled "></i></li>
                  </ul>
                </div>
              </div>
              <p class="product-desc fs-6 xl:fs-5 my-2">Consetetur sadipscing elitr, syosma vero eos et accusam et justo
                takimata sit amet sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut laliqua.</p>
              <form class="product-actions hstack gap-1 xl:mt-2">
                <input type="number"
                  class="form-control form-control-sm lg:form-control-md w-100px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                  step="1" min="1" max="99" name="quantity" value="1" title="Qty" autocomplete="off">
                <button type="submit" class="btn btn-sm lg:btn-md btn-primary text-white md:max-w-150px flex-1">Add to
                  cart</button>
              </form>
              <ul class="nav-y mt-2 xl:mt-4 ft-tertiary">
                <li class="hstack gap-narrow">
                  <span class="text-uppercase opacity-60 me-narrow">SKU:</span>
                  <span>HVRYXK 1</span>
                </li>
                <li class="hstack gap-narrow">
                  <span class="text-uppercase opacity-60 me-narrow">Categories:</span>
                  <NuxtLink class="text-primary" to="/shop-category">Toys</NuxtLink>,
                  <NuxtLink class="text-primary" to="/shop-category">Games</NuxtLink>
                </li>
                <li class="hstack gap-narrow">
                  <span class="text-uppercase opacity-60 me-narrow">Tags:</span>
                  <NuxtLink class="text-primary" to="/shop-category">Heads toys</NuxtLink>,
                  <NuxtLink class="text-primary" to="/shop-category">Child</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div class="product-tabs panel mt-8">

        <ul class="product-tabs-nav nav-x justify-center ft-tertiary h6 pb-2 border-bottom">
          <li :class="{ 'uc-active': activeTab === 'description' }"><a  @click="setActiveTab('description')" style="cursor: pointer;">Description</a></li>
          <li :class="{ 'uc-active': activeTab === 'reviews' }"><a @click="setActiveTab('reviews')" style="cursor: pointer;">Reviews (5)</a></li>
        </ul>

        <div class="product-tabs-content uc-switcher mt-4 max-w-lg mx-auto">
          <div  :class="{ 'uc-active': activeTab === 'description' }" v-show="activeTab === 'description'">
            <div id="product-details" class="product-details panel py-2 lg:py-4">
              <p>Consetetur sadipscing elitr, syosma vero eos et accusam et justo takimata sit amet sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur,
                sed do eiusmod.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto dolores laudantium commodi ut
                ullam id, numquam repellat quo maiores excepturi cum atque consequuntur alias sunt, dignissimos
                architecto odio unde!</p>
              <p>Accusamus odio soluta nostrum nemo esse explicabo ab eos sed perspiciatis possimus.</p>
            </div>
          </div>
          <div :class="{ 'uc-active': activeTab === 'reviews' }" v-show="activeTab === 'reviews'">
            <div id="product-reviews" class="product-reviews panel py-2 lg:py-4 overflow-hidden-x">
              <div class="row g-9 sep" data-uc-grid>
                <div class="col-12 lg:col-6">
                  <div class="panel vstack gap-1 lg:gap-2">
                    <h4 class="h5 lg:h4 m-0">Reviews (5)</h4>
                    <p class="text-dark dark:text-white text-opacity-70">Be the first to review “Disney Toys”</p>
                    <div class="reviews-wrap panel vstack gap-4 mt-6">
                      <div class="reviews-lisiting panel row child-cols-12 sep-x gy-9">
                        <div class="review-item">
                          <div class="vstack items-start gap-2">
                            <div class="vstack gap-2 flex-1">
                              <div class="hstack justify-between items-center gap-2">
                                <h5 class="h5 m-0 flex-1">I like it!!</h5>
                                <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                </ul>
                              </div>
                              <p class="text-dark dark:text-white text-opacity-70">Molestiae quam exercitationem
                                quisquam quasi veniam dolores temporibus nam doloribus, cumque quibusdam.</p>
                            </div>
                            <div
                              class="hstack items-center gap-2 h6 ft-tertiary text-dark dark:text-white text-opacity-70">
                              <div class="w-40px">
                                <figure
                                  class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    src="/assets/images/common/users/img-01.png" alt="Reviewer name">
                                </figure>
                              </div>
                              <div class="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>By <a class="text-none text-primary" href="#">Sarah</a></span>
                                <span>On 24 July, 2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="review-item">
                          <div class="vstack items-start gap-2">
                            <div class="vstack gap-2 flex-1">
                              <div class="hstack justify-between items-center gap-2">
                                <h5 class="h5 m-0 flex-1">Just outstanding, I recommended!</h5>
                                <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                </ul>
                              </div>
                              <p class="text-dark dark:text-white text-opacity-70">Ratione quis deleniti error porro
                                ipsum, aspernatur illo nisi officia aliquam similique.</p>
                            </div>
                            <div
                              class="hstack items-center gap-2 h6 ft-tertiary text-dark dark:text-white text-opacity-70">
                              <div class="w-40px">
                                <figure
                                  class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    src="/assets/images/common/users/img-02.png" alt="Reviewer name">
                                </figure>
                              </div>
                              <div class="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>By <a class="text-none text-primary" href="#">Amir</a></span>
                                <span>On 24 July, 2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="review-item">
                          <div class="vstack items-start gap-2">
                            <div class="vstack gap-2 flex-1">
                              <div class="hstack justify-between items-center gap-2">
                                <h5 class="h5 m-0 flex-1">Sounds good, but I hope more.</h5>
                                <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled "></i></li>
                                </ul>
                              </div>
                              <p class="text-dark dark:text-white text-opacity-70">Nam consequuntur aut, qui eaque
                                molestias excepturi reiciendis quo ut fugit odio.</p>
                            </div>
                            <div
                              class="hstack items-center gap-2 h6 ft-tertiary text-dark dark:text-white text-opacity-70">
                              <div class="w-40px">
                                <figure
                                  class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    src="/assets/images/common/users/img-03.png" alt="Reviewer name">
                                </figure>
                              </div>
                              <div class="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>By <a class="text-none text-primary" href="#">Jennifer</a></span>
                                <span>On 24 July, 2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="review-item">
                          <div class="vstack items-start gap-2">
                            <div class="vstack gap-2 flex-1">
                              <div class="hstack justify-between items-center gap-2">
                                <h5 class="h5 m-0 flex-1">What a waste of money!!</h5>
                                <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 2 out of 5">
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled "></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled "></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled "></i></li>
                                </ul>
                              </div>
                              <p class="text-dark dark:text-white text-opacity-70">Quisquam illo iste consequatur qui
                                aspernatur vel mollitia eaque animi autem nemo.</p>
                            </div>
                            <div
                              class="hstack items-center gap-2 h6 ft-tertiary text-dark dark:text-white text-opacity-70">
                              <div class="w-40px">
                                <figure
                                  class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    src="/assets/images/common/users/img-04.png" alt="Reviewer name">
                                </figure>
                              </div>
                              <div class="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>By <a class="text-none text-primary" href="#">Lora</a></span>
                                <span>On 24 July, 2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="review-item">
                          <div class="vstack items-start gap-2">
                            <div class="vstack gap-2 flex-1">
                              <div class="hstack justify-between items-center gap-2">
                                <h5 class="h5 m-0 flex-1">This is extremly recommended!!</h5>
                                <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled text-yellow"></i></li>
                                  <li><i class="icon fs-6 unicon-star-filled "></i></li>
                                </ul>
                              </div>
                              <p class="text-dark dark:text-white text-opacity-70">Consetetur sadipscing elitr, syosma
                                vero eos et accusam et justo takimata sit amet sed diam nonumy eirmod tempor invidunt.
                              </p>
                            </div>
                            <div
                              class="hstack items-center gap-2 h6 ft-tertiary text-dark dark:text-white text-opacity-70">
                              <div class="w-40px">
                                <figure
                                  class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                                  <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    src="/assets/images/common/users/img-05.png" alt="Reviewer name">
                                </figure>
                              </div>
                              <div class="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>By <a class="text-none text-primary" href="#">Amal</a></span>
                                <span>On 24 July, 2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reviews-loadmore" hidden>
                        <a href="#"
                          class="btn btn-sm btn-outline-gray-100 w-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">Load
                          more reviews</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="panel vstack gap-1 lg:gap-2" data-uc-sticky="bottom: true; offset: 40;">
                    <h4 class="h5 lg:h4 m-0">Submit a review</h4>
                    <p class="text-dark dark:text-white text-opacity-70">Your email address will not be published.
                      Required fields are marked <sup class="text-danger">*</sup></p>
                    <form class="panel vstack gap-2 lg:gap-3 mt-2" action="?">
                      <div class="row g-2 child-cols-12 lg:child-cols-6">
                        <div class="form-group">
                          <label class="form-label fs-7 ft-tertiary" for="reviewer_name">Name <sup
                              class="text-danger">*</sup></label>
                          <input type="text" id="reviewer_name"
                            class="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                        </div>
                        <div class="form-group">
                          <label class="form-label fs-7 ft-tertiary" for="reviewer_email">Email <sup
                              class="text-danger">*</sup></label>
                          <input type="email" id="reviewer_email"
                            class="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                            required>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-label fs-7 ft-tertiary">Your rating <sup class="text-danger">*</sup></label>
                        <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 1 out of 5">
                          <li><i class="icon fs-5 unicon-star-filled text-yellow"></i></li>
                          <li><i class="icon fs-5 unicon-star-filled "></i></li>
                          <li><i class="icon fs-5 unicon-star-filled "></i></li>
                          <li><i class="icon fs-5 unicon-star-filled "></i></li>
                          <li><i class="icon fs-5 unicon-star-filled "></i></li>
                        </ul>
                      </div>
                      <div class="form-group">
                        <label class="form-label fs-7 ft-tertiary" for="reviewer_title">Review title <sup
                            class="text-danger">*</sup></label>
                        <input type="text" id="reviewer_title"
                          class="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                      </div>
                      <div class="form-group">
                        <label class="form-label fs-7 ft-tertiary" for="reviewer_message">Your review</label>
                        <textarea id="reviewer_message"
                          class="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                          rows="5" required></textarea>
                      </div>
                      <div class="form-group form-check text-start rtl:text-end">
                        <input
                          class="form-check-input rounded-0 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                          type="checkbox" id="remember_me">
                        <label class="hstack justify-between form-check-label fs-7 lg:fs-6" for="remember_me">Save my
                          name, email, and website in this browser for the next time I comment.</label>
                      </div>
                      <button class="btn btn-sm lg:btn-md btn-primary text-white w-100">Submit review</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Products Related -->
      <div class="featured-products-panel panel pt-4 lg:pt-8 mt-4 border-top border-gray-100 dark:border-gray-800">
        <header class="panel hstack justify-center gap-2 text-center">
          <h3 class="h5 lg:h4">You might also like</h3>
        </header>
        <div class="panel swiper-parent mt-4 md:mt-6">
 
          <Swiper class="swiper" data-uc-swiper="items: 2; gap: 8; dots: .swiper-pagination; disable-class: d-none;"
            data-uc-swiper-s="items: 3; gap: 16;" data-uc-swiper-m="items: 4; gap: 24;"
            data-uc-swiper-l="items: 5; gap: 32;"
            :modules="[ Pagination , Navigation, EffectFade]"  
            :loop="true"
            :spaceBetween="10" 
            :slidesPerView="5"  
            :speed="1000"
            :breakpoints="{ 0: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1280: { slidesPerView: 5 } }"
            :pagination="{ el: '.swiper-pagination', clickable: true }" 
 


            >
           
              <SwiperSlide class="swiper-slide">
                <article class="product type-product panel">
                  <div class="vstack gap-2">
                    <div class="panel">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-01.jpg" alt="Elegant Watch">
                        <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Elegant Watch"></NuxtLink>
                      </figure>
                      <span
                        class="position-absolute top-0 start-0 m-1 fs-7 ft-tertiary lh-sm h-16px px-narrow rounded bg-yellow-400 text-dark">51%</span>
                    </div>
                    <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 class="h6 lg:h5 m-0"><NuxtLink class="text-none" to="/shop-product-detail">Elegant Watch</NuxtLink>
                      </h5>
                      <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                      </ul>
                      <div class="hstack justify-center gap-narrow fs-7">
                        <span class="price-old text-line-through opacity-40"> $99.00 </span> <span
                          class="price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <article class="product type-product panel">
                  <div class="vstack gap-2">
                    <div class="panel">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-02.jpg" alt="Hemp Seed">
                        <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Hemp Seed"></NuxtLink>
                      </figure>
                    </div>
                    <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 class="h6 lg:h5 m-0"><NuxtLink class="text-none" to="/shop-product-detail">Hemp Seed</NuxtLink></h5>
                      <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled "></i></li>
                      </ul>
                      <div class="hstack justify-center gap-narrow fs-7">
                        <span class="price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <article class="product type-product panel">
                  <div class="vstack gap-2">
                    <div class="panel">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-03.jpg" alt="White Classic Watch">
                        <NuxtLink to="/shop-product-detail" class="position-cover"
                          data-caption="White Classic Watch"></NuxtLink>
                      </figure>
                      <span
                        class="position-absolute top-0 start-0 m-1 fs-7 ft-tertiary lh-sm h-16px px-narrow rounded bg-yellow-400 text-dark">67%</span>
                    </div>
                    <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 class="h6 lg:h5 m-0"><NuxtLink class="text-none" to="/shop-product-detail">White Classic
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
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <article class="product type-product panel">
                  <div class="vstack gap-2">
                    <div class="panel">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-04.jpg" alt="Stylish Starbucks">
                        <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Stylish Starbucks"></NuxtLink>
                      </figure>
                    </div>
                    <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 class="h6 lg:h5 m-0"><NuxtLink class="text-none" to="/shop-product-detail">Stylish
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
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <article class="product type-product panel">
                  <div class="vstack gap-2">
                    <div class="panel">
                      <figure class="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src="/assets/images/common/products/img-05.jpg" alt="Black AirTag">
                        <NuxtLink to="/shop-product-detail" class="position-cover" data-caption="Black AirTag"></NuxtLink>
                      </figure>
                    </div>
                    <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 class="h6 lg:h5 m-0"><NuxtLink class="text-none" to="/shop-product-detail">Black AirTag</NuxtLink>
                      </h5>
                      <ul class="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 3 out of 5">
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled text-yellow"></i></li>
                        <li><i class="icon fs-7 unicon-star-filled "></i></li>
                        <li><i class="icon fs-7 unicon-star-filled "></i></li>
                      </ul>
                      <div class="hstack justify-center gap-narrow fs-7">
                        <span class="price">$74.00</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            
          </Swiper>
 

        </div>
      </div>
    </div>
  </article>
</template>