export const languages = { es: 'ES', ca: 'CA' } as const;
export type Lang = keyof typeof languages;
export type PageKey = 'home' | 'menu' | 'contact';

/** Antepone el `base` de astro.config.mjs (p. ej. '/Antica-romagna') a una ruta absoluta. */
export const withBase = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;

/** Rutas de cada página en cada idioma (el castellano va sin prefijo). */
export const routes: Record<Lang, Record<PageKey, string>> = {
  es: { home: withBase('/'), menu: withBase('/carta/'), contact: withBase('/contacto/') },
  ca: { home: withBase('/ca/'), menu: withBase('/ca/carta/'), contact: withBase('/ca/contacte/') },
};

export const site = {
  name: 'L’Antica Romagna',
  street: 'Passatge de Montserrat Domènech, 1',
  city: '08760 Martorell (Barcelona)',
  instagram: 'https://www.instagram.com/lanticaromagna/',
  instagramHandle: '@lanticaromagna',
  mapsUrl:
    "https://www.google.com/maps/place/Pizzeria+L'Antica+Romagna/@41.4762746,1.9138367,20.25z/data=!4m15!1m8!3m7!1s0x12a48ecde0ce7f8f:0x8da9069fb730d4bb!2sPassatge+de+Montserrat+Dom%C3%A8nech,+1,+08760+Martorell,+Barcelona!3b1!8m2!3d41.4762544!4d1.9138358!16s%2Fg%2F11b8v5ypq7!3m5!1s0x12a48ecdee2217f9:0xe5d1d7edbc055bd8!8m2!3d41.4762561!4d1.9137826!16s%2Fg%2F1wb441dk?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbed:
    'https://www.google.com/maps?q=Pizzeria+L%27Antica+Romagna,+Passatge+de+Montserrat+Dom%C3%A8nech+1,+08760+Martorell&z=18&output=embed',
};

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.menu': 'La carta',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar mesa',
    'nav.open': 'Abrir menú',
    'nav.close': 'Cerrar menú',
    'nav.lang': 'Idioma',
    tagline: 'Pizzeria italiana · Martorell',

    'home.title': 'Pizzeria italiana en Martorell',
    'home.desc':
      'Restaurante italiano en Martorell: pizza romana de masa fina, pasta fresca casera y piadine de la Romagna. Reserva mesa o pide para llevar.',
    'home.h1a': 'La pizza romana',
    'home.h1b': 'de masa fina,',
    'home.h1c': 'como manda la tradición',
    'home.lead':
      'Masa finísima y crujiente, salsas caseras y producto italiano. Cocina de la Romagna en el corazón de Martorell, con el trato de una casa de familia.',
    'home.ctaMenu': 'Ver la carta',
    'home.badge': 'Fermentación lenta',
    'home.badgeSub': 'Masa fina y crujiente',
    'home.fact1': 'Pizzas en carta',
    'home.fact2': 'Para compartir',
    'home.fact3': 'Salsas caseras',
    'home.fact2v': '½ metro',
    'home.fact3v': 'Cada día',
    'home.menuKicker': 'La carta',
    'home.menuTitle': 'Una selección de la casa',
    'home.menuAll': 'Carta completa',
    'home.galleryKicker': 'Galería',
    'home.galleryTitle': 'La casa y la cocina',
    'home.ctaTitle': 'La mesa está puesta',
    'home.ctaText':
      'Reserva tu mesa o pide tu pizza para llevar. Te esperamos en el centro de Martorell.',
    'home.ctaHours': 'Horarios y ubicación',

    'menu.title': 'La carta',
    'menu.seoTitle': 'Carta: pizzas romanas, pasta fresca y piadine',
    'menu.desc':
      'Carta de la pizzeria italiana L’Antica Romagna en Martorell: 23 pizzas romanas de masa fina (también de ½ metro), pasta fresca, piadine y calzone. Para llevar.',
    'menu.lead':
      'Pizza romana de masa fina, pasta fresca y piadine de la Romagna. También para llevar.',
    'menu.jump': 'Ir a la sección',
    'menu.round': 'Redonda',
    'menu.half': '½ metro',
    'menu.footnote': 'Consulta alérgenos al personal de sala. Precios con IVA incluido.',
    'menu.ctaTitle': '¿Te apetece?',
    'menu.ctaText': 'Reserva tu mesa o llámanos para pedir para llevar.',


    'contact.title': 'Reservas, horario y cómo llegar',
    'contact.desc':
      'Reserva mesa en L’Antica Romagna, pizzeria italiana en Martorell (Passatge de Montserrat Domènech, 1). Horarios, cómo llegar y pizza para llevar.',
    'contact.kicker': 'Contacto y reservas',
    'contact.h1': 'Ven a vernos',
    'contact.lead':
      'Reserva tu mesa o pide tu pizza para llevar. Estamos en el centro de Martorell.',
    'contact.hours': 'Horarios',
    'contact.where': 'Dónde estamos',
    'contact.note':
      'A dos minutos de la parada Solé Sauret. También preparamos pizzas para llevar. En festivos, confirma el horario por teléfono.',
    'contact.directions': 'Cómo llegar',
    'contact.instagram': 'Síguenos en Instagram',
    'contact.mapTitle': 'Mapa de L’Antica Romagna en Martorell',
    'contact.closed': 'Cerrado',
    'contact.openNow': 'Abierto ahora',
    'contact.closedNow': 'Cerrado ahora',

    'form.kicker': 'Reservas',
    'form.title': 'Reserva tu mesa',
    'form.name': 'Nombre',
    'form.namePh': 'Tu nombre',
    'form.phone': 'Teléfono',
    'form.date': 'Fecha',
    'form.time': 'Hora',
    'form.pax': 'Comensales',
    'form.note': 'Nota (opcional)',
    'form.notePh': 'Alergias, trona, terraza…',
    'form.submit': 'Enviar reserva',
    'form.meta': 'Te confirmamos por teléfono en menos de una hora.',
    'form.ok': '¡Gracias! Hemos recibido tu solicitud. Te llamaremos para confirmar.',
    'form.error': 'Revisa los campos marcados.',

    'footer.hours': 'Horario',
    'footer.visit': 'Visítanos',
    'footer.follow': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
  },
  ca: {
    'nav.home': 'Inici',
    'nav.menu': 'La carta',
    'nav.contact': 'Contacte',
    'nav.book': 'Reservar taula',
    'nav.open': 'Obrir menú',
    'nav.close': 'Tancar menú',
    'nav.lang': 'Idioma',
    tagline: 'Pizzeria italiana · Martorell',

    'home.title': 'Pizzeria italiana a Martorell',
    'home.desc':
      'Restaurant italià a Martorell: pizza romana de massa fina, pasta fresca casolana i piadine de la Romagna. Reserva taula o demana per emportar.',
    'home.h1a': 'La pizza romana',
    'home.h1b': 'de massa fina,',
    'home.h1c': 'com mana la tradició',
    'home.lead':
      'Massa finíssima i cruixent, salses casolanes i producte italià. Cuina de la Romagna al cor de Martorell, amb el tracte d’una casa de família.',
    'home.ctaMenu': 'Veure la carta',
    'home.badge': 'Fermentació lenta',
    'home.badgeSub': 'Massa fina i cruixent',
    'home.fact1': 'Pizzes a la carta',
    'home.fact2': 'Per compartir',
    'home.fact3': 'Salses casolanes',
    'home.fact2v': '½ metre',
    'home.fact3v': 'Cada dia',
    'home.menuKicker': 'La carta',
    'home.menuTitle': 'Una selecció de la casa',
    'home.menuAll': 'Carta completa',
    'home.galleryKicker': 'Galeria',
    'home.galleryTitle': 'La casa i la cuina',
    'home.ctaTitle': 'La taula està parada',
    'home.ctaText':
      'Reserva la teva taula o demana la pizza per emportar. T’esperem al centre de Martorell.',
    'home.ctaHours': 'Horaris i ubicació',

    'menu.title': 'La carta',
    'menu.seoTitle': 'Carta: pizzes romanes, pasta fresca i piadine',
    'menu.desc':
      'Carta de la pizzeria italiana L’Antica Romagna a Martorell: 23 pizzes romanes de massa fina (també de ½ metre), pasta fresca, piadine i calzone. Per emportar.',
    'menu.lead':
      'Pizza romana de massa fina, pasta fresca i piadine de la Romagna. També per emportar.',
    'menu.jump': 'Anar a la secció',
    'menu.round': 'Rodona',
    'menu.half': '½ metre',
    'menu.footnote': 'Consulta els al·lèrgens al personal de sala. Preus amb IVA inclòs.',
    'menu.ctaTitle': 'Et ve de gust?',
    'menu.ctaText': 'Reserva la teva taula o truca’ns per demanar per emportar.',


    'contact.title': 'Reserves, horari i com arribar-hi',
    'contact.desc':
      'Reserva taula a L’Antica Romagna, pizzeria italiana a Martorell (Passatge de Montserrat Domènech, 1). Horaris, com arribar-hi i pizza per emportar.',
    'contact.kicker': 'Contacte i reserves',
    'contact.h1': 'Vine a veure’ns',
    'contact.lead':
      'Reserva la teva taula o demana la pizza per emportar. Som al centre de Martorell.',
    'contact.hours': 'Horaris',
    'contact.where': 'On som',
    'contact.note':
      'A dos minuts de la parada Solé Sauret. També preparem pizzes per emportar. En festius, confirma l’horari per telèfon.',
    'contact.directions': 'Com arribar-hi',
    'contact.instagram': 'Segueix-nos a Instagram',
    'contact.mapTitle': 'Mapa de L’Antica Romagna a Martorell',
    'contact.closed': 'Tancat',
    'contact.openNow': 'Obert ara',
    'contact.closedNow': 'Tancat ara',

    'form.kicker': 'Reserves',
    'form.title': 'Reserva la teva taula',
    'form.name': 'Nom',
    'form.namePh': 'El teu nom',
    'form.phone': 'Telèfon',
    'form.date': 'Data',
    'form.time': 'Hora',
    'form.pax': 'Comensals',
    'form.note': 'Nota (opcional)',
    'form.notePh': 'Al·lèrgies, trona, terrassa…',
    'form.submit': 'Enviar reserva',
    'form.meta': 'Et confirmem per telèfon en menys d’una hora.',
    'form.ok': 'Gràcies! Hem rebut la teva sol·licitud. Et trucarem per confirmar-la.',
    'form.error': 'Revisa els camps marcats.',

    'footer.hours': 'Horari',
    'footer.visit': 'Visita’ns',
    'footer.follow': 'Segueix-nos',
    'footer.rights': 'Tots els drets reservats.',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui.es[key];
}

/** Horario: 0 = domingo … 6 = sábado. Cada tramo en minutos desde medianoche. */
export const schedule: Record<number, Array<[number, number]>> = {
  0: [[20 * 60, 23 * 60]],
  1: [],
  2: [],
  3: [[13 * 60, 16 * 60], [20 * 60, 23 * 60]],
  4: [[13 * 60, 16 * 60], [20 * 60, 23 * 60]],
  5: [[13 * 60, 16 * 60], [20 * 60, 23 * 60]],
  6: [[13 * 60, 16 * 60], [20 * 60, 23 * 60]],
};

export const hoursTable: Record<Lang, Array<{ days: string; hours: string | null }>> = {
  es: [
    { days: 'Miércoles – Sábado', hours: '13:00–16:00 · 20:00–23:00' },
    { days: 'Domingo', hours: '20:00–23:00' },
    { days: 'Lunes y martes', hours: null },
  ],
  ca: [
    { days: 'Dimecres – Dissabte', hours: '13:00–16:00 · 20:00–23:00' },
    { days: 'Diumenge', hours: '20:00–23:00' },
    { days: 'Dilluns i dimarts', hours: null },
  ],
};
