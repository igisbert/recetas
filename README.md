# Mis Recetas

Un recetario personal construido con **Astro** y **MDX**. El objetivo es simple: tener en un solo lugar los platos que cocino habitualmente, sin depender de búsquedas en Google ni perder tiempo preguntando a una IA cada vez.

Está pensado para consultarse desde el móvil o la tablet mientras se cocina.

## Características

- **Escalado de ingredientes** — las cantidades se ajustan automáticamente al número de comensales.
- **Pasos interactivos** — guía paso a paso para no perder el hilo durante la preparación.
- **Categorías** — recetas organizadas por tipo (legumbres, pasta, postres…) para encontrar rápido lo que toca.
- **Fichas completas** — dificultad, información nutricional y notas personales por receta.

## Añadir una receta

1. Copiar `RECETA_PLANTILLA.mdx` de la raíz del proyecto.
2. Pegarlo en la carpeta `src/content/recipes/` con el nombre que quieras (ej: `tortilla-patatas.mdx`).
3. Rellenar el frontmatter y escribir los pasos.

## Comandos

```bash
pnpm dev      # Servidor local en localhost:4321
pnpm build    # Genera la versión de producción
```
