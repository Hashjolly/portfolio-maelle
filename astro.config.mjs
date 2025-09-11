import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://maelle-geographe.fr',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
