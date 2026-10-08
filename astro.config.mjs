import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';

const vaScope = fileURLToPath(new URL('./node_modules/@department-of-veterans-affairs', import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://clinical-documentation-hub.pages.dev',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: {
    resolve: {
      // css-library uses webpack-style "~" URLs that Vite cannot resolve on its own
      alias: [{ find: /^~@department-of-veterans-affairs/, replacement: vaScope }],
    },
  },
});
