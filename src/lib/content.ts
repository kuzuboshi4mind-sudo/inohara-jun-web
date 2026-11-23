import { getCollection } from 'astro:content';

/** 今日（日本時間）の0時。これより前の公演は「過去」扱い */
function todayJst() {
  const now = new Date(Date.now() + 9 * 3600 * 1000);
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) - 9 * 3600 * 1000);
}

export async function getLives() {
  const all = await getCollection('live');
  const t = todayJst().getTime();
  const upcoming = all.filter((l) => l.data.date.getTime() >= t).sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
  const past = all.filter((l) => l.data.date.getTime() < t).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return { upcoming, past };
}

export async function getNews() {
  return (await getCollection('news')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
