import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://ramgorthi04.github.io',
  base: '/landing',  
  integrations: [react(), tailwind()],
  outDir: './docs',
  build: {
    assets: 'astro'
  }
});