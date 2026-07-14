@AGENTS.md

# Crecimiento — Web institucional

## Fuentes de verdad (leer antes de tocar código)

- `docs/home.md` — copy y estructura del Home. **El copy es CANÓNICO: se aplica literal. No reescribir, no "mejorar", no traducir, no inventar textos nuevos.** Si una sección figura como PENDIENTE o EN REVISIÓN, no maquetar su copy definitivo.
- `docs/design.md` — tokens, layout y comportamientos. No inventar diseño: lo que no está especificado se pregunta, no se improvisa.
- `refs/` — screenshots del diseño objetivo. Mirarlos antes de maquetar cada sección.

## Reglas duras

- El logo SIEMPRE es asset (`assets/logo.svg`, `assets/sun.svg`). NUNCA recrear el wordmark con texto: tiene letterforms custom.
- Nunca romper la palabra "Crecimiento" (no "creci-miento"). Nunca traducirla a "Growth".
- Sin CTAs en el sitio. Único botón: LOG IN (lleva a la plataforma). No agregar JOIN ni similares.
- No decir "crypto" en el Home.
- No usar la raya em "—" en ningún texto visible.
- Colores y tipografías solo via variables CSS de `:root` (definidas en globals.css según design.md). Nada hardcodeado.
- Trabajar una sección por vez. No crear ni modificar otras secciones sin que se pida.

## Contexto

El copy se trabaja y se cierra en otra sesión (Cowork, con la carpeta comms). Los archivos de `docs/` llegan ya decididos. Este proyecto solo implementa.
