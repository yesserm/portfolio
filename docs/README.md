# Documentación técnica de Yesser Portfolio

Esta carpeta describe el estado actual del portafolio, cómo se organiza y cómo llega la información desde el contenido fuente hasta el navegador y Vercel.

## Índice

- [Arquitectura](architecture.md): capas, estructura, rutas, dependencias y decisiones técnicas.
- [Diseño](design.md): sistema visual, composición, responsive, accesibilidad y criterios de interfaz.
- [Flujo de información](information-flow.md): contenido, build estático, navegación y JavaScript del cliente.
- [Despliegue](deployment.md): proceso desde un push hasta Vercel, configuración y verificaciones.

## Resumen ejecutivo

Yesser Portfolio es un sitio de presentación profesional construido con Astro 7 y Tailwind CSS 3. Astro transforma componentes `.astro` y artículos Markdown en HTML estático durante `pnpm build`. El resultado se escribe en `dist/` y no necesita un servidor de aplicación en producción.

El blog utiliza una Content Collection validada con Zod y genera páginas en español e inglés. El resto del sitio presenta inicio, proyectos y contacto. Los metadatos SEO se encapsulan en un componente común y los archivos de `public/` se copian sin procesamiento.

La publicación se basa en la integración Git de Vercel: cada push recibido por el repositorio conectado inicia un build; Vercel decide si el resultado es un Preview Deployment o Production Deployment según la rama configurada en el proyecto.

## Fuente de verdad

La documentación refleja el código inspeccionado el 20 de julio de 2026. Ante una diferencia, el código y la configuración desplegada en Vercel son la fuente operativa de verdad. Todo cambio estructural debe actualizar el documento correspondiente.

## Inicio rápido

Requisitos: Node.js `>=22.12.0` y pnpm.

```sh
pnpm install
pnpm astro dev --background
pnpm build
pnpm preview
```

Consulta [AGENTS.md](../AGENTS.md) para las reglas de trabajo del repositorio.
