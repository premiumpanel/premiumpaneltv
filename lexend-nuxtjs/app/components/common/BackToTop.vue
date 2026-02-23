<script setup>
import { onMounted, ref } from 'vue';

// Configuration
const config = {
  DEFAULT_DARK_MODE: false,
  USE_LOCAL_STORAGE: true,
  // USE_SYSTEM_PREFERENCES: false,
  DEFAULT_BREAKPOINTS: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  }
};

// Dark mode
const isDarkMode = () => document.documentElement.classList.contains('uc-dark');

const setDarkMode = (enabled) => {
  enabled = !!enabled;
  if (isDarkMode() !== enabled) {
    document.documentElement.classList.toggle('uc-dark', enabled);
    window.dispatchEvent(new CustomEvent('darkmodechange'));
    if (config.USE_LOCAL_STORAGE && process.client) {
      localStorage.setItem('darkMode', enabled ? '1' : '0');
    }
  }
};

const getInitialDarkMode = () => {
  if (process.client) {
    if (config.USE_LOCAL_STORAGE && localStorage.getItem('darkMode') !== null) {
      return localStorage.getItem('darkMode') === '1';
    }
    // if (config.USE_SYSTEM_PREFERENCES) {
    //   return window.matchMedia('(prefers-color-scheme: dark)').matches;
    // }
  }
  return config.DEFAULT_DARK_MODE;
};

const toggleDarkMode = () => setDarkMode(!isDarkMode());

// Scroll utilities
const updateScrollWidth = () => {
  if (process.client) {
    document.documentElement.style.setProperty(
      '--body-scroll-width',
      `${window.innerWidth - document.documentElement.clientWidth}px`
    );
  }
};

const setupBackToTop = () => {
  if (process.client) {
    const backToTop = document.querySelector('[data-uc-backtotop]');
    if (!backToTop) return;

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let previousScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = document.body.getBoundingClientRect().top;
      backToTop.parentNode.classList.toggle('uc-active', currentScroll <= previousScroll);
      previousScroll = currentScroll;
    });
  }
};

// Breakpoints
const setupBreakpoints = () => {
  if (process.client) {
    const setupBp = (name, width, type = 'min') => {
      const mediaQuery = window.matchMedia(`(${type}-width: ${width}px)`);
      const className = `bp-${name}${type === 'max' ? '-max' : ''}`;
      const updateClass = () => document.documentElement.classList.toggle(className, mediaQuery.matches);
      mediaQuery.onchange = updateClass;
      updateClass();
    };

    Object.entries(config.DEFAULT_BREAKPOINTS).forEach(([name, width]) => {
      setupBp(name, width, 'min');
      setupBp(name, width - 1, 'max');
    });
  }
};

// GDPR Notification
const gdprAccepted = ref(false);
const showGDPRNotification = ref(false);

const setupGDPR = () => {
  if (process.client) {
    gdprAccepted.value = localStorage.getItem('gdprAccepted') === 'true';
    if (!gdprAccepted.value) {
      setTimeout(() => {
        showGDPRNotification.value = true;
      }, 5000);
    }
  }
};

// Initialize
onMounted(() => {
  setDarkMode(getInitialDarkMode());
  updateScrollWidth();
  window.addEventListener('resize', updateScrollWidth);
  setupBackToTop();
  setupBreakpoints();
  if (process.client) {
    document.querySelectorAll('[data-darkmode-toggle] input, [data-darkmode-switch] input').forEach((input) => {
      input.checked = isDarkMode();
    });
  }
  setupGDPR();
  document.documentElement.classList.add('dom-ready');
});

const handleDarkModeToggle = (e) => {
  toggleDarkMode();
  e.target.checked = isDarkMode();
};
</script>

<template>
  <div class="backtotop-wrap position-fixed ltr:end-0 rtl:start-0 bottom-0 z-99 m-2 vstack"
    style="right: 20px; bottom: 20px;">
    <ClientOnly>
      <div
        class="darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white"
        data-darkmode-toggle> 

        <label class="switch">
          <span class="sr-only" id="darkModeLabel">Dark mode toggle</span>
          <input type="checkbox" @change="handleDarkModeToggle" :checked="isDarkMode()"
            aria-labelledby="darkModeLabel" />
          <span class="slider fs-5"></span>
        </label>



      </div>
    </ClientOnly>
    <a class="btn btn-sm bg-primary text-white w-40px h-40px rounded-circle" style="cursor: pointer;" data-uc-backtotop>
      <i class="icon-2 unicon-chevron-up"></i>
    </a>
  </div>
</template>
