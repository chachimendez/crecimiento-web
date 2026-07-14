# Web institucional de Crecimiento — HOME

**Este archivo es la fuente de verdad del copy y la estructura del Home.**

Reglas para quien implementa (humano o Claude en VS Code):
- El copy marcado como CERRADA se aplica **literal**. No reescribir, no "mejorar", no traducir.
- Las secciones EN REVISIÓN pueden cambiar — no maquetar copy definitivo todavía, solo estructura.
- Las secciones PENDIENTE no tienen contenido aún.
- Idioma del sitio: inglés. Se traduce después.
- Decisiones de fondo registradas en `docs/memory.md` (sección "Web institucional de Crecimiento").

---

## Estructura general del Home

Orden de secciones (scroll):

1. Hero
2. Why Argentina
3. Tesis humana (puente)
4. Los tres frentes: Espacio físico · Programas · Esfuerzo regulatorio
5. Programs (incluye LDAC como "happening now")
6. Crecimiento Ecosystem (spin-offs: Anden, Lucero Ventures, Founder School)
7. Hub
8. Partners
9. Footer

Nav sticky (decisión 06/07): solo **Home** (scroll al tope) + **About us** (/about) + botón **LOG IN** → https://app.crecimiento.build/. El sol de la nav también scrollea al tope. Sin anchors a secciones.

Reglas globales del Home:
- NO se dice "crypto" en el Home (se habla de tecnología e innovación; crypto aparece en About y en algún programa).
- Sin CTAs. El sitio es informativo. Único puente interactivo: LOG IN.
- Sin sección Team.
- Números ancla oficiales: 15,000 people · 200+ startups accelerated · 220 programs · 100+ partners.
- Nunca "is positioning" en definiciones (lenguaje inspiracional, no de definición). Siempre "to position".

---

## Sección 1 — Hero — IMPLEMENTADA (pendiente OK visual de Chachi)

**Contenido:** logo lockup (sol + wordmark) + definición en versión display + franja de números + scroll cue. Sin slogan, sin CTA de conversión.

**Logo:** sol (`sun-mark-black.png`) + wordmark (`logo-black.png`) lado a lado, proporciones del lockup oficial. El sol rota lento (120s/vuelta); el hero entra con fade + subida suave.

**Definición (versión display — el sujeto es el wordmark de arriba):**

> A foundation driving **Argentina's** tech ecosystem to position the country as a *global hub for innovation*.

- "Argentina's" en semibold; "global hub for innovation" en itálica semibold.
- `text-wrap: balance` para renglones parejos.
- La definición canónica completa ("Crecimiento is a foundation...") sigue vigente para metadata, gacetillas y todo uso fuera del hero.

**Franja de números** (una línea en desktop, sin divisor):

> **OUR** *IMPACT* · +15,000 People through our programs · +200 Startups accelerated · +220 Programs · +100 Partners

- Label "OUR IMPACT" un escalón más chico que las cifras (versión C acordada).
- Cifras en columnas de ancho idéntico, centradas, con count-up al cargar (~1.4s, ease-out).
- Mobile: label arriba, cifras 2x2.

**Scroll cue:** "DISCOVER" + chevron, baja suave a la siguiente sección. Es ancla interna, no CTA.

Todo respeta `prefers-reduced-motion`.

---

## Sección 2 — The Argentina Opportunity — CERRADA (implementada)

**Título (peso mixto del brandbook):**

> THE **ARGENTINA** *OPPORTUNITY*

**Intro:**

> Argentina's tech ecosystem is in motion: startups raising capital week after week, engineers leading global teams, products built here running across the region. **Argentina has all the conditions to become a global hub for innovation.**

**/TOP TALENT**

> Argentina produces world-class engineers, scientists, developers and founders. Many hold key roles in the world's leading technology companies.

**/REAL NEED**

> Necessity shapes what gets built here. Argentine builders live close to real problems, and their products are built to solve them.

**/INSTITUTIONAL SUPPORT**

> The public sector is listening and responding to the needs of those who build, working toward a regulatory framework that matches the ecosystem's pace.

*(Intro actualizada 06/07: "...running across the region. **Behind that motion, Argentina has all the conditions to become a global hub for innovation:**")*

**Cierre:**

> The conditions took decades to build. *The convergence is happening now.*

Decisiones de copy:
- La tesis macro ("los países que crecieron en tech...") se MUDÓ al About. Esta sección es 100% momentum.
- "REAL NEED" reemplaza al eje "Adoption" (vocabulario cripto-era; la necesidad generaliza a todas las verticales).
- Sin cifras en esta sección (la de fintechs salió; los números viven en el hero).
- La tesis estructural vive suavizada en INSTITUTIONAL MOMENTUM ("regulatory framework that matches the ecosystem's pace").
- Subtexto de la sección (NUNCA explícito): orgullo. Emoción, oportunidad, orgullo.

Diseño (implementado, v2 con feedback de Chachi 04/07):
- Fondo unificado con el hero (Visionary White) para lectura continua.
- Layout: título → mapa izquierda + intro derecha (la intro cierra con la tesis en bold y DOS PUNTOS) → tres columnas a lo ancho con divisores verticales finos (recurso del brandbook) → cierre centrado.
- Tamaño de texto unificado entre intro y columnas (la jerarquía la dan el bold de la tesis y los tags, no el tamaño).
- Mapa punteado de Argentina (CON Malvinas y Tierra del Fuego, datos geográficos reales, 894 puntos): cascada norte→sur al entrar en viewport, y después "city lights" — 14 ciudades reales (BsAs, Córdoba, Rosario, Mendoza, Tucumán, Salta, Neuquén, Bariloche, MdP, Resistencia, Posadas, Comodoro, Ushuaia y Malvinas) se iluminan de a una, en blanco con halo dorado, en orden aleatorio.
- Tags en Ambition Blue con barra (/TOP TALENT).
- Componentes: `ArgentinaOpportunity.tsx` + `ArgentinaDotMap.tsx` (+ `argentina-dots.json`; scripts `gendots.mjs` y `addcities.mjs`).

## Secciones 3+4 (fusionadas) — Crecimiento + los tres frentes — CERRADA (implementada)

Una sola sección (`WhatWeDo.tsx`): statement + tesis humana + los tres frentes.

**Statement (display, centrado, a lo ancho; el remate en azul):**

> CRECIMIENTO EMERGES AS A RESPONSE TO WHAT IS **ALREADY HAPPENING IN ARGENTINA.** *(azul)*

**Cuerpo:**

> Every startup that scales solves a concrete problem for real people. Crecimiento makes it happen: an interconnected ecosystem of programs and initiatives that creates the conditions for collaboration and experimentation, supporting founders at every stage and connecting them with the right people at the right time. **The work stands on three fronts:**

**/COWORK**

> Aleph Hub, our permanent home in Buenos Aires, hosts the programs, the events and the daily activity of the ecosystem.

**/PROGRAMS**

> A system of programs that supports startups and founders at every stage, connecting them with mentors, investors and international partners.

**/REGULATORY WORK**

> Crecimiento bridges the ecosystem and public institutions, bringing the needs of those who build into the regulatory conversation.

Decisiones:
- "Builder funnel" NO va (jerga interna, regla del kit). Se dice "at every stage".
- El statement entra con reveal al scroll, pegado al cierre de la sección anterior (se lee como tercera oración de ese párrafo).
- Tags en bold, sin "THE" para que los tres pesen igual.
- Cuerpo actualizado 06/07: "Crecimiento exists so that more of them succeed:" (reemplaza "makes it happen", que no comunicaba que Crecimiento está para que las startups triunfen).
- Fotos DONE (06/07): tríptico arriba de cada columna, 3:2, optimizadas a 1200px. front-cowork (Hub con gente y cartel Aleph Hub), front-programs (sala de programa llena), front-regulatory (roundtable con luz de día). Criterio: las tres luminosas para coherencia con el fondo claro; las fotos oscuras de auditorio quedan como material para otras secciones.

## Sección 5 — Programs — PENDIENTE

Breve intro + 6 entradas: Aleph Pop-up Cities (5 ediciones) · Aleph Hackathon (5 ediciones) · Regulation Day (5 ediciones) · Acceleration · Startup World Cup · Technical Summits. LDAC con tratamiento "happening now", linkea a su sitio.

## Sección 6 — Crecimiento Ecosystem — PENDIENTE

Breve intro + los tres spin-offs (Anden, Lucero Ventures, Founder School). Sin tesis generativa. Anden: mínimo.

## Sección 7 — Hub — PENDIENTE

Aleph Hub en Workplace by IRSA. Residency y Ethereum Community Hub viven acá.

## Sección 8 — Partners — PENDIENTE

Lista a curar con Chachi. Restricciones conocidas: Solana no se nombra públicamente; Avalanche confirmar exclusividad antes de listar.

## Sección 9 — Footer — PENDIENTE

Redes + contacto + link a la plataforma.
