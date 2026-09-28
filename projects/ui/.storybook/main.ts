import type { StorybookConfig } from '@storybook/angular-vite';
import { fileURLToPath } from 'node:url';

const libRoot = fileURLToPath(new URL('..', import.meta.url));

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.ts'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: '@storybook/angular-vite',
  // Same mapping as the root tsconfig paths: serve entry points from source instead of the package self-reference.
  viteFinal: config => {
    config.resolve ??= {};
    config.resolve.alias = [
      { find: /^@gosamply\/ui\/(.+)$/, replacement: `${libRoot}$1/src/index.ts` },
      ...(Array.isArray(config.resolve.alias) ? config.resolve.alias : Object.entries(config.resolve.alias ?? {}).map(([find, replacement]) => ({ find, replacement }))),
    ];
    return config;
  },
};

export default config;
