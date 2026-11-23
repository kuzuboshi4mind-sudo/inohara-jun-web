import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNews } from '../lib/content';
import { site, url } from '../lib/site';

export async function GET(context: APIContext) {
  const news = await getNews();
  return rss({
    title: `${site.name} News`,
    description: site.description,
    site: context.site!,
    items: news.map((n) => ({
      title: n.data.title,
      pubDate: n.data.date,
      description: n.data.description,
      link: url(`news/${n.id}/`),
    })),
  });
}
