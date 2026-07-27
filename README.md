# Japan Career Support Version 3.2 — Privacy-Safe Edition

日本企業への就職・留学・ビジネス日本語を支援する、多言語対応のコーチングサイトです。

## 今回のプライバシー更新

- 本名表記をサイト本文・メタ情報・構造化データ・リポジトリ文書から削除
- 顔写真を本人と特定されにくいアイコン風プロフィール画像へ変更
- 連絡先メールを `japancareer.support@gmail.com` に統一
- ブランド名を **Japan Career Support** に統一
- Person構造化データを削除し、ProfessionalService／Organization表記へ変更
- OGP画像とfaviconをプライバシー対応版へ更新
- 旧プロフィール写真と旧スクリーンショットを削除

## 公開方法

ZIPを解凍し、フォルダ内のファイルをGitHubリポジトリのルートへ上書きしてください。
`main` ブランチへ反映後、Netlifyが自動公開します。

## 主要ファイル

- `assets/style.v3.2.css`
- `assets/site.v3.2.js`
- `assets/config.v3.2.js`
- `assets/profile-icon.webp`
- `assets/profile-icon.png`
- `assets/profile-icon.jpg`
- `assets/jcs-brand-og.jpg`
- `assets/favicon.svg`
- `PRIVACY_UPDATE.md`
- `DEPLOYMENT_CHECKLIST.md`

## 公開前の確認

1. GitHubへ上書き後、Netlifyのデプロイ完了を待つ
2. 日本語・英語ページのプロフィール画像とメールリンクを確認
3. ブラウザのキャッシュを削除して旧画像が表示されないか確認
4. Google検索結果の古い氏名は、再クロール後に順次更新される
