# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Vecinos de Martorell y del Baix Llobregat. Entran en la web, casi siempre desde el móvil, para consultar la carta y los precios, ver el horario (cierra lunes y martes) y decidir si reservan mesa o piden pizza para llevar.

## Product Purpose

Web del restaurante L’Antica Romagna (Pizzeria italiana, Passatge de Montserrat Domènech, 1, 08760 Martorell). Sirve para que un vecino encuentre en pocos segundos la carta, el horario y la forma de reservar o pedir. Funciona bien cuando consigue llamadas de reserva y de pedidos para llevar.

## Positioning

Lo que la diferencia es la masa y el producto: pizza romana de masa fina y crujiente con fermentación lenta, salsas caseras hechas cada día y producto italiano. El resto (pizza de ½ metro, pasta fresca, piadine, trato familiar) es secundario frente a esto.

## Operating Context

- Web estática en dos idiomas: castellano (por defecto, sin prefijo) y catalán (`/ca/`).
- Las reservas y los pedidos para llevar se hacen **por teléfono**. Es el canal principal y debe estar siempre a mano.
- Horario: miércoles a sábado de 13:00 a 16:00 y de 20:00 a 23:00; domingo de 20:00 a 23:00; lunes y martes cerrado. En festivos se confirma por teléfono.
- A dos minutos de la parada Solé Sauret. Instagram: @lanticaromagna.

## Capabilities and Constraints

- Astro 7, sitio estático publicado en GitHub Pages con base `/Antica-romagna` (`https://marcormun.github.io/Antica-romagna/`). Puede pasar a un dominio propio más adelante.
- Páginas: inicio, carta (`src/data/menu.ts`, con precio de pizza redonda y de ½ metro) y contacto (horario, mapa y formulario).
- Datos estructurados schema.org de Restaurant y Menu en `src/data/schema.ts`.
- **Decisiones abiertas:**
  - El número de teléfono aún no está en el código (hay un TODO en `schema.ts`) y tiene que darlo el cliente.
  - El formulario de reserva no está conectado a ningún servicio (TODO en `Contact.astro`). Como el canal es el teléfono, falta decidir si se mantiene el formulario.

## Brand Commitments

- Nombre: **L’Antica Romagna**, con apóstrofo tipográfico (’).
- El tono de los textos actuales es cercano y de casa de familia («La mesa está puesta», «Ven a vernos»).
- La web se hace para un cliente: cualquier dato de marca nuevo, asset o afirmación lo tiene que confirmar el restaurante.

## Evidence on Hand

- La carta real con precios está en `src/data/menu.ts`.
- Dirección, coordenadas, horario e Instagram reales están en `src/i18n/ui.ts` y `src/data/schema.ts`.
- Las fotos de `src/assets/img/stock/` son **provisionales** (Unsplash, ver `CREDITOS.md`) y deben cambiarse por fotos reales del local cuando el cliente las entregue.
- No hay reseñas, testimonios, premios ni logo propio confirmados. No se deben inventar.

## Product Principles

1. Teléfono, horario y carta siempre accesibles, en especial en el móvil.
2. La masa y el producto son el mensaje principal; lo demás lo apoya.
3. Solo se publican hechos verificables del restaurante: nada de reseñas, cifras ni fotos presentadas como reales sin que lo sean.
4. Castellano y catalán tienen el mismo contenido y la misma calidad.
