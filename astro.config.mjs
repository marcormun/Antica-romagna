// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// TODO: pon aquí el dominio definitivo (p. ej. 'https://www.lanticaromagna.es').
// Sin él no se generan la URL canónica, el sitemap ni las URLs absolutas de hreflang/og:image.
const SITE = '';

// https://astro.build/config
export default defineConfig({
  site: SITE || undefined,

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