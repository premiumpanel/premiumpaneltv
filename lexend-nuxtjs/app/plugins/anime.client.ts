import anime from 'animejs';
import { init } from '~/assets/js/helpers/animation-helper.js';

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize helper system (data-anime)
  nuxtApp.hook('app:mounted', () => {
    try {
      console.log('[Anime] Initializing helpers (New System)...');
      init();
    } catch (e) {
      console.error('[Anime] Helper init failed', e);
    }
  });

  // Provide 'anime' globally so you can use $anime() in components
  return {
    provide: {
      anime
    }
  }
});
