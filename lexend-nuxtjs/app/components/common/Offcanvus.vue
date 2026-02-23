 

<script setup> 
import { ref, onMounted } from 'vue'
import menu_data from '~/data/menu-data';

defineProps({
  toggleMenu: {
    type: Function,
    required: true,
  },
  openMenu: {
    type: Boolean,
    required: true,
  },
});

const navTitle = ref('');
const innerNavTitle = ref('');

// Toggle main dropdown
const openMobileMenu = (menu) => {
  navTitle.value = navTitle.value === menu ? '' : menu;
};

// Toggle inner dropdown
const openInnerMenu = (menu) => {
  innerNavTitle.value = innerNavTitle.value === menu ? '' : menu;
};


// Dark Mode Config
const config = {
  DEFAULT_DARK_MODE: false,
  USE_LOCAL_STORAGE: true,
  USE_SYSTEM_PREFERENCES: true
}

// Check if running on client
const isClient = typeof window !== 'undefined'

// Check if dark mode is active
const isDarkMode = () => {
  if (!isClient) return false
  return document.documentElement.classList.contains('uc-dark')
}

// Apply dark mode
const setDarkMode = (enabled) => {
  if (!isClient) return
  enabled = !!enabled
  if (isDarkMode() !== enabled) {
    document.documentElement.classList.toggle('uc-dark', enabled)
    window.dispatchEvent(new CustomEvent('darkmodechange'))
    if (config.USE_LOCAL_STORAGE) {
      localStorage.setItem('darkMode', enabled ? '1' : '0')
    }
  }
}

// Detect initial mode
const getInitialDarkMode = () => {
  if (!isClient) return config.DEFAULT_DARK_MODE

  if (config.USE_LOCAL_STORAGE && localStorage.getItem('darkMode') !== null) {
    return localStorage.getItem('darkMode') === '1'
  }

  if (config.USE_SYSTEM_PREFERENCES) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return config.DEFAULT_DARK_MODE
}

// Toggle dark mode
const toggleDarkMode = () => setDarkMode(!isDarkMode())

// Checkbox handler
const handleDarkModeToggle = (e) => {
  toggleDarkMode()
  e.target.checked = isDarkMode()
}

// Initialize on mounted (client-only)
onMounted(() => {
  setDarkMode(getInitialDarkMode())

  document.querySelectorAll('[data-darkmode-toggle] input, [data-darkmode-switch] input')
    .forEach((input) => {
      input.checked = isDarkMode()
    })
})
</script>


<template>
 

  <div id="uc-menu-panel" :class="`uc-offcanvas ${openMenu ? 'uc-offcanvas-overlay uc-open' : ''}`"
    style="display: block;" tabindex="-1" @click="toggleMenu">
    <div @click.stop
      class="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide"
       style="max-width: 721px;">

      <header class="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
        <div class="uc-logo">
          <NuxtLink class="h5 text-none text-gray-900 dark:text-white" to="/">
            <img class="dark:d-none" src="/assets/images/common/logo-light.svg" alt="Lexend" />
            <img class="d-none dark:d-block" src="/assets/images/common/logo-dark.svg" alt="Lexend" />
          </NuxtLink>
        </div>


        <button @click="toggleMenu"
          class="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
          type="button" aria-label="Close menu">
          <i class="unicon-close"></i>
        </button>



      </header>

      <!-- Search -->
      <div class="panel">
        <form id="search-panel" class="form-icon-group vstack gap-1 mb-2 uc-sticky" data-uc-sticky="">
          <input type="text" class="form-control form-control-sm fs-7 rounded-default" placeholder="Search.." />
          <span class="form-icon text-gray">
            <i class="unicon-search icon-1"></i>
          </span>
        </form>

        <!-- Main Menu -->
        <ul class="nav-y gap-narrow fw-medium fs-6 uc-nav">
          <li v-for="(item, index) in menu_data" :key="index"
            :class="`${item.has_dropdown ? 'uc-parent' : ''} ${navTitle === item.title ? 'uc-open' : ''}`">
            <NuxtLink :to="item.link" @click.prevent="item.has_dropdown ? openMobileMenu(item.title) : toggleMenu()">
              {{ item.title }}
            </NuxtLink>

            <!-- Dropdown -->
            <ul v-if="item.children" class="uc-nav-sub uc-nav"
              :style="{ display: navTitle === item.title ? 'block' : 'none' }">
              <li v-for="(child, idx) in item.children" :key="idx"
                :class="`${child.has_inner_dropdown ? 'uc-parent' : ''} ${innerNavTitle === child.title ? 'uc-open' : ''}`">
                <NuxtLink :to="child.link"
                  @click.prevent="child.has_inner_dropdown ? openInnerMenu(child.title) : toggleMenu()">
                  {{ child.title }}
                </NuxtLink>

                <!-- Inner Dropdown -->
                <ul v-if="child.children" class="uc-nav-sub uc-nav"
                  :style="{ display: innerNavTitle === child.title ? 'block' : 'none' }">
                  <li v-for="(inner, i) in child.children" :key="i">
                    <NuxtLink :to="inner.link" @click="toggleMenu">
                      {{ inner.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Social Icons -->
        <ul class="social-icons nav-x mt-4">
          <li>
            <a href="https://medium.com/"><i class="unicon-logo-medium icon-2"></i></a>
            <a href="https://twitter.com/"><i class="unicon-logo-x-filled icon-2"></i></a>
            <a href="https://www.instagram.com/"><i class="unicon-logo-instagram icon-2"></i></a>
            <a href="https://www.pinterest.com/"><i class="unicon-logo-pinterest icon-2"></i></a>
          </li>
        </ul>

        <!-- Theme Switcher -->
        <div class="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900 uc-sticky" data-uc-sticky="position: bottom">
          <div class="vstack gap-1">
            <span class="fs-7 opacity-60">Select theme:</span>
            <div class="darkmode-trigger" data-darkmode-switch="">
              <label class="switch">
                <input type="checkbox" @change="handleDarkModeToggle" :checked="isDarkMode()" />
                <span class="slider fs-5" id="darkModeLabel"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
