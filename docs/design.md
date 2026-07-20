# Diseño de interfaz

## 1. Dirección visual

La interfaz busca comunicar un perfil técnico y profesional mediante una estética oscura, alto contraste, bloques sobrios y acentos luminosos. La composición evita decoraciones pesadas y prioriza jerarquía, legibilidad y velocidad.

Principios:

- Claridad antes que densidad visual.
- Una acción principal evidente por sección.
- Componentes simples, rectangulares y consistentes.
- Color de acento reservado para acciones, etiquetas y datos relevantes.
- Movimiento breve que no impida acceder al contenido.

## 2. Sistema visual actual

### Color

| Rol | Clases predominantes | Uso |
| --- | --- | --- |
| Fondo raíz | `bg-slate-950` | Lienzo general |
| Superficie | `bg-slate-900/60`, `bg-slate-900/80` | Tarjetas y bloques elevados |
| Borde | `border-slate-800`, `border-slate-700` | Separación sutil |
| Texto principal | `text-white`, `text-slate-100` | Títulos y contenido prioritario |
| Texto secundario | `text-slate-300`, `text-slate-400` | Descripciones y metadata |
| Acento primario | `cyan-300`, `cyan-400` | CTA, enlaces y énfasis |
| Acentos secundarios | `violet-300`, `emerald-300/400` | Categorías y estados |

El contraste debe conservarse sobre superficies oscuras. No se debe usar color como única señal de estado.

### Forma y profundidad

- Radio estándar: `rounded-lg`.
- Tarjetas: borde de 1 px, fondo slate semitransparente y sin sombra intensa.
- CTA principal: fondo cyan, texto slate oscuro y sombra cyan tenue.
- Elementos decorativos: gradientes radiales discretos en el Hero.

### Tipografía

El proyecto utiliza la familia sans-serif predeterminada de Tailwind. La jerarquía se construye con peso, tamaño, tracking y espaciado:

- H1 principal: `text-4xl` a `md:text-6xl`, `font-bold`, `tracking-tight`.
- Encabezados de sección: `text-3xl` a `md:text-4xl`.
- Etiquetas: mayúsculas, `text-sm`, peso semibold y tracking amplio.
- Texto editorial: ancho limitado, interlineado `leading-7` o `leading-8`.

## 3. Composición

`BaseLayout` usa una columna de altura mínima igual al viewport. Header ocupa la parte superior; `main` crece para completar la página. Las secciones aplican `px-6` y limitan su contenido normalmente a `max-w-6xl`, `max-w-4xl` o `max-w-3xl`.

```text
┌──────────────────────────────────────────┐
│ Header: marca + navegación               │
├──────────────────────────────────────────┤
│ Main                                     │
│  ┌────────────────────────────────────┐  │
│  │ Sección / contenido con max-width  │  │
│  │ jerarquía + grid responsive        │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

La portada se ordena como Hero → Stack tecnológico → Métricas de impacto. El blog utiliza una columna editorial; las tarjetas del índice son el punto de entrada hacia cada artículo.

## 4. Responsive

El diseño parte de móvil y añade composición horizontal desde breakpoints de Tailwind:

- Navegación y espaciados permanecen compactos en móvil.
- Botones del Hero se apilan y pasan a fila desde `sm`.
- Métricas pasan a dos columnas desde `sm` y a composición de dos áreas desde `lg`.
- Stack tecnológico pasa a tres columnas desde `md`.
- El indicador de scroll del Hero se oculta en móvil.

Todo componente nuevo debe ser usable primero a 320 px y evitar anchos rígidos.

## 5. Interacción y movimiento

El Hero contiene dos movimientos:

- Entrada escalonada con `fade-in` y retrasos de 200 a 900 ms.
- Indicador vertical de scroll con animación continua.
- Texto de roles escrito y borrado mediante JavaScript.

Las interacciones usan transiciones de aproximadamente 300 ms. Al ampliar el sistema, respeta `prefers-reduced-motion` para usuarios que reduzcan animaciones; actualmente es una mejora pendiente.

## 6. Accesibilidad

Elementos ya presentes:

- Idioma declarado en `<html>`.
- Enlace “Saltar al contenido”.
- Landmarks `header`, `nav`, `main`, `section` y `article`.
- Estados de foco explícitos en los CTA del Hero.
- Labels visibles en el formulario.

Criterios para cambios futuros:

- Mantener un solo H1 descriptivo por página.
- Añadir `aria-label` solo cuando el texto visible no sea suficiente.
- Conservar foco visible en enlaces, botones y campos.
- Validar contraste AA.
- Incluir texto alternativo en imágenes informativas.
- Evitar depender exclusivamente de hover o animación.

## 7. SEO y diseño del contenido

`SEO.astro` genera descripción, canonical, Open Graph, Twitter Card y JSON-LD. Admite tipo `website` o `article`, breadcrumbs y locale. Los artículos localizados publican `hreflang` para relacionar traducciones.

Cada página nueva debe aportar:

- Título único y descriptivo.
- Resumen apto para resultados de búsqueda.
- URL canónica absoluta.
- Imagen social absoluta.
- Breadcrumb coherente.
- Variante de idioma cuando exista traducción.

## 8. Extensión del sistema

Al crear nuevas secciones:

1. Reutiliza la escala de color y espaciado existente.
2. Extrae un componente cuando el bloque sea reutilizable o tenga datos propios.
3. Usa arrays tipados y `.map()` para grupos repetidos.
4. Evita CSS global adicional si Tailwind expresa el diseño con claridad.
5. Mantén el contenido legible sin JavaScript.
6. Verifica móvil, teclado y modo de movimiento reducido.
