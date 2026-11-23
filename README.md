# 猪原純 Official Website

軽くて、無料で、更新しやすいアーティストサイト。

- **費用**: GitHub Pages で公開（サーバー代 0円）。独自ドメイン代のみ（年1,500円前後）
- **速さ**: 静的HTML。YouTube はクリックされるまで読み込まない
- **過去ログ**: お知らせ・ライブは年ごとのアーカイブに自動で整理され、ずっと残る
- **SNS連携**: 全ページにSNSリンク、記事ごとの共有ボタン、OGP（共有時のカード画像）、RSS

## 更新のしかた

### いちばん簡単：管理画面（Pages CMS）
1. https://app.pagescms.org を開き、GitHubでログイン
2. `inohara-jun-web` リポジトリを選ぶ
3. 「ライブ」「お知らせ」などからフォームに入力して保存 → 1〜2分でサイトに反映

スマホのブラウザからも使えます。

### GitHub上で直接
`src/content/` の中にファイルが並んでいます。

| 更新したいもの | 場所 |
| --- | --- |
| ライブ | `src/content/live/` に 1公演 = 1ファイル |
| お知らせ | `src/content/news/` に 1記事 = 1ファイル |
| CD・配信 | `src/content/discography/` |
| 動画 | `src/content/videos.yaml` |
| SNSのURL・メール | `src/lib/site.ts` |
| プロフィール・年表 | `src/pages/profile.astro` |
| 写真 | `public/images/` |

ライブは日付を過ぎると、毎晩の自動更新で「過去のライブ」に移ります。

## 手元で確認する
```
npm install
npm run dev   # http://localhost:4321
```
