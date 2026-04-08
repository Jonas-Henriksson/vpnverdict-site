import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [mdx(), sitemap()],
  output: 'static',
  site: 'https://vpnverdict.net/',
  vite: { ssr: { external: ['svgo'] } }
});
