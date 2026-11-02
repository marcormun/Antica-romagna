// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Publicada en GitHub Pages: https://marcormun.github.io/Antica-romagna/
// Si más adelante usas un dominio propio (p. ej. 'https://www.lanticaromagna.es'),
// cambia SITE por ese dominio y deja BASE en '/'.
const SITE = 'https://marcormun.github.io';
const BASE = '/Antica-romagna';

// https://astro.build/config
export default defineConfig({
  site: SITE || undefined,
  base: BASE,
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca'],
    routing: { prefixDefaultLocale: false },
  },

  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-display',
      weights: ['400', '500', '600'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  integrations: SITE
    ? [
        sitemap({
          i18n: { defaultLocale: 'es', locales: { es: 'es-ES', ca: 'ca-ES' } },
        }),
      ]
    : [],
});