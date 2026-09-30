# Stack UI

Web curada para descubrimiento frontend: **Design + Code + AI**. Colección de webs, herramientas y recursos para diseñar, programar y trabajar con IA — todo en un solo lugar para explorar, descubrir e inspirarte.

> Estado actual: MVP en desarrollo activo con Next.js App Router.

## Qué es

Stack UI no es una librería de componentes más. Es un **directorio curado** que muestra otras webs y proyectos útiles para el desarrollo frontend, organizados en 3 pilares:

- **Agents / AI** — models, MCP, skills, prompts, `designs.md`, templates de agentes, crawling/scraping.
- **Coding** — componentes React, librerías, recursos de comunidad.
- **Design** — inspiración, design tools, templates, tokens/specs.

Filosofía: no reinventar recursos, sino **curarlos y mostrarlos** bien. Todos los recursos pertenecen a sus autores; Stack UI solo los organiza.

## Stack

- **Framework:** Next.js 16.3.5 (App Router) + React 19 + TypeScript 5
- **Estilos:** Tailwind CSS v4 + `clsx` + `tailwind-merge`
- **Motion / 3D:** GSAP 3, Motion 13, Three.js + `@react-three/fiber` + `ogl`
- **Iconos:** `lucide-react`
- **Lint:** ESLint 9 + `eslint-config-next`

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing con `DotGrid` interactivo, `RadialNav`, `Grid` y `LoopingWords` |
| `/categories` | Las 3 categorías (Agents / Coding / Design) con `CardSpotlight` |
| `/agents` | Hub de recursos IA con sidebar (models, MCP, skills, web, designs.md, docs) |
| `/components` | Placeholder — futura galería de componentes |
| `/about`, `/design` | Enlazadas en nav/cards, aún sin implementar |

## Estructura

```
app/
  page.tsx          # landing
  layout.tsx        # layout + fonts Geist
  globals.css       # Tailwind v4 + keyframes
  categories/page.tsx
  agents/page.tsx
  components/page.tsx
components/
  Header.tsx        # nav flotante
  Grid.tsx
  CardSpotlight.tsx # cards de categorías
  Radial-nav.tsx / LoopingWords.tsx / Magentic-button.tsx / Textmorph.tsx
  BackgroundRippleEffect.tsx / SideBar.tsx
  ui/               # primitivas (dotGrid, card-spotlight, Icon...)
  motion/           # hook-sidebar...
lib/
  utils.ts  ease.ts
```

## Empezar

Requisitos: Node 20+.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Edita `app/page.tsx` — hot reload activado.

## Scripts

```bash
npm run dev    # desarrollo
npm run build  # build producción
npm run start  # servir build
npm run lint   # eslint
```

## Roadmap

- [ ] Rellenar `/components`, `/about`, `/design`
- [ ] Sistema de datos real para recursos curados (hoy hardcodeado en `agents/page.tsx` y `CardSpotlight.tsx`)
- [ ] Búsqueda / filtros por categoría
- [ ] Contribuciones: cómo proponer un recurso

## Licencia

Privado por ahora (`"private": true`). Los recursos enlazados conservan la licencia de sus autores.
