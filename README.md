# Samply UI

Sistema de diseño de Samply, que se publica como el paquete `@gosamply/ui`. Contiene los componentes helm de [spartan/ui](https://spartan.ng) con el tema de Samply (slate, estilo maia, colores success/warning y modo oscuro), documentados en Storybook.

Stack: Angular 21, ng-packagr, Tailwind v4, Storybook 10 (`@storybook/angular-vite`) y pnpm 11.

## Estructura

```
projects/ui/
├─ <componente>/        un secondary entry point por componente (@gosamply/ui/<componente>)
│  ├─ ng-package.json
│  └─ src/index.ts, src/lib/*.ts
├─ theme.css            tokens light/dark y preset de spartan; se publica como @gosamply/ui/theme.css
├─ stories/             una story por componente
└─ .storybook/
```

## Comandos

| Comando | Qué hace |
| --- | --- |
| `pnpm storybook` | Storybook en http://localhost:6006 |
| `pnpm build` | Compila la librería en `dist/ui` |
| `pnpm build-storybook` | Genera el Storybook estático en `storybook-static/` |
| `pnpm release` | Compila la librería y publica `dist/ui` como tag `v<version>` |

## Añadir un componente de spartan

```bash
pnpm ng g @spartan-ng/cli:ui <nombre>
```

`components.json` ya apunta a `projects/ui` con el alias `@gosamply/ui`. Después de generar el componente:

1. Crea `projects/ui/<nombre>/ng-package.json` con `{ "lib": { "entryFile": "src/index.ts" } }`.
2. Añade `projects/ui/stories/<nombre>.stories.ts`.
3. Si el CLI añadió dependencias al `package.json` raíz, decláralas también en `projects/ui/package.json`: como `peerDependencies` si tienen estado o *injection tokens* (Angular, cdk, brain o ng-icons), o como `dependencies` si son utilidades puras.

## Publicar una versión

1. Sube `version` en `projects/ui/package.json`.
2. Haz commit de los cambios.
3. Ejecuta `pnpm release`.

El script compila la librería, hace commit de `dist/ui` en la raíz de un tag `v<version>` y lo sube a `origin`. El commit del tag tiene como padre el commit de código, de modo que cada versión se puede rastrear hasta su código fuente.

## Consumir desde una app

```bash
pnpm add @gosamply/ui@github:<org>/<repo>#v0.1.0
# con repo privado y SSH:
pnpm add @gosamply/ui@git+ssh://git@github.com/<org>/<repo>.git#v0.1.0
```

La app debe tener instalados los peers: `@angular/*` ^21, `@angular/cdk`, `@spartan-ng/brain`, `@ng-icons/core` y `@ng-icons/lucide` ^34, `tailwindcss` ^4 y `tw-animate-css`.

En la hoja de estilos global, después de Tailwind:

```css
@import '@gosamply/ui/theme.css';
```

Añade también `provideSpartanHlm()` (de `@gosamply/ui/utils`) a los providers de la app. `theme.css` incluye `@source './fesm2022'`, así que el Tailwind de la app escanea las clases de la librería aunque esté en `node_modules`.

**Nota:** `@ng-icons` 35 o superior exige Angular 22. Con Angular 21 hay que usar `^34`.
