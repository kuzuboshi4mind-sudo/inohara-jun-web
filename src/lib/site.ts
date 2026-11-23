// サイト全体の基本情報。SNSのURLなどはここだけ直せば全ページに反映されます。
export const site = {
  name: '猪原 純',
  nameEn: 'Jun Inohara',
  tagline: '純粋に良い音楽を。色褪せない歌を。',
  description:
    '広島県福山市を拠点に活動するギタリスト・シンガーソングライター 猪原純（Jun Inohara）のオフィシャルサイト。ライブ情報、音源、動画、お知らせ。',
  email: 'kuzuboshi4mind@gmail.com',
};

export const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/inoharajun/' },
  { name: 'X', url: 'https://x.com/AffairJ914' },
  { name: 'YouTube', url: 'https://www.youtube.com/user/cavebear0914' },
  { name: 'Facebook', url: 'https://www.facebook.com/jun.inohara.1' },
  { name: 'LINE', url: 'https://lin.ee/WUao6dU' },
];

export const related = [
  { name: '屑星 Kuzuboshi', url: 'https://www.kuzuboshi.com' },
  { name: 'THE FROGS', url: 'https://thefrogs.jimdo.com' },
  { name: 'Feel Art Cafe', url: 'http://feel-art-cafe.jimdo.com' },
];

export const nav = [
  { label: 'News', href: 'news/' },
  { label: 'Live', href: 'live/' },
  { label: 'Music', href: 'music/' },
  { label: 'Video', href: 'video/' },
  { label: 'Profile', href: 'profile/' },
  { label: 'Contact', href: 'contact/' },
];

/** base パスを考慮したURLを作る */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

const WEEK = ['日', '月', '火', '水', '木', '金', '土'];
/** 日本時間で日付を整形（例: 2026.08.29 (土)） */
export function formatDate(d: Date, withWeek = false) {
  const jst = new Date(d.getTime() + 9 * 3600 * 1000);
  const s = `${jst.getUTCFullYear()}.${String(jst.getUTCMonth() + 1).padStart(2, '0')}.${String(jst.getUTCDate()).padStart(2, '0')}`;
  return withWeek ? `${s} (${WEEK[jst.getUTCDay()]})` : s;
}
export function jstYear(d: Date) {
  return new Date(d.getTime() + 9 * 3600 * 1000).getUTCFullYear();
}
