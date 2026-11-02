import { routes, site, ui, withBase, type Lang } from '../i18n/ui';
import { menu, tr } from './menu';

/** Coordenadas de la ficha de Google Maps. */
export const geo = { lat: 41.4762561, lng: 1.9137826 };

const abs = (path: string, base?: URL) => (base ? new URL(path, base).href : path);

/** Datos estructurados del restaurante (schema.org/Restaurant). */
export function restaurantSchema(lang: Lang, base: URL | undefined, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': abs(withBase('/#restaurant'), base),
    name: site.name,
    alternateName: 'Pizzeria L’Antica Romagna',
    description: ui[lang]['home.desc'],
    url: abs(routes[lang].home, base),
    ...(image ? { image } : {}),
    // TODO: añade el teléfono, p. ej. telephone: '+34 93 000 00 00',
    servesCuisine: ['Italiana', 'Pizza', 'Pasta fresca', 'Piadina'],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    acceptsReservations: true,
    hasMenu: abs(routes[lang].menu, base),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      addressLocality: 'Martorell',
      addressRegion: 'Barcelona',
      postalCode: '08760',
      addressCountry: 'ES',
    },
    geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng },
    hasMap: site.mapsUrl,
    areaServed: ['Martorell', 'Baix Llobregat'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '13:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '20:00',
        closes: '23:00',
      },
    ],
    sameAs: [site.instagram],
  };
}

/** Carta completa como schema.org/Menu. */
export function menuSchema(lang: Lang, base: URL | undefined) {
  const price = (p: string) => p.replace(',', '.');
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Carta de L’Antica Romagna',
    url: abs(routes[lang].menu, base),
    inLanguage: lang,
    hasMenuSection: menu.map((section) => ({
      '@type': 'MenuSection',
      name: tr(section.title, lang),
      hasMenuItem: section.items.map((item) => ({
        '@type': 'MenuItem',
        name: tr(item.name, lang),
        ...(item.desc ? { description: tr(item.desc, lang) } : {}),
        offers: {
          '@type': 'Offer',
          price: price(item.price),
          priceCurrency: 'EUR',
        },
      })),
    })),
  };
}
