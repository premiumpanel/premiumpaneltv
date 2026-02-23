 
const menu_data = [
  { 
    title: "Home",
    has_dropdown: true,
    link: "#",
    children: [
      { title: "Home 1", link: "/" },
      { title: "Home 2", link: "/home-2" },
      { title: "Home 3", link: "/home-3" },
      { title: "Home 4", link: "/home-4" },
      { title: "Home 5", link: "/home-5" },
      { title: "Home 6", link: "/home-6" },
      { title: "Home 7", link: "/home-7" },
      { title: "Home 8", link: "/home-8" },
      { title: "Home 9", link: "/home-9" },
      { title: "Home 10", link: "/home-10" },
      { title: "Home 11", link: "/home-11" },
      { title: "Home 12", link: "/home-12" },
      { title: "Home 13", link: "/home-13" },
      { title: "Home 14", link: "/home-14" }, 
      // { title: "Home RTL", link: "/rtl" },
    ],
  },
  {
    title: "Inner Pages",
    has_dropdown: true,
    link: "#",
    children: [
      {
        title: "Blog",
        has_inner_dropdown: true,
        link: "#",
        children: [
          { title: "Full Width", link: "/blog" },
          { title: "Grid 2 Cols", link: "/blog-2cols" },
          { title: "Sidebar", link: "/blog-sidebar" },
          { title: "Sidebar Left", link: "/blog-sidebar-left" },
          { title: "Grid 3 Cols", link: "/blog-3cols" },
          { title: "Grid 4 Cols", link: "/blog-4cols" },
        ],
      },
      {
        title: "Blog - detail",
         has_inner_dropdown: true,
        link: "#",
        children: [
          { title: "Blog detail", link: "/blog-details/1" },
          { title: "Blog detail - v2", link: "/blog-details-2" },
        ],
      },
      {
        title: "Useful pages",
         has_inner_dropdown: true,
        link: "#",
        children: [
          { title: "Sign up", link: "/sign-up" },
          { title: "Sign in", link: "/sign-in" },
          { title: "Reset password", link: "/reset-password" },
          { title: "404 page", link: "/error" },
          { title: "Coming soon", link: "/coming-soon" },
        ],
      },
      {
        title: "Other pages",
         has_inner_dropdown: true,
        link: "#",
        children: [
          { title: "FAQ", link: "/page-terms" },
          { title: "Terms of use", link: "/page-terms" },
          { title: "Privacy policy", link: "/page-privacy" },
        ],
      },
    ],
  },
  {
    title: "Shop",
    has_dropdown: true,
    link: "#",
    children: [
      {
        title: "Shop layouts",
         has_inner_dropdown: true,
        link: "#",
        children: [
          { title: "Shop 4 cols", link: "/shop" },
          { title: "Shop 3 cols", link: "/shop-3" },
          { title: "Shop 2 cols", link: "/shop-2" },
          { title: "Shop with sidebar", link: "/shop-sidebar" },
        ],
      },
      { title: "Archive category", has_inner_dropdown: false, link: "/shop-category" },
      { title: "Product detail", has_inner_dropdown: false, link: "/shop-product-detail" },
      { title: "Product detail - v2", has_inner_dropdown: false, link: "/shop-product-detail-2" },
      { title: "Cart", has_inner_dropdown: false, link: "/shop-cart" },
      { title: "Cart - v2", has_inner_dropdown: false, link: "/shop-cart-2" },
      { title: "Checkout", has_inner_dropdown: false, link: "/shop-checkout" },
      { title: "Checkout - v2", has_inner_dropdown: false, link: "/shop-checkout-2" },
      { title: "Order confirmation", has_inner_dropdown: false, link: "/shop-order" },
    ],
  },
  { title: "Features", has_dropdown: false, link: "/page-features" },
  { title: "Pricing", has_dropdown: false, link: "/page-pricing" },
  { title: "Pricing 2", has_dropdown: false, link: "/page-pricing-2" },
  { title: "About", has_dropdown: false, link: "/page-about" },
  { title: "Career", has_dropdown: false, link: "/page-career" },
  { title: "Contact", has_dropdown: false, link: "/page-contact" },
  { title: "Create an account", has_dropdown: false, link: "/sign-up" },
  { title: "Log in", has_dropdown: false, link: "/sign-in" },
  { title: "Buy Template", has_dropdown: false, link: "https://themeforest.net/user/rk_theme/portfolio" },
]


export default menu_data