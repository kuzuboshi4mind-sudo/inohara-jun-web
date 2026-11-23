import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 独自ドメインで公開するときは SITE_URL / BASE_PATH をワークフローで切り替えます
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.inohara-jun-web.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
