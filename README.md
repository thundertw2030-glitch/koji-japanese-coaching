# Koji Japanese Coaching Version 3.2 — Responsive Refined Edition

松下 剛治（Koji Matsushita）の日本語・就職面接コーチングサイトです。

Version 3.2では、Version 3.1の表示安定性を維持しながら、トップページの写真配置、タブレット表示、プロフィール、固定問い合わせ導線、スマートフォンUIを全面的に再調整しました。

## Version 3.2の主な改善

- トップの講師写真を小型の正方形カードへ変更
- 詳細プロフィールの写真とトップ写真の重複感を軽減
- 721〜1080pxでプロフィールを横並びに維持
- プロフィール写真の最大サイズを縮小
- 日本語の「自己PR」「1対1」「IT・技術職」の不自然な改行を防止
- PC・タブレットの固定問い合わせボタンを小型化
- スマートフォンの問い合わせ導線を下部ドックへ変更
- メニュー切替幅を1080pxへ変更
- アンカー移動時に固定ヘッダーが内容を隠さないよう調整
- CSS・JavaScriptをVersion 3.2専用名に変更

## 公開方法

ZIPを解凍し、フォルダの中身をGitHubリポジトリのルートへ上書きしてください。`main`ブランチへの反映後、Netlifyが自動公開します。

## 主要ファイル

- `assets/style.v3.2.css`
- `assets/site.v3.2.js`
- `assets/config.v3.2.js`
- `QA_REPORT.md`
- `RESPONSIVE_REFINEMENT.md`
- `DEPLOYMENT_CHECKLIST.md`
- `VIDEO_INTEGRATION.md`

## デザイン確認画像

- `DESIGN_REFERENCE.png`：PC
- `DESIGN_REFERENCE_TABLET.png`：タブレット
- `DESIGN_REFERENCE_MOBILE.png`：スマートフォン
- `DISPLAY_CHECK_PROFILE_TABLET.png`：タブレットのプロフィール
- `DISPLAY_CHECK_PROFILE_MOBILE.png`：スマートフォンのプロフィール
