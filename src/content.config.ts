import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// お知らせ（ブログ）: src/content/news/*.md
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

// ライブ: src/content/live/*.md（日付が過ぎると自動で「過去のライブ」へ移動）
const live = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/live' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    area: z.string().optional(),
    act: z.string().optional(), // 例: ソロ / 屑星 / 特別ユニット
    open: z.string().optional(),
    start: z.string().optional(),
    with: z.string().optional(),
    ticket: z.string().optional(),
    link: z.string().optional(),
  }),
});

// ディスコグラフィー: src/content/discography/*.md
const discography = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/discography' }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    type: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    catalog: z.string().optional(),
    price: z.string().optional(),
    tracks: z.array(z.string()),
    buy: z.string().optional(),
    stream: z.string().optional(),
  }),
});

// 動画: src/content/videos.yaml
const videos = defineCollection({
  loader: file('./src/content/videos.yaml'),
  schema: z.object({
    title: z.string(),
    youtube: z.string(),
    note: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { news, live, discography, videos };
