import type { Lang } from '../i18n/ui';

/** Texto igual en ambos idiomas (string) o traducido ({ es, ca }). */
export type L = string | { es: string; ca: string };
export const tr = (v: L | undefined, lang: Lang) =>
  v === undefined ? undefined : typeof v === 'string' ? v : v[lang];

export interface Dish {
  name: L;
  desc?: L;
  price: string;
  /** Precio ½ metro (solo pizzas). */
  half?: string;
  tag?: L;
}

export interface Section {
  id: string;
  title: L;
  items: Dish[];
  /** Muestra las dos columnas de precio (redonda / ½ metro). */
  twoPrices?: boolean;
}

export const menu: Section[] = [
  {
    id: 'entrantes',
    title: { es: 'Entrantes', ca: 'Entrants' },
    items: [
      {
        name: { es: 'Olivas italianas', ca: 'Olives italianes' },
        price: '3,00',
        desc: {
          es: 'Aceitunas aliñadas con aceite de oliva, orégano y un toque de limón',
          ca: 'Olives amanides amb oli d’oliva, orenga i un toc de llimona',
        },
      },
      {
        name: 'Provoletta',
        price: '8,20',
        desc: {
          es: 'Provolone fundido con salsa de tomate y especias, con grissines',
          ca: 'Provolone fos amb salsa de tomàquet i espècies, amb grissines',
        },
      },
      {
        name: 'Caprese',
        price: '10,30',
        desc: {
          es: 'Mozzarella de búfala, tomates cherry confitados, rúcula y crema de balsámico de Módena, con pan focaccia',
          ca: 'Mozzarella de búfala, tomàquets cherry confitats, rúcula i crema de balsàmic de Mòdena, amb pa focaccia',
        },
      },
      {
        name: { es: 'Ensalada L’Antica', ca: 'Amanida L’Antica' },
        price: '10,30',
        desc: {
          es: 'Ensalada variada, cebolla, tomate cherry, atún y bolitas de mozzarella',
          ca: 'Amanida variada, ceba, tomàquet cherry, tonyina i boletes de mozzarella',
        },
      },
      {
        name: { es: 'Ensalada de Módena', ca: 'Amanida de Mòdena' },
        price: '10,95',
        desc: {
          es: 'Ensalada variada, cherry confitados, mozzarella de búfala, frutos secos y aliño de mermelada de higos y balsámico',
          ca: 'Amanida variada, cherry confitats, mozzarella de búfala, fruita seca i amaniment de melmelada de figues i balsàmic',
        },
      },
      {
        name: 'Antipasto L’Antica Romagna',
        price: '10,40',
        desc: {
          es: 'Jamón de Parma, rúcula, tomate cherry y virutas de parmesano con crema de balsámico, con grissines',
          ca: 'Pernil de Parma, rúcula, tomàquet cherry i encenalls de parmesà amb crema de balsàmic, amb grissines',
        },
      },
      {
        name: 'Tagliere di affettati',
        price: '12,50',
        desc: {
          es: 'Selección de embutidos italianos, con pan focaccia',
          ca: 'Selecció d’embotits italians, amb pa focaccia',
        },
      },
      {
        name: 'Tagliere di formaggi',
        price: '13,50',
        desc: {
          es: 'Selección de quesos italianos, con tostaditas y mermelada',
          ca: 'Selecció de formatges italians, amb torradetes i melmelada',
        },
      },
    ],
  },
  {
    id: 'pasta',
    title: { es: 'Pasta casera', ca: 'Pasta casolana' },
    items: [
      {
        name: { es: 'Agnollotti 7 quesos', ca: 'Agnollotti 7 formatges' },
        price: '10,70',
        desc: {
          es: 'Pasta fresca rellena de 7 quesos con salsa de nata, speck (jamón ahumado) y rúcula',
          ca: 'Pasta fresca farcida de 7 formatges amb salsa de nata, speck (pernil fumat) i rúcula',
        },
      },
      {
        name: 'Agnollotti capra e fichi',
        price: '12,50',
        desc: {
          es: 'Pasta fresca rellena de queso de cabra e higo, con crema de setas y parmesano',
          ca: 'Pasta fresca farcida de formatge de cabra i figa, amb crema de bolets i parmesà',
        },
      },
      {
        name: 'Sorrisi verdi',
        price: '11,35',
        desc: {
          es: 'Pasta rellena de ricota y espinaca, con salsa de queso o boloñesa',
          ca: 'Pasta farcida de ricota i espinacs, amb salsa de formatge o bolonyesa',
        },
      },
      {
        name: { es: 'Berenjena a la parmesana', ca: 'Albergínia a la parmesana' },
        price: '11,30',
        desc: {
          es: 'Capas de berenjena con salsa de tomate casera, mozzarella y parmesano, gratinadas al horno',
          ca: 'Capes d’albergínia amb salsa de tomàquet casolana, mozzarella i parmesà, gratinades al forn',
        },
      },
      {
        name: { es: 'Lasaña de carne con boloñesa', ca: 'Lasanya de carn amb bolonyesa' },
        price: '9,30',
        desc: {
          es: 'Capas de pasta con boloñesa casera, bechamel y parmesano, gratinada al horno',
          ca: 'Capes de pasta amb bolonyesa casolana, beixamel i parmesà, gratinada al forn',
        },
      },
      {
        name: { es: 'Pan L’Antica Romagna', ca: 'Pa L’Antica Romagna' },
        price: '3,00',
        desc: {
          es: 'Pan de la casa recién horneado con aceite de oliva y romero',
          ca: 'Pa de la casa acabat de fer amb oli d’oliva i romaní',
        },
      },
      {
        name: 'Grissines',
        price: '0,50',
        desc: {
          es: 'Palitos de pan crujientes para acompañar los entrantes',
          ca: 'Bastonets de pa cruixents per acompanyar els entrants',
        },
      },
    ],
  },
  {
    id: 'piadine',
    title: 'Piadine romagnole',
    items: [
      {
        name: '4 formaggi',
        price: '6,95',
        desc: { es: 'Mozzarella, cheddar, edam y gorgonzola', ca: 'Mozzarella, cheddar, edam i gorgonzola' },
      },
      {
        name: {
          es: 'Butifarra, cebolla, pimiento y stracchino',
          ca: 'Botifarra, ceba, pebrot i stracchino',
        },
        price: '6,95',
        desc: { es: 'Stracchino: queso cremoso', ca: 'Stracchino: formatge cremós' },
      },
      {
        name: { es: 'Frankfurt y mozzarella', ca: 'Frankfurt i mozzarella' },
        price: '5,95',
        desc: { es: 'Con kétchup, mostaza y mayonesa', ca: 'Amb kètchup, mostassa i maionesa' },
      },
      {
        name: { es: 'Mozzarella, jamón york y setas', ca: 'Mozzarella, pernil dolç i bolets' },
        price: '6,95',
        desc: {
          es: 'Piadina caliente con mozzarella fundida, jamón cocido y setas salteadas',
          ca: 'Piadina calenta amb mozzarella fosa, pernil dolç i bolets saltats',
        },
      },
      {
        name: {
          es: 'Mozzarella, rúcula y prosciutto di Parma',
          ca: 'Mozzarella, rúcula i prosciutto di Parma',
        },
        price: '6,95',
        desc: {
          es: 'Piadina con mozzarella, rúcula fresca y lonchas de prosciutto di Parma',
          ca: 'Piadina amb mozzarella, rúcula fresca i llesques de prosciutto di Parma',
        },
      },
      {
        name: 'Vegetal',
        price: '6,95',
        desc: {
          es: 'Mozzarella, berenjena, pimiento y parmesano',
          ca: 'Mozzarella, albergínia, pebrot i parmesà',
        },
      },
    ],
  },
  {
    id: 'calzone',
    title: { es: 'Calzone al gusto', ca: 'Calzone al gust' },
    items: [
      {
        name: 'Calzone simple',
        price: '9,35',
        desc: {
          es: 'Máx. 2 ingredientes (supl. 2 € por cada marisco)',
          ca: 'Màx. 2 ingredients (supl. 2 € per cada marisc)',
        },
      },
      {
        name: { es: 'Calzone completo', ca: 'Calzone complet' },
        price: '10,50',
        desc: {
          es: 'Máx. 4 ingredientes (supl. 2 € por cada marisco)',
          ca: 'Màx. 4 ingredients (supl. 2 € per cada marisc)',
        },
      },
    ],
  },
  {
    id: 'pizzas',
    title: { es: 'Nuestras pizzas', ca: 'Les nostres pizzes' },
    twoPrices: true,
    items: [
      { name: 'Emiliana', price: '11,00', half: '37,30', desc: { es: 'Tomate, mozzarella, atún, cebolla, tomate cherry y gorgonzola', ca: 'Tomàquet, mozzarella, tonyina, ceba, tomàquet cherry i gorgonzola' } },
      { name: 'Alpina', price: '11,00', half: '37,30', desc: { es: 'Tomate, mozzarella, butifarra, setas y spianata picante (salami picante)', ca: 'Tomàquet, mozzarella, botifarra, bolets i spianata picant (salami picant)' } },
      { name: 'L’Antica Romagna', price: '10,40', half: '35,05', tag: { es: 'De la casa', ca: 'De la casa' }, desc: { es: 'Tomate, mozzarella, prosciutto di Parma, tomate cherry, rúcula y virutas de parmesano', ca: 'Tomàquet, mozzarella, prosciutto di Parma, tomàquet cherry, rúcula i encenalls de parmesà' } },
      { name: 'Tonno e cipolla', price: '8,90', half: '30,00', desc: { es: 'Tomate, mozzarella, atún y cebolla', ca: 'Tomàquet, mozzarella, tonyina i ceba' } },
      { name: 'Diavola', price: '8,90', half: '30,00', tag: { es: 'Picante', ca: 'Picant' }, desc: { es: 'Tomate, mozzarella y spianata picante (salami picante)', ca: 'Tomàquet, mozzarella i spianata picant (salami picant)' } },
      { name: 'Frutti di mare', price: '12,50', half: '42,30', desc: { es: 'Tomate, mozzarella, frutos de mar, ajo y perejil', ca: 'Tomàquet, mozzarella, fruits de mar, all i julivert' } },
      { name: '4 formaggi', price: '10,00', half: '35,05', desc: { es: 'Tomate, mozzarella, edam, emmental y gorgonzola', ca: 'Tomàquet, mozzarella, edam, emmental i gorgonzola' } },
      { name: 'Pancetta e grana', price: '9,45', half: '31,95', desc: { es: 'Mozzarella, panceta y parmesano', ca: 'Mozzarella, panceta i parmesà' } },
      { name: 'Margherita', price: '8,00', half: '26,70', desc: { es: 'Tomate y mozzarella', ca: 'Tomàquet i mozzarella' } },
      { name: 'Napoli', price: '9,45', half: '31,95', desc: { es: 'Tomate, mozzarella, anchoas, orégano y aceitunas negras', ca: 'Tomàquet, mozzarella, anxoves, orenga i olives negres' } },
      { name: 'Salsiccia', price: '8,90', half: '30,00', desc: { es: 'Tomate, mozzarella, butifarra y cebolla', ca: 'Tomàquet, mozzarella, botifarra i ceba' } },
      { name: 'Romantica', price: '11,55', half: '39,10', desc: { es: 'Mozzarella, panceta, butifarra, espinacas y parmesano', ca: 'Mozzarella, panceta, botifarra, espinacs i parmesà' } },
      { name: 'Frankfurt', price: '8,30', half: '27,95', desc: { es: 'Tomate, mozzarella y frankfurt', ca: 'Tomàquet, mozzarella i frankfurt' } },
      { name: 'Capricciosa', price: '10,40', half: '35,05', desc: { es: 'Mozzarella, butifarra, jamón york, alcachofas y aceitunas negras', ca: 'Mozzarella, botifarra, pernil dolç, carxofes i olives negres' } },
      { name: 'Gabi', price: '8,90', half: '30,00', tag: { es: 'Vegetariana', ca: 'Vegetariana' }, desc: { es: 'Tomate, mozzarella, espinacas y parmesano', ca: 'Tomàquet, mozzarella, espinacs i parmesà' } },
      { name: 'Exótica', price: '9,35', half: '31,60', desc: { es: 'Tomate, mozzarella, jamón york y piña', ca: 'Tomàquet, mozzarella, pernil dolç i pinya' } },
      { name: 'Golosa', price: '10,40', half: '35,05', desc: { es: 'Mozzarella, stracchino (queso cremoso), rúcula, virutas de parmesano y crema de balsámico', ca: 'Mozzarella, stracchino (formatge cremós), rúcula, encenalls de parmesà i crema de balsàmic' } },
      { name: 'Prosciutto crudo', price: '10,00', half: '33,70', desc: { es: 'Tomate, mozzarella y prosciutto di Parma', ca: 'Tomàquet, mozzarella i prosciutto di Parma' } },
      { name: 'Modenese', price: '10,00', half: '33,70', desc: { es: 'Mozzarella, panceta, rúcula, virutas de parmesano y crema de balsámico', ca: 'Mozzarella, panceta, rúcula, encenalls de parmesà i crema de balsàmic' } },
      { name: '4 stagioni', price: '10,00', half: '33,70', desc: { es: 'Tomate, mozzarella, setas, butifarra, alcachofas y jamón york', ca: 'Tomàquet, mozzarella, bolets, botifarra, carxofes i pernil dolç' } },
      { name: 'Vegetariana', price: '10,00', half: '33,70', tag: { es: 'Vegetariana', ca: 'Vegetariana' }, desc: { es: 'Tomate, mozzarella, verduras asadas y parmesano', ca: 'Tomàquet, mozzarella, verdures rostides i parmesà' } },
      { name: 'Prosciutto cotto', price: '8,30', half: '27,95', desc: { es: 'Tomate, mozzarella y jamón york', ca: 'Tomàquet, mozzarella i pernil dolç' } },
      { name: 'Bufalina', price: '12,00', half: '39,10', tag: { es: 'Favorita', ca: 'Preferida' }, desc: { es: 'Tomate, mozzarella de búfala, tartufo, rúcula picada y parmesano', ca: 'Tomàquet, mozzarella de búfala, tartufo, rúcula picada i parmesà' } },
    ],
  },
];

/** Selección para la portada. */
export const featured: Array<{ title: L; items: Dish[] }> = [
  {
    title: { es: 'Entrantes', ca: 'Entrants' },
    items: [
      { name: 'Provoletta', price: '8,20', desc: { es: 'Provolone fundido con salsa de tomate y especias', ca: 'Provolone fos amb salsa de tomàquet i espècies' } },
      { name: 'Caprese', price: '10,30', desc: { es: 'Mozzarella de búfala, tomate cherry confitado y rúcula', ca: 'Mozzarella de búfala, tomàquet cherry confitat i rúcula' } },
      { name: 'Tagliere di affettati', price: '12,50', desc: { es: 'Selección de embutidos italianos con pan focaccia', ca: 'Selecció d’embotits italians amb pa focaccia' } },
    ],
  },
  {
    title: { es: 'Nuestras pizzas', ca: 'Les nostres pizzes' },
    items: [
      { name: 'L’Antica Romagna', price: '10,40', desc: { es: 'Prosciutto di Parma, tomate cherry, rúcula y parmesano', ca: 'Prosciutto di Parma, tomàquet cherry, rúcula i parmesà' } },
      { name: 'Margherita', price: '8,00', desc: { es: 'Tomate y mozzarella', ca: 'Tomàquet i mozzarella' } },
      { name: 'Bufalina', price: '12,00', desc: { es: 'Tomate, mozzarella de búfala, tartufo y rúcula', ca: 'Tomàquet, mozzarella de búfala, tartufo i rúcula' } },
    ],
  },
  {
    title: { es: 'Pasta casera', ca: 'Pasta casolana' },
    items: [
      { name: { es: 'Agnollotti 7 quesos', ca: 'Agnollotti 7 formatges' }, price: '10,70', desc: { es: 'Pasta fresca rellena de 7 quesos con salsa de nata', ca: 'Pasta fresca farcida de 7 formatges amb salsa de nata' } },
      { name: 'Sorrisi verdi', price: '11,35', desc: { es: 'Rellena de ricota y espinaca, salsa de queso o boloñesa', ca: 'Farcida de ricota i espinacs, salsa de formatge o bolonyesa' } },
      { name: { es: 'Lasaña de carne', ca: 'Lasanya de carn' }, price: '9,30', desc: { es: 'Con boloñesa casera, gratinada al horno', ca: 'Amb bolonyesa casolana, gratinada al forn' } },
    ],
  },
];
