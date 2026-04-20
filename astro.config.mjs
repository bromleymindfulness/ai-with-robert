import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://robertmitchell.co',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  server: {
    port: 4321,
  },
});
