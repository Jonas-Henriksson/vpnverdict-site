import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeAffiliateLinks } from './src/plugins/rehype-affiliate-links.mjs';

export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAffiliateLinks],
  },
  integrations: [mdx(), sitemap()],
  output: 'static',
  site: 'https://vpnverdict.net/',
  vite: { ssr: { external: ['svgo'] } }
});
