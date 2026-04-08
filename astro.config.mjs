import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  output: 'static',
  site: 'https://vpnverdict.net/',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
