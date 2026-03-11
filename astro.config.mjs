// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://recetas-cocina.pages.dev',
  integrations: [mdx()],
  server: {
    host: true,
    port: 4321,
  },
});