# Guía del blog — cómo cargar una nota

El blog es file-based: cada nota es un archivo Markdown en `content/blog/`. No hay CMS ni servicios externos.

## Pasos

1. Crear un archivo `.md` en `content/blog/`. El nombre del archivo es la URL: `aleph-hackathon.md` → `/blog/aleph-hackathon`. Usar kebab-case, sin espacios ni acentos.
2. Arriba del archivo va el frontmatter entre `---`:

```markdown
---
title: "Título de la nota"
lang: es            # "es" → aparece en /es/blog · "en" → aparece en /blog
date: "2026-07-15"
excerpt: "Una o dos líneas para la card del índice."
tag: "Program"      # Program, Recap o Editorial
cover: "/images/blog/mi-imagen.png"
draft: true
---

Cuerpo de la nota en Markdown...
```

3. `draft: true` mantiene la nota fuera de producción (solo se ve en `npm run dev`). Al sacarle esa línea, se publica en el próximo deploy.
4. Las imágenes de las notas van en `public/images/blog/`.
   **Portadas: proporción 3:2, ideal 1800×1200px o más.** La card del índice muestra la imagen completa; la cabecera de la nota recorta ~15% arriba y abajo, así que texto, logos y caras van siempre en la banda central (nunca pegados al borde superior o inferior).
5. Publicar: `vercel` (o `vercel --prod`).

## Contenido enriquecido (sintaxis propia)

- **Imagen en el cuerpo**: `![descripción](/images/blog/foto.jpg)` (la foto primero se copia a `public/images/blog/`).
- **Botón a un form o link**: `[button:Aplicá al programa](https://url-del-form)` — se renderiza como botón azul de marca, abre en pestaña nueva.
- **Video de YouTube**: `[video](https://www.youtube.com/watch?v=XXXX)` — se incrusta el reproductor responsive (usa youtube-nocookie). También acepta URLs de embed de otras plataformas.

## Reglas de copy (de docs/memory.md de comms)

- El copy de cada nota se cierra en sesión de Cowork antes de cargarse.
- Sin raya em "—". Nunca "Growth". Prosa, no telegrama.
- El blog se estrena públicamente cuando haya 4-5 notas listas (no linkear desde el footer antes de eso).

## Rutas del sistema

- Índice: `/blog` (`app/blog/page.tsx`)
- Nota: `/blog/[slug]` (`app/blog/[slug]/page.tsx`)
- Motor: `lib/blog.ts`
- Nota de ejemplo (borrarla cuando haya reales): `content/blog/hola-blog.md`
