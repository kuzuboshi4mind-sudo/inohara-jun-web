# Wix → GitHub Pages 引越し手順書

目的：**`www.inohara-jun-web.com` の URL と検索エンジンでの評価をそのまま引き継いで**、Wix を卒業する。

## 0. 現状（2026-11-23 調査）

| 項目 | 状況 |
| --- | --- |
| ドメイン登録先 | Wix（2018-08-30 取得 / **有効期限 2028-08-30**） |
| DNS 管理 | Wix（NS4/NS5.WIXDNS.NET） |
| 正式URL | `https://www.inohara-jun-web.com/`（www なしは www へ 301 転送） |
| Google に登録されている旧URL | `/` と `/shop-1` の **2つだけ** |
| ドメインでのメール利用 | なし（MXレコードなし）→ 切り替えてもメールへの影響なし |

旧URLの引き継ぎ：`/` → 新トップ、`/shop-1` → `/discography/` へ自動転送（`shop-1.html`）。

---

## STEP 1：仮サイトを公開する

- [ ] Settings → General → Default branch を **main** に変更
- [ ] （非公開リポジトリの場合）Settings → General → Change visibility → **Public**
- [ ] Settings → Pages → Source を **GitHub Actions** に変更
- [ ] Actions → Deploy site → **Run workflow**（main）
- [ ] `https://kuzuboshi4mind-sudo.github.io/inohara-jun-web/` が表示されることを確認

> 仮サイトは自動で **noindex（検索エンジンに載せない）** になります。
> 本番と同じ内容が二重に検索されると評価が分散するのを防ぐためです。
> Actions のログに「仮サイトモード (noindex)」と出ていればOK。

## STEP 2：中身を完成させる

- [ ] 文章・写真・プロフィールの最終チェック（スマホでも確認）
- [ ] ディスコグラフィーの発売日・価格・リンク
- [ ] 過去のライブ（昔の公演も足すと活動の記録になる）
- [ ] お問い合わせフォーム：https://web3forms.com でキー取得 → `_config.yml` の `web3forms_key`
- [ ] フォームから自分宛てにテスト送信して、メールが届くか確認
- [ ] SNS で共有したときのカード表示（OGP画像）の確認

## STEP 3：引越し前の準備（SEO と安全対策）

- [ ] **Google Search Console** に「ドメイン」プロパティで `inohara-jun-web.com` を登録
      （Wix の DNS 設定に TXT レコードを追加して所有権を確認）
      → 引越し前の検索順位・表示回数を記録しておき、引越し後と比較できる
- [ ] **GitHub でドメインを認証**：GitHub 右上アイコン → Settings → Pages → Add a domain
      → 表示された TXT レコードを Wix の DNS に追加 → Verify
      （第三者にドメインを悪用されるのを防ぐ設定）
- [ ] Wix の DNS 設定画面を**スクリーンショットで保存**（戻すときの控え）
- [ ] Wix のプレミアムプランの**次回更新日**を確認し、**自動更新をオフ**にする
      （解約ではなく自動更新オフ＝期限まではWixサイトがそのまま動く。二重払いを防げる）

## STEP 4：引越し当日（作業時間 30分〜1時間・アクセスの少ない時間帯に）

1. [ ] Wix：ドメイン → `inohara-jun-web.com` → DNS レコードを管理
   - `www` の **CNAME** → `kuzuboshi4mind-sudo.github.io`
   - `@`（www なし）の **A** レコードを Wix の値から次の4つに置き換え
     `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`
   - （Wix で「サイトに接続中のため編集できない」と出る場合は、ドメインをサイトから切り離す操作が先に必要）
2. [ ] GitHub：Settings → Pages → Custom domain に `www.inohara-jun-web.com` → Save
3. [ ] Actions → Deploy site → Run workflow。ログに「**本番モード**」と出ることを確認
4. [ ] Pages 画面で DNS check が通り、証明書発行後（〜1時間）に **Enforce HTTPS** をオン
5. [ ] 動作確認
   - [ ] `https://www.inohara-jun-web.com/` が新サイト
   - [ ] `https://inohara-jun-web.com/` → www に転送される
   - [ ] `https://www.inohara-jun-web.com/shop-1` → Discography に転送される
   - [ ] `https://www.inohara-jun-web.com/robots.txt` が `Allow: /` になっている
   - [ ] ページのソースに `noindex` が**含まれていない**
6. [ ] Search Console：サイトマップ `https://www.inohara-jun-web.com/sitemap.xml` を送信、
       「URL検査」でトップページの**インデックス登録をリクエスト**

**戻し方（問題が起きたら）**：STEP 3 で保存した Wix の DNS 設定に戻し、GitHub の Custom domain を削除。

## STEP 5：Wix を卒業する（引越しから1〜2週間後）

- [ ] Search Console で新サイトが正常に登録されていること、エラーが出ていないことを確認
- [ ] ドメインを Wix から移管（Cloudflare Registrar / お名前.com など・年1,500〜2,000円程度）
  1. 移管先に今の DNS 設定（STEP 4 の A / CNAME / 認証用 TXT）を先に登録
  2. Wix でドメインのロック解除 → 認証コード（Auth Code）を取得
  3. 移管先で移管を申し込み、確認メールを承認（完了まで数日〜1週間。有効期限は1年延長）
- [ ] 移管完了後、Wix のプレミアムプランを解約（STEP 3 で自動更新はオフにしてある）
