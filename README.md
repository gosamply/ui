# @gosamply/ui

Samply design system: spartan/ui helm components (Angular 21, Tailwind v4) with the Samply theme.

## Install

```bash
pnpm add @gosamply/ui@github:<org>/<repo>#v0.1.0
pnpm add @angular/cdk @spartan-ng/brain @ng-icons/core@^34 @ng-icons/lucide@^34 tailwindcss tw-animate-css
```

## Setup

Global stylesheet, after Tailwind:

```css
@import 'tailwindcss';
@import '@gosamply/ui/theme.css';
```

`app.config.ts`:

```ts
import { provideSpartanHlm } from '@gosamply/ui/utils';

export const appConfig: ApplicationConfig = { providers: [provideSpartanHlm()] };
```

Each component is its own entry point:

```ts
import { HlmButtonImports } from '@gosamply/ui/button';
```

Dark mode: add the `dark` class to `<html>`.
