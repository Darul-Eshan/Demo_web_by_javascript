const path = require('path');

// Try to load the @tailwindcss/vite plugin if installed. Keep it optional so requiring
// the config won't fail on machines where the package isn't installed yet.
let tailwindVitePlugin = null;
try {
  tailwindVitePlugin = require('@tailwindcss/vite');
} catch (e) {
  // leave plugin as null; when Vite runs it will still work but without the plugin
}

const plugins = [];
// Initialize the tailwind plugin instance (if available) and push it into plugins.
let tailwindPlugin = null;
if (tailwindVitePlugin) {
  const factory = typeof tailwindVitePlugin === 'function'
    ? tailwindVitePlugin
    : (tailwindVitePlugin && typeof tailwindVitePlugin.default === 'function' ? tailwindVitePlugin.default : null);

  if (factory) {
    try {
      tailwindPlugin = factory();
    } catch (e) {
      // Don't throw during require — keep the config importable.
      // eslint-disable-next-line no-console
      console.warn('Could not initialize @tailwindcss/vite plugin:', e && e.message);
    }
  } else if (typeof tailwindVitePlugin === 'object' && tailwindVitePlugin !== null) {
    tailwindPlugin = tailwindVitePlugin;
  }
}

if (tailwindPlugin) plugins.push(tailwindPlugin);

/**
 * Minimal Vite config (CommonJS)
 * - sets root to project root
 */
module.exports = {
  root: path.resolve(__dirname),
  plugins,
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
};
