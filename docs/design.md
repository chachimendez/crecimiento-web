# Web institucional de Crecimiento — DESIGN SPEC

**Fuente de verdad del diseño. Para Claude en VS Code: aplicar esto literal.**
El copy vive en `docs/web/home.md` (también canónico, no reescribir).
Referencias visuales: carpeta `refs/` (screenshots del mockup de referencia).

---

## Tokens (definir como CSS variables en :root)

### Colores (del brandbook oficial, 22 Studio)

| Variable | Hex | Uso |
|----------|-----|-----|
| `--foundation-black` | `#1F1F1F` | Texto principal, logo |
| `--visionary-white` | `#FAFAFA` | Fondo base |
| `--seedling-white` | `#FFFDE7` | Fondo cálido alternativo / gradiente del glow |
| `--innovation-gold` | `#FFE908` | Glow del cursor, acentos focales |
| `--potential-yellow` | `#FDF07E` | Gradiente del glow, fondos secundarios |
| `--ambition-blue` | `#13239A` | Botón LOG IN, links de autoridad |
| `--development-blue` | `#2C509B` | Alternativa de azul para áreas grandes |
| `--transition-gray` | `#A5B4BE` | Texto secundario, labels |
| `--adaptable-gray` | `#E1DFE0` | Divisores, fondos sutiles |

### Tipografía

- **Geist** — primaria (títulos, números display, body). Pesos: Light, Regular, Medium, Bold.
- **Atkinson Hyperlegible Next** o **Mulish** — soporte si hace falta.
- Sistema de títulos de la marca: peso mixto — **Bold para keywords**, *Light/Italic para descriptores* (ej: **OUR** *IMPACT*).

---

## Assets obligatorios (sin esto, no maquetar)

- `assets/logo.svg` — lockup horizontal oficial (sol + wordmark). Exportar del Figma del brandbook. **El logo SIEMPRE se usa como asset. NUNCA recrear el wordmark con texto/tipografía**: tiene letterforms custom (punto de la "i" desplazado, "t" con rayos) que ninguna fuente reproduce.
- `assets/sun.svg` — logomark sol aislado (para la nav).
- Fuente **Geist**: cargarla explícitamente (npm `geist` en Next.js, o @font-face). Sin Geist cargada, el sitio cae en la fuente del sistema y pierde identidad. Pesos: 300, 400, 500, 700.
- `refs/` — screenshots del mockup de referencia. Claude debe mirarlos ANTES de maquetar cada sección.

## Layout del Hero (según refs/)

1. **Nav** (sticky): logomark sol a la izquierda · anchors centrados en pill (Why Argentina · Programs · Hub · Partners · About) · botón **LOG IN** a la derecha (fondo `--ambition-blue`, texto blanco, pill).
   - La pill de anchors es CLARA (fondo blanco o `--adaptable-gray`, texto `--foundation-black`), como en refs/. NO negra.
   - NO va botón JOIN (el sitio no tiene CTAs; decisión 02/07).
2. **Logo central**: lockup horizontal completo (sol + wordmark "Crecimiento"), tamaño display, centrado. Regla de marca: sol SIEMPRE a la izquierda del wordmark, nunca stackeado vertical, nunca romper la palabra.
3. **Definición** (bajada, debajo del logo): la definición canónica de `home.md`. Sentence case, Geist Light, centrada, máx ~60ch por línea. NO en mayúsculas-itálica (ilegible a esa longitud).
4. **Franja de números**: label "**OUR** *IMPACT*" (peso mixto) + 4 números en Geist Bold display:
   - `15,000` People through our programs
   - `200+` Startups accelerated
   - `220` Programs
   - `100+` Partners
   - Labels debajo de cada número en Regular, `--transition-gray` o black según contraste.

---

## Comportamiento: glow que sigue al cursor

Orbe de luz cálida que se mueve con el cursor, detrás del contenido.

Implementación sugerida:
- `div` fixed, ~700px de diámetro, `border-radius: 50%`, fondo `radial-gradient` de `--potential-yellow` (centro, ~60% opacidad) a transparente. `filter: blur(80px)`. `z-index` detrás del contenido, `pointer-events: none`.
- Sigue al mouse con **easing/lerp (~0.06 por frame, requestAnimationFrame)** — flota detrás del cursor, no lo persigue pegado. Movimiento lánguido, como luz de sol.
- **Mobile/touch**: sin cursor — el orbe deriva solo, animación lenta (~20s por ciclo) entre 2-3 posiciones.
- Respetar `prefers-reduced-motion`: orbe estático en una esquina.
- La opacidad debe ser sutil: es calidez ambiente, no un spotlight. El texto siempre 100% legible encima.

---

## Principios generales

- Fondo claro dominante, mucho aire. El sitio es institucional: sobrio, no corporativo muerto.
- Una idea por viewport aprox. — el scroll cuenta el argumento en orden (definición → tesis → frentes → programas → hub → partners).
- Sin animaciones de entrada estridentes. Fade sutil como mucho.
- Responsive: los números display pasan a grid 2x2 en mobile.
- Todos los colores/tipos via CSS variables — nada hardcodeado.
