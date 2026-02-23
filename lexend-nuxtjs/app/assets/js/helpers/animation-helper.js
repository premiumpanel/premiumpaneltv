import anime from 'animejs';
if (typeof window !== 'undefined') window.anime = anime; // Expose for data-attr eval
import { parseDataAttr, watchDataAttr } from './data-attr-helper.js';

// Helper to parse existing data-anime attributes
function parseAnimeOptions(str) {
  const schema = {
    string: ['targets', 'easing', 'direction', 'onscroll', 'onscroll-target'],
    number: ['duration', 'delay', 'onview'],
    boolean: ['loop', 'autoplay', 'onscroll-pen']
  };
  return parseDataAttr(str, schema);
}

async function createAnimeInstance(el) {
  const raw = el.getAttribute('data-anime');
  if (!raw) return;

  const options = parseAnimeOptions(raw);

  // Handle targets selection
  let targets = el;
  if (options.targets && typeof options.targets === 'string') {
    try {
      if (options.targets === '>*') {
        // Explicitly handle "direct children" selector
        const children = el.children;
        if (children.length > 0) targets = Array.from(children);
      } else {
        // Try selecting relative to document first (standard Anime.js behavior)
        let nodes;
        try {
          nodes = document.querySelectorAll(options.targets);
        } catch (e) {
          // If document select fails (e.g. relative selector), try scoped to element
          try {
            // Support legacy shortcuts or specific scoped selectors if needed
            // For now, if document fails, we try el.querySelectorAll if it doesn't start with scope issues
            nodes = el.querySelectorAll(options.targets);
          } catch (e2) { /* ignore */ }
        }

        if (nodes && nodes.length > 0) targets = nodes;
      }
    } catch (e) {
      console.warn('[AnimeHelper] Target selection failed for:', options.targets, e);
    }
  }
  options.targets = targets;

  // Defaults
  if (options.autoplay === undefined) options.autoplay = true;

  // Create Anime instance
  const instance = anime(options);

  // Store instance on element for access
  el.animeInstance = instance;

  // -- Event Handlers --

  // 1. On Click
  if (options.onclick) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (options.onclick === 'alternate') {
        if (instance.reversed) instance.reverse();
        instance.play();
      } else {
        instance.restart();
      }
    });
  }

  // 2. On View (Simple intersection)
  if (options.onview !== undefined) {
    instance.pause(); // Start paused
    const offset = typeof options.onview === 'number' ? options.onview : 0;

    const checkScroll = () => {
      const rect = el.getBoundingClientRect();
      if (window.innerHeight > rect.top - offset) {
        instance.play();
        window.removeEventListener('scroll', checkScroll);
      }
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check immediately
  }

  // 3. On Scroll (ScrollMagic)
  if (options.onscroll) {
    try {
      // Dynamic import ScrollMagic
      const ScrollMagicModule = await import('scrollmagic');
      const ScrollMagic = ScrollMagicModule.default || ScrollMagicModule;

      const Controller = ScrollMagic.Controller;
      const controller = new Controller();

      const sceneOptions = {
        triggerElement: options['onscroll-target'] || el,
        duration: '100%',
        triggerHook: 1
      };

      // Override with object if parsed that way (simplified here for data-attr)

      const scene = new ScrollMagic.Scene(sceneOptions)
        .addTo(controller)
        .on('progress', (e) => {
          instance.seek(instance.duration * e.progress);
        });

      // Pinning
      if (options['onscroll-pen']) {
        scene.setPin(el);
      }

    } catch (err) {
      console.warn('[AnimeHelper] ScrollMagic logic failed', err);
    }
  }
}

export function init() {
  watchDataAttr('data-anime', createAnimeInstance);
}

export default { init };
