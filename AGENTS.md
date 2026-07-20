# AGENTS.md

Guía operativa para agentes y colaboradores que modifiquen este repositorio.

## Objetivo del proyecto

Este repositorio contiene el portafolio profesional de Yesser Miranda. Es un sitio Astro estático, bilingüe en el blog, estilizado con Tailwind CSS y publicado en Vercel mediante integración con Git.

Antes de hacer cambios, consulta [docs/README.md](docs/README.md) y el documento relacionado con el área que vas a tocar.

## Stack y requisitos

- Astro 7 con salida estática.
- Tailwind CSS 3 mediante `@astrojs/tailwind`.
- TypeScript en modo `strict`.
- Content Collections para los artículos Markdown del blog.
- pnpm como gestor de paquetes; conserva `pnpm-lock.yaml`.
- Node.js `>=22.12.0`.

No añadas un framework de UI, adaptador SSR o servicio externo salvo que la tarea lo requiera explícitamente.

## Comandos

Ejecuta los comandos desde la raíz del repositorio.

```sh
pnpm install
pnpm build
pnpm preview
```

### Servidor de desarrollo

Inicia siempre Astro en segundo plano:

```sh
pnpm astro dev --background
```

Administra el proceso con:

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

No inicies un servidor interactivo que quede bloqueando la terminal.

## Estructura relevante

- `src/pages/`: rutas basadas en archivos.
- `src/pages/[lang]/blog/`: listado y detalle localizado del blog.
- `src/components/layout/`: estructura compartida y navegación.
- `src/components/sections/`: secciones de la página principal.
- `src/components/SEO.astro`: metadatos, Open Graph y JSON-LD.
- `src/content/blog/`: contenido Markdown por idioma.
- `src/content.config.ts`: loader y esquema de la colección `blog`.
- `src/lib/`: configuración del sitio y helpers puros del blog.
- `src/styles/global.css`: entrada global de Tailwind.
- `public/`: archivos servidos sin transformación.
- `docs/`: arquitectura, diseño, flujo de información y despliegue.

Usa los alias definidos en `tsconfig.json` (`@components`, `@layout`, `@sections`, `@lib`, etc.) en lugar de rutas relativas largas.

## Convenciones de implementación

- Mantén las páginas y componentes en Astro salvo que una interacción requiera JavaScript en el cliente.
- Minimiza el JavaScript enviado al navegador; el sitio debe seguir siendo estático por defecto.
- Reutiliza `BaseLayout.astro`, `Header.astro` y `SEO.astro` en páginas públicas completas.
- Centraliza el dominio y valores compartidos de SEO en `src/lib/site.ts`.
- Conserva la estética existente: fondo slate oscuro, acentos cyan/violet/emerald, bordes sutiles, esquinas `rounded-lg` y layouts responsivos.
- Incluye estados de foco visibles y HTML semántico. No elimines el enlace de salto al contenido.
- No edites `dist/`, `.astro/` ni dependencias generadas; se regeneran durante el build.

## Rutas e internacionalización

Astro configura `es` y `en`, con `es` como idioma predeterminado y prefijo obligatorio. Las páginas generales actuales permanecen sin prefijo; el blog localizado vive bajo `/{lang}/blog`.

Al cambiar el blog, conserva estos comportamientos:

- `/blog` lista las entradas de ambos idiomas.
- `/blog/[slug]` detecta el idioma del navegador y redirige a la variante localizada; sin JavaScript usa español.
- `/{lang}/blog` filtra la colección por idioma.
- `/{lang}/blog/[slug]` renderiza el artículo y publica enlaces `hreflang`.

Para añadir un artículo, crea una variante en `src/content/blog/<carpeta>/` con frontmatter válido:

```yaml
title: "Título"
description: "Resumen"
pubDate: "YYYY-MM-DD"
lang: "es"
tags: ["tema"]
slug: "slug-compartido"
```

Usa el mismo `slug` en las traducciones y un valor `lang` de `es` o `en`. El esquema se valida durante el build.

## SEO y archivos públicos

- Cada página pública debe definir título, descripción, URL canónica e imagen mediante `SEO.astro`.
- En contenido localizado, actualiza los enlaces alternativos `hreflang`.
- Si se agregan o retiran rutas indexables, actualiza `public/sitemap.xml` y revisa `public/robots.txt`.
- Las URLs canónicas deben usar el dominio configurado en `src/lib/site.ts`.

## Vercel

El repositorio no usa `vercel.json` ni adaptador de Vercel: el resultado esperado es un sitio estático en `dist/`. Un push al repositorio conectado dispara la instalación, `pnpm build` y el despliegue de ese artefacto. La rama de producción y los dominios se administran en Vercel.

No cambies el modo de salida, el directorio de build o la estrategia de despliegue sin actualizar `docs/deployment.md`.

## Verificación obligatoria

Después de cualquier cambio de código o contenido:

1. Ejecuta `pnpm build`.
2. Confirma que no haya errores de esquema, tipos, imports o generación de rutas.
3. Revisa las rutas afectadas con `pnpm preview` o el servidor en segundo plano cuando el cambio sea visual.
4. Comprueba `git diff` y evita incluir cambios ajenos a la tarea.

Para cambios de documentación, valida enlaces, nombres de archivo y comandos contra el repositorio actual; ejecuta el build si la documentación describe el comportamiento de producción.

## Documentación oficial

Consulta la documentación oficial antes de trabajar en estas áreas:

- [Estructura del proyecto](https://docs.astro.build/en/basics/project-structure/)
- [Rutas, rutas dinámicas y middleware](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Componentes de React, Vue, Svelte u otros frameworks](https://docs.astro.build/en/guides/framework-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Estilos y Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)
- [Despliegue en Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
